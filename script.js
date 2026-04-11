const lyfus = document.getElementById("lyfus");
const sounddesign = document.getElementById("sounddesign");

const fonts = [
    "serif",
    "sans-serif",
    "monospace",
    "Georgia",
    "Garamond",
    "Times New Roman",
    "Helvetica",
    "Arial",
    "Courier New",
    "Verdana",
    "Trebuchet MS",
    "Palatino",
    "Lucida Sans"
];

function randomFont() {
    const pick = fonts[Math.floor(Math.random() * fonts.length)];
    lyfus.style.fontFamily = pick;
    sounddesign.style.fontFamily = pick;
}

window.addEventListener("wheel", randomFont);
window.addEventListener("touchmove", randomFont);
