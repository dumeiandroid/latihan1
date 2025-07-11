/**
 * Dynamic Form Update Handler for Cloudflare Workers API
 * File: update.js
 * 
 * Cara penggunaan:
 * 1. Include file ini di HTML: <script src="update.js"></script>
 * 2. Akses halaman dengan parameter ID: update.html?id=123
 * 3. Form akan otomatis terisi dengan data dari database
 * 4. Submit form untuk update data
 */

class DynamicFormUpdateHandler {
    constructor(config = {}) {
        // Konfigurasi default
        this.apiBaseUrl = config.apiBaseUrl || '/api/contacts';
        this.defaultTable = config.defaultTable || 'latihan';
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
        this.log('Initializing Dynamic Form Update Handler');
        
        // Cek parameter URL
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const table = urlParams.get('table') || this.defaultTable;
        
        this.log('URL Parameters:', { id, table });
        
        // Validasi ID
        if (!id) {
            this.showError('Parameter ID tidak ditemukan di URL');
            return;
        }
        
        // Validasi ID (harus berupa angka)
        if (!/^\d+$/.test(id)) {
            this.showError('Parameter ID harus berupa angka');
            return;
        }
        
        // Set info
        this.updateInfo(id, table);
        
        // Cari form dan setup
        const form = document.querySelector('form[data-api-enabled="true"]');
        if (!form) {
            this.showError('Form tidak ditemukan');
            return;
        }
        
        // Set atribut form
        form.setAttribute('data-update-id', id);
        form.setAttribute('data-table', table);
        
        // Attach form handler
        this.attachFormHandler(form);
        
        // Load data
        this.loadData(id, table, form);
    }
    
    /**
     * Update info display
     */
    updateInfo(id, table) {
        const idElement = document.getElementById('current-id');
        const tableElement = document.getElementById('current-table');
        
        if (idElement) idElement.textContent = id;
        if (tableElement) tableElement.textContent = table;
    }
    
    /**
     * Show error message
     */
    showError(message) {
        this.log('Error:', message);
        
        const errorContainer = document.getElementById('error-container');
        const formContainer = document.getElementById('form-container');
        const loadingContainer = document.getElementById('loading-container');
        
        if (errorContainer) {
            errorContainer.style.display = 'block';
            errorContainer.innerHTML = `
                <h2>Error</h2>
                <p>${message}</p>
                <p>Silakan periksa URL dan coba lagi.</p>
            `;
        }
        
        if (formContainer) formContainer.style.display = 'none';
        if (loadingContainer) loadingContainer.style.display = 'none';
    }
    
    /**
     * Show loading state
     */
    showLoading() {
        const errorContainer = document.getElementById('error-container');
        const formContainer = document.getElementById('form-container');
        const loadingContainer = document.getElementById('loading-container');
        
        if (errorContainer) errorContainer.style.display = 'none';
        if (formContainer) formContainer.style.display = 'none';
        if (loadingContainer) loadingContainer.style.display = 'block';
    }
    
    /**
     * Show form
     */
    showForm() {
        const errorContainer = document.getElementById('error-container');
        const formContainer = document.getElementById('form-container');
        const loadingContainer = document.getElementById('loading-container');
        
        if (errorContainer) errorContainer.style.display = 'none';
        if (formContainer) formContainer.style.display = 'block';
        if (loadingContainer) loadingContainer.style.display = 'none';
    }
    
