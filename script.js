var slideIndex = 3;
var prevButton = document.getElementById('prev');
var nextButton = document.getElementById('next');
var radioDots = document.getElementById('radioDots');


radioDots.onclick = function(e) {
    let target = e.target;
    if (target.tagName == 'INPUT') {
        window.slideIndex = target.value;
        showSlides(window.slideIndex);
    }
}

prevButton.addEventListener('click',function() {console.log(slideIndex);showSlides(window.slideIndex -= 1);},false);
nextButton.addEventListener('click',function() {console.log(slideIndex);showSlides(window.slideIndex += 1);},false);

showSlides(slideIndex);

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName('item');
    var radioDots = document.getElementsByName('dots');
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for(i=0;i<slides.length;i++) {
        slides[i].className = 'item item-hide';
        radioDots[i].attributes = '';
    }
    slides[slideIndex - 1].className = 'item';
    radioDots[slideIndex - 1].checked = true;
}