const slider = document.getElementById("slideRow");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

const scrollAmount =200;

nextBtn.addEventListener("click",()=>{
if(slider.scrollLeft+slider.clientWidth>=slider.scrollWidth){
  slider.scrollTo({
      left:0,
      behavior:"smooth"
    });
}
else {
    slider.scrollBy({
      left: scrollAmount,
      behavior: "smooth"
    });
  }
});

prevBtn.addEventListener("click",()=>{
  if (slider.scrollLeft === 0) {
    slider.scrollTo({
      left: slider.scrollWidth,
      behavior: "smooth"
    });
  } else {
    slider.scrollBy({
      left: -scrollAmount,
      behavior: "smooth"
    });
  }
});
