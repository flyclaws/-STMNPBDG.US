# Python Scripts - STMNPBDG.US

This folder contains Python scripts for development and testing purposes.

## Available Scripts

### check_main_js.py

Checks main.js integration across all HTML files:

- Verifies main.js script inclusion
- Checks for data-user-button elements
- Validates user dropdown implementation

Usage: `python check_main_js.py`

### check_user_buttons.py

Validates user button implementation across pages:

- Checks for data-user-button attributes
- Verifies user dropdown containers
- Validates event listener setup

Usage: `python check_user_buttons.py`

## Notes

- These scripts are for development quality assurance
- Run from the project root directory
- They scan all HTML files recursively
