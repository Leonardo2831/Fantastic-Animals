
export class Select {
    /**
     * 
     * @param {String} selector - Seletor css do elemento
     * @returns {Element | null} - Elemento selecionado ou `null`
     */
    Single(selector){
        return document.querySelector(selector);
    }

    /**
     * 
     * @param {String} selector - Seletor css dos elementos
     * @returns {NodeListOf<HTMLElement>} - NodeList com os elementos ou um array vazio
     */
    All(selector){
        return document.querySelectorAll(selector);
    }
}

/**
 * 
 * @param {Element | null} element - elemento que foi clicado
 * @param {Function} callback 
 */
export function clickOutside(element, events, callback){
    const html = document.documentElement;
    const dataOutside = 'data-outside';

    if(!element.hasAttribute(dataOutside)){
        events.forEach((userEvent) => {
            setTimeout(() => {html.addEventListener(userEvent, handleOutside);});
        });
            
        element.setAttribute(dataOutside, '');
    }
        
    function handleOutside(event){
        if(!element.contains(event.target)){
            element.removeAttribute(dataOutside);
            events.forEach((userEvent) => {
                html.removeEventListener(userEvent, handleOutside);
            });
            callback();
        }
    }
}