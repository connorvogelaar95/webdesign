const headings = document.querySelectorAll(".item-heading");

headings.forEach(heading => {
    heading.addEventListener("click", () => {

        const section = heading.parentElement;
        const icon = heading.querySelector(".toggle-icon");

        // If clicking an already open section → close it
        if (section.classList.contains("open")) {
            section.classList.remove("open");
            icon.textContent = "+";
            return;
        }

        // Close all other sections
        document.querySelectorAll(".menu-section").forEach(sec => {
            sec.classList.remove("open");
            sec.querySelector(".toggle-icon").textContent = "+";
        });

        // Open clicked section
        section.classList.add("open");
        icon.textContent = "-";
    });
});
