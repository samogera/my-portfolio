document.addEventListener("DOMContentLoaded", () => {
    // Mobile menu toggle
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.getElementById("nav-links");

    if (mobileMenu && navLinks) {
        mobileMenu.addEventListener("click", () => {
            navLinks.classList.toggle("active");
        });

        document.querySelectorAll("#nav-links a").forEach(link => {
            link.addEventListener("click", () => {
                navLinks.classList.remove("active");
            });
        });
    }

    // Typing effect
    const typingText = document.getElementById("typing-text");
    const texts = ["Hi, I'm Samuel Ogera", "I'm a Software Engineer", "I'm an Entrepreneur"];
    let textIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        if (typingText) {
            const currentText = texts[textIndex];

            if (isDeleting) {
                typingText.textContent = currentText.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50;
            } else {
                typingText.textContent = currentText.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100;
            }

            if (!isDeleting && charIndex === currentText.length) {
                isDeleting = true;
                typingSpeed = 1500; // Pause at end of text
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typingSpeed = 500; // Pause before typing next text
            }

            setTimeout(type, typingSpeed);
        }
    }

    setTimeout(type, 1000);

    // Project filter
    const filterButtons = document.querySelectorAll(".filter-btn");
    const projectCards = document.querySelectorAll(".project-card");

    if (filterButtons.length && projectCards.length) {
        filterButtons.forEach(button => {
            button.addEventListener("click", () => {
                filterButtons.forEach(btn => btn.classList.remove("active"));
                button.classList.add("active");

                const filter = button.dataset.filter;

                projectCards.forEach(card => {
                    card.style.display = filter === "all" || card.dataset.category === filter ? "block" : "none";
                });
            });
        });
    }

    // Form submission with redirect
    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Get form values
            const name = document.getElementById("name")?.value.trim();
            const email = document.getElementById("email")?.value.trim();
            const message = document.getElementById("message")?.value.trim();

            if (!name || !email || !message) {
                alert("Please fill all fields");
                return;
            }

            // Submit form
            this.submit();

            // Show success message
            alert("Thank you for your message! Redirecting back to the website...");

            // Redirect back to the homepage after 2 seconds
            setTimeout(() => {
                window.location.href = "/"; // Change "/" to your homepage URL if needed
            }, 2000);
        });
    }
});
// Smooth scroll for anchor links
const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');