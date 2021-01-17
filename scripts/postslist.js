var post;

function showDeleteConfirm(id){
    post = document.getElementById(id);
    console.log(post);
    var modal = document.getElementById('deleteModal');
    document.getElementsByClassName("modal-overlay")[0].style.display = "block";
    modal.classList.add("modal-active");
}

function deletePost(){
    post.remove();
    closeModal('deleteModal');
}