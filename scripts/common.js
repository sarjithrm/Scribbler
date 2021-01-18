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

function signUpSubmit(){
    alert("Sign Up");
    document.getElementById("signUpModal").getElementsByTagName("form")[0].reset();
}

function signInSubmit(){
    alert("Sign In");
    document.getElementById("signInModal").getElementsByTagName("form")[0].reset();
}