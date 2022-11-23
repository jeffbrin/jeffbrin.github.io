navItems.forEach(
    element => 
    {
        element.addEventListener("click", navigateToSection)
    });

const projectsSection = $("#projects-section")[0];
const aboutSection = $("#about-section")[0];
const skillsSection = $("#skills-section")[0];
const timelineSection = $("#timeline-section")[0];

// aboutSection.style.left = "-105vw";
skillsSection.style.left = "-200vw";
timelineSection.style.left = "-200vw";
projectsSection.style.left = "-200vw";
let currentSection = aboutSection;
function navigateToSection(event){
    let newSection;
    switch(event.target.innerText){
        case "Projects":
            newSection = projectsSection;
            break;
        case "About":
            newSection = aboutSection;
            break;
        case "Skills":
            newSection = skillsSection;
            break;
        case "Timeline":
            newSection = timelineSection;
            break;
        default:
            return
    }

    currentSection.style.transition = "left 1s ease-in"
    currentSection.style.left = "-200vw";
    newSection.style.transition = "left 0.5s ease-out"
    newSection.style.left = "0";
    currentSection = newSection;
}