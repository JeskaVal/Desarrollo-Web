
// Menu lateral (botón hamburguesa transformer)
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
menuToggle.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    menuToggle.innerHTML = sidebar.classList.contains('active') ?
        '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
});

// Menú usuario
const userToggle = document.querySelector('.user-toggle');
const userMenu = document.querySelector('.dropdown-menu');

userToggle.addEventListener('click', () => {
    userMenu.classList.toggle('active');
});

// Búsqueda
const searchToggle = document.querySelector('.search-toggle');
const searchContainer = document.querySelector('.search-container');

searchToggle.addEventListener('click', () => {
    searchContainer.classList.toggle('active');
});

// Cerrar menús al hacer clic fuera
document.addEventListener('click', (e) => {
    if (!e.target.closest('.sidebar') && !e.target.closest('.menu-toggle')) {
        sidebar.classList.remove('active');
        menuToggle.innerHTML = '<i class="fas fa-bars"></i>';
    }

    if (!e.target.closest('.user-menu')) {
        userMenu.classList.remove('active');
    }
});
