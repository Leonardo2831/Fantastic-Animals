import { Select } from "./utilitaryFunctions.js";

export default function initAnimationNumbers(){
    const select = new Select();  

    const numbers = select.All('[data-number]');

    if(numbers){
        function animationNumber(){
            numbers.forEach((number) => {
                const totalNumber = Number(number.textContent);
                const incremento = Math.floor(totalNumber / 100);

                let start = 0;
                const timer = setInterval(() => {
                    start = start + incremento;
                    number.textContent = start;

                    if(start > totalNumber) {
                        number.textContent = totalNumber;
                        clearInterval(timer);
                    }
                }, 25 * Math.random());
            });
        }

        const observerTarget = select.Single('[data-observer]');
        const observer = new MutationObserver(handleMutation);

        function handleMutation(mutantion){
            if(mutantion[0].target.classList.contains('showScroll')){
                animationNumber();
                observer.disconnect();
            }
        }

        observer.observe(observerTarget, {attributes: true});
    }
}