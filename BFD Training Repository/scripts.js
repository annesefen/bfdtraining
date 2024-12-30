// Enhance interactivity
document.addEventListener('DOMContentLoaded', () => {
    const getStartedButton = document.getElementById('get-started');
    getStartedButton.addEventListener('click', () => {
        window.scrollTo({
            top: document.getElementById('links').offsetTop,
            behavior: 'smooth'
        });
    });
});
