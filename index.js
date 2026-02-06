// LunCo Website - JavaScript
// Smooth scrolling, navigation, and analytics

// ============================================
// Our Story Toggle Function
// ============================================
function toggleStory() {
    const moreContent = document.getElementById('story-more');
    const toggleBtn = document.getElementById('story-toggle-btn');

    if (moreContent.style.display === 'none') {
        moreContent.style.display = 'block';
        toggleBtn.textContent = 'Show less ↑';
    } else {
        moreContent.style.display = 'none';
        toggleBtn.textContent = 'Read the full story →';
    }
}

// ============================================
// Smooth Scroll Navigation
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const navHeight = document.querySelector('.nav').offsetHeight;
            // Calculate absolute position from top of document
            const targetPosition = target.getBoundingClientRect().top + window.scrollY - navHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });

            // Track navigation clicks
            if (typeof gtag !== 'undefined') {
                gtag('event', 'navigation_click', {
                    'section': this.getAttribute('href')
                });
            }
        }
    });
});

// ============================================
// Active Navigation State
// ============================================
const sections = document.querySelectorAll('.section, .hero');
const navLinks = document.querySelectorAll('.nav-link, .about-nav-link');

function updateActiveNav() {
    let current = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

// ============================================
// Scroll Animations
// ============================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';

            // Track section views
            if (typeof gtag !== 'undefined') {
                gtag('event', 'section_view', {
                    'section_id': entry.target.id || 'unknown'
                });
            }
        }
    });
}, observerOptions);

// Observe all sections and cards
document.querySelectorAll('.section:not(.about-section), .product-card, .team-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ============================================
// About Section Specific Animations
// ============================================
const aboutSection = document.querySelector('.about-section');
const aboutSubsections = document.querySelectorAll('.about-subsection');
const aboutNavLinks = document.querySelectorAll('.about-nav-link');

// Glow effect when About section is in view
if (aboutSection) {
    const aboutObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                aboutSection.classList.add('glow-active');
            } else {
                aboutSection.classList.remove('glow-active');
            }
        });
    }, { threshold: 0.1 });

    aboutObserver.observe(aboutSection);
}

// Subsection fade-in animations
const subsectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.2, rootMargin: '-50px 0px -100px 0px' });

aboutSubsections.forEach(section => subsectionObserver.observe(section));

// Active about-nav-link tracking
function updateAboutNav() {
    let currentSubsection = '';
    const scrollPosition = window.pageYOffset + 200;

    aboutSubsections.forEach(subsection => {
        const subsectionTop = subsection.offsetTop;
        const subsectionHeight = subsection.offsetHeight;

        if (scrollPosition >= subsectionTop && scrollPosition < subsectionTop + subsectionHeight) {
            currentSubsection = subsection.getAttribute('id');
        }
    });

    aboutNavLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSubsection}`) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateAboutNav);

// ============================================
// Navigation Background on Scroll
// ============================================
const nav = document.querySelector('.nav');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.background = 'rgba(255, 255, 255, 0.95)';
        nav.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.05)';
    } else {
        nav.style.background = 'rgba(255, 255, 255, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

// ============================================
// Analytics Event Tracking
// ============================================

// Track CTA button clicks
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function () {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'cta_click', {
                'button_text': this.textContent.trim(),
                'button_location': this.closest('section')?.id || 'unknown'
            });
        }
    });
});

// Track product card interactions
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('mouseenter', function () {
        const productTitle = this.querySelector('.product-title')?.textContent;
        if (typeof gtag !== 'undefined' && productTitle) {
            gtag('event', 'product_interest', {
                'product_name': productTitle
            });
        }
    });
});

// Track time spent on page
let startTime = Date.now();
let maxScroll = 0;

window.addEventListener('scroll', () => {
    const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    maxScroll = Math.max(maxScroll, scrollPercent);
});

window.addEventListener('beforeunload', () => {
    const timeSpent = Math.round((Date.now() - startTime) / 1000);
    if (typeof gtag !== 'undefined') {
        gtag('event', 'session_summary', {
            'time_spent_seconds': timeSpent,
            'max_scroll_percent': Math.round(maxScroll)
        });
    }
});

// ============================================
// Form Submission Tracking
// ============================================
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function (e) {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'form_submit', {
                'form_location': this.closest('section')?.id || 'footer'
            });
        }
    });
});

// ============================================
// External Link Tracking
// ============================================
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    link.addEventListener('click', function () {
        if (typeof gtag !== 'undefined') {
            gtag('event', 'external_link_click', {
                'link_url': this.href,
                'link_text': this.textContent.trim()
            });
        }
    });
});

// ============================================
// Console Welcome Message
// ============================================
console.log('%c🌙 Welcome to LunCo', 'font-size: 24px; font-weight: bold; color: #4953D8;');
console.log('%cBuilding the gateway to the solar system', 'font-size: 14px; color: #636366;');
console.log('%cInterested in contributing? Visit https://tally.so/r/3jX6aE', 'font-size: 12px; color: #00F0FF;');
