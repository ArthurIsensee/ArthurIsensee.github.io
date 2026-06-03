const themeToggle = document.getElementById("theme-toggle");

function toggleTheme() {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  const elemento = document.querySelector('.main');

  if (document.body.classList.contains("light")) {
    const novaImagem = "images/Intro_light_mode.png";
    themeToggle.innerHTML = "⏾";
    themeToggle.style.backgroundColor = "black";
    themeToggle.style.color = "white";
    elemento.style.backgroundImage = `url('${novaImagem}')`;
  } else {
    themeToggle.innerHTML = "𖤓";
    themeToggle.style.backgroundColor = "white";
    themeToggle.style.color = "black";
    // remove o inline style para voltar a imagem via CSS (Background_Intro.png)
    elemento.style.backgroundImage = "";
  }
}

themeToggle.addEventListener("click", toggleTheme);

// Define tema inicial 
document.body.classList.add("dark");
