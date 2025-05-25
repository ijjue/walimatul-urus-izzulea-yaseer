function revealContent() {
    const hero = document.getElementById("hero");
    const main = document.getElementById("main-content");
    const nav = document.getElementById("bottomNavbar");
    const bukaBtn = document.getElementById("bukaBtn");

    // Hide scroll while animating
    document.body.style.overflow = "hidden";

    // Animate hero sliding up
    hero.style.transform = "translateY(-100vh)";

    // Hide the button
    bukaBtn.style.opacity = "0";
    setTimeout(() => {
        bukaBtn.style.display = "none";
    }, 400);

    // After hero finishes sliding up...
    setTimeout(() => {
        // Restore scroll
        // document.body.style.overflow = "auto";

        // Make hero scrollable and part of layout
        hero.style.position = "relative";
        hero.style.transform = "none";
        hero.classList.add("slide-up");

        // Reveal main content
        main.classList.remove("hidden");
        main.classList.add("fade-in");

        // Show navbar
        nav.classList.remove("hidden");
        nav.classList.add("show");

        // ✅ Smooth scroll only AFTER layout settles
        setTimeout(() => {
            main.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 100); // small delay ensures layout is applied

        // ✅ Autoplay audio
        const bgMusic = document.getElementById("bgMusic");
        bgMusic.play().catch(err => {
            console.warn("Audio autoplay blocked:", err);
        });
    }, 1000); // wait for hero to finish slide

}

// ✅ Toggle button logic
const audio = document.getElementById("bgMusic");
const audioBtn = document.getElementById("audioToggleBtn");
const audioIcon = document.getElementById("audioIcon");

audioBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        audioIcon.classList.remove("fa-volume-mute");
        audioIcon.classList.add("fa-volume-up");
    } else {
        audio.pause();
        audioIcon.classList.remove("fa-volume-up");
        audioIcon.classList.add("fa-volume-mute");
    }
});

// Countdown Timer

const Days = document.getElementById("days");
const Hours = document.getElementById("hours");
const Minutes = document.getElementById("minutes");
const Seconds = document.getElementById("seconds");

const targetDate = new Date("July 26 2025 00:00:00").getTime();

function timer() {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    const days = Math.floor(distance / 1000 / 60 / 60 / 24);
    const hours = Math.floor(distance / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(distance / 1000 / 60) % 60;
    const seconds = Math.floor(distance / 1000) % 60;

    Days.innerHTML = days;
    Hours.innerHTML = hours;
    Minutes.innerHTML = minutes;
    Seconds.innerHTML = seconds;

    if (distance < 0) {
        Days.innerHTML = "00";
        Hours.innerHTML = "00";
        Minutes.innerHTML = "00";
        Seconds.innerHTML = "00";
    }
}

setInterval(timer, 1000);