const hourHandColour1Grp = document.getElementById("hour-hand-colour-1");
const hourHandColour2Grp = document.getElementById("hour-hand-colour-2");
const minuteHandcolour1Grp = document.getElementById("minute-hand-colour-1");
const minuteHandcolour2Grp = document.getElementById("minute-hand-colour-2");

let HourHand = document.getElementById("hour-hand");
let MinuteHand = document.getElementById("minute-hand");


/* Colour Definitions */
const colours = [
    "transparent",
    "black",
    "white",
    "#32a8a2",
    "#9432a8",
    "#4ea832",
    "#a83250",
    "#cfa12d",
    "#cf2d7b",
]

let hourHandColour1 = colours[1];
let hourHandColour2 = colours[0];
let hourHandExtent = 100;
let minuteHandColour1 = colours[1];
let minuteHandColour2 = colours[0];
let minuteHandExtent = 5;

const handColourGrps = [
    hourHandColour1Grp, 
    hourHandColour2Grp, 
    minuteHandcolour1Grp, 
    minuteHandcolour2Grp
];

const controlsButton = document.getElementById("controls-button-container");
controlsButton.addEventListener("click", toggleControls);

function toggleControls() {
    console.log("toggle controls");
    const controls = document.getElementById("controls");
    controls.classList.toggle("hidden");
}

/* set up colour buttons */
handColourGrps.forEach(hand => {
    colours.forEach(colour => {
        const id = `${hand.id}-${colour}`
        console.log(hand.id);
        hand.innerHTML += `
            <button class="colour-button" id="${id}" onclick="setHandColours('${hand.id}', '${colour}', '${id}')">${colour}</button>    
        `

        document.getElementById(id).style.backgroundColor = colour;
    })
});


/* change colours by clicking on buttons */
function setHandColours (hand, colour, btnId) {
    switch (hand) {
        case "hour-hand-colour-1":
            hourHandColour1 = colour;
            break;
        case "hour-hand-colour-2":
            hourHandColour2 = colour;
            break;
        case "minute-hand-colour-1":
            minuteHandColour1 = colour;
            break;
        case "minute-hand-colour-2":
            minuteHandColour2 = colour;
            break;
    }

    // Remove 'btn-selected' class from all buttons
    document.querySelectorAll('.colour-button').forEach(button => {
        button.classList.remove('btn-selected');
    });

    const btn = document.getElementById(btnId);
    btn.classList.add("btn-selected");


    updateClockGradients();
}

/* update clock gradients when colours change */
function updateClockGradients () {

    hourHand.style.backgroundImage = `conic-gradient(
        ${hourHandColour1},
        ${hourHandColour2} ${hourHandExtent}%,
        ${hourHandColour2}
    )
    `
    minuteHand.style.backgroundImage = `conic-gradient(
        ${minuteHandColour1},
        ${minuteHandColour2} ${minuteHandExtent}%,
        ${minuteHandColour2}
    )
    `
}

const minuteHandExtentSlider = document.getElementById("minute-extent-slider");   
const hourHandExtentSlider = document.getElementById("hour-extent-slider");

minuteHandExtentSlider.addEventListener("input", updateExtents);
hourHandExtentSlider.addEventListener("input", updateExtents);

function updateExtents () {
    hourHandExtent = hourHandExtentSlider.value;
    minuteHandExtent = minuteHandExtentSlider.value;

    updateClockGradients();
}

updateClockGradients ()