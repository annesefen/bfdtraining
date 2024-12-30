// JavaScript Document
// JavaScript for Accordion Functionality
document.addEventListener('DOMContentLoaded', () => {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;

            // Toggle visibility
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
