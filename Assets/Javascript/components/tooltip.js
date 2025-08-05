import { Select } from './utilitarianFunctions.js';

export default function initToolTip(){
    const select = new Select();

    const toolsTip = select.All('[data-tooltip]');

    /**
     * 
     * @param {Element | null} element - container que terá a toolTipBox
     * @returns {Element | null} - toolTipBox criada
     */
    function createToolTipBox(element){
        const toolTipBox = document.createElement('div');
        const textToolTip = element.getAttribute('aria-label');

        toolTipBox.classList.add('toolTip');
        toolTipBox.textContent = textToolTip;
        document.body.appendChild(toolTipBox);

        return toolTipBox;
    }

    const onMouseLeave = {
        handleEvent(){
            this.toolTipBoxElement.remove();
            this.element.removeEventListener('mouseleave', onMouseLeave);
            this.element.removeEventListener('mousemove', onMouseMove);
        }
    }

    const onMouseMove = {
        handleEvent(event){
            const pageY = event.pageY;
            const pageX = event.pageX;

            this.toolTipBoxElement.style.cssText = `top: ${pageY + 20}px; left: ${pageX + 20}px;`;
        }
    }

    function onMouseOver(){
        const toolTipBox = createToolTipBox(this);

        onMouseLeave.toolTipBoxElement = toolTipBox;
        onMouseLeave.element = this;
        onMouseMove.toolTipBoxElement = toolTipBox

        this.addEventListener('mouseleave', onMouseLeave);
        this.addEventListener('mousemove', onMouseMove);
    }

    toolsTip.forEach((toolTip) => {
        toolTip.addEventListener('mouseover', onMouseOver);
    });
}