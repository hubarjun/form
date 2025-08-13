export function createProfileCard(name, role) {
    const card = document.createElement("div");
    card.classList.add("card");

    const nameEl = document.createElement("h3");
    nameEl.textContent = name;

    const roleEl = document.createElement("p");
    roleEl.textContent = role;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.classList.add("remove-btn");

    removeBtn.addEventListener("click", () => {
        card.remove();
    });

    card.appendChild(nameEl);
    card.appendChild(roleEl);
    card.appendChild(removeBtn);

    return card;
}
