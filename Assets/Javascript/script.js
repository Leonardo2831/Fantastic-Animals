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

const date = new Date();
const dayWeek = date.getDay();
const hours = date.getHours();
const openInfo = document.querySelector('.main__contact ul li:last-of-type');

if((hours <= 8 || hours >= 18) && (dayWeek === 0 || dayWeek === 6)){
    openInfo.classList.add('close');
    openInfo.classList.remove('open');

} else {
    openInfo.classList.add('open');
    openInfo.classList.remove('close');
    
}
