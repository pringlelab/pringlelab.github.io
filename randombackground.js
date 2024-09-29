document.addEventListener("DOMContentLoaded", function () {

    // Array of background images with correct paths
    const images = [
        'https://pringlelab.github.io/backgrounds/boys-in-bristol-photography-Lo_KNBSCYUQ-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/clyde-gravenberch-uj253l7xPFU-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/diana-parkhouse-5prKIX4JLO0-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/lance-reis-tJHKM92J_yM-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/rosie-pritchard-epwBnTgYMAc-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/samuel-pWeA162MJ9Q-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/shiho-azuma-jbz9h7pWxkg-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/timothy-dykes-DyraknirZ84-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/timothy-dykes-zpuVzW5rv4Q-unsplash.jpg',
        'https://pringlelab.github.io/backgrounds/wyxina-tresse-D74M77fOzyg-unsplash.jpg'
    ];

    // Function to get a random image
    function getRandomImage() {
        const randomIndex = Math.floor(Math.random() * images.length);
        return images[randomIndex];
    }

    // Apply random background image to the body
    const body = document.body;
    const randomImage = getRandomImage();

    body.style.backgroundImage = `url(${randomImage})`;
    body.style.backgroundSize = 'cover';
    body.style.backgroundPosition = 'center';
    body.style.backgroundRepeat = 'no-repeat';
});