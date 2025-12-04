import { Select } from "./utilitarianFunctions.js";

export default class InfoOperation {
    constructor(itemInfoOperation){
        this.itemInfoOperation = Select.Single(itemInfoOperation);

        this.date = new Date();
        this.dayWeek = this.date.getDay();
        this.hours = this.date.getUTCHours() - 3;

        this.closeDay = this.dayWeek === 6 || this.dayWeek === 0;
        this.closeHours = this.hours <= 8 || this.hours >= 18;
    }

    addInfoOperation(){
        if(this.closeDay || this.closeHours){
            this.itemInfoOperation.dataset.open = false;
        } else {
            this.itemInfoOperation.dataset.open = true;
        }
    }

    init(){
        if(this.itemInfoOperation){
            this.addInfoOperation();
        }

        return this;
    }
}