"use strict";
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const closeModalBtn = document.querySelector(".close-modal");
const openModalBtn = document.querySelectorAll(".btn");
const charName = document.querySelector(".name");

const openModal = () => {
    modal.classList.remove("hidden");
    overlay.classList.remove("hidden");
};

const closeModal = () => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
};

openModalBtn.forEach((element) => {
    element.addEventListener("click", () => {
        const charId = element.id;

        switch (charId) {
            case "kuromi":
                charName.textContent = "Kuromi";
                break;
            case "pochaco":
                charName.textContent = "Pochaco";
                break;
            case "purin":
                charName.textContent = "Pompompurin";
                break;
            default:
                charName.textContent = "Hello Kitty";
        }

        openModal();
    });
});
closeModalBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.classList.contains("hidden")) {
        closeModal();
    }
});
