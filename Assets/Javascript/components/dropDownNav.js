import { Select, clickOutside } from "./utilitarianFunctions.js";

export default function initDropDownNav() {
    const dropDowns = Select.All("[data-dropdown]");

    function handleClick() {
        this.dataset.dropdown = this.dataset.dropdown = "active";
        clickOutside(this, ["touchstart", "click"], () => {
        this.dataset.dropdown = "";
        });
    }

    dropDowns.forEach((dropDown) => {
        ["touchstart", "click"].forEach((userEvent) => {
        dropDown.addEventListener(userEvent, handleClick);
        });
    });
}