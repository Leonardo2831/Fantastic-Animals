export default function initTabNav(){
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