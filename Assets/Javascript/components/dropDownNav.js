import { Select } from "./utilitaryFunctions.js";
import clickOutside from "./clickOutside.js";

export default function initDropDownNav(){
    const select = new Select();  

    const dropDowns = select.All('[data-dropdown]');

    function handleClick(){        
        this.dataset.dropdown = this.dataset.dropdown = 'active';
        clickOutside(this, ['touchstart', 'click'], () => {
            this.dataset.dropdown = '';
        });
    }

    dropDowns.forEach((dropDown) => {
        ['touchstart', 'click'].forEach((userEvent) => {
            dropDown.addEventListener(userEvent, handleClick);
        });
    });
}