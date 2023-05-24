javascript:
var stop = prompt("Enter the title of the lesson to stop on or press 'q' at to stop anytime.");
if (stop == "") {stop = "random words"}
window.addEventListener("keydown", function(key){
    if (key.key == "q") {clearInterval(id)}
});
answer = function(){
    if (document.getElementsByTagName("h1")[0].textContent.includes(stop)) {
        clearInterval(id);
    }
    if (document.getElementsByClassName("input-wrapper is-correct")[0] != null) {
        document.getElementsByClassName("input-wrapper is-correct")[0].click();
    }
    if (document.getElementsByClassName("btn btn-default")[0].textContent == "Save & continue »") {
        document.getElementsByClassName("btn btn-default")[0].click();
    }
    if (document.getElementById("next-lesson") != null) {
        document.getElementById("next-lesson").click();
    }
    if (document.getElementById("self-rating-link-5") != null) {
        document.getElementById("self-rating-link-5").click();
    }
    if (document.getElementsByClassName("carousel-nav")[0].id == "next") {
        document.getElementsByClassName("carousel-nav")[0].click();
    }
}
id = setInterval(answer, 1000);