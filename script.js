document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('main section');
  
    function checkVisibility() {
      const triggerBottom = window.innerHeight / 5 * 4; // Adjust the trigger height as needed
  
      sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
  
        if (sectionTop < triggerBottom) {
          section.classList.add('visible');
        } else {
          section.classList.remove('visible');
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    checkVisibility(); // Initial check
  });
  