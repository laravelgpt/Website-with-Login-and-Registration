const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');
const forgotPasswordLink = document.querySelector('.forgot-password-link');

const otpLink = document.querySelector('.otp-link');

registerLink.addEventListener('click', ()=> {
    wrapper.classList.add('active');
    wrapper.classList.remove('active-otp');
});

loginLink.addEventListener('click', ()=> {
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-otp');
    wrapper.classList.remove('active-forgot-password');
});

btnPopup.addEventListener('click', ()=> {
    wrapper.classList.add('active-popup');
});

iconClose.addEventListener('click', ()=> {
    wrapper.classList.remove('active-popup');
});

otpLink.addEventListener('click', (e)=> {
    e.preventDefault();
    wrapper.classList.add('active-otp');
    wrapper.classList.remove('active');
});

forgotPasswordLink.addEventListener('click', (e) => {
    e.preventDefault();
    wrapper.classList.add('active-forgot-password');
    wrapper.classList.remove('active');
    wrapper.classList.remove('active-otp');
});