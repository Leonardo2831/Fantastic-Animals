import { Select } from "./utilitaryFunctions.js";

export default function initDropDownNav(){
    const select = new Select();  

    const dropDowns = select.All('[data-dropdown]');

    function handleClick(){
        
    }

    dropDowns.forEach((dropDown) => {
        dropDown.addEventListener('click', handleClick);
    });
}