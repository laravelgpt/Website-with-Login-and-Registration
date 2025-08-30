// DOM Elements
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const loginForm = document.querySelector('.login form');
const registerForm = document.querySelector('.register form');
const navigation = document.querySelector('.navigation');

// User Management System
class UserManager {
    constructor() {
        this.users = this.loadUsers();
        this.currentUser = this.getCurrentUser();
        this.init();
    }

    init() {
        this.updateUI();
        this.bindEvents();
    }

    // Load users from localStorage
    loadUsers() {
        const users = localStorage.getItem('users');
        return users ? JSON.parse(users) : [];
    }

    // Save users to localStorage
    saveUsers() {
        localStorage.setItem('users', JSON.stringify(this.users));
    }

    // Get current logged-in user
    getCurrentUser() {
        const currentUser = localStorage.getItem('currentUser');
        return currentUser ? JSON.parse(currentUser) : null;
    }

    // Set current user
    setCurrentUser(user) {
        this.currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
    }

    // Clear current user (logout)
    clearCurrentUser() {
        this.currentUser = null;
        localStorage.removeItem('currentUser');
    }

    // Validate email format
    validateEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Validate password strength
    validatePassword(password) {
        // At least 6 characters, contains letters and numbers
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/;
        return passwordRegex.test(password);
    }

    // Check if email already exists
    emailExists(email) {
        return this.users.some(user => user.email === email);
    }

    // Check if username already exists
    usernameExists(username) {
        return this.users.some(user => user.username === username);
    }

    // Register new user
    register(username, email, password) {
        // Validation
        if (!username || username.trim().length < 3) {
            return { success: false, message: 'Username must be at least 3 characters long' };
        }

        if (!this.validateEmail(email)) {
            return { success: false, message: 'Please enter a valid email address' };
        }

        if (!this.validatePassword(password)) {
            return { success: false, message: 'Password must be at least 6 characters and contain both letters and numbers' };
        }

        if (this.emailExists(email)) {
            return { success: false, message: 'Email already exists' };
        }

        if (this.usernameExists(username)) {
            return { success: false, message: 'Username already exists' };
        }

        // Create new user
        const newUser = {
            id: Date.now(),
            username: username.trim(),
            email: email.trim().toLowerCase(),
            password: password, // In real app, this should be hashed
            createdAt: new Date().toISOString()
        };

        this.users.push(newUser);
        this.saveUsers();

        return { success: true, message: 'Registration successful!', user: newUser };
    }

    // Login user
    login(email, password) {
        if (!email || !password) {
            return { success: false, message: 'Please fill in all fields' };
        }

        const user = this.users.find(u => 
            u.email === email.trim().toLowerCase() && u.password === password
        );

        if (!user) {
            return { success: false, message: 'Invalid email or password' };
        }

        this.setCurrentUser(user);
        return { success: true, message: 'Login successful!', user: user };
    }

    // Logout user
    logout() {
        this.clearCurrentUser();
        this.updateUI();
        this.showMessage('Logged out successfully!', 'success');
    }

    // Update UI based on login status
    updateUI() {
        if (this.currentUser) {
            // User is logged in
            btnPopup.textContent = 'Dashboard';
            btnPopup.onclick = () => this.showDashboard();
            
            // Add logout button
            if (!document.querySelector('.logout-btn')) {
                const logoutBtn = document.createElement('button');
                logoutBtn.textContent = 'Logout';
                logoutBtn.className = 'logout-btn';
                logoutBtn.style.cssText = `
                    width: 100px;
                    height: 40px;
                    background: transparent;
                    border: 2px solid #fff;
                    outline: none;
                    border-radius: 6px;
                    cursor: pointer;
                    font-size: 1em;
                    color: #fff;
                    font-weight: 500;
                    margin-left: 20px;
                    transition: .5s;
                `;
                logoutBtn.onmouseover = () => {
                    logoutBtn.style.background = '#fff';
                    logoutBtn.style.color = '#162938';
                };
                logoutBtn.onmouseout = () => {
                    logoutBtn.style.background = 'transparent';
                    logoutBtn.style.color = '#fff';
                };
                logoutBtn.onclick = () => this.logout();
                navigation.appendChild(logoutBtn);
            }
        } else {
            // User is not logged in
            btnPopup.textContent = 'Login';
            btnPopup.onclick = null;
            
            // Remove logout button if exists
            const logoutBtn = document.querySelector('.logout-btn');
            if (logoutBtn) {
                logoutBtn.remove();
            }
        }
    }

