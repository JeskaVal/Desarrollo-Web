document.addEventListener('DOMContentLoaded', () => {
    // Menú lateral
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    // Menú de usuario
    const closeSidebarBtn = document.querySelector('.close-sidebar');

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    const userToggle = document.querySelector('.user-toggle');
    const userMenu = document.querySelector('.dropdown-menu');

    userToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenu.classList.toggle('active');
    });

    // Cerrar menú (clic fuera)
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.sidebar') && !e.target.closest('.menu-toggle')) {
            sidebar.classList.remove('active');
        }
        if (!e.target.closest('.dropdown-menu') && !e.target.closest('.user-toggle')) {
            userMenu.classList.remove('active');
        }
    });
});