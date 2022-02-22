let btnOpenMenu = document.querySelector(".fa-bars"); 
let hiddenMenu = document.querySelector(".hamburger-menu");

btnOpenMenu.addEventListener("click", function(){
    hiddenMenu.classList.add("show");
})