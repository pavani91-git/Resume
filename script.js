document.addEventListener("DOMContentLoaded", function() {
    alert("Welcome to my portfolio!");
});
document.addEventListener("DOMContentLoaded", function () {

    // Scroll-to-Top Button Functionality
    const scrollTopBtn = document.querySelector(".scroll-top-btn");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            scrollTopBtn.style.display = "block";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });

    // Simple Fade-in Animation for Sections
    const sections = document.querySelectorAll(".animate");
    
    function checkSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }
    
    window.addEventListener("scroll", checkSections);
    checkSections(); // Run once on page load
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll(".animate.slide-up");
    
    function checkSections() {
        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (sectionTop < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", checkSections);
    checkSections(); // Run once on page load
});

