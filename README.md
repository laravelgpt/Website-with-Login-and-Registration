# Website with Login and Registration

![Demo](https://img.shields.io/badge/demo-live-brightgreen)
![Version](https://img.shields.io/badge/version-2.0-blue)
![License](https://img.shields.io/badge/license-MIT-green)

A beautiful, fully functional login and registration website with user authentication and session management. Built with pure HTML, CSS, and JavaScript - no backend required!

## 🌟 Live Demo
Simply download and open `index.html` in your browser to see it in action!

## 📸 Screenshots
*Note: Add screenshots of your login/registration forms here*

## ✨ Features Implemented

### 👤 User Registration
- **Username validation**: Minimum 3 characters
- **Email validation**: Proper email format checking
- **Password strength**: Must be at least 6 characters with letters and numbers
- **Duplicate checking**: Prevents duplicate usernames and emails
- **Terms agreement**: Required checkbox validation

### 🔐 User Login
- **Email/Password authentication**: Secure login verification
- **Form validation**: Ensures all fields are filled
- **Error handling**: Clear error messages for invalid credentials

### 📊 User Dashboard
- **Welcome screen**: Personalized dashboard for logged-in users
- **User information**: Displays username, email, and registration date
- **Dashboard access**: Click "Dashboard" button when logged in

### 🔄 Session Management
- **Persistent login**: Users stay logged in across browser sessions
- **Logout functionality**: Secure logout with session cleanup
- **Auto-login**: New users are automatically logged in after registration

### 💬 User Interface Enhancements
- **Dynamic UI**: Login button changes to "Dashboard" when logged in
- **Logout button**: Appears in navigation when user is logged in
- **Success/Error messages**: Toast notifications for user feedback
- **Keyboard shortcuts**: Press Escape to close modals
- **Responsive design**: Works on desktop and mobile devices

### 💾 Data Storage
- **Local Storage**: User data persists in browser localStorage
- **JSON format**: Structured data storage for multiple users
- **User sessions**: Current user session maintained

## 🚀 Getting Started

### Prerequisites
- Any modern web browser
- No server setup required!

### Installation
1. Clone the repository:
```bash
git clone https://github.com/laravelgpt/Website-with-Login-and-Registration.git
```

2. Navigate to the project directory:
```bash
cd Website-with-Login-and-Registration
```

3. Open `index.html` in your web browser

That's it! No build process or dependencies required.

## 📖 How to Use

### Registration Process
1. Click the "Login" button in the navigation
2. Click "Register" link in the login form
3. Fill in your details:
   - Username (minimum 3 characters)
   - Email (valid format required)
   - Password (minimum 6 characters with letters and numbers)
4. Check "I agree to the terms & conditions"
5. Click "Register"
6. You'll be automatically logged in and see a success message

### Login Process
1. Click the "Login" button in the navigation
2. Enter your registered email and password
3. Click "Login"
4. Upon successful login, you'll see the dashboard

### Dashboard Features
- Click "Dashboard" button (appears after login) to view your profile
- See your username, email, and registration date
- Logout directly from the dashboard

## 🔒 Password Requirements
- Minimum 6 characters
- Must contain at least one letter
- Must contain at least one number
- Special characters are allowed but not required

## 🌐 Browser Compatibility
Works in all modern browsers that support:
- localStorage
- ES6 Classes
- Arrow functions
- Template literals

## 📁 File Structure
```
login_register/
├── index.html          # Main HTML file with login/register forms
├── style.css           # Beautiful CSS styling with animations
├── script.js           # Enhanced JavaScript with full functionality
├── background.jpg      # Background image
├── README.md          # Project documentation
└── .gitignore         # Git ignore file
```

## 🔧 Technologies Used
- **HTML5**: Semantic markup and modern form elements
- **CSS3**: Advanced styling with animations and responsive design
- **JavaScript (ES6+)**: Modern JavaScript with classes and modules
- **Ionicons**: Beautiful icon library
- **Google Fonts**: Poppins font family

## ⚠️ Security Notes
**For Development/Demo Only**: 
- Passwords are stored in plain text in localStorage
- In a production environment, you would:
  - Use a secure backend server
  - Hash passwords before storage
  - Implement proper security measures
  - Use HTTPS
  - Add CSRF protection

## 🧪 Testing the Features

### Test Registration:
1. Try registering with invalid data to see validation messages
2. Register a new user successfully
3. Try registering with the same email/username to see duplicate detection

### Test Login:
1. Try logging in with wrong credentials
2. Login with correct credentials
3. Check that UI updates after login

### Test Session Management:
1. Login, refresh the page, confirm you're still logged in
2. Logout and confirm UI updates
3. Close and reopen browser to test session persistence

## 🤝 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author
- **laravelgpt** - *Initial work* - [laravelgpt](https://github.com/laravelgpt)

## 🙏 Acknowledgments
- Inspired by modern authentication systems
- Beautiful design patterns from the web community
- Thanks to all contributors and users!

---

⭐ **If you found this project helpful, please give it a star!** ⭐