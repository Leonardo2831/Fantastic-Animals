function tabNav(){
    const animalsTab = document.querySelectorAll('.js-animalsTab picture img');
    const animalsText = document.querySelectorAll('.js-animalsTab article');

    if(animalsTab.length && animalsText.length){
        animalsText[0].classList.add('activeAnimal');

        function navigationTab(index){
        
            animalsText.forEach((animalText) =>{
                animalText.classList.remove('activeAnimal');
            });
        
            animalsText[index].classList.add('activeAnimal');
        
        }
        
        animalsTab.forEach((animalTab, index) => {
        
            animalTab.addEventListener('click', () =>{
                navigationTab(index);
            });
        
        });
    }
}
tabNav();

function question(){
    const faqQuestions = document.querySelectorAll('.js-faq dl dt');
    
    if(faqQuestions.length){
        faqQuestions[0].nextElementSibling.classList.add('openQuestion');
        faqQuestions[0].children[0].classList.add('openFaq');

        function openQuestion(event){
            const questionEvent = this;
        
            questionEvent.children[0].classList.toggle('openFaq');
            questionEvent.nextElementSibling.classList.toggle('openQuestion');
        }
        
        faqQuestions.forEach((faqQuestion) => {
            faqQuestion.addEventListener('click', openQuestion);
        });
    }
}
question();

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
