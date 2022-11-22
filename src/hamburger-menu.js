const hamburgerButton = $("#pancake-menu-button");
let navShown = false;
const nav = $("nav")[0]
hamburgerButton[0].addEventListener('click', e => {
    if(navShown){
        nav.style.top = "-110vh";
    }
    else{
        nav.style.top = 0;
    }

    
    changeHamburgerMenuAppearance(navShown);
    navShown = !navShown;
    
});

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