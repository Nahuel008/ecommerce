// ANIMATIONS
function fadeSlideRight(item){
    var element = document.querySelector(item);
    var initial = element.getBoundingClientRect().top;
    var screen = window.innerHeight;
    console.log(initial);
    console.log("Screen:"+ screen);
    if(initial < screen / 1.3){
        element.classList.add('fadeSlideRight');
    } else if(initial < screen){
        element.classList.remove('fadeSlideRight');
    } if (initial < 0 ){
        element.classList.remove('fadeSlideRight');
    }
}
function fadeSlideLeft(item){
    var element = document.querySelector(item);
    var initial = element.getBoundingClientRect().top;
    var screen = window.innerHeight;
    if(initial < screen / 1.3){
        element.classList.add('fadeSlideLeft');
    } else if(initial > screen){
        element.classList.remove('fadeSlideLeft');
    } if (initial < 0 ){
        element.classList.remove('fadeSlideLeft');
    }
}
function fadeSlideUp(item){
    var element = document.querySelector(item);
    var initial = element.getBoundingClientRect().top;
    var screen = window.innerHeight;

    if(initial < screen / 1.3){
        element.classList.add('fadeSlideUp');
    } else if(initial < screen){
        element.classList.remove('fadeSlideUp');
    } if (initial < 0 ){
        element.classList.remove('fadeSlideUp');
    }
}
function fadeSlideDown(item){
    var element = document.querySelector(item);
    var initial = element.getBoundingClientRect().top;
    var screen = window.innerHeight;

    if(initial < screen / 1.3){
        element.classList.add('fadeSlideDown');
    } else if(initial < screen){
        element.classList.remove('fadeSlideDown');
    } if (initial < 0 ){
        element.classList.remove('fadeSlideDown');
    }
}

// ANIMATIOS

window.onload= function(){
    // MENU 
    const menu = document.querySelector('.menu');
    const close = document.querySelector('.close');
    const ulMenu = document.querySelector('ul');
    let width =document.documentElement.clientWidth;
    menu.onclick = function(){
            ulMenu.style.left= '0';
    }
    close.onclick = function(){
        if(width < 600){        
            ulMenu.style.left= '-90%';
        }else if(width > 700){
            ulMenu.style.left= '-35%';  
        }
    }

    const nav= document.querySelector('.nav');
    window.onscroll = function() {
        

    };
    // MENU 

    // ANIMATIONS 
    let heroText = document.querySelector('.hero .row .left-section .text h2');
    let heroButton = document.querySelector('.hero .row .left-section .text a');
    const imgHero = document.querySelector('.hero .row .right-section .img img');
    heroText.classList.add('fadeSlideRight');
    heroButton.classList.add('fadeSlideLeft');
    imgHero.classList.add('fadeSlideRight');
    window.onscroll = function() {
        // NAV 
        var scrollTop =  window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollTop >= 50) {
           nav.classList.add('bg');
        } else {
            nav.classList.remove('bg');
        }
        // NAV 

        // HERO 
   fadeSlideRight('.hero .row .left-section .text h2');
   fadeSlideLeft('.hero .row .left-section .text a');
   fadeSlideRight('.hero .row .right-section .img img');
   fadeSlideRight('.info .row .col h2');
   fadeSlideRight('.info .row .col a');
   fadeSlideRight('.contact .col .text h2');
        // HERO 
    }
    // ANIMATIONS 
}