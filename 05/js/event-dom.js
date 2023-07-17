var coverImage = document.querySelector("#cover");

coverImage.onclick = function() {
    alert("상세페이지로 이동.");
};

coverImage.onmouseover = function() {
    coverImage.style.border = "3px black solid"
    coverImage.style.cursor = "pointer"
    coverImage.style.width = "600px";
    coverImage.style.height = "550px";
}

coverImage.onmouseout = function() {
    coverImage.style.border = ""
    coverImage.style.width = "450px";
    coverImage.style.height = "400px";
}