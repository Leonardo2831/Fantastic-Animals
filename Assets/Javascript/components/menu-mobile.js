import { Select, clickOutside } from "./utilitarianFunctions.js";



export default class MenuMobile {
    constructor(buttonMobile, menuMobile, classActive){
        const hasTouch = !!(window.ontouchstart);

        this.eventUser = hasTouch ? "touchstart" : "click";
        this.buttonMobile = Select.Single(buttonMobile);
        this.listMenu = Select.Single(menuMobile);
        this.classActive = classActive;

        this.openMenuMobile = this.openMenuMobile.bind(this);
    }

    openMenuMobile() {
        this.buttonMobile.classList.toggle(this.classActive);

        clickOutside(this.listMenu, this.eventUser, () => {
            this.buttonMobile.classList.remove(this.classActive);
        });
    }

    addEventOpenMenu(){
        this.buttonMobile.addEventListener(this.eventUser, this.openMenuMobile);
    }

    init(){
        if(this.buttonMobile){
            this.addEventOpenMenu();
        }

        return this;
    }
}