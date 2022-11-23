const hamburgerButton = $("#pancake-menu-button");
let navShown = false;
const nav = $("nav")[0]
const entryDiv = $("#entry-div")[0]
const projectsButton = $("#entry-div a")[0]
const introSection = $("#intro-section")[0]

const navItems = [...$("nav ul li a")];
navItems.forEach(link => {
    link.addEventListener('click', toggleNav)
});

hamburgerButton[0].addEventListener('click', toggleNav);
let cancelBlinkOutAnimation = false;
let cancelBlinkInAnimation = false;

function toggleNav(){
    if(navShown){
        // Transition smoothly to the top, then after the transition very quickly blink very far away
        cancelBlinkOutAnimation = false;
        cancelBlinkInAnimation = true;
        nav.style.transition = "top 1s ease-in";
        nav.style.top = "-100vh";
        
        setTimeout(() => {
            if (cancelBlinkOutAnimation)
                return;
            nav.style.transition = "top 1ms linear";
            nav.style.top = "-1000vh";
        }, 1000);
        
        projectsButton.style.top = "50vh";
    }
    else{
        // Blink right next to the screen then smoothly transition
        cancelBlinkOutAnimation = true;
        cancelBlinkInAnimation = false;
        nav.style.transition = "top 1ms linear";
        nav.style.top = "-100vh";

        setTimeout(() => {
            if (cancelBlinkInAnimation)
                return;
            nav.style.transition = "top 1s ease-out";
            nav.style.top = 0;
        }, 10);
        
        projectsButton.style.top = "-100vh";

    }

    
    changeHamburgerMenuAppearance(navShown);
    navShown = !navShown;
}

function changeHamburgerMenuAppearance(toX){
    const hamburgerPatties = $(".css-menu-bar")
    if(toX){
        hamburgerPatties[0].style.transform = 'rotate(0)';
        hamburgerPatties[2].style.transform = 'rotate(0)';
        hamburgerPatties[0].style.top = "0px";
        hamburgerPatties[2].style.top = "0px";

        hamburgerPatties[1].style.background = "white";

    }
    else{
        hamburgerPatties[0].style.transform = 'rotate(45deg)';
        hamburgerPatties[2].style.transform = 'rotate(-45deg)';
        hamburgerPatties[0].style.top = "7px";
        hamburgerPatties[2].style.top = "-13px";
        hamburgerPatties[1].style.background = "transparent"
    }
}