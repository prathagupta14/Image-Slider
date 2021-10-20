const sliderImages = document.querySelector(".images");
let counter = 1;

function nextSlide() {
    sliderImages.style.transform = `translateX(${-285 * counter}px)`;
    console.log('hi');
    counter++;
    sliderImages.style.transition = 'transform 2s ease-in-out';

    if(counter === 3){
        counter = 0;
    }
}

setInterval(nextSlide, 2000);
