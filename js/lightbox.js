var lightbox = document.getElementById("lightbox-div");

var img = document.getElementsByClassName("lightbox");
var lightboxImg = document.getElementById("img01");



for (var i = 0; i < img.length; i++) {
    img[i].onclick = function() {
        lightbox.style.display = "block";
        lightboxImg.src = this.src;
    }
}

var span = document.getElementsByClassName("close")[0];

span.onclick = function() { 
    lightbox.style.display = "none";
}