# STMNPBDG.US - E-commerce Website

A modern e-commerce website built with HTML5, Tailwind CSS, and Vanilla JavaScript.

## Features

- 🛍️ **Product Catalog**: Browse fashion items with detailed product pages
- 👤 **User Authentication**: Login/registration system with localStorage
- 🛒 **Shopping Cart**: Add/remove items with persistent storage
- 💳 **Checkout System**: Complete payment flow with success confirmation
- 📱 **Responsive Design**: Mobile-first design with Tailwind CSS
- 🎨 **Modern UI**: Clean, professional interface with smooth animations

## Project Structure

```
STMNPBDG.US/
├── index.html                 # Homepage
├── asset/
│   ├── images/               # Product images and assets
│   └── js/
│       └── main.js          # Main JavaScript utilities
├── data/
│   ├── products.json        # Product catalog data
│   └── lookbook.json        # Lookbook content
├── pages/
│   ├── menu/                # Main navigation pages
│   ├── payment/             # Checkout and payment flow
│   ├── profile/             # User account pages
│   └── Policy/              # Terms and policies
├── test/                    # Test files for development
├── py/                      # Python utility scripts
└── .gitignore              # Git ignore rules
```

## Getting Started

### Prerequisites

- Modern web browser
- Local web server (recommended)

### Installation

1. Clone or download the project
2. Start a local server:
   ```bash
   python -m http.server 8000
   ```
3. Open `http://localhost:8000` in your browser

## Development

### Testing

Test files are available in the `test/` directory:

- `test_login.html` - Login system testing
- `test_checkout.html` - Checkout flow testing
- `test_dropdown.html` - User dropdown testing

### Scripts

Python scripts in `py/` directory:

- `check_main_js.py` - Verify main.js integration
- `check_user_buttons.py` - Validate user button implementation

## Technologies Used

- **Frontend**: HTML5, Tailwind CSS, Vanilla JavaScript
- **Storage**: localStorage for user sessions and cart data
- **Icons**: Font Awesome
- **Styling**: Custom CSS with Tailwind utilities

## Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+

## Contributing

1. Test your changes using the test files
2. Ensure responsive design works on mobile
3. Follow the existing code style

## License

This project is for educational and demonstration purposes.