    // Show dashboard for logged-in users
    showDashboard() {
        if (!this.currentUser) {
            this.showMessage('Please log in first', 'error');
            return;
        }

        const dashboardHTML = `
            <div class="dashboard-overlay" style="
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background: rgba(0, 0, 0, 0.8);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index: 1000;
            ">
                <div class="dashboard-content" style="
                    background: rgba(255, 255, 255, 0.1);
                    border: 2px solid rgba(255, 255, 255, 0.5);
                    border-radius: 20px;
                    backdrop-filter: blur(20px);
                    padding: 40px;
                    text-align: center;
                    color: white;
                    max-width: 500px;
                    position: relative;
                ">
                    <span class="dashboard-close" style="
                        position: absolute;
                        top: 10px;
                        right: 15px;
                        font-size: 30px;
                        cursor: pointer;
                        color: white;
                    ">&times;</span>
                    <h2 style="margin-bottom: 20px;">Welcome, ${this.currentUser.username}!</h2>
                    <div style="text-align: left; margin: 20px 0;">
                        <p><strong>Username:</strong> ${this.currentUser.username}</p>
                        <p><strong>Email:</strong> ${this.currentUser.email}</p>
                        <p><strong>Member since:</strong> ${new Date(this.currentUser.createdAt).toLocaleDateString()}</p>
                    </div>
                    <p style="margin: 20px 0;">You have successfully logged into your account!</p>
                    <button class="dashboard-logout-btn" style="
                        background: #fff;
                        color: #162938;
                        border: none;
                        padding: 10px 20px;
                        border-radius: 6px;
                        cursor: pointer;
                        font-weight: 500;
                        margin-top: 20px;
                    ">Logout</button>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML('beforeend', dashboardHTML);

        // Bind close events
        document.querySelector('.dashboard-close').onclick = () => {
            document.querySelector('.dashboard-overlay').remove();
        };
        document.querySelector('.dashboard-logout-btn').onclick = () => {
            document.querySelector('.dashboard-overlay').remove();
            this.logout();
        };
        document.querySelector('.dashboard-overlay').onclick = (e) => {
            if (e.target.classList.contains('dashboard-overlay')) {
                document.querySelector('.dashboard-overlay').remove();
            }
        };
    }

    // Show message to user
    showMessage(message, type = 'info') {
        // Remove existing message if any
        const existingMessage = document.querySelector('.user-message');
        if (existingMessage) {
            existingMessage.remove();
        }

        const messageDiv = document.createElement('div');
        messageDiv.className = 'user-message';
        messageDiv.textContent = message;
        
        const bgColor = type === 'error' ? 'rgba(255, 0, 0, 0.8)' : 
                       type === 'success' ? 'rgba(0, 255, 0, 0.8)' : 
                       'rgba(0, 123, 255, 0.8)';
        
        messageDiv.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: ${bgColor};
            color: white;
            padding: 15px 20px;
            border-radius: 8px;
            z-index: 1001;
            font-weight: 500;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            animation: slideIn 0.3s ease;
        `;

        // Add animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideIn {
                from { transform: translateX(100%); opacity: 0; }
                to { transform: translateX(0); opacity: 1; }
            }
        `;
        document.head.appendChild(style);

        document.body.appendChild(messageDiv);

        // Auto remove after 3 seconds
        setTimeout(() => {
            if (messageDiv.parentNode) {
                messageDiv.remove();
            }
        }, 3000);
    }

    // Bind all events
    bindEvents() {
        // Modal controls
        registerLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.add('active');
        });

        loginLink.addEventListener('click', (e) => {
            e.preventDefault();
            wrapper.classList.remove('active');
        });

        btnPopup.addEventListener('click', (e) => {
            e.preventDefault();
            if (!this.currentUser) {
                wrapper.classList.add('active-popup');
            }
        });

        iconClose.addEventListener('click', () => {
            wrapper.classList.remove('active-popup');
        });

        // Form submissions
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleLogin(e);
        });

        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            this.handleRegister(e);
        });

        // Close modal when clicking outside
        wrapper.addEventListener('click', (e) => {
            if (e.target === wrapper) {
                wrapper.classList.remove('active-popup');
            }
        });
    }

    // Handle login form submission
    handleLogin(e) {
        const formData = new FormData(e.target);
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;

        const result = this.login(email, password);
        
        if (result.success) {
            this.showMessage(result.message, 'success');
            wrapper.classList.remove('active-popup');
            this.updateUI();
            
            // Clear form
            e.target.reset();
        } else {
            this.showMessage(result.message, 'error');
        }
    }

    // Handle register form submission
    handleRegister(e) {
        const username = e.target.querySelector('input[type="text"]').value;
        const email = e.target.querySelector('input[type="email"]').value;
        const password = e.target.querySelector('input[type="password"]').value;
        const agreeTerms = e.target.querySelector('input[type="checkbox"]').checked;

        if (!agreeTerms) {
            this.showMessage('Please agree to the terms & conditions', 'error');
            return;
        }

        const result = this.register(username, email, password);
        
        if (result.success) {
            this.showMessage(result.message, 'success');
            
            // Auto login after successful registration
            this.setCurrentUser(result.user);
            this.updateUI();
            wrapper.classList.remove('active-popup');
            
            // Clear form
            e.target.reset();
        } else {
            this.showMessage(result.message, 'error');
        }
    }
}

// Initialize the application
const userManager = new UserManager();

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Escape key to close modal
    if (e.key === 'Escape') {
        wrapper.classList.remove('active-popup');
        const dashboard = document.querySelector('.dashboard-overlay');
        if (dashboard) {
            dashboard.remove();
        }
    }
});
