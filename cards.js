let cards = document.getElementsByClassName("card");

function hoverOver(event) {
    let o = event.target.getElementsByClassName("overlay")[0];
    o.style.zIndex = 10;
    let a = event.target.getElementsByTagName("a")[0];
    a.style.visibility = "visible";
    a.style.zIndex = 20;
}

function hoverOff(event) {
    let o = event.target.getElementsByClassName("overlay")[0];
    o.style.zIndex = -10;
    let a = event.target.getElementsByTagName("a")[0];
    a.style.visibility = "hidden";
}

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("mouseover", hoverOver);
    cards[i].addEventListener("mouseleave", hoverOff);
}
