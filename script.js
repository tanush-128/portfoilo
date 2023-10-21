function myFunction() {
    console.log("hello");
var x = document.getElementById("navbar-links");
if (x.style.display === "block") {
 x.style.display = "none";
} else {
 x.style.display = "block";
}
}


ham = document.getElementById('ham');
ham.addEventListener('click', () => myFunction());