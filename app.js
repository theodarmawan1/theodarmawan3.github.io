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