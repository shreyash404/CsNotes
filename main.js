const menuBtn = document.querySelector(".menu-btn");
const menuItems = document.querySelector(".menu-items");
const expandBtn = document.querySelectorAll(".expand-btn");

// humburger toggle
menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("open");
  menuItems.classList.toggle("open");
});

// mobile menu expand
expandBtn.forEach((btn) => {
  btn.addEventListener("click", () => {
    btn.classList.toggle("open");
  });
});

var slides = document.querySelectorAll('.slide');
var currentSlide = 0;
var slideInterval = setInterval(nextSlide,3000);

function nextSlide() {
slides[currentSlide].className = 'slide';
currentSlide = (currentSlide+1)%slides.length;
slides[currentSlide].className = 'slide active';
}

const homepageDivs = document.querySelectorAll('.homepage');

homepageDivs.forEach(div => {
  div.addEventListener('click', () => {
    div.classList.toggle('folded');
  });
});


// search//
const form = document.getElementById('search-form');
const input = document.getElementById('search-input');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = input.value;

  // Redirect to the search results page with the query in the URL
  window.location.href = `/index-search-results.html?q=${query}`;

});

