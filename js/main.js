let btnOpenMenu = document.querySelector(".header-right > a"); 
let btnCloseMenu = document.querySelector(".close")
let hiddenMenu = document.querySelector(".hamburger-menu");

btnOpenMenu.addEventListener("click", function(){
    hiddenMenu.classList.add("active");
//     hiddenMenu.style.display = "block";
})

btnCloseMenu.addEventListener("click", function(){
    hiddenMenu.classList.remove("active");
    //   hiddenMenu.style.display = "none";
})

