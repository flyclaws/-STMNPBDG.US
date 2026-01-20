# Test Files - STMNPBDG.US

This folder contains test files for various features of the e-commerce website.

## Available Tests

### test_login.html

Tests the login system functionality including:

- User authentication
- Session management
- Status checking
- Admin backdoor login

### test_logout.html

Tests the logout functionality including:

- Session cleanup
- UI state updates
- Dropdown logout simulation

### test_checkout.html

Tests the checkout and payment flow including:

- Cart management
- Navigation flow
- Success page handling

### test_dropdown.html

Tests the user dropdown functionality including:

- User name display
- Profile menu rendering
- Login/logout state changes

## Usage

1. Start a local server: `python -m http.server 8000`
2. Open any test file in your browser: `http://localhost:8000/test/filename.html`
3. Follow the test instructions on each page

## Notes

- These files are for development and testing purposes only
- They simulate various user interactions and states
- All tests use localStorage for data persistence