    /**
     * Load data from API
     */
    async loadData(id, table, form) {
        this.log('Loading data for ID:', id, 'Table:', table);
        this.showLoading();
        
        try {
            const url = `${this.apiBaseUrl}/${id}?table=${table}`;
            this.log('Fetching from:', url);
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Table-Name': table
                }
            });
            
            if (!response.ok) {
                let errorData;
                try {
                    errorData = await response.json();
                } catch (e) {
                    errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
                }
                throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
            }
            
            const result = await response.json();
            this.log('Data loaded:', result);
            
            if (!result.success || !result.data) {
                throw new Error('Data tidak ditemukan');
            }
            
            // Populate form
            this.populateForm(form, result.data);
            
            // Show form
            this.showForm();
            
        } catch (error) {
            this.log('Load data error:', error);
            this.showError(`Gagal memuat data: ${error.message}`);
        }
    }
    
    /**
     * Populate form with data
     */
    populateForm(form, data) {
        this.log('Populating form with data:', data);
        
        // Buat mapping dari nama field ke data
        const fieldMapping = this.createFieldMapping(form);
        this.log('Field mapping:', fieldMapping);
        
        // Populate setiap field
        Object.keys(fieldMapping).forEach(fieldName => {
            const columnName = fieldMapping[fieldName];
            const value = data[columnName];
            
            if (value !== undefined && value !== null) {
                this.setFieldValue(form, fieldName, value);
            }
        });
    }
    
    /**
     * Create mapping from field names to database columns
     */
    createFieldMapping(form) {
        const mapping = {};
        const formData = new FormData(form);
        const fieldNames = [];
        
        // Get all field names
        for (let [key] of formData.entries()) {
            if (!fieldNames.includes(key)) {
                fieldNames.push(key);
            }
        }
        
        // Also get from form elements
        const elements = form.querySelectorAll('[name]');
        elements.forEach(element => {
            const name = element.getAttribute('name');
            if (name && !fieldNames.includes(name)) {
                fieldNames.push(name);
            }
        });
        
        // Map to database columns
        fieldNames.forEach((fieldName, index) => {
            const columnIndex = (index + 1).toString().padStart(2, '0');
            mapping[fieldName] = `x_${columnIndex}`;
        });
        
        return mapping;
    }
    
    /**
     * Set field value
     */
    setFieldValue(form, fieldName, value) {
        const elements = form.querySelectorAll(`[name="${fieldName}"]`);
        
        elements.forEach(element => {
            const tagName = element.tagName.toLowerCase();
            const type = element.type ? element.type.toLowerCase() : '';
            
            if (tagName === 'input') {
                if (type === 'checkbox') {
                    // Handle checkbox - check if value contains the checkbox value
                    const checkboxValue = element.value;
                    element.checked = value.includes(checkboxValue);
                } else if (type === 'radio') {
                    // Handle radio - check if value matches
                    element.checked = (element.value === value);
                } else {
                    // Handle text, email, number, etc.
                    element.value = value;
                }
            } else if (tagName === 'textarea') {
                // Handle textarea
                element.value = value;
            } else if (tagName === 'select') {
                // Handle select
                element.value = value;
            }
        });
        
        this.log(`Set field "${fieldName}" to:`, value);
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
        this.log('Update handler attached to form');
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
            const apiData = this.transformToApiFormat(formData);
            
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
            method: 'PUT', // Always PUT for update
            resetOnSuccess: form.getAttribute('data-reset') !== 'false',
            showAlert: form.getAttribute('data-show-alert') !== 'false',
            redirectUrl: form.getAttribute('data-redirect'),
            updateId: form.getAttribute('data-update-id')
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
     * Transform data form ke format API (x_01, x_02, dst)
     */
    transformToApiFormat(formData) {
        const apiData = {};
        const keys = Object.keys(formData);
        
        keys.forEach((key, index) => {
            // Jangan melebihi maksimal kolom
            if (index >= this.maxColumns) {
                this.log(`Warning: Field '${key}' diabaikan karena melebihi maksimal kolom (${this.maxColumns})`);
                return;
            }
            
            // Map ke format x_01, x_02, etc.
            const columnIndex = (index + 1).toString().padStart(2, '0');
            const columnName = `x_${columnIndex}`;
            
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
        });
        
        return apiData;
    }
    
    /**
     * Kirim data ke API
     */
    async sendToApi(data, config) {
        // URL untuk update
        const url = `${this.apiBaseUrl}/${config.updateId}`;
        
        // Siapkan headers
        const headers = {
            'Content-Type': 'application/json',
            'X-Table-Name': config.table
        };
        
        this.log(`Sending PUT request to:`, url);
        this.log('Headers:', headers);
        this.log('Body:', data);
        
        // Kirim request
        const response = await fetch(url, {
            method: 'PUT',
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
            throw new Error(errorData.error || errorData.message || `HTTP ${response.status}: ${response.statusText}`);
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
            this.showMessage(form, result.message || 'Data berhasil diupdate!', 'success');
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
        this.showMessage(form, error.message || 'Terjadi kesalahan saat mengupdate data', 'error');
        
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
            console.log('[Dynamic Form Update Handler]', ...args);
        }
    }
}

// Konfigurasi default - SESUAIKAN DENGAN KEBUTUHAN ANDA
const dynamicFormUpdateHandler = new DynamicFormUpdateHandler({
    apiBaseUrl: '/api/contacts',  // Ganti dengan URL API Anda
    defaultTable: 'latihan',      // Tabel default
    maxColumns: 20,               // Maksimal kolom x_01 sampai x_20
    debug: true                   // Set false untuk production
});

// Export untuk penggunaan manual jika diperlukan
if (typeof window !== 'undefined') {
    window.DynamicFormUpdateHandler = DynamicFormUpdateHandler;
    window.dynamicFormUpdateHandler = dynamicFormUpdateHandler;
}

// Event listeners untuk demo
document.addEventListener('formApiSuccess', (e) => {
    console.log('Form API Success:', e.detail);
});

document.addEventListener('formApiError', (e) => {
    console.log('Form API Error:', e.detail);
});

// Export untuk Node.js jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = DynamicFormUpdateHandler;
}