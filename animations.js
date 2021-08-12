// Atom

// Start the animation of the electrons
document.querySelector('[data-event="play"]').addEventListener('click', () => {
    document.getElementById('electronOneAnimation').setAttribute('class','atom__electron atom__electron--animation');
        document.getElementById('electronTwoAnimation').setAttribute('class','atom__electron atom__electron--animation');
});

// Reset the animation of the electrons to its original position
document.getElementById('resetAtom').addEventListener('click', () => {
    document.getElementById('electronOneAnimation').setAttribute('class','atom__electron');
    document.getElementById('electronTwoAnimation').setAttribute('class','atom__electron');
});


// Clock

// Determine the current date and time
const dateTime = new Date();

// Create the date and output this on the front-end
document.getElementById('dateToday').innerHTML = `<h5>${dateTime.toDateString()}</h5>`;