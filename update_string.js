/**
 * Dynamic Form Handler for Cloudflare Workers API - Update Version
 * File: update_string.js
 * 
 * Cara penggunaan:
 * 1. Include file ini di HTML: <script src="update_string.js"></script>
 * 2. Tambahkan atribut data-api-enabled="true" pada form
 * 3. Tambahkan atribut data-table="nama_tabel" untuk menentukan tabel
 * 4. Tambahkan atribut data-column="x_01" untuk menentukan kolom target
 * 5. Tambahkan atribut data-update-id="123" untuk menentukan ID record yang akan diupdate
 * 6. Tambahkan atribut data-method="PUT" untuk operasi update
 * 
 * Contoh:
 * <form data-api-enabled="true" 
 *       data-table="latihan" 
 *       data-column="x_05"
 *       data-update-id="123"
 *       data-method="PUT">
 *     <input type="text" name="nama" required>
 *     <input type="email" name="email" required>
 *     <button type="submit">Update Data</button>
 * </form>
 * 
 * Semua data form akan digabung menjadi satu string dengan pemisah "|"
 * dan dikirim ke kolom yang ditentukan di data-column
 */

class DynamicFormHandler {
    constructor(config = {}) {
        // Konfigurasi default
        this.apiBaseUrl = config.apiBaseUrl || '/api/contacts';
        this.defaultTable = config.defaultTable || 'contacts';
        this.defaultColumn = config.defaultColumn || 'x_01';
        this.separator = config.separator || '|';
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
    /**
 * Attach event handler ke form
 */
attachFormHandler(form) {
    // Cegah double attachment
    if (form.hasAttribute('data-handler-attached')) return;
    form.setAttribute('data-handler-attached', 'true');
    
    // Ambil ID dari URL dan set ke form
    const urlParams = new URLSearchParams(window.location.search);
    const updateId = urlParams.get('id');
    if (updateId) {
        form.setAttribute('data-update-id', updateId);
        this.log('Update ID set from URL:', updateId);
    }
    
    // Attach submit handler
    form.addEventListener('submit', (e) => this.handleSubmit(e));
    
    // Auto-load data jika ada update-id
    const finalUpdateId = form.getAttribute('data-update-id');
    if (finalUpdateId) {
        this.loadExistingData(form, finalUpdateId);
    }
    
    this.log('Handler attached to form:', form);
}
    
    /**
     * Load existing data untuk update
     */
    async loadExistingData(form, updateId) {
        try {
            const config = this.getFormConfig(form);
            const url = `${this.apiBaseUrl}/${updateId}`;
            
            // Tambahkan table name ke query parameter
            const fullUrl = `${url}?table=${config.table}`;
            
            this.log('Loading existing data from:', fullUrl);
            
            const response = await fetch(fullUrl, {
                method: 'GET',
                headers: {
                    'X-Table-Name': config.table
                }
            });
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            this.log('Loaded data:', result);
            
            if (result.success && result.data) {
                this.populateForm(form, result.data, config);
            }
            
        } catch (error) {
            this.log('Error loading existing data:', error);
            this.showMessage(form, `Error loading data: ${error.message}`, 'error');
        }
    }
    
    /**
     * Populate form dengan data yang ada
     */
    populateForm(form, data, config) {
        // Ambil data dari target column
        const targetColumnData = data[config.targetColumn];
        
        if (!targetColumnData) {
            this.log('No data found in target column:', config.targetColumn);
            return;
        }
        
        // Split data berdasarkan separator
        const values = targetColumnData.split(config.separator);
        
        // Dapatkan semua form fields
        const formData = new FormData(form);
        const fieldNames = Array.from(formData.keys());
        
        // Populate fields berdasarkan urutan
        fieldNames.forEach((fieldName, index) => {
            if (values[index]) {
                const field = form.querySelector(`[name="${fieldName}"]`);
                if (field) {
                    if (field.type === 'checkbox') {
                        field.checked = values[index] === 'Ya' || values[index] === 'true';
                    } else {
                        field.value = values[index];
                    }
                }
            }
        });
        
        this.log('Form populated with existing data');
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
            
            // Validasi untuk update mode
            if (config.updateId && !config.method) {
                config.method = 'PUT';
            }
            
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
        return {
            table: form.getAttribute('data-table') || this.defaultTable,
            targetColumn: form.getAttribute('data-column') || this.defaultColumn,
            method: form.getAttribute('data-method') || 'POST',
            resetOnSuccess: form.getAttribute('data-reset') !== 'false',
            showAlert: form.getAttribute('data-show-alert') !== 'false',
            redirectUrl: form.getAttribute('data-redirect'),
            updateId: form.getAttribute('data-update-id') || null,
            separator: form.getAttribute('data-separator') || this.separator
        };
    }
    
    /**
     * Kumpulkan data dari form
     */
    collectFormData(form) {
        const formData = new FormData(form);
        const data = {};
        
        // Kumpulkan semua field form
        for (let [key, value] of formData.entries()) {
            // Handle multiple values (checkbox, multiple select)
            if (data[key]) {
                if (Array.isArray(data[key])) {
                    data[key].push(value);
                } else {
                    data[key] = [data[key], value];
                }
            } else {
                data[key] = value;
            }
        }
        
        // Juga kumpulkan checkbox yang tidak tercentang
        const uncheckedCheckboxes = form.querySelectorAll('input[type="checkbox"]:not(:checked)');
        uncheckedCheckboxes.forEach(input => {
            if (!data.hasOwnProperty(input.name)) {
                data[input.name] = false;
            }
        });
        
        return data;
    }
    
    /**
     * Transform data form ke format API (single string dengan separator)
     */
    transformToApiFormat(formData, config) {
        const values = [];
        
        // Kumpulkan semua nilai
        for (let [key, value] of Object.entries(formData)) {
            let processedValue = value;
            
            // Handle array (multiple values)
            if (Array.isArray(value)) {
                processedValue = value.join(', ');
            }
            
            // Handle boolean values
            if (typeof value === 'boolean') {
                processedValue = value ? 'Ya' : 'Tidak';
            }
            
            // Convert ke string dan bersihkan
            processedValue = String(processedValue).trim();
            
            // Ganti separator di dalam nilai dengan spasi untuk menghindari konflik
            processedValue = processedValue.replace(new RegExp(`\\${config.separator}`, 'g'), ' ');
            
            values.push(processedValue);
        }
        
        // Gabungkan semua nilai menjadi satu string
        const combinedValue = values.join(config.separator);
        
        // Return sebagai object dengan target column
        return {
            [config.targetColumn]: combinedValue
        };
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
            const message = config.updateId 
                ? result.message || 'Data berhasil diupdate!'
                : result.message || 'Data berhasil disimpan!';
            this.showMessage(form, message, 'success');
        }
        
        // Reset form jika dikonfigurasi (biasanya false untuk update)
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
                button.textContent = 'Mengupdate...';
            } else {
                button.value = 'Mengupdate...';
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
            console.log('[Dynamic Form Handler - Update]', ...args);
        }
    }
}

// Konfigurasi default - SESUAIKAN DENGAN KEBUTUHAN ANDA
const dynamicFormHandler = new DynamicFormHandler({
    apiBaseUrl: '/api/contacts',  // Ganti dengan URL API Anda
    defaultTable: 'contacts',     // Tabel default
    defaultColumn: 'x_04',        // Kolom default
    separator: '|',               // Pemisah default
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