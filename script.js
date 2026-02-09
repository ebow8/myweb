// dropdown
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const menu = link.nextElementSibling;

        document.querySelectorAll(".dropdown-menu").forEach(m => {
            if (m !== menu) m.style.display = "none";
        });

        menu.style.display = menu.style.display === "block" ? "none" : "block";
    });
});

document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach(m => m.style.display = "none");
    }
});

// services active
const services = document.querySelectorAll(".service");
services.forEach(service => {
    service.addEventListener("click", () => {
        services.forEach(s => s.classList.remove("active"));
        service.classList.add("active");
    });
});

// fade up
const faders = document.querySelectorAll(".fade-up");
window.addEventListener("scroll", () => {
    faders.forEach(el => {
        if (el.getBoundingClientRect().top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
});
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";

    setTimeout(() => {
        preloader.style.display = "none";
    }, 500);
});
