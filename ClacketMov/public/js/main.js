// Modal functionality
const loginModal = document.getElementById("loginModal");
const subscribeModal = document.getElementById("subscribeModal");
const loginBtn = document.getElementById("openModal");
const subscribeBtn = document.getElementById("openSubscribeModal");
const closeBtns = document.getElementsByClassName("close");
const heroContent = document.querySelector(".hero-content");
const body = document.body;

// Función para abrir modales
function openModal(modal) {
    modal.style.display = "flex";
    body.classList.add("modal-open");
}

// Función para cerrar modales
function closeModals() {
    loginModal.style.display = "none";
    subscribeModal.style.display = "none";
    body.classList.remove("modal-open");
}

// Abrir modal de login
loginBtn.onclick = function(e) {
    e.preventDefault();
    openModal(loginModal);
}

// Abrir modal de suscripción
subscribeBtn.onclick = function(e) {
    e.preventDefault();
    openModal(subscribeModal);
}

// Cerrar modales
for (let btn of closeBtns) {
    btn.onclick = closeModals;
}

// Cerrar al hacer clic fuera
window.onclick = function(event) {
    if (event.target === loginModal || event.target === subscribeModal) {
        closeModals();
    }
}