function getPosts(){
    window.location.href = "./html/postslist.html";
}

function createPost(){
    var modal = document.getElementById('createPostModel');
    document.getElementsByClassName("modal-overlay")[0].style.display = "block";
    modal.classList.add("modal-active");
}