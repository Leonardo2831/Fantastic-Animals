import { Select } from "./utilitarianFunctions.js";

export default class Questions {
    constructor(list, classActive){
        this.list = Select.All(list);
        this.classActive = classActive;
    }

    toggleQuestion(question){
        question.nextElementSibling.classList.toggle(this.classActive);
        question.children[0].classList.toggle(this.classActive);
    }

    addEventQuestion(){
        if(this.list.length) {
            this.list.forEach((question) => {
                question.addEventListener("click", () => {
                    this.toggleQuestion(question);
                });
            });
        }
    }

    init(){
        if(this.list.length){
            this.toggleQuestion(this.list[0]);
            this.addEventQuestion();
        }
        
        return this;
    }
}