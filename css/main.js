// Define time and current_group
window.slide_time = 5000;
window.current_group = "";

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function goToGroup(self){
  window.clearInterval(window.timer);
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
window.timer = window.setTimeout(plusSlides, window.slide_time, 1);

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
  window.timer = window.setTimeout(plusSlides, window.slide_time, 1);
}


// Collapsible
var coll = document.getElementsByClassName("collapsible");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
      this.classList.toggle("cactive");
      var content = this.nextElementSibling;
      if (content.style.display === "block") {
            content.style.display = "none";
          } else {
                content.style.display = "block";
              }
    });
}
