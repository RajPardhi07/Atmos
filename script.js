
function load(){
  var tl = gsap.timeline()
  tl
  .to(".strips",{
      // clipPath:" polygon(0 0, 25% 0, 25% 0, 0 0)",
      // duration:2,
      height:"0%",
      duration:2,
      stagger:.5,
      ease:Expo.easeInOut
  })
  .from("#nav svg,.sec2",{
      opacity:0
  })
  .to("#loader",{
      display:"none"
  })
  .from("#page1 h1",{
      opacity:0
  },"a")
  .to("#page1 h1",{
      OnStart:function(){
          $('#page1 h1').textillate({ in: { effect: 'fadeInUp' } });
      }
  },"a")
}
load()





function init() {
    gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});





// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

}

init();


function can1(){
    









  const canvas = document.querySelector("#page1 canvas");
  const context = canvas.getContext("2d");
  
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  window.addEventListener("resize", function () {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      render();
  })
  
  function files(index) {
      var data = `    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out1.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out2.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out3.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out4.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out5.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out6.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out7.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out8.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out9.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out10.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out11.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out12.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out13.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out14.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out15.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out16.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out17.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out18.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out19.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out20.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out21.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out22.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out23.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out24.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out25.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out26.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out27.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out28.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out29.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out30.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out31.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out32.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out33.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out34.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out35.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out36.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out37.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out38.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out39.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out40.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out41.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out42.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out43.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out44.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out45.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out46.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out47.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out48.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out49.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out50.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out51.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out52.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out53.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out54.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out55.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out56.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out57.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out58.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out59.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out60.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out61.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out62.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out63.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out64.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out65.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out66.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out67.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out68.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out69.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out70.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out71.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out72.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out73.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out74.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out75.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out76.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out77.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out78.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out79.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out80.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out81.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out82.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out83.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out84.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out85.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out86.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out87.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out88.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out89.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out90.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out91.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out92.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out93.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out94.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out95.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out96.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out97.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out98.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out99.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out100.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out101.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out102.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out103.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out104.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out105.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out106.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out107.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out108.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out109.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out110.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out111.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out112.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out113.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out114.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out115.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out116.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out117.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out118.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out119.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out120.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out121.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out122.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out123.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out124.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out125.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out126.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out127.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out128.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out129.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out130.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out131.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out132.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out133.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out134.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out135.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out136.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out137.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out138.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out139.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out140.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out141.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out142.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out143.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out144.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out145.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out146.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out147.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out148.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out149.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out150.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out151.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out152.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out153.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out154.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out155.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out156.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out157.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out158.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out159.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out160.webp
      https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter1/out161.webp`;
      return data.split("\n")[index];
  }
  
  const frameCount = 161;
  
  const images = [];
  const imageSeq = {
      frame: 0
  };
  
  for (let i = 0; i < frameCount; i++) {
      const img = new Image();
      img.src = files(i);
      images.push(img);
  }
  var tl = gsap.timeline({
      scrollTrigger: {
          trigger:"#page1",
          start:"-100% top",
          scrub:4,
          // markers:true,
          scroller:"#main"
          // pin:true
          
      }
  })
  tl
  .to(imageSeq, {
      frame: frameCount - 1,
      snap: "frame",
      ease: "none",
      
      onUpdate: render
  })
  
  images[0].onload = render;
  
  function render() {
      scaleImage(images[imageSeq.frame], context)
  }
  
  function scaleImage(img, ctx) {
      var canvas = ctx.canvas;
      var hRatio = canvas.width / img.width;
      var vRatio = canvas.height / img.height;
      var ratio = Math.min(hRatio, vRatio);
      var centerShift_x = (canvas.width - img.width * ratio) / 2;
      var centerShift_y = (canvas.height - img.height * ratio) / 2;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.width, img.height,
          centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }
  
  }
  can1()


  function con() {
    var con1 = document.querySelector(".con1")
    var con2 = document.querySelector(".con2")

    con1.addEventListener("mouseenter", function(){
      gsap.to(".con1 span", {
        y:"-4vw"
      })
    })

    con1.addEventListener("mouseleave", function(){
      gsap.to(".con1 span", {
        y:"0"
      })
    })


    con2.addEventListener("mouseenter", function(){
      gsap.to(".con2 span", {
        y:"-4vw"
      })
    })

    con2.addEventListener("mouseleave", function(){
      gsap.to(".con2 span", {
        y:"0"
      })
    })
  } 

  con();


  function pg3(){
    var tl = gsap.timeline({
      scrollTrigger:{
        trigger:"#page3",
        scroller:"#main",
        start:"top top",
        end:"200% 0%",
        // markers:true,
        scrub:3,
        pin:true
      }
    })

    tl
    .from("#page3>h1", {
      opacity:0,
      filter:"blur(10px)",
      ease:Expo.ease,
      duration:1.5
    })
    .to("#page3>h1", {
      opacity:0,
      filter:"blur(10px)",
      ease:Expo.ease,
      duration:1,
      top:"30%"
    })
    .from("#c1 h1, #c1 p, #c1 h4",{
      opacity:0,
      y:20,
      stagger:.2
    })
    .from("#c2 h3, #c2 p",{
      opacity:0,
      y:20,
      stagger:.2
    },"a")
    .to("#c1 h1, #c1 p,#c1 h4",{
      opacity:0,
      y:-20,
      stagger:.2
    },"a")
    .from("#c3 h3,#c3 p",{
      opacity:0,
      y:-20,
      stagger:.2
    },"b")
    .to("#c2 h3,#c2 p",{
      opacity:0,
      y:-20,
      stagger:.2
    },"b")


  }

  pg3();

  var learn = document.querySelector(".learn")

  learn.addEventListener("mouseenter", function(){
    gsap.to(".learn span",{
      y:"-2vw"
    })
  })

  learn.addEventListener("mouseleave", function(){
    gsap.to(".learn span",{
      y:"0"
    })
  })

  var clut = "";

  document.querySelector("#page4 h1").textContent.split("").forEach(function(tex){
    clut = clut + `<span>${tex}</span>`

    document.querySelector("#page4 h1").innerHTML = clut;
  })


  gsap.from("#page4 h1 span", {
    scrollTrigger:{
      trigger:"#page4 h1 span",
      scroller:"#main",
      start:"top 80%",
      end:"bottom 50%",
      scrub:2,
      
    },
    
    
    opacity:0,
    stagger:.02,
    y:50

  })
  
  
  // gsap.from("#page4", {
  //   scrollTrigger:{
  //     trigger:"#page4",
  //     scroller:"#main",
     
  //     scrub:2,
  //     pin:true,
  //   }
  // })
  

  
  


  function can2(){
    const canvas = document.querySelector("#page5 canvas");
const context = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
})

