import { Select } from './utilitarianFunctions.js';

export default class Slide {
    constructor(slide, wrapper) {
        this.slide = Select.Single(slide);
        this.wrapper = Select.Single(wrapper);
        this.dist = {
            finalPosition: 0,
            startX: 0,
            movement: 0,
        };

        this.hasTouch = !!(window.ontouchstart);

        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onUp = this.onUp.bind(this);
    }

    moveSlide(distanceX){
        this.dist.movePosition = distanceX;
        this.slide.style.transform = `translate3d(${distanceX}px, 0, 0)`;
    }

    updateDistance(clientX){
        this.dist.movement = (this.dist.startX - clientX) * 1.6;

        return this.dist.finalPosition - this.dist.movement;
    }

    onMove(event){
        let finalPosition = 0;

        if(this.hasTouch){
            finalPosition = this.updateDistance(event.changedTouches[0].clientX);
        } else {
            finalPosition = this.updateDistance(event.clientX);
        }

        this.moveSlide(finalPosition);
    }

    onUp(){
        if(this.hasTouch){
            this.wrapper.removeEventListener('touchmove', this.onMove);
        } else {
            this.wrapper.removeEventListener('mousemove', this.onMove);
        }

        this.dist.finalPosition = this.dist.movePosition;
    }

    onStart(event){
        if(this.hasTouch){
            this.dist.startX = event.changedTouches[0].clientX;
            this.wrapper.addEventListener('touchmove', this.onMove);
        } else {
            event.preventDefault();
            this.dist.startX = event.clientX;
            this.wrapper.addEventListener('mousemove', this.onMove);
        }
    }

    addSlideEvents(){
        if(this.hasTouch){
            this.wrapper.addEventListener('touchstart', this.onStart);
            this.wrapper.addEventListener('touchend', this.onUp);
        } else {
            this.wrapper.addEventListener('mousedown', this.onStart);
            this.wrapper.addEventListener('mouseup', this.onUp);
        }
    }

    init(){
        if(this.slide && this.wrapper){
            this.addSlideEvents();
        }

        return this;
    }
}