// ============================================================
// PRELOADER
// ============================================================
window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.classList.add('hide');
    }, 600);
});

// ============================================================
// AOS ANIMATIONS
// ============================================================
AOS.init({
    duration: 800,
    once: true,
    offset: 60
});

// ============================================================
// NAVIGATION
// ============================================================
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active link on scroll
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-menu a:not(.nav-btn)');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const top = section.offsetTop - 120;
        if (window.scrollY >= top) {
            current = section.getAttribute('id');
        }
    });
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ============================================================
// APPOINTMENT FORM
// ============================================================
const appointmentForm = document.getElementById('appointmentForm');

appointmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const inputs = appointmentForm.querySelectorAll('input, select, textarea');
    let isValid = true;
    
    inputs.forEach(input => {
        if (input.hasAttribute('required') && !input.value.trim()) {
            isValid = false;
            input.style.borderColor = '#FF6B6B';
        } else {
            input.style.borderColor = '';
        }
    });

    if (!isValid) {
        alert('⚠️ Please fill in all required fields.');
        return;
    }

    // Email validation
    const email = appointmentForm.querySelector('input[type="email"]');
    if (email && email.value.trim()) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email.value.trim())) {
            alert('⚠️ Please enter a valid email address.');
            return;
        }
    }

    // Phone validation (basic)
    const phone = appointmentForm.querySelector('input[type="tel"]');
    if (phone && phone.value.trim()) {
        const phoneRegex = /^[0-9\-+() ]{10,15}$/;
        if (!phoneRegex.test(phone.value.trim())) {
            alert('⚠️ Please enter a valid phone number (10-15 digits).');
            return;
        }
    }

    // Success
    alert('✅ Appointment Booked Successfully!\n\nWe will contact you within 24 hours.');
    appointmentForm.reset();
});

// ============================================================
// SMOOTH SCROLL
// ============================================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================================
// DYNAMIC YEAR
// ============================================================
document.querySelector('.footer-bottom p:first-child')?.addEventListener('DOMContentLoaded', function() {
    const year = new Date().getFullYear();
    this.textContent = this.textContent.replace('2026', year);
});

console.log('🏥 MediCare Website Loaded Successfully!');
console.log('📧 Contact: sufyanrai06@gmail.com');
console.log('📱 Phone: 0304-0459682');