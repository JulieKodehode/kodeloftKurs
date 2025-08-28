const languageCardDemoColor = document.querySelector("#languageCardDemoColor");

function languageToggle() {
    console.log("Clicked?");
    if (!languageCardDemoColor.classList.contains("languageCardDemoColor")) {
        languageCardDemoColor.classList.add("languageCardDemoColor");
    } else {
        languageCardDemoColor.classList.remove("languageCardDemoColor");
    }
}

languageCardDemoColor.addEventListener("click", languageToggle);

export { languageToggle };