function files(index) {
    var data = ` https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out1.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out2.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out3.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out4.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out5.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out6.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out7.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out8.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out9.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out10.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out11.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out12.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out13.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out14.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out15.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out16.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out17.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out18.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out19.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out20.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out21.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out22.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out23.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out24.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out25.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out26.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out27.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out28.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out29.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out30.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out31.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out32.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out33.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out34.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out35.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out36.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out37.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out38.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out39.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out40.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out41.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out42.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out43.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out44.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out45.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out46.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out47.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out48.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out49.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out50.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out51.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out52.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out53.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out54.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out55.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out56.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out57.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out58.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out59.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out60.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out61.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out62.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out63.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out64.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out65.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out66.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out67.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out68.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out69.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out70.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out71.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out72.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out73.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out74.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out75.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out76.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out77.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out78.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out79.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out80.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out81.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out82.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out83.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out84.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out85.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out86.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out87.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out88.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out89.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out90.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out91.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out92.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out93.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out94.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out95.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out96.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out97.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out98.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out99.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out100.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out101.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out102.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out103.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out104.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out105.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out106.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out107.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out108.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out109.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out110.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out111.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out112.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out113.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out114.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out115.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out116.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out117.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out118.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out119.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out120.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out121.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out122.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out123.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out124.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out125.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out126.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out127.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out128.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out129.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out130.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out131.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out132.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out133.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out134.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out135.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out136.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out137.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out138.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out139.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out140.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out141.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out142.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out143.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out144.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out145.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out146.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out147.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out148.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out149.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out150.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out151.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out152.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out153.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out154.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out155.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out156.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out157.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out158.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out159.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out160.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out161.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out162.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out163.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out164.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out165.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out166.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out167.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out168.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out169.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out170.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out171.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out172.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out173.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out174.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out175.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out176.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out177.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out178.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out179.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out180.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out181.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out182.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out183.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out184.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out185.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out186.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out187.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out188.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out189.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out190.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out191.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out192.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out193.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out194.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out195.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out196.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out197.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out198.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out199.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out200.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out201.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out202.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out203.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out204.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out205.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out206.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out207.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out208.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out209.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out210.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out211.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out212.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out213.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out214.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out215.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out216.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out217.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out218.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out219.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out220.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out221.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out222.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out223.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out224.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out225.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out226.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out227.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out228.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out229.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out230.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out231.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out232.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out233.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out234.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out235.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out236.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out237.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out238.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out239.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out240.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out241.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out242.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out243.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out244.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out245.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out246.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out247.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out248.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out249.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out250.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out251.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out252.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out253.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out254.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out255.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out256.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out257.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out258.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out259.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out260.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out261.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out262.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out263.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out264.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out265.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out266.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out267.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out268.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out269.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out270.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out271.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out272.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out273.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out274.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out275.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out276.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out277.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out278.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out279.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out280.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out281.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out282.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out283.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out284.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out285.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out286.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out287.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out288.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out289.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out290.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out291.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out292.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out293.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out294.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out295.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out296.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out297.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out298.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out299.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out300.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out301.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out302.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out303.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out304.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out305.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out306.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out307.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out308.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out309.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out310.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out311.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out312.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out313.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out314.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out315.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out316.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out317.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out318.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out319.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out320.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out321.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out322.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out323.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out324.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out325.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out326.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out327.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out328.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out329.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out330.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out331.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out332.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out333.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out334.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out335.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out336.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out337.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out338.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out339.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out340.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out341.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out342.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out343.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out344.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out345.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out346.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out347.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out348.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out349.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out350.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out351.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out352.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out353.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out354.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out355.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out356.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out357.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out358.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out359.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out360.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out361.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out362.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out363.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out364.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out365.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out366.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out367.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out368.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out369.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out370.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out371.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out372.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out373.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out374.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out375.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out376.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out377.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out378.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out379.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out380.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out381.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out382.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out383.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out384.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out385.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out386.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out387.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out388.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out389.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out390.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out391.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out392.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out393.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out394.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out395.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out396.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out397.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out398.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out399.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out400.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out401.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out402.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out403.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out404.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out405.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out406.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out407.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out408.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out409.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out410.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out411.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out412.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out413.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out414.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out415.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out416.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out417.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out418.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out419.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out420.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out421.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out422.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out423.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out424.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out425.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out426.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out427.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out428.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out429.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out430.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out431.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out432.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out433.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out434.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out435.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out436.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out437.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out438.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out439.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out440.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out441.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out442.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out443.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out444.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out445.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out446.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out447.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out448.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out449.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out450.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out451.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out452.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out453.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out454.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out455.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out456.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out457.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out458.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out459.webp
    https://hybrismechanicacalibre590.jaeger-lecoultre.com/images/sequences/chapter2/out460.webp`;
    return data.split("\n")[index];
}

