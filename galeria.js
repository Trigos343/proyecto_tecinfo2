document.addEventListener("DOMContentLoaded", () => {
    const imagenes = document.querySelectorAll(".imagen");

    imagenes.forEach(img => {
        img.addEventListener("click", () => {
            alert(`Has hecho clic en: ${img.alt}`);
        });
    });
});
