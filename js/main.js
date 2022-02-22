let btnOpenMenu = document.querySelector(".fa-bars"); 
let btnCloseMenu = document.querySelector(".close")
let hiddenMenu = document.querySelector(".hamburger-menu");

btnOpenMenu.addEventListener("click", function(){
    hiddenMenu.classList.add("show");
})

btnCloseMenu.addEventListener("click", function(){
    hiddenMenu.classList.remove("show");
})