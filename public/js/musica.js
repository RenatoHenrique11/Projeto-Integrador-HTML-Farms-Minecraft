document.addEventListener("DOMContentLoaded", () => {
  const musicButton = document.getElementById("musicButton");
  const minecraftTheme = document.getElementById("minecraftTheme");

  let isPlaying = false;

  musicButton.addEventListener("click", () => {
    if (isPlaying) {
      minecraftTheme.pause();
      musicButton.textContent = "Tocar Música";
    } else {
      minecraftTheme.play();
      musicButton.textContent = "Pausar Música";
    }
    isPlaying = !isPlaying;
  });
});
