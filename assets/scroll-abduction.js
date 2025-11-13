window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const windowH = window.innerHeight;
  const progress = Math.min(scrollY / windowH, 1);

  const ufo = document.querySelector(".ufo");
  const cow = document.querySelector(".cow");
  const beam = document.querySelector(".beam");

  // Movimiento: UFO baja, beam aparece, vaca sube
  const ufoY = Math.max(-100 + progress * 200, -100);
  const cowY = Math.min(progress * -150, 0);

  ufo.style.transform = `translateY(${ufoY}px) scale(${1 + progress * 0.1})`;
  cow.style.transform = `translateY(${cowY}px)`;
  beam.style.opacity = progress;

  // Luz del UFO aumenta al pasar el cursor o al 100%
  if (progress > 0.8) {
    ufo.style.filter = "drop-shadow(0 0 35px rgba(0,255,178,1))";
  } else {
    ufo.style.filter = "drop-shadow(0 0 20px rgba(0,255,178,0.7))";
  }
});
