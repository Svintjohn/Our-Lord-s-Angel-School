document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const navUl = document.querySelector('nav ul');
    const toggleBtn = document.createElement('button');
    toggleBtn.className = 'menu-toggle';
    toggleBtn.innerHTML = '☰ Menu';
    document.querySelector('nav').prepend(toggleBtn);

    toggleBtn.addEventListener('click', () => {
        navUl.classList.toggle('show');
    });

    // 2. Form Validation (Application Page)
    const appForm = document.querySelector('#application-form form');
    if (appForm) {
        appForm.addEventListener('submit', (e) => {
            const phone = document.getElementById('contact').value;
            const email = document.getElementById('email').value;

            // Simple validation check
            if (phone.length < 10) {
                alert('Please enter a valid contact number.');
                e.preventDefault();
                return;
            }

            if (!email.includes('@')) {
                alert('Please enter a valid email address.');
                e.preventDefault();
                return;
            }

            alert('Thank you! Your application is being processed.');
        });
    }
});