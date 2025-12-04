import { Select } from "./utilitarianFunctions.js";

export default class ToolTip {
    constructor(toolTips){
        this.toolTips = Select.All(toolTips);

        this.onMouseOver = this.onMouseOver.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    createToolTipBox() {
        const toolTipBox = document.createElement("div");
        const textToolTip = this.elementCurrent.getAttribute("aria-label");

        toolTipBox.classList.add("toolTip");
        toolTipBox.textContent = textToolTip;
        document.body.appendChild(toolTipBox);

        this.toolTipBox = toolTipBox;
    }

    onMouseLeave() {
        this.toolTipBox.remove();
        this.elementCurrent.removeEventListener("mouseleave", this.onMouseLeave);
        this.elementCurrent.removeEventListener("mousemove", this.onMouseMove);
    }

    onMouseMove(event) {
        const pageY = event.pageY;
        const pageX = event.pageX;

        this.toolTipBox.style.top = `${pageY + 20}px`;

        if(event.pageX + 240 > window.innerWidth){
            this.toolTipBox.style.left = `${pageX - 190}px`;
        } else {
            this.toolTipBox.style.left = `${pageX + 20}px`;
        }
    }

    onMouseOver(event) {
        this.elementCurrent = event.currentTarget;
        
        this.createToolTipBox(this.elementCurrent);

        this.elementCurrent.addEventListener("mouseleave", this.onMouseLeave);
        this.elementCurrent.addEventListener("mousemove", this.onMouseMove);
    }

    addToolTipEvent(){
        this.toolTips.forEach((toolTip) => {
            toolTip.addEventListener("mouseover", this.onMouseOver);
        });
    }

    init(){
        if(this.toolTips.length){
            this.addToolTipEvent();
        }

        return this;
    }

    
}