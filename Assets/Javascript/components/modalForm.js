import {Select} from './utilitaryFunctions.js';

export default function initModalForm(){
    const select = new Select();
    
    const modal =  select.Single('[data-modal]');
    const buttonsModal = select.All('[data-button="modal"]');

    function modalFunction(){
        modal.dataset.modal = (modal.dataset.modal === 'disabled') ? 'active' : 'disabled';
    }
    
    buttonsModal.forEach((button) => {
        button.addEventListener('click', modalFunction);
    });
}