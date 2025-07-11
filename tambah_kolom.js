/**
 * Dynamic Form Handler for Cloudflare Workers API - Custom Columns Version
 * File: tambah.js
 * 
 * Cara penggunaan:
 * 1. Include file ini di HTML: <script src="tambah.js"></script>
 * 2. Tambahkan atribut data-api-enabled="true" pada form
 * 3. Tambahkan atribut data-table="nama_tabel" untuk menentukan tabel
 * 4. Tambahkan atribut data-columns="x_01,x_05,x_10" untuk custom columns (opsional)
 * 
 * Contoh:
 * <form data-api-enabled="true" data-table="latihan" data-columns="x_01,x_05,x_10">
 *     <input type="text" name="nama" required>      <!-- akan ke x_01 -->
 *     <input type="email" name="email" required>    <!-- akan ke x_05 -->
 *     <input type="tel" name="telepon">             <!-- akan ke x_10 -->
 *     <button type="submit">Simpan</button>
 * </form>
 */

class DynamicFormHandler {
    constructor(config = {}) {
        // Konfigurasi default
        this.apiBaseUrl = config.apiBaseUrl || '/api/contacts';
        this.defaultTable = config.defaultTable || 'contacts';
        this.maxColumns = config.maxColumns || 20;
        this.debug = config.debug || false;
        
        // Auto-initialize ketika DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    /**
     * Inisialisasi form handler
     */
    init() {
        // Cari semua form yang memiliki atribut data-api-enabled atau class api-form
        const forms = document.querySelectorAll('form[data-api-enabled="true"], form.api-form');
        forms.forEach(form => this.attachFormHandler(form));
        
        // Juga handle form yang memiliki data-table (tanpa data-api-enabled)
        const tableForms = document.querySelectorAll('form[data-table]');
        tableForms.forEach(form => this.attachFormHandler(form));
        
        this.log('Dynamic Form Handler initialized for', forms.length + tableForms.length, 'forms');
    }
    
    /**
     * Attach event handler ke form
     */
    attachFormHandler(form) {
        // Cegah double attachment
        if (form.hasAttribute('data-handler-attached')) return;
        form.setAttribute('data-handler-attached', 'true');
        
        // Attach submit handler
        form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.log('Handler attached to form:', form);
    }
    
    /**
     * Handle form submission
     */
    async handleSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
        const originalText = submitButton ? submitButton.textContent || submitButton.value : '';
        
        try {
            // Tampilkan loading state
            this.setLoadingState(submitButton, true);
            
            // Dapatkan konfigurasi form
            const config = this.getFormConfig(form);
            
            // Kumpulkan dan transform data form
            const formData = this.collectFormData(form);
            const apiData = this.transformToApiFormat(formData, config);
            
            this.log('Form Config:', config);
            this.log('Original Form Data:', formData);
            this.log('Transformed API Data:', apiData);
            
            // Kirim ke API
            const result = await this.sendToApi(apiData, config);
            
            // Handle sukses
            this.handleSuccess(form, result, config);
            
        } catch (error) {
            // Handle error
            this.handleError(form, error);
        } finally {
            // Reset loading state
            this.setLoadingState(submitButton, false, originalText);
        }
    }
    
    /**
     * Dapatkan konfigurasi form dari atribut
     */
    getFormConfig(form) {
        const config = {
            table: form.getAttribute('data-table') || this.defaultTable,
            method: form.getAttribute('data-method') || 'POST',
            resetOnSuccess: form.getAttribute('data-reset') !== 'false',
            showAlert: form.getAttribute('data-show-alert') !== 'false',
            redirectUrl: form.getAttribute('data-redirect'),
            updateId: form.getAttribute('data-update-id') || null,
            columns: null
        };
        
        // Baca custom columns jika ada
        const columnsAttr = form.getAttribute('data-columns');
        if (columnsAttr) {
            config.columns = columnsAttr.split(',').map(col => col.trim());
            this.log('Custom columns detected:', config.columns);
            
            // Validasi format kolom
            const validColumns = config.columns.filter(col => /^x_\d{2}$/.test(col));
            if (validColumns.length !== config.columns.length) {
                this.log('Warning: Beberapa kolom tidak valid, harus format x_XX (contoh: x_01, x_15)');
                config.columns = validColumns;
            }
        }
        
        return config;
    }
    
