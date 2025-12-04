import { Select, debounce } from "./utilitarianFunctions.js";

export default class ShowSection {
    constructor(sections){
        this.sectionsShow = Select.All(sections);
        this.windowHalf = window.innerHeight * 0.6;
        this.nameClass = "showScroll";

        this.checkDistance = debounce(this.checkDistance.bind(this), 50);
    }

    getDistance(){
        this.distances = [...this.sectionsShow].map((sectionShow) => {
            const sectionTop = sectionShow.offsetTop;

            return {
                element: sectionShow,
                offsetTop: Math.floor(sectionTop - this.windowHalf),
            };
        });
    }

    checkDistance(){
        this.distances.forEach((distance) => {
            if(window.pageYOffset > distance.offsetTop){
                distance.element.classList.add(this.nameClass);
            } else if (distance.element.classList.contains(this.nameClass)) {
                distance.element.classList.remove(this.nameClass);
            }
        });
    }

    init(){
        if(this.sectionsShow.length){
            // this.sectionsShow[0].classList.add(this.nameClass);

            this.getDistance();
            this.checkDistance();
            window.addEventListener("scroll", this.checkDistance);
        }

        return this;
    }

    stop(){
        window.removeEventListener("scroll", this.checkDistance);
    }
}