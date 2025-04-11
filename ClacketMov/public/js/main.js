const aboutUsModal = document.getElementById("aboutUsModal");
const faqModal = document.getElementById("faqModal");
const loginModal = document.getElementById("loginModal");
const subscribeModal = document.getElementById("subscribeModal");
const aboutUsBtn = document.getElementById("openAboutUs");
const faqBtn = document.getElementById("openFAQ");
const loginBtn = document.getElementById("openModal");
const subscribeBtn = document.getElementById("openSubscribeModal");
const closeBtns = document.getElementsByClassName("close");
const body = document.body;

// Función para abrir modales
function openModal(modal) {
    if (modal) {
        modal.style.display = "flex";
        body.classList.add("modal-open");
    }
}

// Función para cerrar todos los modales
function closeModals() {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        modal.style.display = "none";
    });
    body.classList.remove("modal-open");
}

// Asignar eventos a los botones
if (aboutUsBtn && aboutUsModal) {
    aboutUsBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(aboutUsModal);
    });
}

if (faqBtn && faqModal) {
    faqBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(faqModal);
    });
}

if (loginBtn && loginModal) {
    loginBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(loginModal);
    });
}

if (subscribeBtn && subscribeModal) {
    subscribeBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal(subscribeModal);
    });
}

// Cerrar modales al hacer clic en la 'X'
Array.from(closeBtns).forEach(btn => {
    btn.addEventListener('click', closeModals);
});

// Cerrar modales al hacer clic fuera
window.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal')) {
        closeModals();
    }
});