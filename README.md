# 🌟 Website with Login and Registration

A beautiful, fully functional login and registration website built with HTML, CSS, and JavaScript. Features a modern glassmorphism design with complete user authentication and session management.

![Website Preview](https://img.shields.io/badge/Status-Live-brightgreen)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat&logo=javascript&logoColor=black)

## ✨ Features

### 🔐 Authentication System
- **User Registration** with comprehensive validation
- **User Login** with secure authentication
- **Session Management** with persistent login state
- **User Dashboard** with profile information
- **Logout functionality** with session cleanup

### 🎨 Modern UI/UX
- **Glassmorphism Design** with blur effects
- **Responsive Layout** that works on all devices
- **Smooth Animations** and transitions
- **Interactive Elements** with hover effects
- **Toast Notifications** for user feedback

### 🛡️ Validation & Security
- **Email Format Validation**
- **Password Strength Requirements** (6+ chars, letters + numbers)
- **Username Length Validation** (3+ characters)
- **Duplicate Prevention** for emails and usernames
- **Terms Agreement** requirement

### 💾 Data Management
- **LocalStorage Integration** for user data persistence
- **JSON Data Structure** for organized storage
- **Session Persistence** across browser sessions
- **No Backend Required** for demonstration

## 🚀 Live Demo

Simply open `index.html` in your web browser to see the website in action!

## 📱 Screenshots

*Add your screenshots here*

## 🛠️ Installation & Usage

### Quick Start
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/Website-with-Login-and-Registration.git
   cd Website-with-Login-and-Registration
   ```

2. **Open the website**
   - Simply open `index.html` in your web browser
   - No server setup required!

### Using the Features

#### Registration Process
1. Click the **"Login"** button in the navigation
2. Click **"Register"** link in the login form
3. Fill in your details:
   - **Username** (minimum 3 characters)
   - **Email** (valid format required)
   - **Password** (minimum 6 characters with letters and numbers)
4. Check **"I agree to the terms & conditions"**
5. Click **"Register"**
6. You'll be automatically logged in!

#### Login Process
1. Click the **"Login"** button in the navigation
2. Enter your registered email and password
3. Click **"Login"**
4. Access your dashboard upon successful login

#### Dashboard Features
- View your profile information
- See registration date
- Logout option available

## 📁 Project Structure

```
Website-with-Login-and-Registration/
├── index.html          # Main HTML file with login/register forms
├── style.css           # Beautiful CSS styling with glassmorphism effects
├── script.js           # Enhanced JavaScript with full functionality
├── background.jpg      # Background image
└── README.md          # Project documentation
```

## 🔧 Technical Details

### Password Requirements
- Minimum 6 characters
- Must contain at least one letter
- Must contain at least one number
- Special characters are allowed but not required

### Browser Compatibility
Works in all modern browsers that support:
- localStorage
- ES6 Classes
- Arrow functions
- Template literals

### Data Storage
All user data is stored locally in the browser's localStorage:
```javascript
// User data structure
{
  id: timestamp,
  username: \"user123\",
  email: \"user@example.com\",
  password: \"password123\", // Note: Plain text for demo only
  createdAt: \"2024-01-01T00:00:00.000Z\"
}
```

## 🎯 Use Cases

- **Portfolio Projects** - Showcase your frontend skills
- **Learning Material** - Study modern web development techniques
- **Template Base** - Start point for larger applications
- **Educational Purpose** - Understand authentication workflows

## ⚠️ Important Security Note

**For Development/Demo Only**: This project stores passwords in plain text in localStorage. In a production environment, you should:

- Use a secure backend server
- Hash passwords before storage
- Implement proper security measures
- Use HTTPS
- Add CSRF protection
- Implement proper session management

## 🎨 Customization

### Changing Colors
Edit the CSS variables in `style.css`:
```css
:root {
  --primary-color: #162938;
  --accent-color: #fff;
  --background: url('your-background.jpg');
}
```

### Adding New Features
The modular JavaScript structure makes it easy to extend:
- Add new validation rules in `UserManager` class
- Extend the dashboard with more features
- Add password reset functionality

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Ionicons** for the beautiful icons
- **Google Fonts** for the Poppins font family
- **Glassmorphism** design trend inspiration

## 📞 Contact

Your Name - [@yourusername](https://github.com/yourusername)

Project Link: [https://github.com/yourusername/Website-with-Login-and-Registration](https://github.com/yourusername/Website-with-Login-and-Registration)

---

⭐ **Star this repository if you found it helpful!** ⭐