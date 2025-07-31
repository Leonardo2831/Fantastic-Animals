
export class Select {
    /**
     * 
     * @param {String} seletor - Seletor css do elemento
     * @returns {Element | null} - Elemento selecionado ou `null`
     */
    Single(seletor){
        return document.querySelector(seletor);
    }

    /**
     * 
     * @param {String} seletor - Seletor css dos elementos
     * @returns {NodeListOf<HTMLElement>} - NodeList com os elementos ou um array vazio
     */
    All(seletor){
        return document.querySelectorAll(seletor);
    }
}