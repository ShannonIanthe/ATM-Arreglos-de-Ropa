
let i = 0;

let backgroundImage = [
    "url('./images/darksuit.jpeg')",
    "url('./images/measuringtape.jpeg')",
    "url(''./images/seastress.jpeg')"
];
function change() {
    document.main.style.backgroundImage = backgroundImage[i];
    i++;
    if (i > backgroundImage.length) {
        i = 0;
    }
    window.setTimeout("change()", 1000);
}
change();