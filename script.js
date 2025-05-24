function revealContent(){

    document.getElementById("hero").classList.add("slide-up");

    const bukaBtn = document.getElementById("bukaBtn");
    bukaBtn.style.opacity = "0";
    setTimeout(() => {
        bukaBtn.style.display = "none";
    }, 400);

    const navbar = document.getElementById("bottomNavbar");
    navbar.classList.remove("hidden");
    navbar.classList.add("show");

    // Show main content
    const mainContent = document.getElementById("main-content");
    mainContent.classList.remove("hidden");
    setTimeout(() => {
        mainContent.classList.add("fade-in");
    }, 500);

    // Play background music
    const videoID = "Ptk_1Dc2iPY";
    const musicUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&start=2&playlist=${videoID}`;
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.src = musicUrl;
    bgMusic.style.display = 'block';
}
