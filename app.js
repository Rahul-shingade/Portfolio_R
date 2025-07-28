// Toggle mobile nav
function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("active");
}

// Smooth scrolling
const anchors = document.querySelectorAll('a[href^="#"]');
anchors.forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
    document.getElementById("navLinks").classList.remove("active");
  });
});

// Reveal About Section
function revealSectionOnScroll() {
  const about = document.querySelector('.about-container');
  const trigger = window.scrollY + window.innerHeight;

  if (about && about.offsetTop < trigger) {
    about.classList.add('show');
    window.removeEventListener('scroll', revealSectionOnScroll);
  }
}

window.addEventListener('scroll', revealSectionOnScroll);
window.addEventListener('load', revealSectionOnScroll);

// Reveal project cards
// Animate project cards on load
window.addEventListener('load', () => {
  const cards = document.querySelectorAll('.project-card');
  cards.forEach((card, i) => {
    setTimeout(() => {
      card.style.opacity = 1;
      card.style.transform = 'translateY(0)';
    }, i * 200);
  });
});

// Modal logic
const modal = document.getElementById("project-modal");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalLink = document.getElementById("modal-link");
const closeBtn = document.querySelector(".close-btn");

document.querySelectorAll(".view-more").forEach(button => {
  button.addEventListener("click", () => {
    const card = button.closest(".project-card");
    const title = card.getAttribute("data-title");
    const descriptionHTML = card.getAttribute("data-description");
    const link = card.getAttribute("data-link");

    modalTitle.textContent = title;
    modalDescription.innerHTML = descriptionHTML;
    modalLink.href = link; // ✅ Set the specific project link
    modal.style.display = "flex";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.style.display = "none";
  }
});

