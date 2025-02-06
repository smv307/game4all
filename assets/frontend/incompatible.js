  //if on mobile... show error screen

function isMobile() {
    return /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

if (isMobile()) { // after other pages are added, change to if mobile and on game page... add option to redirect back
    window.location.href = "incompatible.html";
}