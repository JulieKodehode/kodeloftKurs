const languageCardDemoColor = document.querySelector("#languageCardDemoColor");

function languageToggle() {
    console.log("Clicked?");

    // Always set the transition once so it applies to changes
    languageCardDemoColor.style.transition = "color 3s ease, flex-direction 0.5s ease";
    if (!languageCardDemoColor.classList.contains("languageCardDemoCss")) {
        languageCardDemoColor.classList.add("languageCardDemoCss");

        // animate text color
        languageCardDemoColor.style.color = "#f3a366"; /* Changed color */

        // animate direction
        languageCardDemoColor.style.flexDirection = "column-reverse";
    } else {
        languageCardDemoColor.classList.remove("languageCardDemoCss");

        // animate text color
        languageCardDemoColor.style.color = "black"; /* Default text color */

        // animate direction
        languageCardDemoColor.style.flexDirection = "column";
    }
}

languageCardDemoColor.addEventListener("click", languageToggle);

export { languageToggle };