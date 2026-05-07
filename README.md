# ReliefConnect

ReliefConnect is a multi-page emergency resource dashboard designed to provide real-time mapping and management of emergency relief centers. It allows users to find needed resources or list available resources to help their community during critical situations.

## Features

- **High-Impact Landing Page (`index.html`)**: Features live emergency statistics counters and quick-action buttons to navigate the application.
- **Live Map & Filters (`explore.html`)**: A full-screen dashboard utilizing Leaflet.js to map resource centers. Includes a filtering sidebar to quickly find Food, Medicine, or Oxygen resources.
- **Center Details (`details.html`)**: A dynamically populated template view showing specific information about a center, including stock levels, contact details, and a quick link to get directions.
- **Contribution Form (`contribute.html`)**: A volunteer-friendly form to report new collection centers. Submissions are instantly added to the live map.
- **Global State Management**: Utilizes `localStorage` to simulate a database, allowing data to persist across page navigations without requiring a backend.
- **Shared Components**: The navigation header and footer are dynamically injected across all pages via JavaScript, ensuring a consistent UI and DRY code.
- **Toast Notifications**: A global toast notification system provides immediate user feedback across the application.

## Tech Stack

- **HTML5**: For semantic structure.
- **CSS3**: Vanilla CSS with global variables for a "Mission Critical" theming (Emergency Orange, Trust Blue, Clean White) and responsive layout.
- **Vanilla JavaScript**: For logic, state management, routing, and dynamic DOM manipulation.
- **Leaflet.js**: Integrated via CDN for interactive map rendering.

## Setup & Running

This project requires no build tools or backend servers. 

1. Clone or download the repository.
2. Open `index.html` directly in any modern web browser.
3. Use the application! Data added via the "List a Center" form will persist locally in your browser.

## Project Structure

```text
/relief-connect
├── index.html       # Landing page with hero & stats
├── explore.html     # Map dashboard & filters
├── details.html     # Dynamic center information template
├── contribute.html  # Resource contribution form
├── style.css        # Global styles and UI components
├── script.js        # Core logic, state management, and UI injection
└── README.md        # Project documentation
```

## Aesthetic Design

The UI is designed to feel premium and state-of-the-art, utilizing a high-contrast dark mode to emphasize critical information. Smooth CSS transitions, skeleton loaders for simulated data fetching, and an intuitive layout encourage user engagement during high-stress scenarios.
