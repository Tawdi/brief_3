document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.animate-on-scroll');

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target); // Optionally stop observing the element once it becomes visible
      }
    });
  }, {
    threshold: 0.4
  });

  elements.forEach(element => {
    observer.observe(element);
  });
});
