let slideIndex = 0;
let i = 0;

function img_slideShow() {
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }    
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(img_slideShow, 3000); // Change image every 3 seconds
}

function link_color() {
  let links = document.getElementsByTagName("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function(event) {
      links[i].classList.add("clicked");
    });
  }
}

function main() {
  img_slideShow();
  link_color();
}

main();

