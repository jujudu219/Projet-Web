// Affichage de la date actuelle dans la console
console.log("Site de l'association sportive chargé le :", new Date().toLocaleString());

// Fonction pour afficher/masquer le menu sur mobile
const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
    menuToggle.addEventListener("click", () => {
        navbar.querySelector("ul").classList.toggle("active");
    });
}

// Carrousel d'images sur la page d'accueil
const images = document.querySelectorAll(".carousel-image");
let current = 0;

function showNextImage() {
    images[current].classList.remove("active");
    current = (current + 1) % images.length;
    images[current].classList.add("active");
}

if (images.length > 0) {
    setInterval(showNextImage, 3000);
}