const hamburgerMenuIcon = document.querySelector("#hamburgerMenuIcon");

function hamburgerToggle() {
    console.log("?")
    const hamburgerMenu = document.querySelector("#hamburgerMenu");

    if (hamburgerMenu.classList.contains("navList")) {
        hamburgerMenu.classList.remove("navList");
        hamburgerMenu.classList.add("navHamburger");
    } else if (hamburgerMenu.classList.contains("navHamburger")) {
        hamburgerMenu.classList.remove("navHamburger");
        hamburgerMenu.classList.add("navList");
    } else {
        console.error("Noe gikk galt..");
    }
}

hamburgerMenuIcon.addEventListener("click", hamburgerToggle);

export { hamburgerToggle };