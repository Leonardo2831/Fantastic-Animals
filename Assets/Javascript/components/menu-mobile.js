import { Select, clickOutside } from "./utilitarianFunctions.js";

export default function initMenuMobile() {
    const buttonMobile = Select.Single('[data-mobile="button"]');
    const listMenu = Select.Single('[data-mobile="list"]');
    const events = ["click", "touchstart"];

    if(buttonMobile) {
        function openMenuMobile() {
            const classActiveMenu = "activeMobile";
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