import { Select } from "./utilitarianFunctions.js";

export default class ScrollSmooth {
    constructor(href, options) {
        this.links = Select.All(href);
        
        if(options === undefined || options === null){
            this.options = {
                behavior: "smooth",
                block: "start",
            };
        } else {
            this.options = options;
        }

        // deve usar o bind para que o this seja o objeto da classe em funções anônimas
        this.scrollSmooth = this.scrollSmooth.bind(this);
    }

    scrollSmooth(event){
        event.preventDefault();
        const hrefLinks = event.currentTarget.getAttribute("href");
        const sectionLink = Select.Single(hrefLinks);

        sectionLink.scrollIntoView(this.options);
    }

    addLinkEvent(){
        if(this.links){
            this.links.forEach((link) => {
                link.addEventListener("click", this.scrollSmooth);
            });
        }
    }

    init(){
        if(this.links.length){
            this.addLinkEvent(); 
        } else {
            console.log("Nenhum link definido");
        }

        return this;
    }
}