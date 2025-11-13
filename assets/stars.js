const starContainer = document.querySelector(".dynamic-stars");
const scene = document.querySelector(".scene");
const stars = document.querySelector(".stars");
const twinkling = document.querySelector(".twinkling");

const ufo = document.querySelector(".ufo");
const cow = document.querySelector(".cow");
const title = document.querySelector(".title");
const subtitle = document.querySelector(".subtitle");
const msgEl = document.getElementById("dynamicMessage");

// Mensajes dinámicos
const messages = [
  "Looks like the aliens took it with them!",
  "Houston, we have a cow!",
  "Lost in Mars…",
  "Beam me up!",
  "The cow is exploring space!",
];
setInterval(() => {
  msgEl.textContent = messages[Math.floor(Math.random() * messages.length)];
}, 7000);

// Estrellas fugaces
function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("dynamic-star");
  star.style.left = Math.random() * window.innerWidth + "px";
  star.style.top = Math.random() * -50 + "px";
  star.style.setProperty("--x-end", (Math.random() - 0.5) * 500 + "px");
  star.style.setProperty("--y-end", window.innerHeight + 50 + "px");
  star.style.animationDuration = Math.random() * 0.5 + 0.8 + "s";
  starContainer.appendChild(star);
  setTimeout(() => star.remove(), 2000);
}
setInterval(createShootingStar, 300);

// Scroll parallax y zoom
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  stars.style.transform = `translateY(${scrollY * 0.1}px)`;
  twinkling.style.transform = `translateY(${scrollY * 0.2}px)`;
  scene.style.transform = `scale(${1 + scrollY * 0.0008})`;
});

// ------------------------------
// Easter Egg: Click en la vaca
// ------------------------------
cow.addEventListener("click", () => {
  cow.style.transform = "translateX(-50%) translateY(-40px) rotate(5deg)";
  cow.style.filter = "drop-shadow(0 0 35px rgba(255,255,255,1))";
  setTimeout(() => {
    cow.style.transform = "";
    cow.style.filter = "";
  }, 800);
});

// ------------------------------
// Easter Egg: Click prolongado en el título
// ------------------------------
let clickTimer;
title.addEventListener("mousedown", () => {
  clickTimer = setTimeout(() => {
    for (let i = 0; i < 15; i++) {
      const miniStar = document.createElement("div");
      miniStar.classList.add("dynamic-star");
      miniStar.style.left = Math.random() * window.innerWidth + "px";
      miniStar.style.top = Math.random() * window.innerHeight + "px";
      miniStar.style.width = "3px";
      miniStar.style.height = "3px";
      miniStar.style.opacity = "1";
      miniStar.style.animationDuration = Math.random() * 1 + 0.5 + "s";
      starContainer.appendChild(miniStar);
      setTimeout(() => miniStar.remove(), 2000);
    }
  }, 800); // 800ms para click prolongado
});
title.addEventListener("mouseup", () => {
  clearTimeout(clickTimer);
});

// ------------------------------
// Easter Egg: Doble click en el subtítulo
// ------------------------------
subtitle.addEventListener("dblclick", () => {
  const original = msgEl.textContent;
  msgEl.textContent = "¡La vaca dice MU!";
  setTimeout(() => {
    msgEl.textContent = original;
  }, 3000);
});
