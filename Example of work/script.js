

// new FinisherHeader({
//     "count": 10,
//     "size": {
//         "min": 1300,
//         "max": 1500,
//         "pulse": 0
//     },
//     "speed": {
//         "x": {
//             "min": 0.1,
//             "max": 0.6
//         },
//         "y": {
//             "min": 0.1,
//             "max": 0.6
//         }
//     },
//     "colors": {
//         "background": "#000000",
//         "particles": [
//             "#00ff0a",
//             "#000000",
//             "#2235e5",
//             "#000000",
//             "#29690b"
//         ]
//     },
//     "blending": "overlay",
//     "opacity": {
//         "center": 0.5,
//         "edge": 0.05
//     },
//     "skew": -2,
//     "shapes": [
//         "c"
//     ]
// });


new FinisherHeader({
    "count": 10,
    "size": {
        "min": 1300,
        "max": 1500,
        "pulse": 0
    },
    "speed": {
        "x": {
            "min": 0.1,
            "max": 0.6
        },
        "y": {
            "min": 0.1,
            "max": 0.6
        }
    },
    "colors": {
        "background": "#000000",
        "particles": [
            "#00ff0a",
            "#000000",
            "#0b4405",
            "#000000",
            "#29690b"
        ]
    },
    "blending": "overlay",
    "opacity": {
        "center": 0.5,
        "edge": 0.05
    },
    "skew": 0,
    "shapes": [
        "c"
    ]
});

document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis({
        lerp: 0.070,
        smoothWheel: true,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
});


$(document).ready(function () {
    setTimeout(function () {
        $('#loading-overlay').fadeOut(500);
    }, 1000);
});


document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.card, .f').forEach(function (el) {
        el.style.opacity = '0';
        el.classList.remove('animate__animated', 'animate__fadeIn');
        el.style.transition = 'opacity 0.7s';
    });

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.classList.add('animate__animated', 'animate__fadeIn');
                obs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.card, .f').forEach(el => observer.observe(el));



});

