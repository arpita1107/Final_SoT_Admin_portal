const wrapper = document.querySelector('.wrapper');
const wrapper = document.querySelector('.login-link');

const btnPopup = document.querySelector('.btnLogin-popup');
loginLink.addEventListener('click', () => { wrapper.classList.remove('active'); });

btnPopup.addEventListener('click', () => { wrapper.classList.remove('active-popup'); });