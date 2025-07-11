/**
 * Dynamic Form Handler for Cloudflare Workers API
 * File: tambah.js
 * 
 * Cara penggunaan:
 * 1. Tambahkan <script src="tambah.js"></script> di HTML
 * 2. Tambahkan atribut data-api-enabled="true" pada form
 * 3. Tambahkan atribut data-table="nama_tabel" untuk menentukan tabel
 */

class DynamicFormHandler {
    constructor(config = {}) {
        this.apiBaseUrl = config.apiBaseUrl || '/api/contacts';
        this.defaultTable = config.defaultTable || 'contacts';
        this.maxColumns = config.maxColumns || 20;
        this.debug = config.debug || false;
        
        // Initialize when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.init());
        } else {
            this.init();
        }
    }
    
    init() {
        // Find all forms and attach handlers
        const forms = document.querySelectorAll('form[data-api-enabled="true"], form.api-form');
        forms.forEach(form => this.attachFormHandler(form));
        
        // Also handle forms that don't have specific classes/attributes but have data-table
        const tableForms = document.querySelectorAll('form[data-table]');
        tableForms.forEach(form => this.attachFormHandler(form));
        
        this.log('Dynamic Form Handler initialized for', forms.length + tableForms.length, 'forms');
    }
    
    attachFormHandler(form) {
        // Prevent double attachment
        if (form.hasAttribute('data-handler-attached')) return;
        form.setAttribute('data-handler-attached', 'true');
        
        form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.log('Handler attached to form:', form);
    }
    
    async handleSubmit(event) {
        event.preventDefault();
        
        const form = event.target;
        const submitButton = form.querySelector('button[type="submit"], input[type="submit"]');
        const originalText = submitButton ? submitButton.textContent || submitButton.value : '';
        
        try {
            // Show loading state
            this.setLoadingState(submitButton, true);
            
            // Get form configuration
            const config = this.getFormConfig(form);
            
            // Collect and transform form data
            const formData = this.collectFormData(form);
            const apiData = this.transformToApiFormat(formData);
            
            // Send to API
            const result = await this.sendToApi(apiData, config);
            
            // Handle success
            this.handleSuccess(form, result, config);
            
        } catch (error) {
            // Handle error
            this.handleError(form, error);
        } finally {
            // Reset loading state
            this.setLoadingState(submitButton, false, originalText);
        }
    }
    
    getFormConfig(form) {
        return {
            table: form.getAttribute('data-table') || this.defaultTable,
            method: form.getAttribute('data-method') || 'POST',
            resetOnSuccess: form.getAttribute('data-reset') !== 'false',
            showAlert: form.getAttribute('data-show-alert') !== 'false',
            redirectUrl: form.getAttribute('data-redirect'),
            updateId: form.getAttribute('data-update-id') || null
        };
    }
    
    collectFormData(form) {
        const formData = new FormData(form);
        const data = {};
        
        // Collect all form fields
        for (let [key, value] of formData.entries()) {
            // Handle multiple values (checkboxes, multiple selects)
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
        
        // Also collect unchecked checkboxes and radio buttons
        const uncheckedInputs = form.querySelectorAll('input[type="checkbox"]:not(:checked), input[type="radio"]:not(:checked)');
        uncheckedInputs.forEach(input => {
            if (input.type === 'checkbox' && !data.hasOwnProperty(input.name)) {
                data[input.name] = false;
            }
        });
        
        return data;
    }
    
    transformToApiFormat(formData) {
        const apiData = {};
        const keys = Object.keys(formData);
        
        keys.forEach((key, index) => {
            // Map to x_01, x_02, etc. format
            const columnIndex = (index + 1).toString().padStart(2, '0');
            const columnName = `x_${columnIndex}`;
            
            let value = formData[key];
            
            // Handle arrays (multiple values)
            if (Array.isArray(value)) {
                value = value.join(', ');
            }
            
            // Handle boolean values
            if (typeof value === 'boolean') {
                value = value ? '1' : '0';
            }
            
            // Ensure value is string
            apiData[columnName] = String(value);
            
            // Stop at maximum columns
            if (index + 1 >= this.maxColumns) {
                this.log('Warning: Form has more fields than maximum columns (', this.maxColumns, ')');
                return;
            }
        });
        
        return apiData;
    }
    
    async sendToApi(data, config) {
        const url = config.updateId 
            ? `${this.apiBaseUrl}/${config.updateId}`
            : this.apiBaseUrl;
            
        const method = config.updateId ? 'PUT' : config.method;
        
        const headers = {
            'Content-Type': 'application/json',
            'X-Table-Name': config.table
        };
        
        const response = await fetch(url, {
            method: method,
            headers: headers,
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            const errorData = await response.json().catch(() => ({}));
            throw new Error(errorData.message || `HTTP ${response.status}: ${response.statusText}`);
        }
        
        return await response.json();
    }
    
    handleSuccess(form, result, config) {
        this.log('Success:', result);
        
        // Show success message
        if (config.showAlert) {
            this.showMessage(form, result.message || 'Data berhasil disimpan!', 'success');
        }
        
        // Reset form if configured
        if (config.resetOnSuccess) {
            form.reset();
        }
        
        // Redirect if configured
        if (config.redirectUrl) {
            setTimeout(() => {
                window.location.href = config.redirectUrl;
            }, 1000);
        }
        
        // Trigger custom event
        const event = new CustomEvent('formApiSuccess', {
            detail: { result, config, form }
        });
        form.dispatchEvent(event);
    }
    
    handleError(form, error) {
        this.log('Error:', error);
        
        // Show error message
        this.showMessage(form, error.message || 'Terjadi kesalahan saat menyimpan data', 'error');
        
        // Trigger custom event
        const event = new CustomEvent('formApiError', {
            detail: { error, form }
        });
        form.dispatchEvent(event);
    }
    
    showMessage(form, message, type = 'info') {
        // Remove existing messages
        const existingMessages = form.querySelectorAll('.api-message');
        existingMessages.forEach(msg => msg.remove());
        
        // Create message element
        const messageEl = document.createElement('div');
        messageEl.className = `api-message api-message-${type}`;
        messageEl.textContent = message;
        
        // Basic styling
        messageEl.style.cssText = `
            padding: 10px;
            margin: 10px 0;
            border-radius: 4px;
            font-size: 14px;
            ${type === 'success' ? 'background-color: #d4edda; color: #155724; border: 1px solid #c3e6cb;' : ''}
            ${type === 'error' ? 'background-color: #f8d7da; color: #721c24; border: 1px solid #f5c6cb;' : ''}
            ${type === 'info' ? 'background-color: #d1ecf1; color: #0c5460; border: 1px solid #bee5eb;' : ''}
        `;
        
        // Insert message
        form.insertBefore(messageEl, form.firstChild);
        
        // Auto remove after 5 seconds
        setTimeout(() => {
            if (messageEl.parentNode) {
                messageEl.remove();
            }
        }, 5000);
    }
    
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
    
    log(...args) {
        if (this.debug) {
            console.log('[Dynamic Form Handler]', ...args);
        }
    }
}

// Konfigurasi default - sesuaikan dengan kebutuhan Anda
const dynamicFormHandler = new DynamicFormHandler({
    apiBaseUrl: '/api/contacts',  // Ganti dengan URL API Anda
    defaultTable: 'contacts',      // Tabel default
    maxColumns: 20,                // Maksimal kolom x_01 sampai x_20
    debug: false                   // Set true untuk development
});

// Export untuk penggunaan manual jika diperlukan
if (typeof window !== 'undefined') {
    window.DynamicFormHandler = DynamicFormHandler;
}