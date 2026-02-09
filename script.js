// ================== MOBILE MENU ==================
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", () => {
        navMenu.classList.toggle("open");
        menuToggle.classList.toggle("active");
    });
}

// إغلاق القائمة عند الضغط على رابط
document.querySelectorAll(".nav a").forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) navMenu.classList.remove("open");
        if (menuToggle) menuToggle.classList.remove("active");
    });
});

// ================== DROPDOWN ==================
document.querySelectorAll(".dropdown > a").forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();

        const menu = link.nextElementSibling;

        document.querySelectorAll(".dropdown-menu").forEach(m => {
            if (m !== menu) m.classList.remove("show");
        });

        menu.classList.toggle("show");
    });
});

// إغلاق dropdown عند الضغط خارجها
document.addEventListener("click", e => {
    if (!e.target.closest(".dropdown")) {
        document.querySelectorAll(".dropdown-menu").forEach(m =>
            m.classList.remove("show")
        );
    }
});

// ================== SERVICES ACTIVE ==================
const services = document.querySelectorAll(".service");

services.forEach(service => {
    service.addEventListener("click", () => {
        services.forEach(s => s.classList.remove("active"));
        service.classList.add("active");
    });
});

// ================== FADE UP ANIMATION ==================
const faders = document.querySelectorAll(".fade-up");

const showOnScroll = () => {
    faders.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("show");
        }
    });
};

window.addEventListener("scroll", showOnScroll);
window.addEventListener("load", showOnScroll);

// ================== PRELOADER ==================
window.addEventListener("load", () => {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;

    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";

    setTimeout(() => {
        preloader.remove();
    }, 500);
});
