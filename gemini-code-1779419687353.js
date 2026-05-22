document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    const headerActions = document.querySelector('.header-actions');

    menuToggle.addEventListener('click', () => {
        // Simple toggle for mobile view
        if (navLinks.style.display === 'flex') {
            navLinks.style.display = 'none';
            headerActions.style.display = 'none';
        } else {
            navLinks.style.display = 'flex';
            navLinks.style.flexDirection = 'column';
            navLinks.style.position = 'absolute';
            navLinks.style.top = '80px';
            navLinks.style.left = '0';
            navLinks.style.width = '100%';
            navLinks.style.backgroundColor = '#ffffff';
            navLinks.style.padding = '1rem';
            navLinks.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            
            headerActions.style.display = 'flex';
            headerActions.style.flexDirection = 'column';
            headerActions.style.position = 'absolute';
            headerActions.style.top = '250px';
            headerActions.style.left = '0';
            headerActions.style.width = '100%';
            headerActions.style.backgroundColor = '#ffffff';
            headerActions.style.padding = '1rem';
        }
    });
});