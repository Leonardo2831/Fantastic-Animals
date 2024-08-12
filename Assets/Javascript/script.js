// navegação em tab
const animalsTab = document.querySelectorAll('.js-animalsTab picture img');
const animalsText = document.querySelectorAll('.js-animalsTab article');

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

// abrir perguntas
const faqQuestions = document.querySelectorAll('.main__faq dl dt');
const faqDetails = document.querySelectorAll('.main__faq dl dt span');

function openQuestion(event){
    const detailEvent = event.currentTarget.querySelector('span');
    const selectDD = detailEvent.parentElement.nextElementSibling;

    detailEvent.classList.toggle('spanActive');
    selectDD.classList.toggle('openQuestion');
}

faqQuestions.forEach((faqQuestion) => faqQuestion.addEventListener('click', openQuestion));

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
