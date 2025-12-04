import { Select } from "./utilitarianFunctions.js";
import AnimationNumbers from "./animationNumbers.js";

export default function createAnimals(url, targetAnimals) {

    function completeAnimals(contentAnimals, animal){
        const divAnimalCompleted = createItemAnimal(animal);
        contentAnimals.appendChild(divAnimalCompleted);
    }

    function animateAnimalsNumbers(){
        const animationNumbers = new AnimationNumbers("[data-number]", "[data-observer]", "showScroll");
        animationNumbers.init();
    }

    async function fetchAnimals() {
        try {
            const animalsResponse = await (await fetch(url)).json();
            const contentAnimals = Select.Single(targetAnimals);

            animalsResponse.animals.forEach((animal) => completeAnimals(contentAnimals, animal));
            animateAnimalsNumbers();
        } catch (error) {
            console.log(Error(error));
        }
    }

    function createItemAnimal(animal) {
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

    return fetchAnimals();
}