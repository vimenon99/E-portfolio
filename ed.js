document.addEventListener('DOMContentLoaded', (event) => {
    const welcomeText = document.getElementById('welcome-text');
    const loadingText = document.getElementById('loading-text');
    const asciiArt = document.getElementById('ascii-art');
    const logoDetails = document.getElementById('logo-details');
    const message = 'root@vinay-kali:~# cd Education';
    let index = 0;

    function typeWriter() {
        if (index < message.length) {
            welcomeText.innerHTML += message.charAt(index);
            index++;
            setTimeout(typeWriter, 20);
        } else {
            setTimeout(() => {
                loadingText.classList.add('visible');
                setTimeout(() => {
                    loadingText.classList.remove('visible');
                    asciiArt.classList.add('visible');
                    setTimeout(() => {
                        logoDetails.classList.add('visible');
                    }, 500); // Delay for logo-details to appear after ASCII art
                }, 1500); // Adjust loading effect time
            }, 700); // Delay before loading starts
        }
    }

    typeWriter();
});
