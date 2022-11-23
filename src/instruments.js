const instrumentSpans = [...$(".instrument-span")];
const hoveredInstruments = {};
instrumentSpans.forEach(instrument => hoveredInstruments[instrument.innerText] = false);
let musicNotes = [];

// NOTE: Using a workaround where the fisrt two characters are being checked since the piano 
// notes are added to the innerText
// The first two keys are the instrument emoji.
instrumentSpans.forEach(instrument => instrument.addEventListener("mouseover", (event) => {
    hoveredInstruments[event.currentTarget.innerText[0] + event.currentTarget.innerText[1]] = true;
}))
instrumentSpans.forEach(instrument => instrument.addEventListener("mouseout", (event) => {
    hoveredInstruments[event.currentTarget.innerText[0] + event.currentTarget.innerText[1]] = false;
}))

manageMusicNotes()

// Manages the creation and movement of music notes
function manageMusicNotes(){

    // Spawn a music note on an instrument if it's being hovered over.
    for(let i = 0; i < instrumentSpans.length; i++){
        if (hoveredInstruments[instrumentSpans[i].innerText[0] + instrumentSpans[i].innerText[1]]){
            // Random Chance
            if(Math.random() > 0.93)
                spawnMusicNote(instrumentSpans[i]);
        }
    }

    const delay = 5;
    musicNotes.forEach(note => note.update(delay));
    musicNotes = musicNotes.filter(note => !note.cleanUp())
    setTimeout(manageMusicNotes, delay);
}

// Spawns the music note
function spawnMusicNote(parent){
    const span = document.createElement("span");
    parent.appendChild(span);
    musicNotes.push(new MusicNote(span, parent));
}


class MusicNote{

    static GRAVITY = 100;
    static TERMINAL_VELOCITY = 20;
    static MAX_STARTING_Y_VELOCITY = 100;
    static MIN_STARTING_Y_VELOCITY = 0;
    static LIFESPAN = 2;

    // Creates the music note and sets the top and left to 50%
    constructor(element, parent){
        this.parent = parent;
        element.innerText = "🎶";
        element.className = "music-note";
        element.style.fontSize = "2rem";
        this.element = element;
        this.top = 50;
        this.left = 50;
        this.yVelocity = -Math.max(Math.random() * MusicNote.MAX_STARTING_Y_VELOCITY, MusicNote.MIN_STARTING_Y_VELOCITY)
        this.xVelocity = Math.random() * MusicNote.MAX_STARTING_Y_VELOCITY * (Math.random() > 0.5 ? 1 : -1);
        this.age = 0;
    }

    // Updates the note, slowly reducing the opacity until it gets destroyed
    update(dt){
        dt = dt / 1000;
        this.yVelocity = Math.min(MusicNote.TERMINAL_VELOCITY, this.yVelocity + MusicNote.GRAVITY * dt);
        this.top += this.yVelocity * dt;
        this.left += this.xVelocity * dt;
        this.element.style.top = `min(${this.top}%, 85%)`
        this.element.style.left = `max(0%, min(${this.left}%, 85%))`
        this.element.style.opacity = `${1 - (this.age / MusicNote.LIFESPAN)}`
        this.age += dt;
    }

    cleanUp(){
        const destroy = MusicNote.LIFESPAN - this.age < 0;
        if(destroy)
            this.parent.removeChild(this.element);
        return destroy;
    }
}