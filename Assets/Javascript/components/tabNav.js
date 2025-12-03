import { Select } from "./utilitarianFunctions.js";

export default class TabNav {
    constructor(listImages, listSections, classActive){
        this.listImages = Select.All(listImages);
        this.listSections = Select.All(listSections);
        this.classActive = classActive;
    }

    navigationTab(index){
        this.listSections.forEach((listSection) => {
            listSection.classList.remove(this.classActive);
        });

        this.listSections[index].classList.add(this.classActive);
    }

    addEventTabNav(){
        this.listImages.forEach((listImage, index) => {
            listImage.addEventListener("click", () => {
                this.navigationTab(index);
            });
        });
    }

    init(){
        if(this.listImages.length && this.listSections.length) {
            this.listSections[0].classList.add(this.classActive);
            this.addEventTabNav();
        }

        return this;
    }
}