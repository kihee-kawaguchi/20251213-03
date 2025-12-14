// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {

// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const mainNav = document.querySelector('.main-nav');

if (mobileMenuToggle && mainNav) {
    mobileMenuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('open');
        mobileMenuToggle.classList.toggle('active');
    });

    // Close menu when clicking nav links
    const navLinks = document.querySelectorAll('.nav-list a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            mainNav.classList.remove('open');
            mobileMenuToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mainNav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
            mainNav.classList.remove('open');
            mobileMenuToggle.classList.remove('active');
        }
    });
}

// Carousel Functionality
class Carousel {
    constructor() {
        this.track = document.querySelector('.carousel-track');
        this.slides = Array.from(document.querySelectorAll('.carousel-slide'));
        this.prevBtn = document.querySelector('.carousel-btn.prev');
        this.nextBtn = document.querySelector('.carousel-btn.next');
        this.dotsContainer = document.querySelector('.carousel-dots');

        this.currentIndex = 0;
        this.autoPlayInterval = null;

        if (this.track && this.slides.length > 0) {
            this.init();
        }
    }

    init() {
        this.createDots();
        this.updateCarousel();
        this.attachEventListeners();
        this.startAutoPlay();
    }

    createDots() {
        this.slides.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.classList.add('carousel-dot');
            if (index === 0) dot.classList.add('active');
            dot.addEventListener('click', () => this.goToSlide(index));
            this.dotsContainer.appendChild(dot);
        });
        this.dots = Array.from(document.querySelectorAll('.carousel-dot'));
    }

    updateCarousel() {
        const slideWidth = this.slides[0].offsetWidth;
        this.track.style.transform = `translateX(-${this.currentIndex * slideWidth}px)`;

        // Update dots
        this.dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === this.currentIndex);
        });
    }

    goToSlide(index) {
        this.currentIndex = index;
        this.updateCarousel();
        this.resetAutoPlay();
    }

    nextSlide() {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.updateCarousel();
    }

    prevSlide() {
        this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
        this.updateCarousel();
    }

    attachEventListeners() {
        this.nextBtn.addEventListener('click', () => {
            this.nextSlide();
            this.resetAutoPlay();
        });

        this.prevBtn.addEventListener('click', () => {
            this.prevSlide();
            this.resetAutoPlay();
        });

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowLeft') {
                this.prevSlide();
                this.resetAutoPlay();
            } else if (e.key === 'ArrowRight') {
                this.nextSlide();
                this.resetAutoPlay();
            }
        });

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        this.track.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        this.track.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            this.handleSwipe();
        });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                this.nextSlide();
                this.resetAutoPlay();
            }
            if (touchEndX > touchStartX + 50) {
                this.prevSlide();
                this.resetAutoPlay();
            }
        };

        this.handleSwipe = handleSwipe;

        // Pause autoplay on hover
        this.track.addEventListener('mouseenter', () => this.stopAutoPlay());
        this.track.addEventListener('mouseleave', () => this.startAutoPlay());

        // Update on window resize
        window.addEventListener('resize', () => this.updateCarousel());
    }

    startAutoPlay() {
        this.autoPlayInterval = setInterval(() => {
            this.nextSlide();
        }, 5000);
    }

    stopAutoPlay() {
        if (this.autoPlayInterval) {
            clearInterval(this.autoPlayInterval);
            this.autoPlayInterval = null;
        }
    }

    resetAutoPlay() {
        this.stopAutoPlay();
        this.startAutoPlay();
    }
}

// Email Signup Form
const signupForm = document.getElementById('signupForm');
const successMessage = document.getElementById('successMessage');

if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const emailInput = document.getElementById('email');
        const email = emailInput.value.trim();

        if (!email || !isValidEmail(email)) {
            alert('有効なメールアドレスを入力してください。');
            return;
        }

        // Simulate form submission (replace with actual API call)
        try {
            // Disable submit button
            const submitBtn = signupForm.querySelector('.submit-btn');
            submitBtn.disabled = true;
            submitBtn.textContent = '送信中...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            // Show success message
            successMessage.classList.add('show');
            emailInput.value = '';

            // Hide success message after 5 seconds
            setTimeout(() => {
                successMessage.classList.remove('show');
            }, 5000);

            // Re-enable submit button
            submitBtn.disabled = false;
            submitBtn.textContent = 'サインアップ';

        } catch (error) {
            console.error('Signup error:', error);
            alert('エラーが発生しました。もう一度お試しください。');

            const submitBtn = signupForm.querySelector('.submit-btn');
            submitBtn.disabled = false;
            submitBtn.textContent = 'サインアップ';
        }
    });
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.site-header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        header.style.boxShadow = 'none';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// Initialize carousel
const carousel = new Carousel();

// Lazy loading for images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance: Preload next carousel image
if (carousel.slides && carousel.slides.length > 1) {
    const preloadNextImage = () => {
        const nextIndex = (carousel.currentIndex + 1) % carousel.slides.length;
        const nextImg = carousel.slides[nextIndex].querySelector('img');
        if (nextImg && !nextImg.complete) {
            const img = new Image();
            img.src = nextImg.src;
        }
    };

    preloadNextImage();
    setInterval(preloadNextImage, 5000);
}

// Add loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Console log for developers
console.log('%c🌸 M&F Landing Page', 'font-size: 20px; font-weight: bold; color: #000;');
console.log('%cBuilt with care by Miyabi Framework', 'font-size: 12px; color: #666;');

}); // End of DOMContentLoaded
