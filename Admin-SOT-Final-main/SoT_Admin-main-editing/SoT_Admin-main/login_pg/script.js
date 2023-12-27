// const wrapper = document.querySelector('.wrapper');
// const wrapper = document.querySelector('.login-link');

// const btnPopup = document.querySelector('.btnLogin-popup');
// loginLink.addEventListener('click', () => { wrapper.classList.remove('active'); });

// btnPopup.addEventListener('click', () => { wrapper.classList.remove('active-popup'); });


function redirect(){
    var email = document.getElementById('email').value;
    if (email == 'financial@admin.com'){
        window.location.href = "/SoT_Admin-main/SoT_Admin/index.html";
    }
    else if(email == 'passenger@admin.com'){
        window.location.href = "/SoT_Admin-main/SoT_Admin/view_passenger_details.html";
    }
    else{
        alert("Invalid Email Id");
    }
}