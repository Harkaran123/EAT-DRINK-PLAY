

// ------------Mouse Movement animation--------------

const cursr = document.querySelector(".cursor");
const blur_cursr = document.querySelector(".cursor-blur");
const trans_cursr = document.querySelector(".cursor-trans");

document.addEventListener('mousemove', (dets) => {
    cursr.style.left = dets.x + "px";
    cursr.style.top = dets.y + "px";
    cursr.style.transition = "all linear 0.1s";
    blur_cursr.style.left = dets.x - 200 + "px";
    blur_cursr.style.top = dets.y - 200 + "px";
    blur_cursr.style.transition = "all linear 0.1s";

})





// --------Cursor Scaling on nav---------

// function cursorEnter(){

//     cursr.style.scale = 3;
//     cursr.style.height = "28px";
//     cursr.style.width = "28px";
//     cursr.style.backgroundColor = "transparent";
//     cursr.style.border = "1px solid #fff"
// }

// function cursorLeave(){

//     cursr.style.scale = 1;
//     cursr.style.height = "20px";
//     cursr.style.width = "20px";
//     cursr.style.backgroundColor = "#abe312";
//     cursr.style.border = "none"

// }

// liTag = document.querySelectorAll(".navlinks ul li a");

// liTag.forEach(element => {

//     element.addEventListener("mouseenter", () => {
//         cursorEnter();
//     })

//     element.addEventListener("mouseleave", () => {
//         cursorLeave();
//     })
// });

// const cards = document.querySelectorAll(".card");
// const overly = document.querySelector(".overlay");

// // overly.addEventListener("mouseenter", () => {
// //     cursorEnter();
// // })

// // overly.addEventListener("mouseleave", () => {
// //     cursorLeave();
// // })

// cards.forEach(element => {

//     element.addEventListener("mouseenter", () => {
//         cursorEnter();
//     })

//     element.addEventListener("mouseleave", () => {
//         cursorLeave();
//     })

// })


// ---------gsap for nav and background color---------

gsap.to(".nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        // markers: true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1
    }
})

gsap.to(".main", {
    backgroundColor: "#000",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -70%",
        scrub: 2,

    }
})

// --------gsap for about----------

gsap.from(".about-us, .about-us-text", {
    y: 90,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        scroller: "body",
        start: "top 60%",
        end: "top 55%",
        scrub: 2,
    }
})

gsap.from("#colon1", {
    y: -70,
    x: -60,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        start: "top 65%",
        end: "top 55%",
        scrub: 2,
    }
})

gsap.from("#colon2", {
    y: 30,
    x: 80,
    scrollTrigger: {
        trigger: "#colon1",
        scroller: "body",
        // markers: true,
        start: "top 65%",
        end: "top 55%",
        scrub: 2,
    }
})

gsap.from(".page4-row h1", {
    y: 120,
    scrollTrigger:{
        trigger: ".page4-row h1",
        scroller: "body",
        // markers: true,
        start: "top 90%",
        end: "top 80%",
        scrub: 3,
    }
})