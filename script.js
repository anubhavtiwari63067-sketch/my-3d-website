document.addEventListener('DOMContentLoaded', () => {
    const enterButton = document.getElementById('enterButton');

    if (enterButton) { // Ensure button exists on this page
        enterButton.addEventListener('click', () => {
            // navigate to the content page
            window.location.href = 'content.html';
        });
    }
});