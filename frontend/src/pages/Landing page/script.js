function loadSVG () {
    fetch("city.svg")
    .then((response) => { return response.text();})
    .then((svg) => {
        document.getElementById('bg_city').innerHTML = svg;
        document.querySelector('#bg_city svg').setAttribute("preserveAspectRatio", "xMidYMid slice");
        setAnimationScroll();
    })
}
loadSVG();
function setAnimationScroll () {
    gsap.registerPlugin(ScrollTrigger);
    let runAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "+=1000",
            scrub: true,
            pin: true
        }
    });

    runAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.5
        }),
        gsap.to("#full_city", 2, {
            opacity: 0
        })
    ])
    .add([
        gsap.to("#building_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#wall_front", 2, {
            x: 200, y: 200,
            opacity: 0
        })
    ])
    .add([
        gsap.to("#interior_wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_side_2", 2, {
            opacity: 0
        }),
        gsap.to("#interior_wall_front", 2, {
            opacity: 0
        })
    ]);
}

// Initialize all animations
function initAnimations() {
    gsap.registerPlugin(ScrollTrigger);
    
    // First section animation (building reveal)
    let buildingAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: "#bg_city",
            start: "top top",
            end: "bottom -=100",
            scrub: true,
            pin: true
        }
    });

    buildingAnimation.add([
        gsap.to("#bg_city svg", 2, {
            scale: 1.5
        }),
        gsap.to("#full_city", 2, {
            opacity: 0
        })
    ])
    .add([
        gsap.to("#building_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#wall_front", 2, {
            x: 200, y: 200,
            opacity: 0
        })
    ])
    .add([
        gsap.to("#interior_wall_side", 2, {
            x: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_top", 2, {
            y: -200,
            opacity: 0
        }),
        gsap.to("#interior_wall_side_2", 2, {
            opacity: 0
        }),
        gsap.to("#interior_wall_front", 2, {
            opacity: 0
        })
    ]);
    
    // Transition section animation
    let transitionAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".transition-section",
            start: "top bottom",
            end: "center center",
            scrub: true
        }
    });
    
    transitionAnimation.from(".transition-content", {
        y: 100,
        opacity: 0,
        duration: 1
    });
    
    // True Pass section animation
    let truePassAnimation = gsap.timeline({
        scrollTrigger: {
            trigger: ".true-pass-section",
            start: "top bottom",
            end: "top center",
            scrub: true
        }
    });
    
    truePassAnimation.from(".tp-header", {
        y: -50,
        opacity: 0,
        duration: 1
    })
    .from(".middle-message", {
        scale: 0.8,
        opacity: 0,
        duration: 1
    }, "-=0.5")
    .from(".carousel-container-2", {
        y: 100,
        opacity: 0,
        duration: 1
    }, "-=0.5")
    .from(".logos", {
        y: 50,
        opacity: 0,
        duration: 1
    }, "-=0.5")
    .from(".get-started-container", {
        scale: 0.8,
        opacity: 0,
        duration: 1
    }, "-=0.5");
}

// Initialize when the page loads
window.addEventListener('DOMContentLoaded', loadSVG);

// Smooth scroll for navigation
document.querySelectorAll('nav ul li').forEach(item => {
    item.addEventListener('click', function() {
        if (this.textContent === 'Home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        } else if (this.textContent === 'About') {
            const truePassSection = document.querySelector('.true-pass-section');
            truePassSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Scroll down button functionality
document.querySelector('.scroll-indicator').addEventListener('click', function() {
    const transitionSection = document.querySelector('.transition-section');
    transitionSection.scrollIntoView({ behavior: 'smooth' });
});