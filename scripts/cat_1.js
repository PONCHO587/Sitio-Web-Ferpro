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



  








  document.addEventListener('DOMContentLoaded', function() {
    // Selecciona todos los botones "Agregar" y los modales
    const addToCartButtons = document.querySelectorAll('.open-cart-modal');
    const cartModal = document.getElementById('cart-modal');
    const favoriteModal = document.getElementById('favorite-modal');
    const closeCart = document.getElementById('close-cart');
    const closeFavorite = document.getElementById('close-favorite');
  
    // Abre el modal del carrito al hacer clic en cualquier botón "Agregar"
    addToCartButtons.forEach(button => {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        cartModal.style.display = 'flex';
      });
    });
  
    // Cerrar modal de carrito con el botón de cierre (icono X)
    if (closeCart) {
      closeCart.addEventListener('click', function(e) {
        // No es necesario detener la propagación si el botón está dentro del modal-content
        cartModal.style.display = 'none';
      });
    }
  
    // Cerrar modal de favoritos con el botón de cierre (icono X)
    if (closeFavorite) {
      closeFavorite.addEventListener('click', function(e) {
        favoriteModal.style.display = 'none';
      });
    }
  
    // Cerrar modales al hacer clic en el overlay (área fuera del contenido modal)
    window.addEventListener('click', function(e) {
      // Si se hace clic directamente en el overlay del modal (y no en su contenido)
      if (e.target === cartModal) {
        cartModal.style.display = 'none';
      }
      if (e.target === favoriteModal) {
        favoriteModal.style.display = 'none';
      }
    });
  });
  





  











 // BOTÓN FLOTANTE => SCROLL TOP
const botonRegreso = document.getElementById('botonRegreso');

botonRegreso.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});





















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
  
  



















