const themeToggleIcon = document.querySelector("#themeToggleIcon");

function themeToggle() {
    const themeToggle = document.querySelector("#themeToggle")

    if (themeToggle.classList.contains("light")) {
        themeToggle.classList.remove("light");
        themeToggle.classList.add("dark");
    } else if (themeToggle.classList.contains("dark")) {
        themeToggle.classList.remove("dark");
        themeToggle.classList.add("light");
    } else {
        console.error("Noe gikk galt..");
    }
}

themeToggleIcon.addEventListener("click", themeToggle);

export { themeToggle };