export default function initInfoContact(){
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