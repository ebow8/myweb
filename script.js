/* ================= MOBILE MENU ================= */
function toggleMenu() {
    const nav = document.querySelector(".nav");
    if (!nav) return;

    nav.classList.toggle("open");
}

/* ================= CLOSE MENU ON LINK CLICK ================= */
document.addEventListener("click", (e) => {
    if (e.target.matches(".nav a")) {
        const nav = document.querySelector(".nav");
        if (nav) nav.classList.remove("open");
    }
});

/* ================= SERVICES ACTIVE ================= */
const services = document.querySelectorAll(".service");

services.forEach(service => {
    service.addEventListener("click", () => {
        services.forEach(s => s.classList.remove("active"));
        service.classList.add("active");
    });
});

// ================= SERVICES (MOBILE + DESKTOP) =================
document.querySelectorAll(".service").forEach(service => {
    service.addEventListener("click", () => {
        document.querySelectorAll(".service")
            .forEach(s => s.classList.remove("active"));
        service.classList.add("active");
    });
});
