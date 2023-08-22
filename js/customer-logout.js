const logoutBtn = document.getElementById('logout');

logoutBtn.addEventListener('click', () => {
    localStorage.removeItem('activeUser');
    window.location.href = 'customer-login.html';
});