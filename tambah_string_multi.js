/**
 * Dynamic Form Handler with Grouped Data
 * File: tambah.js
 * 
 * Cara penggunaan:
 * 1. Include file ini di HTML: <script src="tambah.js"></script>
 * 2. Tambahkan atribut data-api-enabled="true" pada form
 * 3. Tambahkan atribut data-table="nama_tabel" untuk menentukan tabel
 * 4. Tambahkan atribut data-column="x_01" untuk menentukan kolom target
 * 5. Tambahkan atribut data-group="nama_group" pada setiap input
 * 
 * Format data:
 * - Dalam group: dipisah dengan ";"
 * - Antar group: dipisah dengan "|"
 * 
 * Contoh hasil: "John;john@email.com;08123|Jakarta;Developer;Aktif"
 */

class DynamicFormHandler {
    constructor(config = {}) {
        // Konfigurasi default
        this.apiBaseUrl = config.apiBaseUrl || '/api/contacts';
        this.defaultTable = config.defaultTable || 'contacts';
        this.defaultColumn = config.defaultColumn || 'x_01';
        this.groupSeparator = config.groupSeparator || ';';
        this.mainSeparator = config.mainSeparator || '|';
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
        return {
            table: form.getAttribute('data-table') || this.defaultTable,
            targetColumn: form.getAttribute('data-column') || this.defaultColumn,
            method: form.getAttribute('data-method') || 'POST',
            resetOnSuccess: form.getAttribute('data-reset') !== 'false',
            showAlert: form.getAttribute('data-show-alert') !== 'false',
            redirectUrl: form.getAttribute('data-redirect'),
            updateId: form.getAttribute('data-update-id') || null,
            groupSeparator: form.getAttribute('data-group-separator') || this.groupSeparator,
            mainSeparator: form.getAttribute('data-main-separator') || this.mainSeparator
        };
    }
    
    /**
     * Kumpulkan data dari form berdasarkan group
     */
    collectFormData(form) {
        const formData = new FormData(form);
        const data = {};
        const groupedData = {};
        
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
        
        // Kelompokkan data berdasarkan data-group
        const formElements = form.querySelectorAll('[name][data-group]');
        formElements.forEach(element => {
            const fieldName = element.name;
            const groupName = element.getAttribute('data-group');
            
            if (data.hasOwnProperty(fieldName)) {
                if (!groupedData[groupName]) {
                    groupedData[groupName] = {};
                }
                groupedData[groupName][fieldName] = data[fieldName];
            }
        });
        
        // Tambahkan field yang tidak memiliki group ke group 'default'
        const ungroupedFields = {};
        for (let [key, value] of Object.entries(data)) {
            const element = form.querySelector(`[name="${key}"]`);
            if (!element || !element.getAttribute('data-group')) {
                ungroupedFields[key] = value;
            }
        }
        
        if (Object.keys(ungroupedFields).length > 0) {
            groupedData['default'] = ungroupedFields;
        }
        
        return groupedData;
    }
    
    /**
     * Transform data form ke format API (grouped string)
     */
    transformToApiFormat(groupedData, config) {
        const groupStrings = [];
        
        // Proses setiap group
        for (let [groupName, groupFields] of Object.entries(groupedData)) {
            const fieldValues = [];
            
            // Kumpulkan nilai dari setiap field dalam group
            for (let [fieldName, fieldValue] of Object.entries(groupFields)) {
                let processedValue = fieldValue;
                
                // Handle array (multiple values)
                if (Array.isArray(fieldValue)) {
                    processedValue = fieldValue.join(', ');
                }
                
                // Handle boolean values
                if (typeof fieldValue === 'boolean') {
                    processedValue = fieldValue ? 'Ya' : 'Tidak';
                }
                
                // Convert ke string dan bersihkan
                processedValue = String(processedValue).trim();
                
                // Ganti separator di dalam nilai untuk menghindari konflik
                processedValue = processedValue.replace(new RegExp(`\\${config.groupSeparator}`, 'g'), ' ');
                processedValue = processedValue.replace(new RegExp(`\\${config.mainSeparator}`, 'g'), ' ');
                
                fieldValues.push(processedValue);
            }
            
            // Gabungkan field dalam group dengan group separator
            const groupString = fieldValues.join(config.groupSeparator);
            groupStrings.push(groupString);
        }
        
        // Gabungkan semua group dengan main separator
        const finalValue = groupStrings.join(config.mainSeparator);
        
        // Return sebagai object dengan target column
        return {
            [config.targetColumn]: finalValue
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
}

// Konfigurasi default - SESUAIKAN DENGAN KEBUTUHAN ANDA
const dynamicFormHandler = new DynamicFormHandler({
    apiBaseUrl: '/api/contacts',  // Ganti dengan URL API Anda
    defaultTable: 'contacts',     // Tabel default
    defaultColumn: 'x_01',        // Kolom default
    groupSeparator: ';',          // Pemisah dalam group
    mainSeparator: '|',           // Pemisah antar group
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