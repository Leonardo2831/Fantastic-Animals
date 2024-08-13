function initTabNav(){
    const animalsTab = document.querySelectorAll('.js-animalsTab picture img');
    const animalsText = document.querySelectorAll('.js-animalsTab article');
    const nameClass = 'activeAnimal';

    if(animalsTab.length && animalsText.length){
        animalsText[0].classList.add(nameClass);

        function navigationTab(index){
        
            animalsText.forEach((animalText) =>{
                animalText.classList.remove(nameClass);
            });
        
            animalsText[index].classList.add(nameClass);
        
        }
        
        animalsTab.forEach((animalTab, index) => {
        
            animalTab.addEventListener('click', () =>{
                navigationTab(index);
            });
        
        });
    }
}
initTabNav();

function initQuestion(){
    const faqQuestions = document.querySelectorAll('.js-faq dl dt');
    const nameClassDD = 'openQuestion';
    const nameClassSpan = 'openFaq';
    
    if(faqQuestions.length){
        faqQuestions[0].nextElementSibling.classList.add(nameClassDD);
        faqQuestions[0].children[0].classList.add(nameClassSpan);

        function openQuestion(event){
            const questionEvent = this;
        
            questionEvent.nextElementSibling.classList.toggle(nameClassDD);
            questionEvent.children[0].classList.toggle(nameClassSpan);
        }
        
        faqQuestions.forEach((faqQuestion) => {
            faqQuestion.addEventListener('click', openQuestion);
        });
    }
}
initQuestion();

function initScrollSmooth(){
    const linksHeader = document.querySelectorAll('.js-scrollBehavior a[href^="#"]');

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
initScrollSmooth()

function initShowSection(){
    const sectionsShow = document.querySelectorAll('.js-showScroll');
    const windowHalf = window.innerHeight * 0.5;

    if(sectionsShow){
        function showScroll(){
            sectionsShow.forEach((sectionShow)=>{
                const nameClass = 'showScroll';
                const sectionTopWindow = sectionShow.getBoundingClientRect().top - windowHalf;
        
                if(sectionTopWindow < 0){
                    sectionShow.classList.add(nameClass);
                }
            });
        }
        
        window.addEventListener('scroll', showScroll);
    }
}
initShowSection();

function initOpenToContact(){
    const date = new Date();
    const dayWeek = date.getDay();
    const hours = date.getHours();
    const closeDay = (dayWeek === 6 || dayWeek === 0);
    const closeHours = (hours <= 8 || hours >= 18);
    
    const openInfo = document.querySelector('.main__contact ul li:last-of-type');
    const nameClassClose = 'close';
    const nameClassOpen = 'open';
    
    if(openInfo){

        if(closeDay || closeHours){
            openInfo.classList.add(nameClassClose);
            openInfo.classList.remove(nameClassOpen);
        } else {
            openInfo.classList.remove(nameClassClose);
            openInfo.classList.add(nameClassOpen);
        }

    }
}
initOpenToContact();