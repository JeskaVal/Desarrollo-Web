let modal = document.getElementById("loginModal");
let btn = document.getElementById("openModal");
let span = document.getElementsByClassName("close")[0];
let content = document.querySelector(".hero .content");

btn.onclick = function(event) {
    event.preventDefault();
    modal.style.display = "flex";
    content.style.display = "none";
}

span.onclick = function() {
    modal.style.display = "none";
    content.style.display = "block";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
        content.style.display = "block";
    }
}
