const header = document.querySelector("[data-header]");
const nav = document.querySelector("[data-nav]");
const navToggle = document.querySelector("[data-nav-toggle]");
const year = document.querySelector("[data-year]");
const contactForm = document.querySelector("[data-contact-form]");
const formNote = document.querySelector("[data-form-note]");
const heroMedia = document.querySelector(".hero-media");
if (heroMedia) {
  if (heroMedia.complete) {
    heroMedia.classList.add("is-loaded");
  } else {
    heroMedia.addEventListener(
      "load",
      () => {
        heroMedia.classList.add("is-loaded");
      },
      { once: true }
    );
  }
}

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

const closeNavigation = () => {
  document.body.classList.remove("nav-open");
  nav.classList.remove("is-open");
  navToggle.setAttribute("aria-expanded", "false");
};

setHeaderState();
year.textContent = new Date().getFullYear();

window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = nav.classList.toggle("is-open");
  document.body.classList.toggle("nav-open", isOpen);
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", closeNavigation);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeNavigation();
  }
});

const revealTargets = document.querySelectorAll(
  ".service-card, .timeline article, .gallery-item, .mdf-gallery figure, .trust-list li, .contact-form"
);

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealTargets.forEach((target) => {
    target.classList.add("reveal");
    observer.observe(target);
  });
} else {
  revealTargets.forEach((target) => target.classList.add("is-visible"));
}

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(contactForm);
  const name = formData.get("name").trim();
  const phone = formData.get("phone").trim();
  const project = formData.get("project");
  const message = formData.get("message").trim();

  const subject = encodeURIComponent(`Demande de devis MAKBAT - ${project}`);
  const body = encodeURIComponent(
    `Bonjour MAKBAT,\n\nJe souhaite etre recontacte pour un projet.\n\nNom: ${name}\nTelephone: ${phone}\nType de projet: ${project}\n\nMessage:\n${message}\n\nMerci.`
  );

  window.location.href = `mailto:papyrus43@hotmail.com?subject=${subject}&body=${body}`;
  formNote.textContent = "Votre application e-mail va s'ouvrir avec le message pre-rempli.";
});

