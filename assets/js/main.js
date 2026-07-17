/**
 * Mohsenul Kabir Mithun — Portfolio
 */

(function () {
  "use strict";

  /* ── Mobile Navigation ────────────────────────────────────── */
  const hamburger = document.querySelector(".mobile-nav-toggle");
  const navmenu = document.querySelector("#navmenu");

  if (hamburger && navmenu) {
    hamburger.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      navmenu.classList.toggle("active");
      hamburger.innerHTML = navmenu.classList.contains("active") ? "✕" : "☰";
      document.body.style.overflow = navmenu.classList.contains("active") ? "hidden" : "";
    });

    navmenu.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navmenu.classList.remove("active");
        hamburger.innerHTML = "☰";
        document.body.style.overflow = "";
      });
    });

    document.addEventListener("click", (e) => {
      if (
        window.innerWidth <= 1024 &&
        navmenu.classList.contains("active") &&
        !navmenu.contains(e.target) &&
        !hamburger.contains(e.target)
      ) {
        navmenu.classList.remove("active");
        hamburger.innerHTML = "☰";
        document.body.style.overflow = "";
      }
    });

    window.addEventListener("resize", () => {
      if (window.innerWidth > 1024) {
        navmenu.classList.remove("active");
        hamburger.innerHTML = "☰";
        document.body.style.overflow = "";
      }
    });
  }

  /* ── Preloader ────────────────────────────────────────────── */
  const preloader = document.querySelector("#preloader");
  if (preloader) {
    window.addEventListener("load", () => {
      preloader.style.opacity = "0";
      setTimeout(() => preloader.remove(), 600);
    });
  }

  /* ── Scroll-to-top button ─────────────────────────────────── */
  const scrollTopBtn = document.querySelector(".scroll-top");

  function toggleScrollTop() {
    if (!scrollTopBtn) return;
    scrollTopBtn.classList.toggle("active", window.scrollY > 120);
  }

  if (scrollTopBtn) {
    scrollTopBtn.addEventListener("click", (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }
  window.addEventListener("load", toggleScrollTop);
  document.addEventListener("scroll", toggleScrollTop);

  /* ── Navmenu scrollspy ────────────────────────────────────── */
  const navLinks = document.querySelectorAll(".navmenu a");

  function navScrollspy() {
    const scrollPos = window.scrollY + 120;
    navLinks.forEach((link) => {
      if (!link.hash) return;
      const section = document.querySelector(link.hash);
      if (!section) return;
      const isActive =
        scrollPos >= section.offsetTop &&
        scrollPos <= section.offsetTop + section.offsetHeight;
      link.classList.toggle("active", isActive);
    });
  }

  window.addEventListener("load", navScrollspy);
  document.addEventListener("scroll", navScrollspy);

  /* ── Hash scroll fix ──────────────────────────────────────── */
  window.addEventListener("load", () => {
    if (window.location.hash) {
      const target = document.querySelector(window.location.hash);
      if (target) {
        setTimeout(() => {
          window.scrollTo({ top: target.offsetTop - 80, behavior: "smooth" });
        }, 100);
      }
    }
  });

  /* ── EmailJS Contact Form ─────────────────────────────────── */
  const EMAILJS_SERVICE_ID  = "service_3s1jq75";
  const EMAILJS_TEMPLATE_ID = "template_su5arxp";
  const EMAILJS_PUBLIC_KEY  = "ZYrpQKaq0-e-S20f-";

  if (typeof emailjs !== "undefined") {
    emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  }

  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    const submitBtn = contactForm.querySelector(".btn-submit");

    const fieldRules = [
      {
        field: contactForm.querySelector("[name='name']"),
        error: document.getElementById("err-name"),
        validate: (v) => v.trim() !== "",
      },
      {
        field: contactForm.querySelector("[name='email']"),
        error: document.getElementById("err-email"),
        validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim()),
      },
      {
        field: contactForm.querySelector("[name='subject']"),
        error: document.getElementById("err-subject"),
        validate: (v) => v.trim() !== "",
      },
      {
        field: contactForm.querySelector("[name='message']"),
        error: document.getElementById("err-message"),
        validate: (v) => v.trim() !== "",
      },
    ];

    function validateField(rule) {
      const valid = rule.validate(rule.field.value);
      rule.field.classList.toggle("is-invalid", !valid);
      if (rule.error) rule.error.classList.toggle("visible", !valid);
      return valid;
    }

    fieldRules.forEach((rule) => {
      rule.field.addEventListener("blur", () => validateField(rule));
      rule.field.addEventListener("input", () => {
        if (rule.field.classList.contains("is-invalid")) validateField(rule);
      });
    });

    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const allValid = fieldRules.map((r) => validateField(r)).every(Boolean);
      if (!allValid) return;

      const loading    = contactForm.querySelector(".loading");
      const errorBox   = contactForm.querySelector(".error-message");
      const successBox = contactForm.querySelector(".sent-message");

      errorBox.style.display   = "none";
      successBox.style.display = "none";
      loading.style.display    = "block";
      submitBtn.disabled = true;

      const templateParams = {
        name:    contactForm.querySelector("[name='name']").value.trim(),
        email:   contactForm.querySelector("[name='email']").value.trim(),
        subject: contactForm.querySelector("[name='subject']").value.trim(),
        message: contactForm.querySelector("[name='message']").value.trim(),
      };

      try {
        const response = await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams
        );
        if (response.status === 200) {
          successBox.style.display = "block";
          contactForm.reset();
        } else {
          throw new Error(`Status: ${response.status}`);
        }
      } catch (err) {
        errorBox.textContent = `Send failed. Please email directly: mohsenulkabirmi8486@gmail.com`;
        errorBox.style.display = "block";
      } finally {
        loading.style.display = "none";
        submitBtn.disabled = false;
      }
    });
  }

  /* ── Section fade-in on scroll ───────────────────────────── */
  const sections = document.querySelectorAll(".section");
  if (sections.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("section-visible");
        });
      },
      { threshold: 0.04 }
    );
    sections.forEach((s) => observer.observe(s));
  }

  /* ── Service Detail Overlay ───────────────────────────────── */
  const overlay     = document.getElementById("serviceOverlay");
  const sdoClose    = document.getElementById("sdoClose");
  const sdoTitle    = document.getElementById("sdoTitle");
  const sdoContact  = document.getElementById("sdoContactLink");

  const panelTitles = {
    backend:  "Backend Development",
    python:   "Python & Automation",
    devops:   "DevOps",
    frontend: "Frontend (React)",
  };

  function openServiceOverlay(serviceId) {
    if (!overlay) return;

    // Activate the correct panel
    switchPanel(serviceId);

    // Update breadcrumb title
    if (sdoTitle) sdoTitle.textContent = panelTitles[serviceId] || serviceId;

    // Open overlay
    overlay.classList.add("open");
    overlay.setAttribute("aria-hidden", "false");
    document.body.style.overflow = "hidden";
  }

  function closeServiceOverlay() {
    if (!overlay) return;
    overlay.classList.remove("open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
  }

  function switchPanel(serviceId) {
    // Deactivate all nav buttons
    overlay.querySelectorAll(".sdo-nav-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.panel === serviceId);
    });

    // Show the correct panel
    overlay.querySelectorAll(".sdo-panel").forEach((panel) => {
      panel.classList.toggle("active", panel.dataset.panel === serviceId);
    });

    // Update breadcrumb
    if (sdoTitle) sdoTitle.textContent = panelTitles[serviceId] || serviceId;
  }

  // "Learn More" links on service cards
  document.querySelectorAll(".open-service").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      openServiceOverlay(link.dataset.service);
    });
  });

  // Close button
  if (sdoClose) {
    sdoClose.addEventListener("click", closeServiceOverlay);
  }

  // Click on the dimmed backdrop closes the modal
  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeServiceOverlay();
    });
  }

  // Sidebar nav buttons inside overlay
  if (overlay) {
    overlay.querySelectorAll(".sdo-nav-btn").forEach((btn) => {
      btn.addEventListener("click", () => switchPanel(btn.dataset.panel));
    });

    // "or send a message" → close overlay and scroll to contact
    if (sdoContact) {
      sdoContact.addEventListener("click", (e) => {
        e.preventDefault();
        closeServiceOverlay();
        setTimeout(() => {
          const contact = document.getElementById("contact");
          if (contact) contact.scrollIntoView({ behavior: "smooth" });
        }, 350);
      });
    }
  }

  // Close overlay when any nav link (header) is clicked
  document.querySelectorAll(".navmenu a").forEach((link) => {
    link.addEventListener("click", () => {
      if (overlay && overlay.classList.contains("open")) {
        closeServiceOverlay();
      }
    });
  });

  // Close overlay when header logo or CTA is clicked
  document.querySelector(".header-logo")?.addEventListener("click", () => {
    if (overlay && overlay.classList.contains("open")) closeServiceOverlay();
  });
  document.querySelector(".header-cta")?.addEventListener("click", () => {
    if (overlay && overlay.classList.contains("open")) closeServiceOverlay();
  });

  // Escape key closes overlay
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("open")) {
      closeServiceOverlay();
    }
  });

})();
