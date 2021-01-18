var signUpLink = document.getElementsByClassName("info")[0].getElementsByTagName("a")[0];
signUpLink.addEventListener('click', function(){
    document.getElementsByClassName("modal-overlay")[0].style.display = "none";
    document.getElementById('signInModal').classList.remove("modal-active");
    showSignUpForm();
});

function closeModal(modalId){
    var modal = document.getElementById(modalId);
    document.getElementsByClassName("modal-overlay")[0].style.display = "none";
    modal.classList.remove("modal-active");
}

function showSignUpForm(){
    var modal = document.getElementById('signUpModal');
    document.getElementsByClassName("modal-overlay")[0].style.display = "block";
    modal.classList.add("modal-active");
}

function showSignInForm(){
    var modal = document.getElementById('signInModal');
    document.getElementsByClassName("modal-overlay")[0].style.display = "block";
    modal.classList.add("modal-active");
}

function signUp(){
    document.getElementById("name").value = '';
    document.getElementById("signUpUsername").value = '';
    document.getElementById("signUpPassword").value = '';
    document.getElementById("confirmPassword").value = '';
}

function signIn(){
    document.getElementById("username").value = '';
    document.getElementById("password").value = '';
}