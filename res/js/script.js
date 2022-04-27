function afficher(x) {
    document.getElementById(x).style.display = "block";
    var close = document.getElementsByClassName("close");
    for (var i = 0; i < close.length; i++) {
        close[i].onclick = function () {
            var div = this.parentElement.parentElement;
            div.style.display = "none";
        }
    }
}
