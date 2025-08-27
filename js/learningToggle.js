const items = document.querySelectorAll(".learningListItem");
const displayBox = document.querySelector("#learningDisplayBox");

function learningToggle(event) {
    console.log("Hi from learningToggle");

    const item = event.currentTarget; // Elementet som ble klikket
    console.log(item)

    displayBox.innerHTML = `
        <h3>${item.textContent}</h3>
        <p>${item.dataset.info}</p>
    `;
}

// Legg til event listener på hvert listeelement
items.forEach(item => {
    item.addEventListener("click", learningToggle);
});

export { learningToggle };