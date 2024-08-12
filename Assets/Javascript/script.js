// navegação em tab
const animalsAbout = document.querySelectorAll('.animals__about');
const animalScroll = document.querySelector('.animals__scroll');

function navigationTab(event){
    const imageEventAlt = event.target.getAttribute('alt');

    animalsAbout.forEach((animalAbout) =>{
        animalAbout.classList.remove('activeAnimal');

        if(animalAbout.classList.contains(imageEventAlt)){
            animalAbout.classList.add('activeAnimal');
        }

    });

}

animalScroll.addEventListener('click', navigationTab);

// abrir perguntas
const faqQuestions = document.querySelectorAll('.main__faq dl dt');
const faqDetails = document.querySelectorAll('.main__faq dl dt span');

function openQuestion(event){
    const detailEvent = event.target.querySelector('span');
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
