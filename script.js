const sections = document.querySelectorAll("section");

const revealSection = () => {
    const triggerBottom = window.innerHeight - 100;

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.style.opacity = 1;
        }
    });
};

window.addEventListener("scroll", revealSection);
revealSection();
