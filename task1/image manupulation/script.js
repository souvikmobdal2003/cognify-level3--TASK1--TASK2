let fullbox = document.getElementById("fullbox");
let fullimg = document.getElementById("fullimg");

function openfullimg(pic) {
    fullbox.style.display = "flex";
    fullimg.src = pic;
}

function closefullimg() {
    fullbox.style.display = "none";
}
