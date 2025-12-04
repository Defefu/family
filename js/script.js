// Typing Animation
var typed = new Typed(".typing", {
    strings: ["Hardworking", "Loving", "Strong", "Wise"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed2 = new Typed(".typing-mother", {
    strings: ["Love", "Care", "Strength", "Kindness"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed3 = new Typed(".typing-my", {
    strings: ["Web Developer", "Designer", "Learner", "Creator"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed4 = new Typed(".typing-brother", {
    strings: ["Energetic", "Funny", "Brave", "Helpful"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed5 = new Typed(".typing-sister", {
    strings: ["Beautiful", "Smart", "Creative", "Caring"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

// Navigation Active Class
document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelector('.nav a.active').classList.remove('active');
        this.classList.add('active');
        document.querySelector('.section.active').classList.remove('active');
        document.querySelector(this.getAttribute('href')).classList.add('active');
    });
});

// Mobile Menu
document.querySelector('.nav-toggler').addEventListener('click', () => {
    document.querySelector('.aside').classList.toggle('open');
    document.querySelector('.nav-toggler').classList.toggle('open');
});