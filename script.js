// Smooth scrolling for navigation links
document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Simple dark mode toggle
const toggleButton = document.createElement("button");
toggleButton.innerText = "Toggle Dark Mode";
toggleButton.style.position = "fixed";
toggleButton.style.bottom = "20px";
toggleButton.style.right = "20px";
toggleButton.style.padding = "10px";
toggleButton.style.cursor = "pointer";
document.body.appendChild(toggleButton);

toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Dark mode styles
const darkModeStyles = document.createElement("style");
darkModeStyles.innerHTML = `
    .dark-mode {
        background-color: #1a1a1a;
        color: #f5f5f5;
    }
    .dark-mode .project-card, .dark-mode footer {
        background-color: #333;
    }
    .dark-mode .skills-grid span {
        background-color: #444;
    }
    .dark-mode a {
        color: #f5f5f5;
    }
`;
document.head.appendChild(darkModeStyles);
