
let button = document.getElementById("theBoxes");
console.log(button);
button.addEventListener("click", myFunction());

function myFunction() {
    return function () {
        let textBox = document.getElementById("number").value;
        createBoxes(textBox);
    }
}
var oldValue = 0;
var i = 1;
function createBoxes(n) {
    n = parseInt(oldValue) + parseInt(n);
    for (i; i <= n; i++) {
        var box = document.createElement("div");
        box.classList.add("myDiv");
        document.getElementById('box').appendChild(box);
        box.innerHTML = i;
        oldValue = document.getElementById("box").lastElementChild.innerHTML;
    }

}
