// variable to store the last clicked div
let lastClickedDiv;

// Show the buy button, change the background and update the link when a screening time is clicked
function bookTicket(event) {
    let targetElement = event.target;
    if (targetElement.tagName === 'P') {
        targetElement = targetElement.parentElement;
    }
    const screeningId = targetElement.dataset.id;
    document.getElementById('bookLink').href = "book_ticket/" + screeningId;
    document.getElementById('book').style.visibility = 'visible';

    // If there's a previously clicked div, reset its background
    if (lastClickedDiv) {
        lastClickedDiv.style.background = lastClickedDiv.dataset.originalBackground;
    }

    // Store the original background of the selected div and change the background
    targetElement.dataset.originalBackground = targetElement.style.background;
    targetElement.style.background = 'linear-gradient(135deg, #B6116B, #3B1578) padding-box,\n' +
        'linear-gradient(135deg, #FF53C0, rgba(0, 0, 0, 0)) border-box';

    // Store the currently clicked div
    lastClickedDiv = targetElement;

    event.stopPropagation();
}

// Hide the buy button and change the background back when anywhere else on the page is clicked
document.addEventListener('click', function (event) {
    document.getElementById('book').style.visibility = 'hidden';

    // If there's a previously clicked div, reset its background
    if (lastClickedDiv) {
        lastClickedDiv.style.background = lastClickedDiv.dataset.originalBackground;
    }
});
