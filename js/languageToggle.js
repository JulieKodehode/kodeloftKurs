const languageCardDemoColor = document.querySelector("#languageCardDemoColor");

function languageToggle() {
    console.log("Clicked?");

    // Sett opp overgang koden en gang for begge betingelsene
    languageCardDemoColor.style.transition = "color 3s ease, flex-direction 0.5s ease";

    if (!languageCardDemoColor.classList.contains("languageCardDemoCss")) {
        languageCardDemoColor.classList.add("languageCardDemoCss");

        languageCardDemoColor.style.color = "#f3a366"; // Fargen som endrer seg

        languageCardDemoColor.style.flexDirection = "column-reverse";
    } else {
        languageCardDemoColor.classList.remove("languageCardDemoCss");

        languageCardDemoColor.style.color = "inherit"; // Default fargen ut i fra fargetema

        languageCardDemoColor.style.flexDirection = "column";
    }
}

languageCardDemoColor.addEventListener("click", languageToggle);

export { languageToggle };