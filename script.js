// language switch
// function switchLanguage(lang) {
//     var baseUrl = window.location.href.replace(/\/[^\/]*\/?$/, ''); // get the base URL
//     var url;
//     if (lang === 'en') {
//       url = baseUrl + 'WahFuCoC' + '/en/index.html';
//     } else {
//       url = baseUrl + 'WahFuCoC' + '/index.html';
//     }
//     window.location.href = url; // redirect to the respective folder's index.html
//   }

// lang switch 2.0
// get the base URL
var baseUrl = window.location.href.replace(/\/[^\/]*\/?$/, '') + '/WahFuCoC';

// function to switch language
function switchLanguage(lang) {
  // redirect to the corresponding language folder
  window.location.href = baseUrl + '/' + lang + '/index.html';
}

// language switch event handler
$('.lang').on('click', function() {
  var selectedLanguage = $(this).hasClass('en') ? 'en' : 'zh';
  switchLanguage(selectedLanguage);
});

// strip ".html" (or "index.html" for index page) from URL
var currentUrl = window.location.href;
var cleanUrl = currentUrl.replace('index.html', '').replace('.html', '');
window.history.replaceState({}, document.title, cleanUrl);

  // usage
  $(document).ready(function() {
    $('.lang').on('click', function() {
      var selectedLanguage = $(this).hasClass('en') ? 'en' : 'zh';
      switchLanguage(selectedLanguage);
    });
  });

// menu toggle

const menu_toggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');

menu_toggle.addEventListener('click', () => {
    menu_toggle.classList.toggle('is-active');
    sidebar.classList.toggle('is-active');
})

// image slider 

// access the images
let slideImages = document.querySelectorAll('.slide');

// access the next/prev buttons
let next = document.querySelector('.next');
let prev = document.querySelector('.prev');

// access the indicators
let dots = document.querySelectorAll('.dot');

var counter = 0;

// next image
next.addEventListener('click', slideNext);
function slideNext(){
    slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
    if(counter >= slideImages.length - 1){
        counter = 0;
    }
    else{
        counter++;
    } 
    slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    indicators();
}

// prev image
prev.addEventListener('click', slidePrev);
function slidePrev(){
    slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
    if(counter == 0){
        counter = slideImages.length - 1;
    }
    else{
        counter--;
    }
    slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    indicators();
}

// auto sliding
function autoSliding(){
    deletInterval = setInterval(timer, 5000);
    function timer(){
        slideNext();
        indicators();
    }
}
autoSliding();

// stop auto sliding when mouse is over
const container = document.querySelector('.slide-container');
container.addEventListener('mouseover', function(){
    clearInterval(deletInterval);
});

// resume sliding when mouse is away
container.addEventListener('mouseout', autoSliding);

// add and remove active class from the indicators
function indicators(){
    for(i = 0; i < dots.length; i++){
        dots[i].className = dots[i].className.replace(' active', '');
    }
    dots[counter].className += ' active';
}

// add click event to indicator
function switchImage(currentImage){
    currentImage.classList.add('active');
    var imageId = currentImage.getAttribute('attr');
    if (imageId > counter){
        slideImages[counter].style.animation = 'next1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'next2 0.5s ease-in forwards';
    }
    else if(imageId == counter){
        return;
    }
    else{
        slideImages[counter].style.animation = 'prev1 0.5s ease-in forwards';
        counter = imageId;
        slideImages[counter].style.animation = 'prev2 0.5s ease-in forwards';
    }
    indicators();
}