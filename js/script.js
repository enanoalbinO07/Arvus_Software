// Selección de elementos DOM
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('.menu');
const header = document.getElementById('header');
const contactForm = document.getElementById('contactForm');

// Función para alternar el menú móvil
function toggleMenu() {
    menu.classList.toggle('active');
    
    // Cambiar apariencia del botón de menú
    const spans = menuToggle.querySelectorAll('span');
    if (menu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 6px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(5px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
}

// Event Listeners
menuToggle.addEventListener('click', toggleMenu);

// Cerrar el menú al hacer clic en un enlace
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', () => {
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    });
});

// Cambiar estilo del header al hacer scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.style.padding = '10px 0';
        header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        header.style.padding = '20px 0';
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
});

// Animación de revelación al hacer scroll
const revealElements = document.querySelectorAll('.section');

function checkReveal() {
    const triggerBottom = window.innerHeight * 0.8;
    
    revealElements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < triggerBottom) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Inicializar animaciones de revelación
window.addEventListener('load', () => {
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    checkReveal();
});

window.addEventListener('scroll', checkReveal);

// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            // Cálculo de la posición de destino con offset para el header fijo
            const headerHeight = header.offsetHeight;
            const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
            
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Manejo del formulario de contacto
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const messageInput = document.getElementById('message');
        
        // Validación simple
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Por favor, complete todos los campos.');
            return;
        }
        
        // Simulación de envío exitoso
        alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
        
        // Reiniciar formulario
        contactForm.reset();
    });
}

// Inicialización cuando el DOM está completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Añadir clase 'loaded' al body para posibles animaciones de carga
    document.body.classList.add('loaded');
});