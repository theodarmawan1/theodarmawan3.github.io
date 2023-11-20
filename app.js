let tl = anime.timeline({})

        anime({
            targets: ".layer1",
            bottom: "-30%",
            left: "-40%",
            duration: 2800,
            easing: 'easeInOutSine'
        })

        anime({
            targets: ".layer2",
            bottom: "-30%",
            left: "35%",
            duration: 2500,
            easing: 'easeInOutSine'
        })

        anime({
            targets: ".square1",
            bottom: "21%",
            duration: 3000,
            easing: 'easeInOutSine'
        })

        const gedung = anime.timeline({})
        console.log(window.innerWidth)
        if (window.innerWidth <= 503) {
            gedung.add({
            targets: ".gedung1",
            bottom: "-27%",
            duration: 4500,
            easing: 'easeInOutSine'
            })
        }
        else{
            gedung.add({
            targets: ".gedung1",
            bottom: "21%",
            duration: 4500,
            easing: 'easeInOutSine'
            })
        }

        anime({
            targets: ".subtitle",
            top: "2%",
            duration: 3500,
            easing: 'easeInOutSine'
        })

        const text = document.querySelector('.title')
        text.innerHTML = text.textContent.replace(/\S/g, "<span>$&</span>")

        tl.add({
            targets: ".title span",
            translateY: [-600, 0],
            scale: [10,1],
            opacity: [0,1],
            duration: 3500,
            easing: 'easeOutExpo',
            delay: anime.stagger(100),
        })

        if (window.innerWidth <= 550) {
            anime({
            targets: ".error",
            bottom: "-10%",
            duration: 4500,
            easing: 'easeInOutSine'
            })
        }

// gsap.registerPlugin(ScrollTrigger)
// document.addEventListener('DOMContentLoaded', () => {
    
//     const sections = gsap.utils.toArray('section')

//     let scrollTween = gsap.to(sections, {
//         xPercent: -100 * (sections.length - 1),
//         ease: 'none',
//         scrollTrigger: {
//             trigger: '.wrapper',
//             pin: true,
//             scrub: 0.5,
//             snap: 1 / (sections.length - 1),
//             start: 'top top',
//             end: 3000,
//         }
//     })
    
//     gsap.to('.gedung1', {
//         x:0,
//         yPercent: 60,
//         scrollTrigger: {
//             trigger: '.gedung1',
//             start: '-130% top',
//             end: 1300,
//             scrub: 0.5,
//         }
//     })

//     gsap.to('.subtitle', {
//         x:0,
//         yPercent: -100,
//         scrollTrigger: {
//             trigger: '.subtitle',
//             start: '300% top',
//             end: 1300,
//             scrub: 0.5,
//         }
//     })

//     gsap.to(".layer1", {
//         opacity: 0,
//         scrollTrigger: {
//             trigger: '.gedung1',
//             start: "-130% top",
//             end: 500,
//             scrub: 0.5,
//         }
//     })
    
//     gsap.to(".layer2", {
//         opacity: 0,
//         scrollTrigger: {
//             trigger: '.gedung1',
//             start: "-130% top",
//             end: 500,
//             scrub: 0.5,
//         }
//     })

//     document.querySelectorAll('section').forEach(e => {
//         gsap.to(e.querySelector('.robot'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.robot'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page1-title'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page1-title'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page1-artikel'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page1-artikel'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page1-quote'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page1-quote'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         const tl1 = gsap.timeline({})
//         const tl2 = gsap.timeline({})

//         tl1.to(e.querySelector('.bg1'), {
//             y: 0,
//             x: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.bg1'),
//                 start: 'top bottom',
//                 end: "+=1500",
//                 scrub: 0.5,
//             }
//         })

//         tl1.to(e.querySelector('.bg2'), {
//             y: 0,
//             x: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.bg2'),
//                 start: 'top bottom',
//                 end: "+=80%",
//                 scrub: 0.5,
//             }
//         })

//         tl1.to(e.querySelector('.bg3'), {
//             y: 0,
//             x: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.bg3'),
//                 start: 'top bottom',
//                 end: "+=50%",
//                 scrub: 0.5,
//             }
//         })

//         tl1.to(e.querySelector('.tujuan1'), {
//             width: "35%",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.tujuan1'),
//                 start: 'top bottom',
//                 end: "+=1800",
//                 scrub: 0.5,
//             }
//         })

