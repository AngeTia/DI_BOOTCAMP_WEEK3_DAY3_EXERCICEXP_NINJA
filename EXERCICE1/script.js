let text = ["", ".", "..", "..."];
let counter = 0;
let elem = document.getElementById("changeText");
setInterval(change, 300);
function change() {
    elem.innerHTML = text[counter];
    counter++;
    if(counter >= text.length) { 
        counter = 0; 
    }
}