import { Select } from "./utilitaryFunctions.js";

export default function initQuestion(){
    const select = new Select();

    const faqQuestions = select.All('[data-faq] dl dt');
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