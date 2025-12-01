// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
        // Close mobile menu if open
        mobileMenu.classList.add('hidden');
    });
});

// Fade in animation on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
});

// Home navigation click animation
document.querySelectorAll('a[href="#home"]').forEach(homeLink => {
    homeLink.addEventListener('click', function() {
        const words = document.querySelectorAll('#home-title .word-animation');
        words.forEach(word => {
            word.classList.remove('animate');
        });
        
        setTimeout(() => {
            words.forEach((word, index) => {
                setTimeout(() => {
                    word.classList.add('animate');
                }, index * 200);
            });
        }, 100);
    });
});

// Order button functionality
document.querySelectorAll('button').forEach(button => {
    if (button.textContent.includes('Order Now')) {
        button.addEventListener('click', function() {
            const itemName = this.closest('.menu-card').querySelector('h4').textContent;
            const itemPrice = this.closest('.menu-card').querySelector('.text-2xl').textContent;
            alert(`Thank you for your interest in ${itemName} (${itemPrice})! \n\nPlease call us at 7985999836 or visit our cafe to place your order.`);
        });
    }

});
