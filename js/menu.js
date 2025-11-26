// Select all menu section headings
const headings = document.querySelectorAll(".item-heading");

headings.forEach(heading => {
    heading.addEventListener("click", () => {

        const section = heading.parentElement;

        // If this section is already open → close it and stop
        if (section.classList.contains("open")) {
            section.classList.remove("open");
            return;
        }

        // Close ALL sections first
        document.querySelectorAll(".menu-section").forEach(sec => {
            sec.classList.remove("open");
        });

        // Open the clicked section
        section.classList.add("open");
    });
});
