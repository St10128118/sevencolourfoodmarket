// Lightbox functionality
let currentImageIndex = 0;
const images = [
    { src: 'images/p7.png', caption: 'Hair style Image 1' },
    { src: 'images/p13.png', caption: 'Nature Image 2' },
    { src: 'images/p12.png', caption: 'Nature Image 3' },
    { src: 'images/p11.png', caption: 'City Image 1' },
    { src: 'images/p14.png', caption: 'City Image 2' },
    { src: 'images/p15.png', caption: 'Animal Image 1' },
    { src: 'images/p16.png', caption: 'Animal Image 2' },
    { src: 'images/p2.png', caption: 'People Image 1' }
];

function openLightbox(src, caption) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    // Find the index of the clicked image
    currentImageIndex = images.findIndex(img => img.src === src);

    lightboxImg.src = src;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

function changeImage(direction) {
    currentImageIndex += direction;

    // Wrap around if at beginning or end
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;
    } else if (currentImageIndex >= images.length) {
        currentImageIndex = 0;
    }

    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');

    lightboxImg.src = images[currentImageIndex].src;
    lightboxCaption.textContent = images[currentImageIndex].caption;
}

// Close lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', (e) => {
    if (e.target === document.getElementById('lightbox')) {
        closeLightbox();
    }
});