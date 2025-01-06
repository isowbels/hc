
// Popup handling script
function openPopup(type) {
    // Close any currently open popup
    closePopup();

    // Determine which popup to open
    const popup = type === 'login' ? document.getElementById('login-popup') : document.getElementById('signup-popup');
    popup.style.display = 'flex';
}

function closePopup() {
    document.getElementById('login-popup').style.display = 'none';
    document.getElementById('signup-popup').style.display = 'none';
}
