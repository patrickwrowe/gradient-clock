const hourHandColour1Grp = document.getElementById("hour-hand-colour-1");
const hourHandColour2Grp = document.getElementById("hour-hand-colour-2");
const minuteHandcolour1Grp = document.getElementById("minute-hand-colour-1");
const minuteHandcolour2Grp = document.getElementById("minute-hand-colour-2");

const HourHand = document.getElementById("hour-hand");
const MinuteHand = document.getElementById("minute-hand");

const colours = [
    "transparent",
    "black",
    "white",
    "#020a23",
    "#030a23",
    "#040a23",
    "#050a23",
    "#060a23",
    "#070a23",
]

const hourHandColour1 = colours[0];
const hourHandColour2 = colours[1];
const minuteHandColour1 = colours[0];
const minuteHandColour2 = colours[1];

const handColourGrps = [
    hourHandColour1Grp, 
    hourHandColour2Grp, 
    minuteHandcolour1Grp, 
    minuteHandcolour2Grp
];

buttons = [];

handColourGrps.forEach(hand => {
    colours.forEach(colour => {
        id = `${hand.id}-${colour}`
        console.log(hand.id);
        hand.innerHTML += `
            <button class="colour-button" id="${id}" onclick="setHandColours('${hand.id}', '${colour}')">${colour}</button>    
        `
    })
});


function setHandColours (hand, colour) {
    console.log("firing");
    console.log(hand);
    console.log(colour);
}

