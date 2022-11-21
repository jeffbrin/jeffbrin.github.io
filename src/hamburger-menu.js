
let angle = 0;
const hamburgerButton = $("#pancake-menu-button");
const firstChildStyle = window.getComputedStyle(hamburgerButton.children()[0]);
hamburgerButton.children()[0].style.transform = "rotate(90deg) translateY(-100%);";
console.log(hamburgerButton.children()[0].style)