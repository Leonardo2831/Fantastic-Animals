/**
 * 
 * @param {Element | null} element - elemento que foi clicado
 * @param {Function} callback 
 */
export default function clickOutside(element, events, callback){
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