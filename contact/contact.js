document.addEventListener("DOMContentLoaded", () => {

    const contactForm = document.getElementById("contactForm");
    const popup = document.getElementById("successPopup");

    if (contactForm && popup) {
        contactForm.addEventListener("submit", (e) => {
            e.preventDefault();
            popup.style.display = "flex";
            contactForm.reset();
        });

   
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                popup.style.display = "none";
            }
        });
    }

   
    const mobileToggle = document.querySelector(".mobile-nav-toggle");
    const mainNav = document.getElementById("main-nav") || document.querySelector(".main-nav");

    if (mobileToggle && mainNav) {
        const dropdownParents = mainNav.querySelectorAll(".has-dropdown");

        mobileToggle.addEventListener("click", (e) => {
            e.stopPropagation();
            mainNav.classList.toggle("open");

            const isOpen = mainNav.classList.contains("open");
            mobileToggle.setAttribute("aria-expanded", String(isOpen));
        });

   
        dropdownParents.forEach((parent) => {
            const link = parent.querySelector("a");
            if (!link) return;

            link.addEventListener("click", (e) => {
                if (window.innerWidth > 900) return; 

                e.preventDefault();

        
                dropdownParents.forEach((p) => {
                    if (p !== parent) p.classList.remove("open");
                });

                parent.classList.toggle("open");
            });
        });

       
        document.addEventListener("click", (e) => {
            if (window.innerWidth > 900) return;

            const target = e.target;

            if (!mainNav.contains(target) && !mobileToggle.contains(target)) {
                mainNav.classList.remove("open");
                mobileToggle.setAttribute("aria-expanded", "false");
            }

     
            dropdownParents.forEach((p) => p.classList.remove("open"));
        });
    }

});


function closePopup() {
    const popup = document.getElementById("successPopup");
    if (popup) popup.style.display = "none";
}
