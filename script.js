document.addEventListener('DOMContentLoaded', function() {
    // Function to detect mobile devices
    function isMobile() {
        return window.matchMedia("only screen and (max-width: 1000px)").matches;
    }

    // Redirect mobile users to the mobile warning page
    if (isMobile()) {
        window.location.href = 'mb.html'; // Ensure this file is in your root directory
        return; // Stop further execution
    }

    // Proceed with the rest of the script if not a mobile device
    const welcomeText = document.getElementById('welcome-text');
    const typingElement = document.querySelector('.intro-text .typing');
    const intro = document.querySelector('.intro');
    const photo = document.getElementById('photo');
    const resumeContainer = document.getElementById('resume-container');
    const menuBar = document.getElementById('menu-bar');
    const socialLinks = document.querySelector('.social-links');

    const welcomeMessage = 'Hey There! Welcome to my Portfolio..';
    const introText = `
root@vinay-kali:~# whoami
Vinay Menon
root@vinay-kali:~# cat Introduction.txt
I am currently pursuing a Master’s in Cybersecurity at Syracuse University, where I am deepening my expertise in advanced security techniques. My journey began with a Bachelor's in Computer Science and Engineering from SRM Institute of Science and Technology. Initially introduced to programming through C++, I developed a strong foundation in coding and expanded my skills through web development projects.                                   During my undergraduate studies, I became proficient in Java and Python and gained valuable knowledge in networks and cryptography. My passion for cybersecurity led me to self-learn through platforms like TryHackMe, Hack The Box, and INE, enhancing my practical skills and understanding of real-world security challenges.
root@vinay-kali:~# cat Resume.txt
`.trim();

    const typeText = (element, text, speed, callback) => {
        let i = 0;
        const intervalId = setInterval(() => {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(intervalId);
                if (callback) callback();
            }
        }, speed);
    };

    // Type the welcome message
    typeText(welcomeText, welcomeMessage, 15, () => {
        // Increase the delay before starting the content typing
        setTimeout(() => {
            // Hide the welcome message
            document.querySelector('.welcome-message').classList.add('hidden');

            // Show the rest of the content
            document.querySelector('.intro').classList.remove('hidden');
            document.getElementById('photo').classList.remove('hidden');
            document.getElementById('resume-container').classList.remove('hidden');
            document.querySelector('.intro-text').classList.remove('hidden');
            document.getElementById('menu-bar').classList.remove('hidden');
            
            // Apply the visible class to all elements
            document.querySelector('.intro').classList.add('visible');
            document.getElementById('photo').classList.add('visible');
            document.getElementById('resume-container').classList.add('visible');
            document.querySelector('.intro-text').classList.add('visible');
            document.getElementById('menu-bar').classList.add('visible');

            // Start typing the intro text after the delay
            const lines = introText.split('\n');
            let currentLine = 0;
            let currentChar = 0;

            function typeLine(line) {
                if (currentChar < line.length) {
                    const char = line.charAt(currentChar);
                    const isCommand = line.startsWith('root@') || line.startsWith('root@vinay-kali:~#');
                    const className = isCommand ? 'command' : 'text';
                    typingElement.innerHTML += `<span class="${className}">${char}</span>`;
                    currentChar++;
                    setTimeout(() => typeLine(line), 15); // Faster typing speed
                } else {
                    typingElement.innerHTML += '<br>'; // Move to next line
                    currentLine++;
                    if (currentLine < lines.length) {
                        currentChar = 0;
                        if (lines[currentLine].startsWith('root@') || lines[currentLine].startsWith('root@vinay-kali:~#')) {
                            setTimeout(() => typeLine(lines[currentLine]), 500); // Delay before starting next line
                        } else {
                            typingElement.innerHTML += lines[currentLine] + '<br>'; // Display static text without typing
                            currentLine++;
                            if (currentLine < lines.length) {
                                setTimeout(() => typeLine(lines[currentLine]), 500); // Continue typing commands
                            }
                        }
                    }
                }
            }

            typeLine(lines[currentLine]);

        }, 800); // 1 second delay before showing the rest of the content
    });

    // Handle scroll event to show social links
    window.addEventListener('scroll', () => {
        const shellBoxBottom = document.querySelector('.shell-box').getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        
        if (shellBoxBottom < windowHeight) {
            socialLinks.classList.remove('hidden');
            socialLinks.classList.add('visible');
        }
    });
});
