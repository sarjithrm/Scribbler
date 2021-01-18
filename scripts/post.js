loadDetails();
var likecount = 0;

function loadDetails(){
    document.getElementById("postTitle").innerHTML = sessionStorage.getItem("title");
    document.getElementById("user").innerHTML = sessionStorage.getItem("user");
    document.getElementById("description").innerHTML = sessionStorage.getItem("description");
}

function editPost(){
    var template = "<div>\n" +
        "                <input type='text' id=\"postTitle-edit\" value='" + sessionStorage.getItem("title") + "'>\n" +
        "            </div>\n" +
        "            <div class=\"action-edit\">\n" +
        "                <p id=\"user\"> " + sessionStorage.getItem('user') + " </p>\n" +
        "                <button onclick=\"savePost()\">Save  <i class=\"fas fa-save\" aria-hidden=\"true\"></i></button>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <textarea id=\"description-edit\" rows='10' cols='25'></textarea>\n" +
        "            </div>";
    document.getElementsByClassName("post-editable")[0].innerHTML = template;
    document.getElementById("description-edit").innerText = sessionStorage.getItem("description");
}

function savePost(){
    sessionStorage.setItem("title", document.getElementById("postTitle-edit").value);
    sessionStorage.setItem("description", document.getElementById("description-edit").value);
    var template = "<div>\n" +
        "                <h2 id=\"postTitle\"></h2>\n" +
        "            </div>\n" +
        "            <div class=\"action\">\n" +
        "                <p id=\"user\"></p>\n" +
        "                <button onclick=\"editPost()\">Edit  <i class=\"fas fa-edit\" aria-hidden=\"true\"></i></button>\n" +
        "            </div>\n" +
        "            <div>\n" +
        "                <p id=\"description\"></p>\n" +
        "            </div>";
    document.getElementsByClassName("post-editable")[0].innerHTML = template;
    loadDetails();
}

function like(){
    likecount = likecount + 1;
    document.getElementsByClassName("like")[0].getElementsByTagName("button")[0].innerHTML = "<i class=\"fa fa-thumbs-up\" aria-hidden=\"true\"></i> Liked!";
    document.getElementsByClassName("like")[0].getElementsByTagName("p")[0].innerText = likecount + " people like this!";
}

function addComment(){
    var comment = document.getElementsByClassName("commentArea")[0].getElementsByTagName("textarea")[0].value;
    if(comment.length > 0){
        var template = "<div class=\"comments\">\n" +
            "                <p class=\"comment\"> " + comment + " </p>\n" +
            "            </div>";
        if(document.getElementsByClassName("comments")[0]){
            document.getElementsByClassName("comments")[0].innerHTML = "<p class=\"comment\"> " + comment + " </p>" + document.getElementsByClassName("comments")[0].innerHTML;
        }else{
            document.getElementsByClassName("commentArea")[0].innerHTML = document.getElementsByClassName("commentArea")[0].innerHTML + template;
        }
        document.getElementsByClassName("commentArea")[0].getElementsByTagName("textarea")[0].value = '';
    }
}