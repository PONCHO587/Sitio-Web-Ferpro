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











// Esperamos a que el DOM cargue
document.addEventListener('DOMContentLoaded', () => {

  // ==== FUNCIONALIDADES DEL CONTADOR DE CANTIDAD ==== //
  // Producto 1
  const quantityDisplay1 = document.getElementById('quantity1');
  const decreaseButton1 = document.getElementById('decrease1');
  const increaseButton1 = document.getElementById('increase1');
  let quantity1 = 1;

  increaseButton1.addEventListener('click', () => {
    quantity1++;
    quantityDisplay1.textContent = quantity1;
  });

  decreaseButton1.addEventListener('click', () => {
    if (quantity1 > 1) {
      quantity1--;
      quantityDisplay1.textContent = quantity1;
    }
  });

  // Producto 2
  const quantityDisplay2 = document.getElementById('quantity2');
  const decreaseButton2 = document.getElementById('decrease2');
  const increaseButton2 = document.getElementById('increase2');
  let quantity2 = 1;

  increaseButton2.addEventListener('click', () => {
    quantity2++;
    quantityDisplay2.textContent = quantity2;
  });

  decreaseButton2.addEventListener('click', () => {
    if (quantity2 > 1) {
      quantity2--;
      quantityDisplay2.textContent = quantity2;
    }
  });

  // Producto 3
  const quantityDisplay3 = document.getElementById('quantity3');
  const decreaseButton3 = document.getElementById('decrease3');
  const increaseButton3 = document.getElementById('increase3');
  let quantity3 = 1;

  increaseButton3.addEventListener('click', () => {
    quantity3++;
    quantityDisplay3.textContent = quantity3;
  });

  decreaseButton3.addEventListener('click', () => {
    if (quantity3 > 1) {
      quantity3--;
      quantityDisplay3.textContent = quantity3;
    }
  });

  // Producto 4
  const quantityDisplay4 = document.getElementById('quantity4');
  const decreaseButton4 = document.getElementById('decrease4');
  const increaseButton4 = document.getElementById('increase4');
  let quantity4 = 1;

  increaseButton4.addEventListener('click', () => {
    quantity4++;
    quantityDisplay4.textContent = quantity4;
  });

  decreaseButton4.addEventListener('click', () => {
    if (quantity4 > 1) {
      quantity4--;
      quantityDisplay4.textContent = quantity4;
    }
  });

  // ==== FUNCIONALIDADES DEL MODAL ==== //
  const modal = document.getElementById('modal');
  const trashIcons = document.querySelectorAll('.trash-icon');
  const closeModalElements = document.querySelectorAll('.close-modal');

  // Abrir modal al hacer clic en cualquier icono de basura
  trashIcons.forEach(icon => {
    icon.addEventListener('click', () => {
      modal.style.display = 'block';
    });
  });

  // Cerrar modal al hacer clic en los iconos internos (X o check)
  closeModalElements.forEach(el => {
    el.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  });

  // Cerrar modal al hacer clic fuera de la ventana emergente
  window.addEventListener('click', (event) => {
    // Si el click es directamente en el contenedor .modal (fondo), se cierra
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});



document.addEventListener('DOMContentLoaded', () => {
  // Para cada card del carrito
  const cartProducts = document.querySelectorAll('.cart-product');
  cartProducts.forEach(product => {
    // Obtenemos la URL de la card desde el enlace completo
    const fullLinkElement = product.querySelector('.full-card-link');
    if (!fullLinkElement) return; // Si no hay, salimos
    const url = fullLinkElement.getAttribute('href');

    // Agregamos el listener al contenedor de la card
    product.addEventListener('click', (e) => {
      // Verificamos si el clic se hizo en algún elemento interactivo
      // Puedes ampliar la lista de selectores según tus necesidades
      if (
        e.target.closest('.quantity-button') ||
        e.target.closest('.trash-icon') ||
        e.target.closest('button') // Si hay otros botones dentro
      ) {
        // Si se hizo clic en un botón interactivo, no hacemos nada
        return;
      }
      // Si el clic fue en otra parte de la card, redirige a la URL del producto
      window.location.href = url;
    });
    
    // Opcional: desactivar el enlace full-card-link para evitar interferencias
    fullLinkElement.style.display = 'none';
  });
});














 // BOTÓN FLOTANTE => SCROLL TOP
 const botonRegreso = document.getElementById('botonRegreso');

 botonRegreso.addEventListener('click', () => {
     window.scrollTo({ top: 0, behavior: 'smooth' });
 });
  