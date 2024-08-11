document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const loadingText = document.querySelector('.loading-text');
    const asciiArt = document.querySelector('.ascii-art');
    const skillsContainer = document.querySelector('.skills-container');
    const sections = document.querySelectorAll('.skills-section');

    // Simulate typing effect
    const typingText = `root@vinay-kali:~#\n
cd Skills\n
`;
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
                        skillsContainer.classList.add('visible');
                        // Animate skill levels
                        document.querySelectorAll('.skill-level').forEach((el) => {
                            el.style.width = el.getAttribute('data-skill') + '%';
                        });
                        // Reveal sections with a delay
                        sections.forEach((section, i) => {
                            setTimeout(() => {
                                section.classList.remove('hidden');
                            }, i * 500); // Delay each section appearance
                        });
                    }, 1000);
                }, 500);
            }, 500);
        }
    }, 20);
});
