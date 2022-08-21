import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

gsap.from(".balle", { 
    duration: 1.5, 
    ease: "bounce.out",
    x: -2500,
    scrollTrigger:{
        trigger:".section--marque",
        start:"center bottom",
    },
});

gsap.from(".balle--v2",{
    duration: 1, 
    ease: "bounce.out",
    y: -400,
    opacity:0,
    scrollTrigger:{
        trigger:".section--choix",
        start:"top top",
    },
});

gsap.from(".section--choix .fond--image", {
    opacity: 0.2,
    duration: 0.5,
    x: -500,
    scrollTrigger:{
        trigger:".section--choix",
        start:"center bottom",
    },
});

//Copyright

let ajd = new Date();
let year = ajd.getFullYear();
let copyright = document.querySelector(".liste__el--copyright a");
copyright.innerHTML = "©"+ year +" QuentinGolinveau";

//Slider
var slideIndex = 1;
showSlides(slideIndex);

let nextButton = document.querySelectorAll(".next");
let prevButton = document.querySelectorAll(".prev");

for (let i = 0; i < nextButton.length; i++) {
    if(prevButton){
        if (i==0){
            prevButton[i].addEventListener('click', () => {
                plusSlides(-1, "slides1");
             });
        }else if (i==1){
            prevButton[i].addEventListener('click', () => {
                plusSlides(-1, "slides2");
             });
        }else if(i==2){
            prevButton[i].addEventListener('click', () => {
                plusSlides(-1, "slides3");
             });
        }else if(i==3){
            prevButton[i].addEventListener('click', () => {
                plusSlides(-1, "slides4");
             });
        }else if(i==4){
            prevButton[i].addEventListener('click', () => {
                plusSlides(-1, "slides5");
             });
        }
    }
    if(nextButton){
        if (i==0){
            nextButton[i].addEventListener('click', () => {
                plusSlides(1, "slides1");
            });
        }else if (i==1){
            nextButton[i].addEventListener('click', () => {
                plusSlides(1, "slides2");
            });
        }else if (i==2){
            nextButton[i].addEventListener('click', () => {
                plusSlides(1, "slides3");
            });
        }else if (i==3){
            nextButton[i].addEventListener('click', () => {
                plusSlides(1, "slides4");
            });
        }else if(i==4){
            nextButton[i].addEventListener('click', () => {
                plusSlides(1, "slides5");
             });
        }
    }
}

function plusSlides(n, etatSlides) {
    showSlides(slideIndex += n, etatSlides);
}

function showSlides(n, etatSlides) {
    var i;
    var slides = document.querySelectorAll(".mySlides");
    var slidesDeux = document.querySelectorAll(".mySlidesDeux");
    var slidesTrois = document.querySelectorAll(".mySlidesTrois");
    var slidesQuatre = document.querySelectorAll(".mySlidesQuatre");
    if (n > slides.length) {
        slideIndex = 1;
    } 

    if (n < 1) {
        slideIndex = slides.length;
    }

    if( etatSlides === "slides1"){
        for (i = 0; i < slides.length; i++) {
            slides[i].classList.add("hide");
        } 
        slides[slideIndex-1].classList.remove("hide");
    }
    if( etatSlides === "slides2"){
        for (i = 0; i < slides.length; i++) {
            slidesDeux[i].classList.add("hide");
        } 
        slidesDeux[slideIndex-1].classList.remove("hide");
    }
    if( etatSlides === "slides3"){ 
        for (i = 0; i < slides.length; i++) {
            slidesTrois[i].classList.toggle("hide");
        }
    }
    if( etatSlides === "slides4"){ 
        for (i = 0; i < slides.length; i++) {
            slidesQuatre[i].classList.toggle("hide");
        }
    }
}