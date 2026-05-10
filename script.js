window.addEventListener("scroll", () => {
  const inicial = document.getElementById("initial");
  const scrollY = window.scrollY;

  // Blur aumenta conforme o scroll
  const blurValue = Math.min(scrollY / 50, 15);

  // Escala diminui conforme o scroll (vai "pra trás")
  const scaleValue = Math.max(1 - scrollY / 2000, 0.8);

  inicial.style.filter = `blur(${blurValue}px)`;
  inicial.style.transform = `scale(${scaleValue})`;
});