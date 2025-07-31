export default function initShowSection(){
    const sectionsShow = document.querySelectorAll('[data-scroll="right"]');
    const windowHalf = window.innerHeight * 0.5;
    const nameClass = 'showScroll';
    
    sectionsShow[0].classList.add(nameClass);

    if(sectionsShow.length){
        function showScroll(){
            sectionsShow.forEach((sectionShow)=>{
                const sectionTopWindow = sectionShow.getBoundingClientRect().top - windowHalf;
        
                if(sectionTopWindow < 0){
                    sectionShow.classList.add(nameClass);
                }
            });
        }
        
        window.addEventListener('scroll', showScroll);
    }
}