import { Select } from "./utilitaryFunctions.js";

export default function initScrollSmooth(){
    const select = new Select();

    const linksHeader = select.All('[data-scroll="behavior"] a[href^="#"]');

    if(linksHeader){

        function scrollSmooth(event){
            event.preventDefault();
            const hrefLinks = this.getAttribute('href');
            const sectionLink = select.Single(hrefLinks);
    
            sectionLink.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    
        linksHeader.forEach((linkHeader)=>{
            linkHeader.addEventListener('click', scrollSmooth);
        });
    }
}