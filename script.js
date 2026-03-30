// Botón volver arriba
const btnBack = document.querySelector(".btn-back");

// oculto al cargar
btnBack.style.display = "none";

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const windowHeight = window.innerHeight;
    const docHeight = document.documentElement.scrollHeight;

    // si está cerca del final (último 15% de la página)
    if (scrollTop + windowHeight >= docHeight * 0.85) {
        btnBack.style.display = "block";
    } else {
        btnBack.style.display = "none";
    }
});

// función para volver arriba
function volverArriba() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}