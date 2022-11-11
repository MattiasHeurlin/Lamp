/**
 * Start tänd
 * Vid knapp tryck
 * Byt tema, och lamp bild
 * Byt text i knapp
 */

let lampOn = true;
const background = document.querySelector("body")
const btn = document.querySelector("button");
const lampPic = document.querySelector("img");
btn.addEventListener("click", themetoggle);

function themetoggle() {
    if (lampOn) {
        background.style.backgroundColor = "black";
        lampPic.src = "lamp-off.png";
        lampOn = false;
        btn.innerHTML = "Turn On";
        lampPic.classList.remove("glow-effekt")
        return;
    }
    lampOn = true;
    background.style.backgroundColor = "rgb(47, 45, 45)";
    lampPic.src = "lamp-on.png";
    btn.innerHTML = "Turn Off";
    lampPic.classList.add("glow-effekt")
    return;
}