document.addEventListener('DOMContentLoaded', () => {
  const toggleIcons = document.querySelectorAll('.toggle-icon');

  toggleIcons.forEach(toggleIcon => {
    toggleIcon.addEventListener('click', () => {
      toggleIcon.src = toggleIcon.src.includes('plus')
        ? './assets/images/icon-minus.svg'
        : './assets/images/icon-plus.svg';

      const hiddenParagraph = toggleIcon.nextElementSibling;

      if (hiddenParagraph.style.display === 'none' || hiddenParagraph.style.display === '') {
        hiddenParagraph.style.display = 'block';
      } else {
        hiddenParagraph.style.display = 'none';
      }
    });
  });
});

// Alternative version using classList toggle and dataset attributes
document.addEventListener('DOMContentLoaded', () => {
  const toggleIcons = document.querySelectorAll('.toggle-icon');

  toggleIcons.forEach(toggleIcon => {
    toggleIcon.addEventListener('click', () => {
      toggleIcon.src = toggleIcon.src.includes('plus')
        ? './assets/images/icon-minus.svg'
        : './assets/images/icon-plus.svg';

      const hiddenParagraph = toggleIcon.nextElementSibling;

      hiddenParagraph.classList.toggle('hidden');
    });
  });
});
