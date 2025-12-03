import { Select } from "./utilitarianFunctions.js";

export default class ModalForm {
    constructor(modal, buttonsModal){
        this.modal = Select.Single(modal);
        this.buttonsModal = Select.All(buttonsModal);

        this.modalFunction = this.modalFunction.bind(this);
    }

    modalFunction(event) {
        event.preventDefault();

        if(event.target === this.modal || event.target === this.buttonsModal[1]){
            this.modal.dataset.modal = "disabled";
        } else {
            this.modal.dataset.modal = "active";
        }
    }

    addEventModal(){
        this.buttonsModal.forEach((button) => {
            button.addEventListener("click", this.modalFunction);
        });

        this.modal.addEventListener("click", this.modalFunction);
    }

    init(){
        if(this.modal && this.buttonsModal.length) {
            this.addEventModal();
        }

        return this;
    }
}