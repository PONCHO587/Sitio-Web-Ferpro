// === Menú móvil ===
// Mostrar menú móvil al hacer clic en el toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.display = 'block';
});

// Ocultar menú móvil al hacer clic en el botón de cerrar
document.getElementById('close-menu').addEventListener('click', function() {
    document.getElementById('mobile-menu').style.display = 'none';
});

// === Barra de búsqueda móvil ===
const searchToggle = document.getElementById('search-toggle');
const mobileSearchBar = document.getElementById('mobile-search-bar');
const mobileSearchInput = document.getElementById('mobile-search-input');
const mobileSearchClose = document.getElementById('mobile-search-close');

searchToggle.addEventListener('click', () => {
    // Muestra la barra de búsqueda móvil y enfoca el input
    mobileSearchBar.style.display = 'block';
    mobileSearchInput.focus();
});

// Cierra la barra de búsqueda móvil al hacer clic en la X
mobileSearchClose.addEventListener('click', () => {
    mobileSearchBar.style.display = 'none';
});

// === Barra de búsqueda escritorio ===
const searchInput = document.getElementById('search-input');
const searchIcon = document.getElementById('search-icon');

// Al enfocar el input, cambia el icono a "X" para cancelar la búsqueda
searchInput.addEventListener('focus', () => {
    searchIcon.innerHTML = '<img src="./images/X azul.svg" alt="">';
});

// Al perder el foco, si el input está vacío, restaura el icono de búsqueda
searchInput.addEventListener('blur', () => {
    if (searchInput.value === '') {
        searchIcon.innerHTML = '<img src="./images/Lupa blanca.svg" alt="">';
    }
});

// Al hacer clic en el icono:
searchIcon.addEventListener('click', () => {
    if (searchInput.value !== "") {
        // Si hay texto, lo borra, restaura el icono y quita el foco
        searchInput.value = "";
        searchIcon.innerHTML = '<img src="./images/Lupa blanca.svg" alt="">';
        searchInput.blur();
    } else {
        // Si está vacío, enfoca el input para iniciar la búsqueda
        searchInput.focus();
    }
});





document.addEventListener("DOMContentLoaded", function () {
    
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    // Crear el overlay dinámicamente
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    overlay.style.zIndex = "9";
    overlay.style.display = "none"; // Oculto por defecto
    document.body.appendChild(overlay); // Agregar al final del body

    // Función para abrir el menú
    menuToggle.addEventListener("click", function () {
        mobileMenu.style.display = "block";
        overlay.style.display = "block";
    });

    // Función para cerrar el menú
    closeMenu.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        overlay.style.display = "none";
    });

    // Cerrar el menú si se hace clic en el overlay
    overlay.addEventListener("click", function () {
        mobileMenu.style.display = "none";
        overlay.style.display = "none";
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menu-toggle");
    const closeMenu = document.getElementById("close-menu");
    const mobileMenu = document.getElementById("mobile-menu");
  
    // Configuramos la transición y el estado inicial (oculto a la izquierda)
    mobileMenu.style.transition = "transform 0.3s ease";
    mobileMenu.style.transform = "translateX(-100%)";
    // Aseguramos que el menú esté visible en el DOM para que se pueda animar
    mobileMenu.style.display = "block";
  
    // Creamos el overlay dinámicamente
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
    overlay.style.zIndex = "8"; // Asegúrate de que el menú tenga un z-index mayor (por ejemplo, .mobile-menu { z-index: 10; })
    overlay.style.opacity = "0";
    overlay.style.transition = "opacity 0.3s ease";
    overlay.style.display = "none"; // Oculto inicialmente
    document.body.appendChild(overlay);
  
    function openHamburgerMenu() {
      requestAnimationFrame(() => {
        mobileMenu.style.transform = "translateX(0)";
      });
      overlay.style.display = "block";
      requestAnimationFrame(() => {
        overlay.style.opacity = "1";
      });
    }
  
    function closeHamburgerMenu() {
      // Envuelve la transformación en requestAnimationFrame para forzar la transición al cerrar
      requestAnimationFrame(() => {
        mobileMenu.style.transform = "translateX(-100%)";
      });
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
    }
  
    menuToggle.addEventListener("click", openHamburgerMenu);
    closeMenu.addEventListener("click", closeHamburgerMenu);
    overlay.addEventListener("click", closeHamburgerMenu);
  });



  













 // BOTÓN FLOTANTE => SCROLL TOP
