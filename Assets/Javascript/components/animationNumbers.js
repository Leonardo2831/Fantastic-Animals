import { Select } from "./utilitarianFunctions.js";

function animationNumber() {
    const numbers = Select.All("[data-number]");

    numbers.forEach((number) => {
        const totalNumber = Number(number.textContent);
        const increment = Math.floor(totalNumber / 100);

        let start = 0;
        const timer = setInterval(() => {
            start += increment;
            number.textContent = start;

            if(start > totalNumber){
                number.textContent = totalNumber;
                clearInterval(timer);
            }
        }, 25 * Math.random());
    });
}

function handleMutation(mutation, observer) {
    if(mutation[0].target.classList.contains("showScroll")) {
        animationNumber();
        observer.disconnect();
    }
}

export default function initAnimationNumbers() {
    const numbers = Select.All("[data-number]");

    if(numbers){
        const observerTarget = Select.Single("[data-observer]");
        const observer = new MutationObserver(handleMutation);

        observer.observe(observerTarget, { attributes: true });
    }
}