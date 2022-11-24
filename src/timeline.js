const timelineObjects = [...$(".timeline-item")]
const timelineObjectsVisiblePositions = timelineObjects.map(element => {
    let left = window.getComputedStyle(element).left;
    left = left.slice(0, left.length-2);
    return {
    left: `${Math.round(left / window.innerWidth * 100)}%`,
    element: element
}})
timelineObjects.forEach(element => element.style.left = "-100vw");

const timelineSVGs = [...$(".timeline-item svg")]
timelineSVGs.forEach(svg => {
    svg.children[0].style.width = window.getComputedStyle(svg).width;
})
window.addEventListener("resize", () => {
    timelineSVGs.forEach(svg => {
        svg.children[0].style.width = window.getComputedStyle(svg).width;
    })
})

manageSwipeInOut();
function manageSwipeInOut(){

    // Check if an object is at the window height - 20px
    // Swipe it in
    timelineObjectsVisiblePositions.forEach(obj => {
        const boundingRect = obj.element.getBoundingClientRect();
        if(boundingRect.y < window.innerHeight - 75)
            obj.element.style.left = `calc(${obj.left})`;
        else if (boundingRect.y < 0 || boundingRect.y > window.innerHeight-75)
            obj.element.style.left = "-100vw";
    })

    setTimeout(manageSwipeInOut, 100);
}

