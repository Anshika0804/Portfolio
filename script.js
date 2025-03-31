console.log("Script loaded");
document.addEventListener("DOMContentLoaded", function () {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');

        if (body.classList.contains('dark-mode')) {
            themeIcon.classList.remove('fa-moon');
            themeIcon.classList.add('fa-sun');
        } else {
            themeIcon.classList.remove('fa-sun');
            themeIcon.classList.add('fa-moon');
        }
    });

    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileMenuIcon = mobileMenuBtn.querySelector('i');

    mobileMenuBtn.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');

        if (mobileMenu.classList.contains('active')) {
            mobileMenuIcon.classList.remove('fa-bars');
            mobileMenuIcon.classList.add('fa-times');
        } else {
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        }
    });

    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('.nav-link');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenuIcon.classList.remove('fa-times');
            mobileMenuIcon.classList.add('fa-bars');
        });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll Animation for Elements
    const fadeElements = document.querySelectorAll('.fade-up');

    const checkFade = () => {
        fadeElements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementPosition < windowHeight - 50) {
                element.classList.add('active');
            }
        });
    };

    // Run on initial load
    checkFade();

    // Run on scroll
    window.addEventListener('scroll', checkFade);

    //Certificates
    console.log("✅ JavaScript Loaded!"); // Check if script runs

    const certCard = document.getElementById("certificates-box");
    const certList = document.getElementById("certificate-list");
    const flipBox = document.getElementById("flip-box");

    if (!certCard || !certList || !flipBox) {
        console.error("❌ Elements not found! Check your HTML IDs.");
    } else {
        certCard.addEventListener("click", () => {
            console.log("✅ Certificates clicked!"); // Debugging

            // Apply flip effect
            flipBox.classList.add("flipped");

            // Show certificate list after flip animation completes (600ms)
            setTimeout(() => {
                certList.classList.add("show-list");
            }, 600);

            // Hide list & flip back after 10 sec
            setTimeout(() => {
                certList.classList.remove("show-list");
                flipBox.classList.remove("flipped"); // Reset flip
                console.log("✅ List hidden, card reappeared");
            }, 5000);
        });
    }

    // Contact Form Submission (with basic validation)
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        // Basic validation
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (!name || !email || !message) {
            alert('Please fill in all required fields.');
            return;
        }

        // Here you would normally send the form data to a server
        // For this example, we'll just show a success message
        alert('Thank you! Your message has been sent successfully.');
        contactForm.reset();
    });
});

