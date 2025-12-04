import { Select } from "./utilitarianFunctions.js";
import AnimationNumbers from "./animationNumbers.js";

export default function initFetchAnimals() {
    async function fetchAnimals(url) {
        try {
            const animalsResponse = await (await fetch(url)).json();
            const contentAnimals = Select.Single('[data-animals="number"]');

            animalsResponse.animals.forEach((animal) => {
                const divAnimalCompleted = createAnimal(animal);
                contentAnimals.appendChild(divAnimalCompleted);
            });

            const animationNumbers = new AnimationNumbers("[data-number]", "[data-observer]", "showScroll");
            animationNumbers.init();
        } catch (error) {
            console.log(Error(error));
        }
    }

    function createAnimal(animal) {
        const divAnimal = document.createElement("div");
        const htmlAnimal = `
            <h3>${animal.specie}</h3>
            <span data-number>${animal.total}</span>
        `;

        const classDivStyle = "number-animal";

        divAnimal.classList.add(classDivStyle);
        divAnimal.innerHTML = htmlAnimal;

        return divAnimal;
    }

    fetchAnimals("Assets/data/animals.json");
}