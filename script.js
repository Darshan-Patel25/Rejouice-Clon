gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});




// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

function cursoreffect(){
    var page1=document.querySelector(".page1");
let cursor=document.querySelector(".cursor" );

page1.addEventListener("mousemove",function(dets){
   gsap.to(cursor,{
    x:dets.x,
    y:dets.y,
   })
   
})
page1.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:1,
        opacity:1
    })
})

page1.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:0,
        opacity:0
    })
})
}
cursoreffect();

function page2animation(){
    gsap.from("span",{
        y:120,
        stagger:0.2,
        duration:1,
        scrollTrigger:{
            Trigger:".page2",
            scroller:".main",
            start:"bottom 47%",
            end:"top 46%",
            markers:true,
            scrub:2
        }
    })
}
page2animation();

function slider(){
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    autoplay: {
      delay: 2500,
      disableOnInteraction: true,
    },
  });
}
slider(); 

var tl=gsap.timeline(); 

tl.from(".loder h3",{
  x:100,
  opacity:0,
  duration:1,
  stagger:0.4
})

tl.to(".loder h3",{
  duration:1,
  x:-10,
  stagger:0.2,
 opacity:0
})
tl.to(".loder ",{
  opacity:0
 })
 tl.to(".loder ",{
  display:"none"    
 })
 
 
  tl.from(".page2 .part1 .first",{
    y: 100,
    opacity: 1,

 
   
  })


tl.from(".page2 .part2 .ele",{
  y: 100,
  opacity: 0,
 
})
tl.from(".page7 .two span",{
  y: 100,
  opacity: 0,
 
})



function cursoreffect2(){
  var page4=document.querySelector(".page4");
let cursor2=document.querySelector(".cursor2" );

page4.addEventListener("mousemove",function(dets){
 gsap.to(cursor2,{
  x:dets.x,
  y:dets.y,
 })
 
})
page4.addEventListener("mouseenter",function(){
  gsap.to(cursor2,{
      scale:1,
      opacity:1
  })
})

page4.addEventListener("mouseleave",function(){
  gsap.to(cursor2,{
      scale:0,
      opacity:0
  })
})
}
cursoreffect2();