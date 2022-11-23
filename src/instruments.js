const instrumentSpans = [...$(".instrument-span")];

hoveredInstruments = {

}

instrumentSpans.forEach(instrument => instrument.addEventListener("mouseover", (event) => {hoveredInstruments[event.target] = true}))
instrumentSpans.forEach(instrument => instrument.addEventListener("mouseout", (event) => {hoveredInstruments[event.target] = false}))

makeMusicNotes()

function makeMusicNotes(){

    // console.log(hoveredInstruments);

    setTimeout(makeMusicNotes, 100);
}
