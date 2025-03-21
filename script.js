document.addEventListener("DOMContentLoaded", function() {
    // 🎯 Typing Effect for Title
    const roles = ["WebHost Engineer", "PR Manager", "Technical Trainer"];
    let index = 0;
    let charIndex = 0;
    const typingSpeed = 100; // Typing speed in milliseconds
    const erasingSpeed = 50; // Erasing speed
    const delayBetweenRoles = 2000; // Pause before erasing
    let typingElement = document.querySelector(".typing-text");

    function typeRole() {
        if (charIndex < roles[index].length) {
            typingElement.innerHTML += roles[index].charAt(charIndex);
            charIndex++;
            setTimeout(typeRole, typingSpeed);
        } else {
            setTimeout(eraseRole, delayBetweenRoles);
        }
    }

    function eraseRole() {
        if (charIndex > 0) {
            typingElement.innerHTML = roles[index].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(eraseRole, erasingSpeed);
        } else {
            index = (index + 1) % roles.length;
            setTimeout(typeRole, typingSpeed);
        }
    }
    
    typeRole(); // Start typing effect

    // 🎯 Scroll Animation for Sections
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".animated-section").forEach(section => {
        observer.observe(section);
    });

    // 🎯 Floating Particles Effect
    const particles = document.createElement("div");
    particles.classList.add("particles");
    document.body.appendChild(particles);

    for (let i = 0; i < 40; i++) {
        let particle = document.createElement("span");
        particle.classList.add("particle");
        particles.appendChild(particle);

        let size = Math.random() * 5 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.animationDuration = `${Math.random() * 10 + 5}s`;
        particle.style.animationDelay = `${Math.random() * 5}s`;
    }
});
