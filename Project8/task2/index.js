const images = 
[
    "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/414612/pexels-photo-414612.jpeg?cs=srgb&dl=pexels-souvenirpixels-414612.jpg&fm=jpg",
   "https://images.pexels.com/photos/45853/grey-crowned-crane-bird-crane-animal-45853.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/462162/pexels-photo-462162.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/206648/pexels-photo-206648.jpeg?auto=compress&cs=tinysrgb&w=600",
   "https://images.pexels.com/photos/1887624/pexels-photo-1887624.jpeg?auto=compress&cs=tinysrgb&w=600"
];

let index = 0;
const sliderimage = document.getElementById("sliderImages");

function showImage()
{
  sliderimage.src = images[index];
}

showImage();

setInterval(() => {
  index = (index + 1) % images.length;
  showImage();
}, 1500);