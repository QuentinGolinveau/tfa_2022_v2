import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".mockup", 
    { opacity: 0, y: -100},
    {duration: 0.7, y: 0, opacity:1}
);
gsap.fromTo(".slogan--service", 
    { opacity: 0, x: -100},
    {duration: 0.7, x: 0, opacity:1}
);
gsap.fromTo(".slogan--raquette", 
    { opacity: 0, x: 100},
    {duration: 0.7, x: 0, opacity:1}
);

gsap.fromTo(".montage",
    {x: -500, opacity:0},
    {duration: 1, 
    x: 0, 
    opacity:1, 
    scrollTrigger:{
        trigger:".section--choix",
        start:"top bottom",
        toggleActions: "restart none resume none"
    }
});

let ajd = new Date();
let year = ajd.getFullYear();
let copyright = document.querySelector(".liste__el--copyright a");
copyright.innerHTML = "©"+ year +" QuentinGolinveau";

var nextButton = document.querySelector(".next");
var prevButton = document.querySelector(".prev");
var textSlide = document.querySelector(".text");
var slidesStop = document.querySelectorAll(".slideshow-container a");
var compteurSlider=0;

var infos = ["Pour 57% des interrogés, le prix de la raquette compte pour beaucoup dans leur&nbsp;choix.","Pour seulement 46% des interrogés, la compatibilité avec leur jeu compte dans leur&nbsp;choix.","Seuls 19% des interrogés prennent en compte leur niveau lors de leur&nbsp;choix.","Seuls 32% des interrogés demandent des conseils à des spécialistes pour faire leur&nbsp;choix."]

nextButton.addEventListener(("click"),(e)=>{
    if(compteurSlider==3){
        compteurSlider=0;
    }else{
        compteurSlider = compteurSlider + 1;
    }
    insert();
});

prevButton.addEventListener(("click"),(e)=>{
    if(compteurSlider==0){
        compteurSlider=3;
    }else{
        compteurSlider = compteurSlider - 1;
    }
    insert();
});

function stop(){
    for(let i=0; i<slidesStop.length; i++){
        slidesStop[i].classList.toggle("stop");
    }
}

function insert(){
    textSlide.classList.add("fade");
    stop();
    setTimeout(() => { 
        stop();
        textSlide.classList.remove("fade");
    }, 1000);
    textSlide.innerHTML=infos[compteurSlider];
}