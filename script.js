// RESPONSIVIDADE DO Menu - inicio
let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
    menu.classList.toggle("fa-times");
    navbar.classList.toggle("active");
}

window.onscroll = () => {
    menu.classList.remove("fa-times");
    navbar.classList.remove("active");
}
//Menu - FIM

//Trocar images - inicio
document.querySelectorAll(".image-slider img").forEach(images =>{
    images.onclick = () =>{
        var src = images.getAttribute("src");
        document.querySelector(".main-home-image").src = src;
    }
});
//Trocar images - FIM