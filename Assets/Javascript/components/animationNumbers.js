import { Select } from "./utilitarianFunctions.js";

export default class AnimationNumbers {
    constructor(numbers, observerTarget, observerClass){
        this.numbers = Select.All(numbers);
        this.observerTarget = Select.Single(observerTarget);
        this.observerClass = observerClass;

        this.handleMutation = this.handleMutation.bind(this);
        this.animationNumber = this.animationNumber.bind(this);
    }

    // Posso animar qualquer numero do site apenas com essa função
    static incrementNumber(number) {
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
    }

    animationNumber() {
        this.numbers.forEach((number) => {
            this.constructor.incrementNumber(number);
        });
    }

    handleMutation(mutation, observer) {
        if(mutation[0].target.classList.contains(this.observerClass)) {
            this.animationNumber();
            observer.disconnect();
        }
    }

    addObserver() {
        this.observer = new MutationObserver(this.handleMutation);
        this.observer.observe(this.observerTarget, { attributes: true });
    }

    init(){
        if(this.numbers.length){
            this.addObserver();
        }

        return this;
    }
}