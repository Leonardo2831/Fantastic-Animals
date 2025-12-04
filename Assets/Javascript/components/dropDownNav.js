import { Select, clickOutside } from "./utilitarianFunctions.js";

export default class initDropDownNav {
    constructor(dropDowns, datasetValue){
        this.dropDowns = Select.All(dropDowns);
        this.datasetValue = datasetValue;

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        
        const { currentTarget } = event;
        currentTarget.dataset.dropdown = this.datasetValue;
        
        clickOutside(currentTarget, this.eventUser, () => {
            currentTarget.dataset.dropdown = "";
        });
    }

    addEventDropDown(){
        this.dropDowns.forEach((dropDown) => {
            dropDown.addEventListener(this.eventUser, this.handleClick);
        });
    }

    init(){
        this.hasTouch = !('ontouchstart' in window);
        this.eventUser = this.hasTouch ? "touchstart" : "click";
    }
}