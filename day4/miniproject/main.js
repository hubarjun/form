import { createProfileCard } from "./cardManager.js";

const addProfileBtn = document.getElementById("addProfileBtn");
const cardContainer = document.getElementById("cardContainer");

addProfileBtn.addEventListener("click", () => {
    const name = prompt("Enter Name:");
    if (!name) return;

    const role = prompt("Enter Role:");
    if (!role) return;

    const card = createProfileCard(name, role);
    cardContainer.appendChild(card);
});
