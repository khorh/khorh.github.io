// Atom

// Start the animation of the electrons
document.querySelector('[data-event="play"]').addEventListener('click', () => {
    document.getElementById('electronOneAnimation').setAttribute('class',' electron electronAnimation');
        document.getElementById('electronTwoAnimation').setAttribute('class',' electron electronAnimation');
});

// Reset the animation of the electrons to its original position
document.getElementById('reset').addEventListener('click', () => {
    document.getElementById('electronOneAnimation').setAttribute('class',' electron');
    document.getElementById('electronTwoAnimation').setAttribute('class',' electron');
});


// Clock

// Determine the current date and time
const dateTime = new Date();

// Create the date and output this on the front-end
document.getElementById('dateToday').innerHTML = `<h3 class="font-color-secondary">${dateTime.getDay()} - ${dateTime.getMonth()} - ${dateTime.getFullYear()}</h3>`;