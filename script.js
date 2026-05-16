// Botón volver arriba
const backButton = document.querySelector(".back-button");

// oculto al cargar
backButton.style.display = "none";

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // si está cerca del final (último 15% de la página)
    if (scrollTop + windowHeight >= docHeight * 0.85) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
});

// función para volver arriba
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}