import { Select } from "./utilitaryFunctions.js";

export default function initDropDownNav(){
    const select = new Select();  

    const dropDowns = select.All('[data-dropdown]');

    /**
     * 
     * @param {Element | null} element - elemento que foi clicado
     * @param {Function} callback 
     */
    function clickOutside(element, events, callback){
        const html = document.documentElement;
        
        function handleOutside(event){
            if(!element.contains(event.target)){
                events.forEach((userEvent) => {
                    html.removeEventListener(userEvent, handleOutside);
                    callback();
                });
            }
        }

        events.forEach((userEvent) => {
            html.addEventListener(userEvent, handleOutside);
        });
    }

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