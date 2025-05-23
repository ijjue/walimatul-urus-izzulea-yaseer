function revealContent(){
    // Show main content
    document.getElementById('main-content').style.display = 'block';

    // Play background music
    const videoID = "Ptk_1Dc2iPY";
    const musicUrl = `https://www.youtube.com/embed/${videoID}?autoplay=1&loop=1&start=2&playlist=${videoID}`;
    const bgMusic = document.getElementById('bgMusic');
    bgMusic.src = musicUrl;
    bgMusic.style.display = 'block';
}