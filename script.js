window.addEventListener("scroll", () => {
  const inicial = document.getElementById("initial");
  const scrollY = window.scrollY;

  const blurValue = Math.min(scrollY / 50, 15);

  const scaleValue = Math.max(1 - scrollY / 2000, 0.8);

  inicial.style.filter = `blur(${blurValue}px)`;
  inicial.style.transform = `scale(${scaleValue})`;
});

document.getElementById("insta").addEventListener("click", () => {
  safeRedirect("https://www.instagram.com/seuPerfil", true);
});

document.getElementById("email").addEventListener("click", () => {
  const email = "arthurisensee76@gmail.com";
  const subject = encodeURIComponent("Contato");
  const body = encodeURIComponent("Olá, gostaria de falar sobre...");
  safeRedirect(`mailto:${email}?subject=${subject}&body=${body}`);
});

document.getElementById("linke").addEventListener("click", () => {
  safeRedirect("https://www.linkedin.com/in/arthur-isensee-251507323", true);
});

document.getElementById("gite").addEventListener("click", () => {
  safeRedirect("https://github.com/ArthurIsensee", true);
});

function safeRedirect(url, newTab = false) {
  if (newTab) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    window.location.href = url;
  }
}