    /**
     * Kumpulkan data dari form
     */
    collectFormData(form) {
        const formData = new FormData(form);
        const data = {};
        
        // Kumpulkan semua field form dalam urutan yang benar
        const inputs = form.querySelectorAll('input, select, textarea');
        const orderedData = {};
        
        inputs.forEach(input => {
            const name = input.name;
            if (!name) return;
            
            let value;
            
            if (input.type === 'checkbox') {
                if (orderedData[name]) {
                    // Multiple checkbox dengan nama sama
                    if (Array.isArray(orderedData[name])) {
                        if (input.checked) orderedData[name].push(input.value);
                    } else {
                        orderedData[name] = input.checked ? [orderedData[name], input.value] : [orderedData[name]];
                    }
                } else {
                    orderedData[name] = input.checked ? input.value : false;
                }
            } else if (input.type === 'radio') {
                if (input.checked) {
                    orderedData[name] = input.value;
                }
            } else {
                value = input.value;
                if (orderedData[name]) {
                    // Multiple input dengan nama sama (jarang terjadi)
                    if (Array.isArray(orderedData[name])) {
                        orderedData[name].push(value);
                    } else {
                        orderedData[name] = [orderedData[name], value];
                    }
                } else {
                    orderedData[name] = value;
                }
            }
        });
        
        return orderedData;
    }
    
    /**
     * Transform data form ke format API dengan custom columns
     */
    transformToApiFormat(formData, config) {
        const apiData = {};
        const keys = Object.keys(formData);
        
        keys.forEach((key, index) => {
            let columnName;
            
            // Jika ada custom columns, gunakan itu
            if (config.columns && config.columns[index]) {
                columnName = config.columns[index];
            } else {
                // Fallback ke urutan default
                const columnIndex = (index + 1).toString().padStart(2, '0');
                columnName = `x_${columnIndex}`;
            }
            
            // Cek apakah masih dalam batas maksimal
            if (index >= this.maxColumns) {
                this.log(`Warning: Field '${key}' diabaikan karena melebihi maksimal kolom (${this.maxColumns})`);
                return;
            }
            
            let value = formData[key];
            
            // Handle array (multiple values)
            if (Array.isArray(value)) {
                value = value.join(', ');
            }
            
            // Handle boolean values
            if (typeof value === 'boolean') {
                value = value ? '1' : '0';
            }
            
            // Convert ke string
            apiData[columnName] = String(value);
            
            this.log(`Mapping: ${key} (${typeof formData[key]}) -> ${columnName} = "${apiData[columnName]}"`);
        });
        
        return apiData;
    }
    
