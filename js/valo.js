document.addEventListener("DOMContentLoaded", function () {
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    // Afficher ou cacher le bouton en fonction du défilement
    window.addEventListener("scroll", function () {
        if (window.scrollY > 150) { // Afficher après 300px de scroll
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // Scroll vers le haut lorsqu'on clique sur le bouton
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
