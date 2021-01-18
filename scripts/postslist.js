var post;

function showDeleteConfirm(id){
    post = document.getElementById(id);
    var modal = document.getElementById('deleteModal');
    document.getElementsByClassName("modal-overlay")[0].style.display = "block";
    modal.classList.add("modal-active");
}

function deletePost(){
    post.remove();
    closeModal('deleteModal');
}

function postDetails(id){
    post = document.getElementById(id);
    sessionStorage.clear();
    sessionStorage.setItem("user", post.getElementsByClassName("postUser")[0].getElementsByTagName("p")[0].textContent);
    sessionStorage.setItem("title", post.getElementsByClassName("postTitle")[0].getElementsByTagName("p")[0].textContent);
    sessionStorage.setItem("description", post.getElementsByClassName("postDescription")[0].textContent);
    window.location.href = "../html/post.html";
}