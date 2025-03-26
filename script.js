document.querySelectorAll('.input-container').forEach(container => {
    container.addEventListener('click', function () {
        // Find and check the radio button within the clicked container
        const radioButton = container.querySelector('.radio-btn input[type="radio"]');
        if (radioButton) {
            radioButton.checked = true;
        }
        // Hide all hidden containers first
        document.querySelectorAll('.hidden-container').forEach(hidden => {
            hidden.style.display = 'none';
        });
        // Show the hidden-container for the active radio
        const hiddenContainer = container.querySelector('.hidden-container');
        if (hiddenContainer) {
            hiddenContainer.style.display = 'flex';
        }
        // Remove 'active-container' from all containers
        document.querySelectorAll('.input-container').forEach(item => {
            if (item !== container) {
                item.classList.remove('input-container-active');
            }
        });
        // Add 'active-container' to the clicked container
        container.classList.add('input-container-active');
    });
});
