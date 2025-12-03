import { Select } from "./utilitarianFunctions.js";

export default function initModalForm() {
    const modal = Select.Single("[data-modal]");
    const buttonsModal = Select.All("[data-button-modal]");

    function modalFunction(event) {
        event.preventDefault();

        if(event.target === modal || event.target === buttonsModal[1]){
            modal.dataset.modal = "disabled";
        } else {
            modal.dataset.modal = "active";
        }
    }

    if(modal && buttonsModal.length) {
        buttonsModal.forEach((button) => {
            button.addEventListener("click", modalFunction);
        });
        modal.addEventListener("click", modalFunction);
    }
}