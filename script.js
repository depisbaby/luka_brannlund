function setRandomBackground() {
    const images = [
        "images/background1.png",
        "images/background2.png"
        
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    const randomImage = images[randomIndex];

    document.body.style.backgroundImage = `url('${randomImage}')`;
    document.body.style.backgroundSize = "cover";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundAttachment = "fixed";
}

// Run the function on page load
window.onload = setRandomBackground;