function initTabNav(){
    const animalsTab = document.querySelectorAll('[data-animals="tab"] picture img');
    const animalsText = document.querySelectorAll('[data-animals="tab"] article');
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
    const faqQuestions = document.querySelectorAll('[data-faq] dl dt');
    const nameClassDD = 'openQuestion';
    const nameClassSpan = 'openFaq';
    
    if(faqQuestions.length){
        faqQuestions[0].nextElementSibling.classList.add(nameClassDD);
        faqQuestions[0].children[0].classList.add(nameClassSpan);

        function openQuestion(){
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
initScrollSmooth()

function initShowSection(){
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
initShowSection();

function initOpenToContact(){
    const date = new Date();
    const dayWeek = date.getDay();
    const hours = date.getHours();
    const closeDay = (dayWeek === 6 || dayWeek === 0);
    const closeHours = (hours <= 8 || hours >= 18);
    
    const openInfo = document.querySelector('[data-open="content"] ul li:last-of-type');
    
    if(openInfo){

        if(closeDay || closeHours){
            openInfo.dataset.open = false;
        } else {
            openInfo.dataset.open = true;
        }

    }
}
initOpenToContact();