const botonRegreso = document.getElementById('botonRegreso');

botonRegreso.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});














function toggleSidebar() {
    const body = document.body;
    const mobileSidebar = document.querySelector('.mobile-sidebar');
    
    // Buscamos si ya existe un overlay para la sidebar; de lo contrario lo creamos
    let overlay = document.getElementById('mobile-sidebar-overlay');
    if (!overlay) {
        overlay = document.createElement("div");
        overlay.id = "mobile-sidebar-overlay";
        // Estilos del overlay (capa oscura)
        overlay.style.position = "fixed";
        overlay.style.top = "0";
        overlay.style.left = "0";
        overlay.style.width = "100%";
        overlay.style.height = "100%";
        overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
        overlay.style.zIndex = "9"; // Debe estar por debajo de la sidebar
        overlay.style.display = "none"; // Oculto por defecto
        document.body.appendChild(overlay);
        
        // Al hacer clic en el overlay, se cierra la sidebar
        overlay.addEventListener("click", function () {
            mobileSidebar.style.display = "none";
            overlay.style.display = "none";
            body.classList.remove('menu-abierto');
        });
    }
    
    // Alterna la visibilidad de la sidebar y del overlay
    if (mobileSidebar.style.display === 'block') {
        mobileSidebar.style.display = 'none';
        overlay.style.display = 'none';
        body.classList.remove('menu-abierto');
    } else {
        mobileSidebar.style.display = 'block';
        overlay.style.display = 'block';
        body.classList.add('menu-abierto');
    }
}







function toggleSidebar() {
    const body = document.body;
    const mobileSidebar = document.querySelector('.mobile-sidebar');
  
    // Configuramos la transición y, si es la primera vez, la posición inicial (fuera a la derecha)
    mobileSidebar.style.transition = "transform 0.3s ease";
    if (!mobileSidebar.classList.contains("initialized")) {
      mobileSidebar.style.transform = "translateX(100%)";
      mobileSidebar.style.display = "block";
      mobileSidebar.classList.add("initialized");
    }
  
    // Buscamos o creamos el overlay dinámico para la sidebar
    let overlay = document.getElementById("mobile-sidebar-overlay");
    if (!overlay) {
      overlay = document.createElement("div");
      overlay.id = "mobile-sidebar-overlay";
      overlay.style.position = "fixed";
      overlay.style.top = "0";
      overlay.style.left = "0";
      overlay.style.width = "100%";
      overlay.style.height = "100%";
      overlay.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      overlay.style.zIndex = "9"; // Asegúrate de que .mobile-sidebar tenga un z-index mayor (ej. 10)
      overlay.style.opacity = "0";
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.display = "none";
      document.body.appendChild(overlay);
      // Al hacer clic en el overlay, se cierra la sidebar
      overlay.addEventListener("click", toggleSidebar);
    }
  
    if (mobileSidebar.classList.contains("active")) {
      // Si está abierto, se cierra deslizando hacia la derecha
      mobileSidebar.style.transform = "translateX(100%)";
      mobileSidebar.classList.remove("active");
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.display = "none";
      }, 300);
      body.classList.remove("menu-abierto");
    } else {
      // Si está cerrado, se abre deslizando desde la derecha
      // Aseguramos que el sidebar inicie en translateX(100%) antes de animar
      mobileSidebar.style.transform = "translateX(100%)";
      requestAnimationFrame(() => {
        mobileSidebar.style.transform = "translateX(0)";
      });
      mobileSidebar.classList.add("active");
      overlay.style.display = "block";
      requestAnimationFrame(() => {
        overlay.style.opacity = "1";
      });
      body.classList.add("menu-abierto");
    }
  }
  
  



















