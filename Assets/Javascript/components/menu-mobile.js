import { Select, clickOutside } from "./utilitarianFunctions.js";



export default function initMenuMobile() {
    const hasTouch = !('ontouchstart' in window);

    const eventUser = hasTouch ? "touchstart" : "click";
    const buttonMobile = Select.Single('[data-mobile="button"]');
    const listMenu = Select.Single('[data-mobile="list"]');

    function openMenuMobile() {
        const classActiveMenu = "activeMobile";
        buttonMobile.classList.toggle(classActiveMenu);

        clickOutside(listMenu, eventUser, () => {
            buttonMobile.classList.remove(classActiveMenu);
        });
    }

    if(buttonMobile){
        buttonMobile.addEventListener(eventUser, openMenuMobile);
    }
}