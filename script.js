/**
 * ReliefConnect - Global Script
 * Handles Shared UI Injection, State Management (localStorage), and Toast Notifications.
 */

// Initial Mock Data
const MOCK_CENTERS = [
  { id: '101', name: 'Downtown Community Center', category: 'Food', stock: 'High', contact: '555-0101', lat: 37.7749, lng: -122.4194, address: '123 Market St, San Francisco' },
  { id: '102', name: 'City Hospital Annex', category: 'Medicine', stock: 'Low', contact: '555-0102', lat: 37.7833, lng: -122.4167, address: '456 Med Blvd, San Francisco' },
  { id: '103', name: 'Westside Oxygen Depot', category: 'Oxygen', stock: 'Medium', contact: '555-0103', lat: 37.7694, lng: -122.4862, address: '789 Sunset Blvd, San Francisco' }
];

// 1. Initialize Application State
function initApp() {
  // Initialize LocalStorage if empty
  if (!localStorage.getItem('relief_centers')) {
      localStorage.setItem('relief_centers', JSON.stringify(MOCK_CENTERS));
  }

  // Setup Toast Container
  if (!document.getElementById('toast-container')) {
      const toastContainer = document.createElement('div');
      toastContainer.id = 'toast-container';
      document.body.appendChild(toastContainer);
  }

  injectHeaderFooter();
}

// 2. Shared Component Injection
function injectHeaderFooter() {
  const currentPath = window.location.pathname;
  const page = currentPath.split('/').pop() || 'index.html';

  const headerHTML = `
      <header class="global-nav">
          <div class="container nav-container">
              <a href="index.html" class="nav-logo">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--emergency-orange)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
                  </svg>
                  Relief<span>Connect</span>
              </a>
              <nav class="nav-links">
                  <a href="index.html" class="${page === 'index.html' || page === '' ? 'active' : ''}">Home</a>
                  <a href="explore.html" class="${page === 'explore.html' ? 'active' : ''}">Live Map</a>
                  <a href="contribute.html" class="${page === 'contribute.html' ? 'active' : ''}">Contribute</a>
              </nav>
          </div>
      </header>
  `;

  const footerHTML = `
      <footer class="global-footer">
          <div class="container">
              <p>&copy; ${new Date().getFullYear()} ReliefConnect. Mission Critical Emergency Resource Dashboard.</p>
          </div>
      </footer>
  `;

  const headerTarget = document.getElementById('header-placeholder');
  const footerTarget = document.getElementById('footer-placeholder');

  if (headerTarget) headerTarget.outerHTML = headerHTML;
  if (footerTarget) footerTarget.outerHTML = footerHTML;
}

// 3. Global Toast System
function showToast(message, type = 'info') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  
  let icon = '';
  if (type === 'success') icon = '✓';
  else if (type === 'error') icon = '✕';
  else if (type === 'warning') icon = '⚠';
  else icon = 'ℹ';

  toast.innerHTML = `
      <div class="toast-icon">${icon}</div>
      <div class="toast-message">${message}</div>
  `;

  container.appendChild(toast);

  // Auto remove after 3 seconds
  setTimeout(() => {
      toast.style.animation = 'fadeOut 0.3s ease-out forwards';
      setTimeout(() => {
          if (toast.parentNode) {
              toast.parentNode.removeChild(toast);
          }
      }, 300);
  }, 3000);
}

// 4. Data Helpers
function getCenters() {
  try {
      return JSON.parse(localStorage.getItem('relief_centers')) || [];
  } catch (e) {
      console.error('Error reading centers:', e);
      return [];
  }
}

function addCenter(centerData) {
  const centers = getCenters();
  const newCenter = {
      ...centerData,
      id: Date.now().toString(), // Generate unique ID
  };
  centers.push(newCenter);
  localStorage.setItem('relief_centers', JSON.stringify(centers));
  return newCenter;
}

function getCenterById(id) {
  const centers = getCenters();
  return centers.find(c => c.id === id);
}

// Initialize when DOM is ready
document.addEventListener('DOMContentLoaded', initApp);

// Expose to window for inline HTML usage if needed
window.showToast = showToast;
window.getCenters = getCenters;
window.addCenter = addCenter;
window.getCenterById = getCenterById;
