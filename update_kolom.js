/**
 * Dynamic Form Handler for Update Operations - Custom Columns Version
 * File: update_kolom.js
 * 
 * Cara penggunaan:
 * 1. Include file ini di HTML: <script src="update_kolom.js"></script>
 * 2. Gunakan URL parameter: update_kolom.html?id=123&table=latihan
 * 3. Form akan otomatis load data dan siap untuk update
 * 
 * URL Parameters:
 * - id: ID record yang akan diupdate (wajib)
 * - table: Nama tabel (opsional, default dari form)
 */

class UpdateFormHandler {
    constructor(config = {}) {
        // Konfigurasi default
        this.apiBaseUrl = config.apiBaseUrl || '/api/contacts';
        this.defaultTable = config.defaultTable || 'latihan';
        this.maxColumns = config.maxColumns || 20;
        this.debug = config.debug || false;
        
        // State
        this.currentId = null;
        this.currentTable = null;
        this.isLoading = false;
        
        // Auto-initialize ketika DOM ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    /**
     * Inisialisasi update form handler
     */
    async init() {
        try {
            // Ambil parameter dari URL
            const urlParams = this.getUrlParams();
            
            if (!urlParams.id) {
                this.showError('ID record tidak ditemukan di URL. Gunakan: update_kolom.html?id=123');
                return;
            }
            
            this.currentId = urlParams.id;
            this.currentTable = urlParams.table || this.defaultTable;
            
            this.log('Initializing update form with ID:', this.currentId, 'Table:', this.currentTable);
            
            // Update form configuration
            this.setupForm();
            
            // Load data dari API
            await this.loadDataForUpdate();
            
            // Attach form handler
            this.attachFormHandler();
            
        } catch (error) {
            this.showError(`Gagal menginisialisasi form: ${error.message}`);
        }
    }
    
    /**
     * Ambil parameter dari URL
     */
    getUrlParams() {
        const params = new URLSearchParams(window.location.search);
        return {
            id: params.get('id'),
            table: params.get('table')
        };
    }
    
    /**
     * Setup form configuration
     */
    setupForm() {
        const form = document.getElementById('updateForm');
        if (!form) {
            throw new Error('Form dengan ID "updateForm" tidak ditemukan');
        }
        
        // Update form attributes
        form.setAttribute('data-update-id', this.currentId);
        form.setAttribute('data-table', this.currentTable);
        
        // Update info display
        const recordIdEl = document.getElementById('recordId');
        const recordTableEl = document.getElementById('recordTable');
        
        if (recordIdEl) recordIdEl.textContent = this.currentId;
        if (recordTableEl) recordTableEl.textContent = this.currentTable;
        
        this.log('Form configured for update mode');
    }
    
    /**
     * Load data dari API untuk update
     */
    async loadDataForUpdate() {
        this.setLoadingState(true);
        
        try {
            // Fetch data dari API
            const url = `${this.apiBaseUrl}/${this.currentId}?table=${this.currentTable}`;
            this.log('Fetching data from:', url);
            
            const response = await fetch(url, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'X-Table-Name': this.currentTable
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
            this.log('Data loaded successfully:', result);
            
            // Populate form dengan data
            this.populateForm(result.data);
            
        } catch (error) {
            this.log('Load data error:', error);
            this.showError(`Gagal memuat data: ${error.message}`);
        } finally {
            this.setLoadingState(false);
        }
    }
    
    /**
     * Populate form dengan data yang diambil dari API
     */
    populateForm(data) {
        const form = document.getElementById('updateForm');
        if (!form) return;
        
        // Ambil kolom mapping dari form
        const columnsAttr = form.getAttribute('data-columns');
        const columns = columnsAttr ? columnsAttr.split(',').map(col => col.trim()) : [];
        
        // Ambil semua input fields
        const inputs = form.querySelectorAll('input, select, textarea');
        
        inputs.forEach((input, index) => {
            const fieldName = input.name;
            if (!fieldName) return;
            
            // Tentukan kolom yang sesuai
            let columnName;
            if (columns.length > 0 && columns[index]) {
                columnName = columns[index];
            } else {
                const columnIndex = (index + 1).toString().padStart(2, '0');
                columnName = `x_${columnIndex}`;
            }
            
            // Set value jika ada data
            if (data[columnName] !== undefined && data[columnName] !== null) {
                const value = data[columnName];
                
                if (input.type === 'checkbox') {
                    input.checked = value === '1' || value === 'true' || value === true;
                } else if (input.type === 'radio') {
                    input.checked = input.value === value;
                } else {
                    input.value = value;
                }
                
                this.log(`Populated ${fieldName} (${columnName}) with value:`, value);
            }
        });
        
        this.log('Form populated successfully');
    }
    
    /**
     * Attach form handler
     */
    attachFormHandler() {
        const form = document.getElementById('updateForm');
        if (!form) return;
        
        // Cegah double attachment
        if (form.hasAttribute('data-handler-attached')) return;
        form.setAttribute('data-handler-attached', 'true');
        
        // Attach submit handler
        form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.log('Handler attached to update form');
    }
    
    /**
     * Handle form submission untuk update
     */
    async handleSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
        const originalText = submitButton ? submitButton.textContent || submitButton.value : '';
        
        try {
            // Tampilkan loading state
            this.setSubmitLoadingState(submitButton, true);
            
            // Dapatkan konfigurasi form
            const config = this.getFormConfig(form);
            
            // Kumpulkan dan transform data form
            const formData = this.collectFormData(form);
            const apiData = this.transformToApiFormat(formData, config);
            
            this.log('Update Config:', config);
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
            this.setSubmitLoadingState(submitButton, false, originalText);
        }
    }
    
    /**
     * Dapatkan konfigurasi form dari atribut
     */
    getFormConfig(form) {
        const config = {
            table: form.getAttribute('data-table') || this.defaultTable,
            method: form.getAttribute('data-method') || 'PUT',
            resetOnSuccess: form.getAttribute('data-reset') !== 'false',
            showAlert: form.getAttribute('data-show-alert') !== 'false',
            redirectUrl: form.getAttribute('data-redirect'),
            updateId: form.getAttribute('data-update-id') || this.currentId,
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
        // URL untuk update
        const url = `${this.apiBaseUrl}/${config.updateId}`;
        const method = 'PUT';
        
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
                errorData = { error: `HTTP ${response.status}: ${response.statusText}` };
            }
            throw new Error(errorData.error || `HTTP ${response.status}: ${response.statusText}`);
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
     * Show error message
     */
    showError(message) {
        const loadingEl = document.getElementById('loading');
        if (loadingEl) {
            loadingEl.innerHTML = `
                <div class="api-message api-message-error">
                    <strong>Error:</strong> ${message}
                </div>
            `;
        }
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
     * Set loading state untuk page
     */
    setLoadingState(isLoading) {
        const loadingEl = document.getElementById('loading');
        const formContainer = document.getElementById('formContainer');
        
        if (isLoading) {
            if (loadingEl) loadingEl.style.display = 'block';
            if (formContainer) formContainer.classList.add('form-hidden');
        } else {
            if (loadingEl) loadingEl.style.display = 'none';
            if (formContainer) formContainer.classList.remove('form-hidden');
        }
    }
    
    /**
     * Set loading state pada submit button
     */
    setSubmitLoadingState(button, isLoading, originalText = '') {
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
            console.log('[Update Form Handler]', ...args);
        }
    }
}

// Konfigurasi default - SESUAIKAN DENGAN KEBUTUHAN ANDA
const updateFormHandler = new UpdateFormHandler({
    apiBaseUrl: '/api/contacts',  // Ganti dengan URL API Anda
    defaultTable: 'latihan',      // Tabel default
    maxColumns: 20,               // Maksimal kolom x_01 sampai x_20
    debug: true                   // Set false untuk production
});

// Export untuk penggunaan manual jika diperlukan
if (typeof window !== 'undefined') {
    window.UpdateFormHandler = UpdateFormHandler;
    window.updateFormHandler = updateFormHandler;
}

// Export untuk Node.js jika diperlukan
if (typeof module !== 'undefined' && module.exports) {
    module.exports = UpdateFormHandler;
}

// Event listeners global untuk debugging (opsional)
document.addEventListener('formApiSuccess', (e) => {
    console.log('Global: Update Form API Success', e.detail);
});

document.addEventListener('formApiError', (e) => {
    console.log('Global: Update Form API Error', e.detail);
});