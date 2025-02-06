document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in, .slide-up, .zoom-in, .chapter');
    const galleryImages = document.querySelectorAll('.gallery-grid img');

    const checkVisibility = () => {
        // Animasi untuk umum
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });

        // Animasi untuk gallery
        galleryImages.forEach((image, index) => {
            const imageTop = image.getBoundingClientRect().top;
            const imageBottom = image.getBoundingClientRect().bottom;

            if (imageTop < window.innerHeight && imageBottom >= 0) {
                image.style.setProperty('--index', index);
                image.classList.add('visible');
            } else {
                image.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});

document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.fade-in');

    const checkVisibility = () => {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementBottom = element.getBoundingClientRect().bottom;

            if (elementTop < window.innerHeight && elementBottom >= 0) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible');
            }
        });
    };

    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility();
});