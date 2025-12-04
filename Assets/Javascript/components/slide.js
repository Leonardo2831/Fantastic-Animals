import { Select, debounce } from './utilitarianFunctions.js';

export default class Slide {
    constructor(slide, wrapper, classActiveSlide) {
        this.slide = Select.Single(slide);
        this.wrapper = Select.Single(wrapper);
        this.classActiveSlide = classActiveSlide;
        this.dist = {
            finalPosition: 0,
            startX: 0,
            movement: 0,
        };

        this.hasTouch = !!(window.ontouchstart);

        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onResize = debounce(this.onResize.bind(this), 50);
    }

    transition(active){
        this.slide.style.transition = active ? 'transform 0.3s' : '';
    }

    moveSlide(distanceX){
        this.dist.movePosition = distanceX;
        this.slide.style.transform = `translate3d(${distanceX}px, 0, 0)`;
    }

    updateDistance(clientX){
        this.dist.movement = (this.dist.startX - clientX) * 1.6;

        return this.dist.finalPosition - this.dist.movement;
    }

    // position in move slide
    onMove(event){
        let finalPosition = 0;

        if(this.hasTouch){
            finalPosition = this.updateDistance(event.changedTouches[0].clientX);
        } else {
            finalPosition = this.updateDistance(event.clientX);
        }

        this.moveSlide(finalPosition);
    }

    // finish slide
    onEnd(){
        if(this.hasTouch){
            this.wrapper.removeEventListener('touchmove', this.onMove);
        } else {
            this.wrapper.removeEventListener('mousemove', this.onMove);
        }

        this.dist.finalPosition = this.dist.movePosition;
        this.changeSlideEnd();

        this.transition(true);
    }

    changeSlideEnd(){
        console.log(this.dist.movement);
        
        if(this.dist.movement > 120 && this.index.next !== undefined){
            this.activeNextSlide();
        } else if(this.dist.movement < -120 && this.index.prev !== undefined){
            this.activePrevSlide();
        } else {
            this.changeSlideEnd(this.index.current);
        }

        this.transition(true);
    }

    changeActiveClass(){
        this.slideArray.forEach((slideItem) => {
            slideItem.slide.classList.remove(this.classActiveSlide);
        });

        this.slideArray[this.index.current].slide.classList.add(this.classActiveSlide);
    }

    // init position slide
    onStart(event){
        if(this.hasTouch){
            this.dist.startX = event.changedTouches[0].clientX;
            this.wrapper.addEventListener('touchmove', this.onMove);
        } else {
            event.preventDefault();
            this.dist.startX = event.clientX;
            this.wrapper.addEventListener('mousemove', this.onMove);
        }

        this.transition(false);
    }

    // calc position slide on center
    calcSlidePosition(slide){
        const marginSlide = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;

        return -(slide.offsetLeft - marginSlide);
    }

    // slides config
    slidesConfig(){
        this.slideArray = [...this.slide.children].map((slidePart) => {
            const slidePosition = this.calcSlidePosition(slidePart);

            return {
                position: slidePosition,
                slide: slidePart,
            };
        });
    }

    // get index of slides
    slidesIndex(index){
        const last = this.slideArray.length - 1;
        
        this.index = {
            prev: index === 0 ? undefined : index - 1,
            current: index,
            next: index === last ? undefined : index + 1,
        };
    }

    changeSlide(index){
        const activeSlide = this.slideArray[index];

        this.moveSlide(activeSlide.position);
        this.slidesIndex(index);

        this.dist.finalPosition = activeSlide.position;
        this.changeActiveClass();
    }

    activePrevSlide(){
        if(this.index.prev !== undefined){
            this.changeSlide(this.index.prev);
        }
    }

    activeNextSlide(){
        if(this.index.next !== undefined){
            this.changeSlide(this.index.next);
        }
    }

    addSlideEvents(){
        if(this.hasTouch){
            this.wrapper.addEventListener('touchstart', this.onStart);
            this.wrapper.addEventListener('touchend', this.onEnd);
        } else {
            this.wrapper.addEventListener('mousedown', this.onStart);
            this.wrapper.addEventListener('mouseup', this.onEnd);
        }
    }

    onResize(){
        setTimeout(() => {
            this.slidesConfig();
            this.changeSlide(this.index.current);
        }, 200);
    }

    addResizeEvent(){
        window.addEventListener('resize', this.onResize);
    }

    init(){
        if(this.slide && this.wrapper){
            this.addSlideEvents();
            this.addResizeEvent();
            this.slidesConfig();
            this.transition(true);
        }

        return this;
    }
}