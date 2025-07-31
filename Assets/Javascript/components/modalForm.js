import { Select } from './utilitaryFunctions.js';

export default function initModalForm(){
    const select = new Select();
    
    const modal =  select.Single('[data-modal]');
    const buttonsModal = select.All('[data-button-modal]');

    function modalFunction(event){
        event.preventDefault();
        
        if(event.target === modal || event.target === buttonsModal[1]){
            modal.dataset.modal = 'disabled';
        } else {
            modal.dataset.modal = 'active'
        }
    }
    
    buttonsModal.forEach((button) => {
        button.addEventListener('click', modalFunction);
    });
    modal.addEventListener('click', modalFunction);
}