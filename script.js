// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Close menu when a link is clicked
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(faq => {
      faq.classList.remove('active');
    });

    // Open clicked one if it was closed
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value;

  alert(`Thank you, ${name}!\n\nYour message has been noted.\nPlease also email us at gyvora.solutions@gmail.com so we can reply to you quickly.\n\nWe will get back to you soon.`);

  contactForm.reset();
});
