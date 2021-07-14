const container = document.querySelector('.images');
const images = document.querySelectorAll('.images img');
const prevBtn = document.querySelector('.prevButton');
const nextBtn = document.querySelector('.nextButton');
let counter = 1;
let size = images[0].clientWidth;
container.style.transform = 'translateX(' + (-size * counter) + 'px)';
nextBtn.addEventListener('click', () =>{
    if (counter >= images.length - 1) return;
    container.style.trasition = "transform 1.4s ease-in-out";
    counter++;
    container.style.transform = 'translateX(' + (-size * counter) + 'px)';
})
prevBtn.addEventListener('click', () =>{
    if (counter <= 0) return;
    container.style.trasition = "transform 1.4s ease-in-out";
    counter--;
    container.style.transform = 'translateX(' + (-size * counter) + 'px)';
})