
export class Select {
    /**
     * 
     * @param {String} selector - Seletor css do elemento
     * @returns {Element | null} - Elemento selecionado ou `null`
     */
    static Single(selector){
        return document.querySelector(selector);
    }

    /**
     * 
     * @param {String} selector - Seletor css dos elementos
     * @returns {NodeListOf<HTMLElement>} - NodeList com os elementos ou um array vazio
     */
    static All(selector){
        return document.querySelectorAll(selector);
    }
}

/**
 * 
 * @param {Element | null} element - elemento que foi clicado
 * @param {Function} callback 
 */
export function clickOutside(element, eventUser, callback){
    const html = document.documentElement;
    const dataOutside = 'data-outside';

    if(!element.hasAttribute(dataOutside)){
        setTimeout(() => {
            html.addEventListener(eventUser, handleOutside);
        });
        element.setAttribute(dataOutside, '');
    }
        
    function handleOutside(event){
        if(!element.contains(event.target)){
            element.removeAttribute(dataOutside);
            html.removeEventListener(eventUser, handleOutside);
            callback();
        }
    }
}

export function debounce(callback, delay){
    let timer;

    return (...args) => {
        if(timer) clearTimeout(timer);

        timer = setTimeout(() => {
            callback(...args);

            timer = null;
        }, delay);
    };
}