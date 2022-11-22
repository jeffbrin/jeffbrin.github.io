const projectLinks = $(".project-link");

let nextOpacity = 0;

setColor();

function setColor(){
    [...projectLinks].forEach(element => {
        element.style.color = "rgba(255, 255, 255, " + nextOpacity + ")";
    });
    nextOpacity = nextOpacity == 0 ? 1 : 0;
    setTimeout(setColor, 750);
}
