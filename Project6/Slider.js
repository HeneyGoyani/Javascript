const images = [
    "https://picsum.photos/id/1018/600/400",
    "https://c4.wallpaperflare.com/wallpaper/146/888/19/himalayas-kashmir-mountains-winter-wallpaper-preview.jpg",
    "https://images.pexels.com/photos/1955134/pexels-photo-1955134.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    "https://s1.1zoom.me/b5050/59/Scenery_Sunrises_and_501479_1920x1080.jpg",
    "https://img.goodfon.com/wallpaper/big/4/43/zermatt-valley-switzerland.webp",
    
];

let currentIndex = 0;

function updateImage() {
    const sliderImage = document.getElementById("slider-image");
    sliderImage.src = images[currentIndex];
}

function prevImage() {
    currentIndex = (currentIndex === 0) ? images.length - 1 : currentIndex - 1;
    updateImage();
}

function nextImage() {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

updateImage();