//         tl1.to(e.querySelector('.tujuan2'), {
//             width: "42%",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.tujuan2'),
//                 start: 'top bottom',
//                 end: "+=30%",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.tujuan3'), {
//             width: "45%",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.tujuan1'),
//                 start: 'top bottom',
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page3-title'), {
//             x: 0,
//             y: 0,
//             fontSize : "6rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page3-title'),
//                 start: 'top bottom',
//                 end: "+=250",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page3-artikel'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page3-title'),
//                 start: 'top bottom',
//                 end: "+=250",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.gedung2'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page3-title'),
//                 start: 'top bottom',
//                 end: "+=300",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.petugas1'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page3-title'),
//                 start: 'top bottom',
//                 end: "+=250",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page3-quote'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page3-title'),
//                 start: 'top bottom',
//                 end: "+=250",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page4-title1'), {
//             x: 0,
//             y: 0,
//             fontSize: "3.4rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page4-title1'),
//                 start: 'top bottom',
//                 end: "+=850",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page4-artikel1'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page4-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page4-title2'), {
//             x: 0,
//             y: 0,
//             fontSize: "3.4rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page4-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page4-artikel2'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page4-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.gedung3'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page4-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.petugas2'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page4-title2'),
//                 start: 'top bottom',
//                 end: "+=1150",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.petugas3'), {
//             x: 0,
//             y: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page4-title2'),
//                 start: 'top bottom',
//                 end: "+=1500",
//                 scrub: 0.5,
//             }
//         })

//         const ring = gsap.timeline({})

//         ring.to(e.querySelector('.ring4'), {
//             x: 0,
//             y: 0,
//             opacity: 0.9,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.ring4'),
//                 start: 'top bottom',
//                 end: "+=1300",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.ring3'), {
//             x: 0,
//             y: 0,
//             opacity: 0.9,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.ring4'),
//                 start: 'top bottom',
//                 end: "+=1300",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.ring2'), {
//             x: 0,
//             y: 0,
//             opacity: 0.8,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.ring4'),
//                 start: 'top bottom',
//                 end: "+=1300",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.ring1'), {
//             x: 0,
//             y: 0,
//             opacity: 0.6,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.ring4'),
//                 start: 'top bottom',
//                 end: "+=1300",
//                 scrub: 0.5,
//             }
//         })

//         gsap.to(e.querySelector('.page5-title1'), {
//             fontSize: "3rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page5-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.page5-title2'), {
//             fontSize: "3rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page5-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.page5-title3'), {
//             fontSize: "3rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page5-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.page5-title4'), {
//             fontSize: "3rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page5-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.page5-title5'), {
//             fontSize: "3rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page5-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         ring.to(e.querySelector('.page5-title6'), {
//             fontSize: "3rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector('.page5-title1'),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//         for (let i = 1; i < 10; i++){
//             gsap.from(e.querySelector(`.meteor${i}`), {
//                 top: "-100%",
//                 scrollTrigger: {
//                     containerAnimation: scrollTween,
//                     trigger: e.querySelector(`.meteor${i}`),
//                     start: 'top bottom',
//                     end: "+=900",
//                     scrub: 0.5,
//                 }
//             })
//         }

//         gsap.from(e.querySelector(".page6-title"), {
//             fontSize: "54rem",
//             yPercent: -100,
//             opacity: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector(".meteor8"),
//                 start: 'top bottom',
//                 end: "+=700",
//                 scrub: 0.5,
//             }
//         })

//         gsap.from(e.querySelector(".page6-subtitle"), {
//             fontSize: "0rem",
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector(".meteor8"),
//                 start: 'top bottom',
//                 end: "+=700",
//                 scrub: 0.5,
//             }
//         })

//         for (let i = 1; i < 8; i++){
//             gsap.from(e.querySelector(`.dashboard${i}`), {
//                 top: "100%",
//                 scrollTrigger: {
//                     containerAnimation: scrollTween,
//                     trigger: e.querySelector(`.dashboard${i}`),
//                     start: 'top bottom',
//                     end: "+=900",
//                     scrub: 0.5,
//                 }
//             })
//         }

//         gsap.from(e.querySelector(".page6-title2"), {
//             fontSize: "0rem",
//             yPercent: -200,
//             opacity: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector(".dashboard6"),
//                 start: 'top bottom',
//                 end: "+=700",
//                 scrub: 0.5,
//             }
//         })

//         gsap.from(e.querySelector(".page6-artikel1"), {
//             yPercent: 100,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector(".page6-title2"),
//                 start: 'top bottom',
//                 end: "+=700",
//                 scrub: 0.5,
//             }
//         })

//         for (let i = 1; i < 4; i++){
//             gsap.from(e.querySelector(`.ml${i}`), {
//                 top: "-100%",
//                 scrollTrigger: {
//                     containerAnimation: scrollTween,
//                     trigger: e.querySelector(`.ml${i}`),
//                     start: 'top bottom',
//                     end: "+=900",
//                     scrub: 0.5,
//                 }
//             })
//         }

//         gsap.from(e.querySelector(".page6-title3"), {
//             fontSize: "0rem",
//             yPercent: -200,
//             opacity: 0,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector(".ml2"),
//                 start: 'top bottom',
//                 end: "+=700",
//                 scrub: 0.5,
//             }
//         })

//         gsap.from(e.querySelector(".page6-artikel2"), {
//             yPercent: -300,
//             scrollTrigger: {
//                 containerAnimation: scrollTween,
//                 trigger: e.querySelector(".ml3"),
//                 start: 'top bottom',
//                 end: "+=1000",
//                 scrub: 0.5,
//             }
//         })

//     })
// })