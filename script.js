document.addEventListener('DOMContentLoaded', () => {
  const accordionContainer = document.querySelector('.accordion-container');

  accordionContainer.addEventListener('click', (event) => {
    if (event.target.classList.contains('toggle-icon')) {
      const toggleIcon = event.target;
      const hiddenParagraph = toggleIcon.nextElementSibling;

      toggleIcon.src = toggleIcon.src.includes('plus')
        ? './assets/images/icon-minus.svg'
        : './assets/images/icon-plus.svg';

      hiddenParagraph.classList.toggle('hidden');
    }
  });
});


<div class="accordion-container">
  <div class="accordion-item">
    <img class="toggle-icon" src="./assets/images/icon-plus.svg" data-state="collapsed" alt="Toggle">
    <h3 class="question">How many team members can I invite?</h3>
    <p class="answer hidden" data-target="question-1">You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.</p>
  </div>
  <!-- More accordion items... -->
</div>
