/* edited by Connor, menu items expand*/
document.querySelectorAll(".item-heading").forEach((heading) => {
    heading.addEventListener("click", () => {
        const section = heading.parentElement;
        section.classList.toggle("open");
    });
});
