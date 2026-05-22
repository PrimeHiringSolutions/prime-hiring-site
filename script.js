/**
 * Prime Hiring Solutions - Core Interface Router Engine
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // Core Navigation Anchors Intersection Initialization
    const dropDownItems = document.querySelectorAll('.dropdown-menu li a');
    
    dropDownItems.forEach(item => {
        item.addEventListener('click', (event) => {
            event.preventDefault();
            const targetedSectionId = item.getAttribute('href').replace('#', '');
            scrollToSection(targetedSectionId);
        });
    });

    // Mobile Hamburger Accordion Handling
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-active');
            // Quick alert response layout if elements are collapsed
            if(mainNav.classList.contains('mobile-active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });
    }
});

/**
 * Global Scroll Engine Function to handle complex page routing offsets smoothly
 */
function scrollToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
        // Calculate header spacing bounds dynamically
        const headerOffset = 95; 
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // Auto close mobile drawer layout if active
        const mainNav = document.querySelector('.main-nav');
        const menuToggle = document.querySelector('.mobile-menu-toggle');
        if (mainNav && mainNav.classList.contains('mobile-active')) {
            mainNav.classList.remove('mobile-active');
            menuToggle.textContent = '☰';
        }
    } else {
        console.warn(`Routing target structural definition: #${sectionId} not found in DOM configuration.`);
    }
}
