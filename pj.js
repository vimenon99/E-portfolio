document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const loadingText = document.querySelector('.loading-text');
    const asciiArt = document.querySelector('.ascii-art');
    const projectsContainer = document.querySelector('.projects-container');

    // Clear previous content
    typingElement.textContent = '';

    // Simulate typing effect
    const typingText = `root@vinay-kali:~# cd Projects\n`;
    let index = 0;

    const typingInterval = setInterval(() => {
        if (index < typingText.length) {
            typingElement.textContent += typingText[index++];
        } else {
            clearInterval(typingInterval);
            setTimeout(() => {
                loadingText.classList.remove('hidden');
                setTimeout(() => {
                    loadingText.classList.add('hidden');
                    asciiArt.classList.remove('hidden');
                    setTimeout(() => {
                        projectsContainer.classList.add('visible');
                    }, 1000);
                }, 500);
            }, 500);
        }
    }, 20);
});
