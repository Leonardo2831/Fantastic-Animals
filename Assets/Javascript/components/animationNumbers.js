import { Select } from "./utilitarianFunctions.js";

export default function initAnimationNumbers() {
    const numbers = Select.All("[data-number]");

    if(numbers) {
        function animationNumber() {
            numbers.forEach((number) => {
                const totalNumber = Number(number.textContent);
                const increment = Math.floor(totalNumber / 100);

                let start = 0;
                const timer = setInterval(() => {
                    start = start + increment;
                    number.textContent = start;

                    if(start > totalNumber) {
                        number.textContent = totalNumber;
                        clearInterval(timer);
                    }
                }, 25 * Math.random());
            });
        }

        const observerTarget = Select.Single("[data-observer]");
        const observer = new MutationObserver(handleMutation);

        function handleMutation(mutation) {
            if(mutation[0].target.classList.contains("showScroll")) {
                animationNumber();
                observer.disconnect();
            }
        }

        observer.observe(observerTarget, { attributes: true });
    }
}