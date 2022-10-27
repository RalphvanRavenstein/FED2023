var menuOpenButton = document.querySelector("header > button");
var deNav = document.querySelector("header nav");


menuOpenButton.addEventListener("click", navOpen);



function navOpen(){
  deNav.classList.add("open");
}

//sluit//
var menuSluitButton = document.querySelector("header nav button");


menuSluitButton.addEventListener("click", navSluit);



function navSluit(){
  deNav.classList.remove("open");
}


