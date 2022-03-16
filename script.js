//importa o que tem em night mode
let theme = localStorage.getItem("NightMode");
if (theme === "night"){
  //adição das classes no-transition para que as animações não ocorram ao recarregar a pagina
  document.querySelector('.slider').classList.add("slider-move", "no-transition");
  document.body.classList.add("body-night", "no-transition");
}

//Codigo para abertura e fechamento dos cards
let coll = document.getElementsByClassName("box-title");
let i
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.nextElementSibling.classList.toggle("active");
    this.classList.toggle("activeBackground");
  });
} 

//adiciona a função do nightmode pro slider
let nd = document.querySelector('.NDSwitch');
nd.addEventListener("click", function() {
  //codigo para remover a classe no-transition para que as animações funcionem normalmente
  document.querySelector('.slider').classList.remove("no-transition");
  document.body.classList.remove("no-transition");
  //toggle do nightmode
  document.querySelector('.slider').classList.toggle("slider-move");
  document.body.classList.toggle("body-night");
  //codigo para salvar estado do nigtmode no local stororage
  if (localStorage.getItem("NightMode") === "night") {
    localStorage.setItem("NightMode", "day");
  } else {
    localStorage.setItem("NightMode", "night");
  }
  
})

