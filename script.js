// تابع نمایش تب‌ها (ورود / ثبت‌نام)
function showTab(tab) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const loginBtn = document.querySelector('.tab-btn:nth-child(1)');
    const registerBtn = document.querySelector('.tab-btn:nth-child(2)');

    if (tab === 'login') {
        loginForm.style.display = 'block';
        registerForm.style.display = 'none';
        loginBtn.classList.add('active');
        registerBtn.classList.remove('active');
    } else if (tab === 'register') {
        registerForm.style.display = 'block';
        loginForm.style.display = 'none';
        registerBtn.classList.add('active');
        loginBtn.classList.remove('active');
    }
}

// بارگذاری تب پیش‌فرض (ورود)
document.addEventListener('DOMContentLoaded', function() {
    showTab('login');
});
