/* edited by Connor, menu items expand*/
// Select every menu heading (Soups, Meals, Extras)
document.querySelectorAll(".item-heading").forEach((heading) => {
    
    heading.addEventListener("click", () => {
        
        // Get the section containing this heading + items
        const section = heading.parentElement;

        // Toggle the "open" class on the section
        section.classList.toggle("open");

        // Change + to – inside the heading
        const icon = heading.querySelector(".toggle-icon");
        if (section.classList.contains("open")) {
            icon.textContent = "–";   // show minus
        } else {
            icon.textContent = "+";   // show plus
        }
    });
});
