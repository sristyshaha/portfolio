// ======================================
// SRISTY SHAHA PORTFOLIO
// ======================================

const mobileMenu = document.getElementById("mobile-menu");
const navigation = document.getElementById("navigation");


// Mobile navigation toggle.
if (mobileMenu && navigation) {
    mobileMenu.addEventListener("click", function () {
        const isOpen = navigation.classList.toggle("open");

        mobileMenu.setAttribute("aria-expanded", String(isOpen));

        mobileMenu.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';
    });
}


// Close the mobile menu when a navigation link is clicked.
document.querySelectorAll(".nav-link, .nav-resume").forEach(function (link) {
    link.addEventListener("click", function () {
        if (navigation) {
            navigation.classList.remove("open");
        }

        if (mobileMenu) {
            mobileMenu.setAttribute("aria-expanded", "false");
            mobileMenu.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });
});


// Highlight the navbar link for the visible section.
const sections = document.querySelectorAll(
    "#home, #about, #education, #skills, #projects, #interests, #contact"
);

const navLinks = document.querySelectorAll(".nav-link");

if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (!entry.isIntersecting) {
                    return;
                }

                const currentId = entry.target.id;

                navLinks.forEach(function (link) {
                    const isActive =
                        link.getAttribute("href") === "#" + currentId;

                    link.classList.toggle("active", isActive);
                });
            });
        },
        {
            rootMargin: "-25% 0px -60% 0px",
            threshold: 0
        }
    );

    sections.forEach(function (section) {
        observer.observe(section);
    });
}


// Automatically update the footer year.
const yearElement = document.getElementById("current-year");

if (yearElement) {
    yearElement.textContent = "© " + new Date().getFullYear();
}
