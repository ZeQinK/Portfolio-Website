let slideIndex = 1;
showSlides(slideIndex);


//Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}


// Thumbnail image controls



function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("myslides");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block"
}

let slideIndex23 = 1; 
showSlides23(slideIndex23)

function plusSlides23(x) {
  showSlides23(slideIndex23 += x)
}

function showSlides23(x) {
  let j; 
  let slides23 = document.getElementsByClassName("myslides23");
  if(x > slides23.length) {slideIndex23 = 1}
  if(x < 1) {slideIndex23 = slides23.length} 
  for (j=0; j < slides23.length; j++) {
    slides23[j].style.display = "none";
  }
  slides23[slideIndex23-1].style.display = "block"
}



var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

