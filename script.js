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

