document.addEventListener('DOMContentLoaded', () => {
    // ========================
    // Menú lateral (sidebar)
    // ========================
    const menuToggle = document.querySelector('.menu-toggle');
    const sidebar = document.querySelector('.sidebar');
    const closeSidebarBtn = document.querySelector('.close-sidebar');

    menuToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    closeSidebarBtn.addEventListener('click', () => {
        sidebar.classList.remove('active');
    });

    // ========================
    // Menú de usuario (perfil)
    // ========================
    const userToggle = document.querySelector('.user-toggle');
    const userMenu = document.querySelector('.dropdown-menu');

    userToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        userMenu.classList.toggle('active');
    });
    // ========================
    // Cambio de perfil 
    // ========================
    const changeProfileBtn = document.getElementById('changeProfileBtn');
    const overlay = document.getElementById('overlay');
    const modalContainer = document.getElementById('modalContainer');
    const closeModalBtn = document.getElementById('closeModalBtn');
    const profileButtons = document.querySelectorAll('.profile-button');

    const openModal = () => {
        overlay.style.display = 'block';
        modalContainer.style.display = 'block';
        modalContainer.setAttribute('aria-modal', 'true'); // Indica que es un diálogo modal
    };

    const closeModal = () => {
        overlay.style.display = 'none';
        modalContainer.style.display = 'none';
        modalContainer.removeAttribute('aria-modal');
    };
    changeProfileBtn.addEventListener('click', openModal);
    closeModalBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });

    profileButtons.forEach(button => {
        button.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                const profileName = button.getAttribute('data-profile');
                alert(`Perfil seleccionado: ${profileName}`); // Aquí iría tu lógica de selección
                closeModal();
            }
        });
    });

    // ========================
    // Menú búsqueda animado
    // ========================
    const searchToggle = document.querySelector('.search-toggle');
    const searchContainer = document.querySelector('.search-container');
    const searchInput = document.querySelector('.search-input');
    const closeSearchBtn = document.querySelector('.close-search');

    let searchHovered = false;
    let inputFocused = false;

    // Mostrar barra al pasar el mouse
    searchToggle.addEventListener('mouseenter', () => {
        searchContainer.classList.add('active');
    });

    searchContainer.addEventListener('mouseenter', () => {
        searchHovered = true;
        searchContainer.classList.add('active');
    });

    searchContainer.addEventListener('mouseleave', () => {
        searchHovered = false;
        if (!inputFocused) {
            searchContainer.classList.remove('active');
        }
    });

    searchInput.addEventListener('focus', () => {
        inputFocused = true;
        searchContainer.classList.add('active');
    });

    searchInput.addEventListener('blur', () => {
        inputFocused = false;
        if (!searchHovered) {
            searchContainer.classList.remove('active');
        }
    });

    closeSearchBtn.addEventListener('click', () => {
        searchContainer.classList.remove('active');
        searchInput.blur();
    });

    // ========================
    // Cerrar menús al hacer clic fuera
    // ========================
    document.addEventListener('click', (e) => {
        // Sidebar
        if (!e.target.closest('.sidebar') && !e.target.closest('.menu-toggle')) {
            sidebar.classList.remove('active');
        }

        // Menú usuario
        if (!e.target.closest('.dropdown-menu') && !e.target.closest('.user-toggle')) {
            userMenu.classList.remove('active');
        }
    });
    // ========================
    // Efecto banner
    // ========================
    window.addEventListener('scroll', function() {
        const banner = document.querySelector('.banner-image');
        const scrollPosition = window.pageYOffset;
        banner.style.transform = 'translateY(' + scrollPosition * 0.3 + 'px)';
    });
});
