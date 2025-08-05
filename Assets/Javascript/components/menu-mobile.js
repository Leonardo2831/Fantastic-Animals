import { Select } from './utilitaryFunctions.js';
import clickOutside from './clickOutside.js';

export default function initMenuMobile(){
    const select = new Select();

    const buttonMobile = select.Single('[data-mobile="button"]');
    const listMenu = select.Single('[data-mobile="list"]');
    const events = ['click', 'touchstart'];

    if(buttonMobile){
        function openMenuMobile(){
            const classActiveMenu = 'activeMobile';
            buttonMobile.classList.toggle(classActiveMenu);

            clickOutside(listMenu, events, () => {
                buttonMobile.classList.remove(classActiveMenu);
            });
        }
        
        events.forEach((userEvent) => {
            buttonMobile.addEventListener(userEvent, openMenuMobile);
        });
    }
}