    /**
     * Kirim data ke API
     */
    async sendToApi(data, config) {
        // Tentukan URL dan method
        const url = config.updateId 
            ? `${this.apiBaseUrl}/${config.updateId}`
            : this.apiBaseUrl;
            
        const method = config.updateId ? 'PUT' : config.method;
        
        // Siapkan headers
        const headers = {
            'Content-Type': 'application/json',
            'X-Table-Name': config.table
        };
        
        this.log(`Sending ${method} request to:`, url);
        this.log('Headers:', headers);
        this.log('Body:', data);
        
        // Kirim request
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        });
        
        // Handle response
        if (!response.ok) {
            let errorData;
            try {
                errorData = await response.json();
            } catch (e) {
                errorData = { message: `HTTP ${response.status}: ${response.statusText}` };
            }
            throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }
    
    /**
     * Handle sukses
     */
    handleSuccess(form, result, config) {
        this.log('Success:', result);
        
        // Tampilkan pesan sukses
        if (config.showAlert) {
            this.showMessage(form, result.message || 'Data berhasil disimpan!', 'success');
        }
        
        // Reset form jika dikonfigurasi
        if (config.resetOnSuccess) {
            form.reset();
        }
        
        // Redirect jika dikonfigurasi
        if (config.redirectUrl) {
            this.showMessage(form, `Akan redirect ke ${config.redirectUrl} dalam 2 detik...`, 'info');
            setTimeout(() => {
                window.location.href = config.redirectUrl;
            }, 2000);
        }
        
        // Trigger custom event untuk handling eksternal
        const event = new CustomEvent('formApiSuccess', {
            detail: { result, config, form }
        });
        form.dispatchEvent(event);
    }
    
    /**
     * Handle error
     */
    handleError(form, error) {
        this.log('Error:', error);
        
        // Tampilkan pesan error
        this.showMessage(form, error.message || 'Terjadi kesalahan saat menyimpan data', 'error');
        
        // Trigger custom event untuk handling eksternal
        const event = new CustomEvent('formApiError', {
            detail: { error, form }
        });
        form.dispatchEvent(event);
    }
    
    /**
     * Tampilkan pesan di form
     */
    showMessage(form, message, type = 'info') {
        // Hapus pesan yang sudah ada
        const existingMessages = form.querySelectorAll('.api-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Buat elemen pesan
        const messageEl = document.createElement('div');
        messageEl.className = `api-message api-message-${type}`;
        messageEl.textContent = message;
        
        // Styling dasar
        messageEl.style.cssText = `
            padding: 12px 15px;
            margin: 15px 0;
            border-radius: 4px;
            font-size: 14px;
            font-weight: 500;
            ${type === 'success' ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : ''}
            ${type === 'error' ? 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;' : ''}
            ${type === 'info' ? 'background-color: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb;' : ''}
        `;
        
        // Insert pesan di awal form
        form.insertBefore(messageEl, form.firstChild);
        
        // Auto hapus setelah 5 detik
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
    }
    
    /**
     * Set loading state pada button
     */
    setLoadingState(button, isLoading, originalText = '') {
        if (!button) return;
        
        if (isLoading) {
            button.disabled = true;
            button.setAttribute('data-original-text', button.textContent || button.value);
            
            if (button.tagName === 'BUTTON') {
                button.textContent = 'Menyimpan...';
            } else {
                button.value = 'Menyimpan...';
            }
        } else {
            button.disabled = false;
            const original = button.getAttribute('data-original-text') || originalText;
            
            if (button.tagName === 'BUTTON') {
                button.textContent = original;
            } else {
                button.value = original;
            }
            
            button.removeAttribute('data-original-text');
        }
    }
    
    /**
     * Log untuk debugging
     */
    log(...args) {
        if (this.debug) {
            console.log('[Dynamic Form Handler]', ...args);
        }
    }
    
    /**
     * Method untuk menambah form handler secara manual
     */
    addForm(formElement) {
        if (formElement && formElement.tagName === 'FORM') {
            this.attachFormHandler(formElement);
        }
    }
    
    /**
     * Method untuk menghapus form handler
     */
    removeForm(formElement) {
        if (formElement && formElement.hasAttribute('data-handler-attached')) {
            formElement.removeAttribute('data-handler-attached');
            // Note: Event listener tidak bisa dihapus karena kita menggunakan anonymous function
            // Untuk production, pertimbangkan untuk menyimpan reference ke function
        }
    }
    
    /**
     * Method untuk mengupdate konfigurasi
     */
    updateConfig(newConfig) {
        this.apiBaseUrl = newConfig.apiBaseUrl || this.apiBaseUrl;
        this.defaultTable = newConfig.defaultTable || this.defaultTable;
        this.maxColumns = newConfig.maxColumns || this.maxColumns;
        this.debug = newConfig.debug !== undefined ? newConfig.debug : this.debug;
        
        this.log('Configuration updated:', {
            apiBaseUrl: this.apiBaseUrl,
            defaultTable: this.defaultTable,
            maxColumns: this.maxColumns,
            debug: this.debug
        });
    }
}

// Konfigurasi default - SESUAIKAN DENGAN KEBUTUHAN ANDA
const dynamicFormHandler = new DynamicFormHandler({
    apiBaseUrl: '/api/contacts',  // Ganti dengan URL API Anda
    defaultTable: 'contacts',     // Tabel default
    maxColumns: 20,               // Maksimal kolom x_01 sampai x_20
    debug: true                   // Set false untuk production
});

// Export untuk penggunaan manual jika diperlukan
if (typeof window !== 'undefined') {
    window.DynamicFormHandler = DynamicFormHandler;
    window.dynamicFormHandler = dynamicFormHandler;
}

// Export untuk Node.js jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DynamicFormHandler;
}

// Event listeners global untuk debugging (opsional)
document.addEventListener('formApiSuccess', (e) => {
    console.log('Global: Form API Success', e.detail);
});

document.addEventListener('formApiError', (e) => {
    console.log('Global: Form API Error', e.detail);
});