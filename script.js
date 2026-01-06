
document.addEventListener('DOMContentLoaded', () => {
    // --- Navigation Scroll Effect ---
    const header = document.querySelector('header');
    const updateHeader = () => {
        if (window.scrollY > 20) {
            header.classList.add('bg-background/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-border');
            header.classList.remove('bg-transparent');

            // Update link colors for scrolled state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-white');
                link.classList.add('text-foreground');
            });
            document.querySelector('.menu-btn').classList.remove('text-white');
            document.querySelector('.menu-btn').classList.add('text-foreground');

            // Update company name color for scrolled state
            const companyName = document.querySelector('.company-name');
            if (companyName) {
                companyName.classList.remove('text-white');
                companyName.classList.add('text-foreground');
            }
            const companySuffix = document.querySelector('.company-name-suffix');
            if (companySuffix) {
                companySuffix.classList.remove('text-slate-400');
                companySuffix.classList.add('text-slate-500');
            }

        } else {
            header.classList.remove('bg-background/95', 'backdrop-blur-md', 'shadow-md', 'border-b', 'border-border');
            header.classList.add('bg-transparent');

            // Update link colors for transparent state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.add('text-white');
                link.classList.remove('text-foreground');
            });
            document.querySelector('.menu-btn').classList.add('text-white');
            document.querySelector('.menu-btn').classList.remove('text-foreground');

            // Restore company name color for transparent state
            const companyName = document.querySelector('.company-name');
            if (companyName) {
                companyName.classList.add('text-white');
                companyName.classList.remove('text-foreground');
            }
            const companySuffix = document.querySelector('.company-name-suffix');
            if (companySuffix) {
                companySuffix.classList.add('text-slate-400');
                companySuffix.classList.remove('text-slate-500');
            }
        }
    };
    window.addEventListener('scroll', updateHeader);
    updateHeader(); // Init

    // --- Mobile Menu ---
    const menuBtn = document.querySelector('.menu-btn');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuIcon = menuBtn.querySelector('.menu-icon');
    const closeIcon = menuBtn.querySelector('.close-icon');

    menuBtn.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('opacity-0');
        if (isOpen) {
            // Close
            mobileMenu.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        } else {
            // Open
            mobileMenu.classList.remove('opacity-0', '-translate-y-4', 'pointer-events-none');
            mobileMenu.classList.add('opacity-100', 'translate-y-0');
            menuIcon.style.display = 'none';
            closeIcon.style.display = 'block';
        }
    });

    // Close mobile menu on link click
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.add('opacity-0', '-translate-y-4', 'pointer-events-none');
            mobileMenu.classList.remove('opacity-100', 'translate-y-0');
            menuIcon.style.display = 'block';
            closeIcon.style.display = 'none';
        });
    });

    // --- Smooth Scroll ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Animation on Scroll ---
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const delay = element.getAttribute('data-delay') || '0s';
                element.style.animationDelay = delay;

                if (element.classList.contains('fade-in-up-trigger')) {
                    element.classList.add('animate-fade-in-up');
                    element.style.opacity = '1';
                } else if (element.classList.contains('fade-in-trigger')) {
                    element.classList.add('animate-fade-in');
                    element.style.opacity = '1';
                } else if (element.classList.contains('scale-in-trigger')) {
                    element.classList.add('animate-scale-in');
                    element.style.opacity = '1';
                }

                observer.unobserve(element);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });

    // --- Contact Form ---
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerHTML;

            btn.disabled = true;
            btn.textContent = 'Sending...';

            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));

            alert('Message sent successfully! We will get back to you within 24 hours.');
            form.reset();

            btn.disabled = false;
            btn.innerHTML = originalText;
        });
    }

    // --- Hero Carousel ---
    const carousel = document.getElementById('hero-carousel');
    if (carousel) {
        const slides = carousel.children;
        const prevBtn = document.getElementById('prev-slide');
        const nextBtn = document.getElementById('next-slide');
        const indicators = document.querySelectorAll('.slide-indicator');
        let currentIndex = 0;
        let interval;
        const totalSlides = slides.length;

        const updateSlide = (index) => {
            if (index < 0) currentIndex = totalSlides - 1;
            else if (index >= totalSlides) currentIndex = 0;
            else currentIndex = index;

            carousel.style.transform = `translateX(-${currentIndex * 100}%)`;

            // Update indicators
            indicators.forEach((dot, idx) => {
                if (idx === currentIndex) {
                    dot.classList.remove('bg-white/50');
                    dot.classList.add('bg-white', 'scale-125');
                } else {
                    dot.classList.add('bg-white/50');
                    dot.classList.remove('bg-white', 'scale-125');
                }
            });
        };

        const startAutoSlide = () => {
            interval = setInterval(() => {
                updateSlide(currentIndex + 1);
            }, 5000);
        };

        const resetAutoSlide = () => {
            clearInterval(interval);
            startAutoSlide();
        };

        // Event Listeners
        prevBtn.addEventListener('click', () => {
            updateSlide(currentIndex - 1);
            resetAutoSlide();
        });

        nextBtn.addEventListener('click', () => {
            updateSlide(currentIndex + 1);
            resetAutoSlide();
        });

        indicators.forEach((dot, idx) => {
            dot.addEventListener('click', () => {
                updateSlide(idx);
                resetAutoSlide();
            });
        });

        // Touch/Swipe Support
        let touchStartX = 0;
        let touchEndX = 0;

        carousel.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        }, { passive: true });

        carousel.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        }, { passive: true });

        const handleSwipe = () => {
            if (touchEndX < touchStartX - 50) {
                // Swipe Left (Next)
                updateSlide(currentIndex + 1);
                resetAutoSlide();
            }
            if (touchEndX > touchStartX + 50) {
                // Swipe Right (Prev)
                updateSlide(currentIndex - 1);
                resetAutoSlide();
            }
        };

        // Init
        updateSlide(0);
        startAutoSlide();
    }
    lucide.createIcons();
});
