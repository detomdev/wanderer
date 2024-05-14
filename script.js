"use strict";

//Carousel functionality
//Bring in DOM elements
const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevBtn = document.querySelector(".carousel-control-prev");
const nextBtn = document.querySelector(".carousel-control-next");
const indicators = document.querySelectorAll(".carousel-indicators button");

//Set a counter
let currentIndex = 0;

//showItem(index) function is called, where index is the corresponding index of the image to be displayed (0, 1, or 2 in this example).
function showItem(index) {
	carouselItems.forEach((item, i) => {
		if (i === index) {
			item.classList.add("active");
		} else {
			item.classList.remove("active");
		}
	});

	//This allows the user to directly navigate to a specific image by clicking on the corresponding indicator.
	indicators.forEach((indicator, i) => {
		if (i === index) {
			indicator.classList.add("active");
		} else {
			indicator.classList.remove("active");
		}
	});
	carouselInner.style.transform = `translateX(-${index * 100}%)`;
}

//When the user clicks on the left button, the showItem() function is called, which decrements the current index and displays the previous image.
prevBtn.addEventListener("click", () => {
	currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
	showItem(currentIndex);
});

//When the user clicks on the right button, the showItem() function is called, which increments the current index and displays the next image.
nextBtn.addEventListener("click", () => {
	currentIndex = (currentIndex + 1) % carouselItems.length;
	showItem(currentIndex);
});

indicators.forEach((indicator, index) => {
	indicator.addEventListener("click", () => {
		currentIndex = index;
		showItem(currentIndex);
	});
});

showItem(currentIndex);
