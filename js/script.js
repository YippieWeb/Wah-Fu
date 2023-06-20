// language switch function
document.addEventListener('DOMContentLoaded', function() {
    const enLangSpan = document.querySelector('.lang.en');
    const zhLangSpan = document.querySelector('.lang.zh');
  
    enLangSpan.addEventListener('click', function() {
    //   window.location.href = 'http://127.0.0.1:5500/en/';
      window.location.href = 'https://yippieweb.github.io/WahFuCoC/en/';
    });
  
    zhLangSpan.addEventListener('click', function() {
      const currentURL = window.location.href;
      const baseUrl = currentURL.replace('/en/', '/');
      window.location.href = baseUrl;
    });
  });

// strip ".html" (or "index.html" for index page) from URL
var currentUrl = window.location.href;
var cleanUrl = currentUrl.replace('index.html', '').replace('.html', '');
window.history.replaceState({}, document.title, cleanUrl);

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

// accordion headers
var headers = ["H1","H2","H3","H4","H5","H6"];

$(".accordion").click(function(e) {
  var target = e.target,
      name = target.nodeName.toUpperCase();
  
  if($.inArray(name,headers) > -1) {
    var subItem = $(target).next();
    
    //slideUp all elements (except target) at current depth or greater
    var depth = $(subItem).parents().length;
    var allAtDepth = $(".accordion p, .accordion div").filter(function() {
      if($(this).parents().length >= depth && this !== subItem.get(0)) {
        return true; 
      }
    });
    $(allAtDepth).slideUp("fast");
    
    //slideToggle target content and adjust bottom border if necessary
    subItem.slideToggle("fast",function() {
        $(".accordion :visible:last").css("border-radius","0 0 10px 10px");
    });
    $(target).css({"border-bottom-right-radius":"0", "border-bottom-left-radius":"0"});
  }
});