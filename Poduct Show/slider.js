function slider(){

    const slides = document.querySelectorAll(".slide");
    
    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

    // current slide counter
let curSlide = 0;

// select next slide button
const nextSlide = document.querySelector(".btn-next");



// maximum number of slides
let maxSlide = slides.length - 1;

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check if current slide is the last and reset current slide
  if (curSlide === maxSlide) {
    curSlide = 0;
} else {
    curSlide++;
}

//   move slide by -100%
  slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    });
});

// select prev slide button
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality
prevSlide.addEventListener("click", function () {
  // check if current slide is the first and reset current slide to last
  if (curSlide === 0) {
    curSlide = maxSlide;
} else {
    curSlide--;
}

//   move slide by 100%
  slides.forEach((slide, indx) => {
      slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});

}
slider();


const element = document.getElementById("myBtn");
const element1 = document.getElementById("myBtn1");
const element2 = document.getElementById("myBtn2");
const element3 = document.getElementById("myBtn3");

element.addEventListener("click", myPink);
element1.addEventListener("click", myGreen);
element2.addEventListener("click", myBrown);
element3.addEventListener("click", myWhite);

function myGreen() {
    document.getElementById("myImg").src = "Green IceCream.png";
}

function myPink() {
    document.getElementById("myImg").src = "Pink IceCream.png";
}

function myBrown() {
    document.getElementById("myImg").src = "Brown IceCream.png";
}

function myWhite() {
    document.getElementById("myImg").src = "White IceCream.png";
}