const frameCount = 460;

const images = [];
const imageSeq = {
    frame: 0
};

for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
}

gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: "none",
    scrollTrigger: {
        trigger:"#page5",
        start:"top top",
        pin:true,
        scrub:4,
        scroller:"#main"

        // markers:true
    },
    onUpdate: render
});

images[0].onload = render;

function render() {
    scaleImage(images[imageSeq.frame], context)
}

function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.min(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height,
        centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
}

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page5 canvas",
        start:"top top",
        // markers:true,
        scrub:2,
        end:"80% 0%",
        scroller:"#main"

    }
})
tl
.from("#tc1 h3,#tc1 p,#tc1 h4",{

    opacity:0,
    stagger:.5,
    y:20
})
.to("#tc1 h3,#tc1 p,#tc1 h4",{

    opacity:0,
    stagger:.5,
    y:-20
})
.from("#tc2 h3,#tc2 p",{

    opacity:0,
    stagger:.5,
    y:20
})
}

can2();


var clutter = "";

document.querySelector("#page6 h1").textContent.split("").forEach(function(dets){
  
  clutter = clutter + `<span>${dets}</span>`

  document.querySelector("#page6 h1").innerHTML = clutter;

})



gsap.to("#page6 h1 span", {
  scrollTrigger:{
    trigger:"#page6 h1 span",
    scroller:"#main",
    start:"top bottom",
    end:"bottom top",
    scrub:0.5,
    
    
  },
  stagger:.2,
  color:"#fff"
})


gsap.from("#page6", {
  scrollTrigger:{
    trigger:"#page6",
    scroller:"#main",
   
    scrub:0.5,
    pin:true,
    
  }
})


var pg7 = gsap.timeline();

pg7.from("#page7 #box1",{
  scale:0,
  opacity:0,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"top 70%",
    end:"top 69%",
    scrub:3,
    

  }
})

.from("#box2",{
  scale:0,
  opacity:0,
  duration:0.8,
  scrollTrigger:{
    trigger:"#page7",
    scroller:"#main",
    start:"top 70%",
    end:"top 69%",
    scrub:3,

  }
})

.from("#box3",{
  scale:0,
  opacity:0,
  duration:0.8,
  scrollTrigger:{
    trigger:"#box2 p",
    scroller:"#main",
    start:"top 60%",
    end:"top 40%",
    scrub:3,

  }
})


function pg8() {
  var tl3 = gsap.timeline({
    scrollTrigger:{
      trigger:"#page8",
      scrub:2,
      start:"top top",
      pin:true,
      scroller:"#main"


    }
  })
tl3
.to("#bl h1:nth-child(1), #bl h1:nth-child(2),#bl h1:nth-child(3),#bl h1:nth-child(4)",{
  opacity:0,
  y:-10,
  stagger:.5
})

.to("#page8 img", {
  transform:"scale(1)"
},"a")
.to("#b1", {
  opacity:0
},"a")
.from("#t h3, .en",{
  opacity:0,
  y:20,
  delay:.5,
  duration:2
}, "a")

}

pg8()


var en = document.querySelector(".en")

en.addEventListener("mouseenter", function(){
  gsap.to(".en span",{
    y:"-3vw"
  })
})


en.addEventListener("mouseleave", function(){
  gsap.to(".en span",{
    y:0
  })
})