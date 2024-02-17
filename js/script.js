const handlePlayNow= () => {
    const homeSection = document.getElementById("home-section");
    const gameScreen = document.getElementById("gameScreen");

    homeSection.classList.add("hidden");
    gameScreen.classList.remove("hidden");
}