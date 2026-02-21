/**
 * Mohsenul Kabir Mithun — Modern Portfolio
 * Enhanced JavaScript with particles, smooth animations & modern interactions
 */

(function () {
  "use strict";

  /* ===== Mobile Navigation Toggle (mobile only ≤480px) ===== */
  const hamburger = document.querySelector(".mobile-nav-toggle");
  const navmenu = document.querySelector("#navmenu");

  if (hamburger && navmenu) {
    // Toggle menu on hamburger click
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      navmenu.classList.toggle("active");
      hamburger.innerHTML = navmenu.classList.contains("active") ? "✕" : "☰";
      document.body.style.overflow = navmenu.classList.contains("active")
        ? "hidden"
        : "";
    });

    // Close menu when clicking on a link
    navmenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navmenu.classList.remove("active");
        hamburger.innerHTML = "☰";
        document.body.style.overflow = "";
      });
    });

    // Close menu when clicking outside
    document.addEventListener("click", (e) => {
      if (
        window.innerWidth <= 480 &&
        navmenu.classList.contains("active") &&
        !navmenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navmenu.classList.remove("active");
        hamburger.innerHTML = "☰";
        document.body.style.overflow = "";
      }
    });

    // Reset menu state when resizing to tablet/desktop
    window.addEventListener("resize", () => {
      if (window.innerWidth > 480) {
        navmenu.classList.remove("active");
        hamburger.innerHTML = "☰";
        document.body.style.overflow = "";
      }
    });
  }

  /* ===== Scroll smooth behavior ===== */
  document.querySelectorAll("#navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      // Smooth scroll is handled by CSS scroll-behavior
    });
  });

  /* ===== Toggle mobile nav dropdowns ===== */
  document.querySelectorAll(".navmenu .toggle-dropdown").forEach((item) => {
    item.addEventListener("click", function (e) {
      e.preventDefault();
      this.parentNode.classList.toggle("active");
      this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
      e.stopImmediatePropagation();
    });
  });

  /* ===== Preloader ===== */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.opacity = "0";
      setTimeout(() => preloader.remove(), 600);
    });
  }

  /* ===== Scroll Top Button ===== */
  const scrollTop = document.querySelector(".scroll-top");
  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    }
  }
  if (scrollTop) {
    scrollTop.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /* ===== AOS Init ===== */
  function aosInit() {
    AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      mirror: false,
      offset: 50,
    });
  }
  window.addEventListener("load", aosInit);

  /* ===== Typed.js Init ===== */
  const selectTyped = document.querySelector(".typed");
  if (selectTyped) {
    let typed_strings = selectTyped.getAttribute("data-typed-items");
    typed_strings = typed_strings.split(",");
    new Typed(".typed", {
      strings: typed_strings,
      loop: true,
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 2000,
      cursorChar: "|",
    });
  }

  /* ===== PureCounter Init ===== */
  if (typeof PureCounter !== "undefined") {
    new PureCounter();
  }

  /* ===== Skills Animation ===== */
  document.querySelectorAll(".skills-animation").forEach((item) => {
    new Waypoint({
      element: item,
      offset: "80%",
      handler: function () {
        item.querySelectorAll(".progress .progress-bar").forEach((el) => {
          el.style.width = el.getAttribute("aria-valuenow") + "%";
        });
      },
    });
  });

  /* ===== GLightbox Init ===== */
  const glightbox = GLightbox({
    selector: ".glightbox",
    touchNavigation: true,
    loop: true,
    zoomable: true,
  });

  /* ===== Isotope Layout & Filters ===== */
  document.querySelectorAll(".isotope-layout").forEach(function (isotopeItem) {
    let layout = isotopeItem.getAttribute("data-layout") ?? "masonry";
    let filter = isotopeItem.getAttribute("data-default-filter") ?? "*";
    let sort = isotopeItem.getAttribute("data-sort") ?? "original-order";

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector(".isotope-container"), function () {
      initIsotope = new Isotope(
        isotopeItem.querySelector(".isotope-container"),
        {
          itemSelector: ".isotope-item",
          layoutMode: layout,
          filter: filter,
          sortBy: sort,
        },
      );
    });

    isotopeItem
      .querySelectorAll(".isotope-filters li")
      .forEach(function (filterBtn) {
        filterBtn.addEventListener(
          "click",
          function () {
            isotopeItem
              .querySelector(".isotope-filters .filter-active")
              .classList.remove("filter-active");
            this.classList.add("filter-active");
            initIsotope.arrange({ filter: this.getAttribute("data-filter") });
            if (typeof aosInit === "function") aosInit();
          },
          false,
        );
      });
  });

  /* ===== Swiper Init ===== */
  function initSwiper() {
    document.querySelectorAll(".init-swiper").forEach(function (swiperElement) {
      let config = JSON.parse(
        swiperElement.querySelector(".swiper-config").innerHTML.trim(),
      );
      if (swiperElement.classList.contains("swiper-tab")) {
        initSwiperWithCustomPagination(swiperElement, config);
      } else {
        new Swiper(swiperElement, config);
      }
    });
  }
  window.addEventListener("load", initSwiper);

  /* ===== Hash Link Scroll Fix ===== */
  window.addEventListener("load", function () {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: "smooth",
          });
        }, 100);
      }
    }
  });

  /* ===== Navmenu Scrollspy ===== */
  const navmenulinks = document.querySelectorAll(".navmenu a");
  function navmenuScrollspy() {
    navmenulinks.forEach((link) => {
      if (!link.hash) return;
      let section = document.querySelector(link.hash);
      if (!section) return;
      let position = window.scrollY + 200;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        document
          .querySelectorAll(".navmenu a.active")
          .forEach((a) => a.classList.remove("active"));
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }
  window.addEventListener("load", navmenuScrollspy);
  document.addEventListener("scroll", navmenuScrollspy);

  /* ===== Hero Floating Particles ===== */
  function createParticles() {
    const container = document.getElementById("heroParticles");
    if (!container) return;

    // Sky blue · cyan · light blue — Light theme palette
    const skyBlueColors = [
      [59, 130, 246], // Sky blue
      [59, 130, 246], // sky blue (higher weight)
      [14, 165, 233], // cyan
      [6, 182, 212], // turquoise
      [219, 234, 254], // light blue
    ];
    const particleCount = 35;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement("div");
      particle.className = "hero-particle";

      const size = Math.random() * 3.5 + 0.8;
      const x = Math.random() * 100;
      const y = Math.random() * 100;
      const duration = Math.random() * 22 + 10;
      const delay = Math.random() * 10;
      const opacity = Math.random() * 0.28 + 0.08;
      const [r, g, b] =
        skyBlueColors[Math.floor(Math.random() * skyBlueColors.length)];

      particle.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        background: rgba(${r}, ${g}, ${b}, ${opacity});
        border-radius: 50%;
        left: ${x}%;
        top: ${y}%;
        animation: particleFloat ${duration}s ${delay}s ease-in-out infinite;
        pointer-events: none;
      `;
      container.appendChild(particle);
    }

    // Add particle animation keyframes
    if (!document.getElementById("particleStyles")) {
      const style = document.createElement("style");
      style.id = "particleStyles";
      style.textContent = `
        @keyframes particleFloat {
          0%, 100% { transform: translate(0, 0) scale(1); opacity: var(--start-opacity, 0.2); }
          25% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.2); }
          50% { transform: translate(${Math.random() * 80 - 40}px, ${Math.random() * 80 - 40}px) scale(0.8); opacity: 0.4; }
          75% { transform: translate(${Math.random() * 60 - 30}px, ${Math.random() * 60 - 30}px) scale(1.1); }
        }
      `;
      document.head.appendChild(style);
    }
  }
  window.addEventListener("load", createParticles);

  /* ===== Smooth Section Reveal on Scroll ===== */
  function revealOnScroll() {
    const sections = document.querySelectorAll(".section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("section-visible");
          }
        });
      },
      { threshold: 0.05 },
    );

    sections.forEach((section) => observer.observe(section));
  }
  window.addEventListener("load", revealOnScroll);

  /* ===== Skill Card Tilt Effect ===== */
  document.querySelectorAll(".skill-card").forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = (y - centerY) / 20;
      const rotateY = (centerX - x) / 20;
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform =
        "perspective(1000px) rotateX(0) rotateY(0) translateY(0)";
    });
  });

  /* ===== Magnetic Effect on CTA Buttons ===== */
  document
    .querySelectorAll(".btn-cta-primary, .btn-cta-secondary")
    .forEach((btn) => {
      btn.addEventListener("mousemove", (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = `translate(${x * 0.15}px, ${y * 0.15}px) translateY(-2px)`;
      });

      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });
})();
