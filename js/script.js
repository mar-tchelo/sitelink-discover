// salvando o tema selecionado no local storage
function saveTheme(theme) {
    localStorage.setItem("theme", theme);
   }
   
   // pegando o tema selecionado no local storage
   function getTheme() {
    return localStorage.getItem("theme");
   }
   
   function toggleMode() {
    const html = document.documentElement;
    html.classList.toggle("light");
   
    // pegar a imagem
    const img = document.querySelector("#profile img");
   
    // substituir a imagem
    if (html.classList.contains("light")) {
       // se tiver light mode, adicionar a imagem light
       img.setAttribute("src", "../assets/avatar-ligth.jpeg");
       saveTheme("light");
    } else {
       img.setAttribute("src", "https://github.com/mar-tchelo.png");
       saveTheme("dark");
    }
   }
   
   // Verificar se há algum tema salvo no local storage
   window.onload = function () {
    const savedTheme = getTheme();
    if (savedTheme) {
       if (savedTheme === "light") {
         toggleMode();
       }
    }
   };