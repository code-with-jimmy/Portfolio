/* =========================
   MOBILE NAVBAR
========================= */

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

menuBtn.addEventListener("click", function (e) {
e.stopPropagation()
    mobileNav.classList.toggle("show");

    const icon = menuBtn.querySelector("i");

    if (mobileNav.classList.contains("show")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


/* CLOSE MOBILE NAV
   WHEN LINK IS CLICKED
*/

const mobileLinks =
    document.querySelectorAll(".mobile-nav a");

mobileLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        mobileNav.classList.remove("show");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});

document.addEventListener("click", () => {
        mobileNav.classList.remove("show");

    const icon = menuBtn.querySelector("i");

    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");

  
})



/* =========================
   PROJECT FILTER
========================= */

const filterButtons =
    document.querySelectorAll(".filter-btn");

const projectCards =
    document.querySelectorAll(".project-card");


filterButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        /* Remove active from all buttons */

        filterButtons.forEach(function(btn) {
            btn.classList.remove("active");
        });

        /* Add active to clicked button */

        button.classList.add("active");

        const filter =
            button.getAttribute("data-filter");


        projectCards.forEach(function(card) {

            const category =
                card.getAttribute("data-category");


            if (
                filter === "all" ||
                category === filter
            ) {

                card.classList.remove("hide");

            } else {

                card.classList.add("hide");

            }

        });

    });

});


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");

const formMessage =
    document.getElementById("formMessage");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        formMessage.textContent =
            "Please fill all required fields.";

        formMessage.style.color = "#f87171";

        return;
    }


    formMessage.textContent =
        "Message ready! Connect this form to a backend/email service.";

    formMessage.style.color = "#4ade80";


    contactForm.reset();

});


/* =========================
   ACTIVE NAV LINK
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".desktop-nav a");


window.addEventListener("scroll", function() {

    let current = "";

    sections.forEach(function(section) {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});
