import { Select } from './utilitaryFunctions.js';

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
        toolTipBoxElement: '',
        handleEvent(){
            this.toolTipBoxElement.remove();
        }
    }

    function onMouseOver(event){
        const toolTipBox = createToolTipBox(this);

        const pageY = event.pageY;
        const pageX = event.pageX;

        toolTipBox.style.cssText = `top: ${pageY}px; left: ${pageX}px;`;
        onMouseLeave.toolTipBoxElement = toolTipBox;
        this.addEventListener('mouseleave', onMouseLeave);
    }

    toolsTip.forEach((toolTip) => {
        toolTip.addEventListener('mouseover', onMouseOver);
    });
}