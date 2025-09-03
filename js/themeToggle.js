const themeToggleIcon = document.querySelector("#themeToggleIcon"); 
const hero = document.querySelector(".hero"); 
const heroImg = document.querySelector(".heroImg"); 
const heroText = document.querySelector(".heroText"); 

function themeToggle() { 
    const themeToggle = document.querySelector("#themeToggle");

    /* Sjekker hvilket klasse-navn som er aktivt på body som har id themeToggle */
    if (themeToggle.classList.contains("light")) { 
        themeToggle.classList.remove("light"); 
        themeToggle.classList.add("dark"); 
        
        /* Bakgrunnsbilde og bagrunnsfarge skifte */ 
        hero.style.backgroundImage = 'url("../images/stackblitzScreenshotDark.png")'; 
        heroImg.src = "../images/stackblitzScreenshotDark.png"; 
        heroText.classList.add("dark"); 
        heroText.classList.remove("light"); 
        
    } else if (themeToggle.classList.contains("dark")) { 
        themeToggle.classList.remove("dark"); 
        themeToggle.classList.add("light"); 
        
        /* Bakgrunnsbilde og bagrunnsfarge skifte */ 
        hero.style.backgroundImage = 'url("../images/stackblitzScreenshotLight.png")'; 
        heroImg.src = "../images/stackblitzScreenshotLight.png"; 
        heroText.classList.add("light");
        heroText.classList.remove("dark");  
    } else { 
        console.error("Noe gikk galt med å bytte fargetema på siden"); 
    };
    
    /* Sjekker størrelsen på skjermen om bacground-image skal være aktivt eller om det bytter til img-elementet */
    if (window.innerWidth <= 768) { 
        hero.style.backgroundImage = 'none'; 
    } else { 
        console.error("Noe galt skjedde med å sjekke etter skjermstørrelse for hvilket hero bilde som skal være aktivt") 
    }
} 
    
themeToggleIcon.addEventListener("click", themeToggle); 

export { themeToggle };