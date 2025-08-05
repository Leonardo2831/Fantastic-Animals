import { Select } from "./utilitaryFunctions.js";

export default function initShowSection(){
    const select = new Select();
    
    const sectionsShow = select.All('[data-section="show"]');
    const windowHalf = window.innerHeight * 0.5;
    const nameClass = 'showScroll';
    
    sectionsShow[0].classList.add(nameClass);

    if(sectionsShow.length){
        function showScroll(){
            sectionsShow.forEach((sectionShow)=>{
                const sectionTop = sectionShow.getBoundingClientRect().top;
                const sectionVisible = sectionTop - windowHalf;
        
                if(sectionVisible < 0){
                    sectionShow.classList.add(nameClass);
                } else if(sectionShow.classList.contains(nameClass)){
                    sectionShow.classList.remove(nameClass);
                }
            });
        }
        
        window.addEventListener('scroll', showScroll);
    }
}