export default function initScrollSmooth(){
    const linksHeader = document.querySelectorAll('[data-scroll="behavior"] a[href^="#"]');

    if(linksHeader){

        function scrollSmooth(event){
            event.preventDefault();
            const hrefLinks = this.getAttribute('href');
            const sectionLink = document.querySelector(hrefLinks);
    
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