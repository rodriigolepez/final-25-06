// Define time and current_group
window.slide_time = 5000;
window.current_group = "";

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n, auto = 0) {
  var pause = document.getElementById("pause");
  if(pause.classList.contains("active") && auto){
    window.timer = window.setTimeout(plusSlides, window.slide_time, 1, 1);
    return;
  }
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function goToGroup(self){
  window.clearInterval(window.timer);
  var pause = document.getElementById("pause");
  if(pause.classList.contains("active")){
    pause.click();
  }
  var group = self.getAttribute("group");
  if(group == window.current_group){
    self.className = self.className.replace(" active", "");
    window.current_group = "";
  }else{
    var buttons = document.getElementsByClassName("imgbutton");
    for (i = 0; i < buttons.length; i++) {
      buttons[i].className = buttons[i].className.replace(" active", "");
    }
    self.className += " active";
    window.current_group = group;
  }
  currentSlide(1);
}

// Start Timer
window.timer = window.setTimeout(plusSlides, window.slide_time, 1, 1);

// Show Slides Function
function showSlides(n) {
  window.clearInterval(window.timer);
  var i;
  var slides = document.getElementsByClassName("Slides");
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  if(window.current_group != ""){
    slides = [...slides]
    slides = slides.filter(function(value, index, arr){ return value.getAttribute("group") == window.current_group;});
  }
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  slides[slideIndex-1].style.display = "block";
  window.timer = window.setTimeout(plusSlides, window.slide_time, 1, 1);
}
