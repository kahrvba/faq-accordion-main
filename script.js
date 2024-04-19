// Wait for the DOM content to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'toggle-icon'
    const toggleIcons = document.querySelectorAll('.toggle-icon');
    
    // Loop through each 'toggle-icon' element
    toggleIcons.forEach(function(toggleIcon) {
        // Add a click event listener to each 'toggle-icon'
        toggleIcon.addEventListener('click', function() {
            // Toggle plus and minus icons by changing the 'src' attribute
            toggleIcon.src = toggleIcon.src.includes('plus') ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
            
            // Get the next sibling element, assumed to be the hidden paragraph
            const hiddenParagraph = toggleIcon.nextElementSibling;
            
            // Toggle paragraph visibility by changing the 'display' style property
            if (hiddenParagraph.style.display === 'none' || hiddenParagraph.style.display === '') {
                hiddenParagraph.style.display = 'block'; // Show the paragraph
            } else {
                hiddenParagraph.style.display = 'none'; // Hide the paragraph
            }
        });
    });
});
