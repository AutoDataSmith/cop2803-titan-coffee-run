// creat array of banner images
const bannerImages = [
  "img/banner-1.jpg",
  "img/banner-2.jpg",
  "img/banner-3.jpg"
];

// This variable keeps track of which image is currently showing.
let currentImageIndex = 0;

// This function changes the banner image to the next one in the array.
function rotateBanner() {
    const banner = document.getElementById("bannerImage");

    currentImageIndex++;

    if (currentImageIndex >= bannerImages.length) {
        currentImageIndex = 0;
    }

    banner.src = bannerImages[currentImageIndex];
}

// Change the banner image every 3 seconds.
setInterval(rotateBanner, 3000);