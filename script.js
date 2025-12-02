document.addEventListener("DOMContentLoaded", () => {
  const mobileToggle = document.querySelector(".mobile-nav-toggle");
  const mainNav = document.getElementById("main-nav");

  if (!mobileToggle || !mainNav) {
    return;
  }

  mobileToggle.addEventListener("click", (e) => {
    e.stopPropagation();
    mainNav.classList.toggle("open");
    const expanded = mainNav.classList.contains("open");
    mobileToggle.setAttribute("aria-expanded", String(expanded));
  });

  mainNav.querySelectorAll(".has-dropdown > a").forEach((link) => {
    link.addEventListener("click", (e) => {
      if (window.innerWidth > 900) return;

      e.preventDefault();

      const parent = e.currentTarget.closest(".has-dropdown");
      if (!parent) return;

      if (parent.classList.contains("open")) {
        parent.classList.remove("open");
      } else {
        mainNav.querySelectorAll(".has-dropdown.open").forEach((el) => {
          el.classList.remove("open");
        });
        parent.classList.add("open");
      }
    });
  });

  document.addEventListener("click", (e) => {
    if (window.innerWidth > 900) return;

    if (!mainNav.contains(e.target) && !mobileToggle.contains(e.target)) {
      mainNav.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
    }

    mainNav.querySelectorAll(".has-dropdown.open").forEach((el) => {
      const dropdown = el.querySelector(".dropdown");
      if (dropdown && !dropdown.contains(e.target) && !el.contains(e.target)) {
        el.classList.remove("open");
      }
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 900) {
      mainNav.classList.remove("open");
      mobileToggle.setAttribute("aria-expanded", "false");
      mainNav.querySelectorAll(".has-dropdown.open").forEach((el) => {
        el.classList.remove("open");
      });
    }
  });
});
