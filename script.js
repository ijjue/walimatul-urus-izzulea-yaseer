function revealContent(){

    const hero = document.getElementById("hero");
    const main = document.getElementById("main-content");
    const nav = document.getElementById("bottomNavbar");

    document.body.style.overflow = "hidden";
    hero.style.transform = "translateY(-100vh)";

    setTimeout(() => {
        // Make hero part of the scrollable content
        hero.style.position = "relative";
        hero.style.transform = "none";
        // hero.classList.add("hide-button");

        // Restore scroll
        document.body.style.overflow = "auto";

        // Reveal content and navbar
        main.classList.remove("hidden");
        main.classList.add("fade-in");
        nav.classList.remove("hidden");
        nav.classList.add("show");

        // Scroll to content
        main.scrollIntoView({ behavior: "smooth" });
    }, 1000);

    const bukaBtn = document.getElementById("bukaBtn");
    bukaBtn.style.opacity = "0";
    setTimeout(() => {
        bukaBtn.style.display = "none";
    }, 400);

    // const navbar = document.getElementById("bottomNavbar");
    // navbar.classList.remove("hidden");
    // navbar.classList.add("show");

    // Show main content
    // const mainContent = document.getElementById("main-content");
    // mainContent.classList.remove("hidden");
    // setTimeout(() => {
    //     mainContent.classList.add("fade-in");
    // }, 500);

    // Play background music
    const videoID = "Ptk_1Dc2iPY";
    const musicUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&start=2&playlist=${videoID}`;
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.src = musicUrl;
    bgMusic.style.display = 'block';
}
