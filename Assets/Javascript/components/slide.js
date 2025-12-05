import { Select, debounce } from "./utilitarianFunctions.js";

class Slide {
    constructor(slide, wrapper, classActiveSlide) {
        this.slide = Select.Single(slide);
        this.wrapper = Select.Single(wrapper);
        this.classActiveSlide = classActiveSlide;
        this.dist = {
            finalPosition: 0,
            startX: 0,
            movement: 0,
            movePosition: 0,
        };

        this.onStart = this.onStart.bind(this);
        this.onMove = this.onMove.bind(this);
        this.onEnd = this.onEnd.bind(this);
        this.onResize = debounce(this.onResize.bind(this), 50);

        this.changeEvent = new Event('changeEvent');
    }

    transition(active) {
        this.slide.style.transition = active ? "transform 0.3s" : "";
    }

    moveSlide(distanceX) {
        this.dist.movePosition = distanceX;
        this.slide.style.transform = `translate3d(${distanceX}px, 0, 0)`;
    }

    updateDistance(clientX) {
        this.dist.movement = (this.dist.startX - clientX) * 1.6;

        return this.dist.finalPosition - this.dist.movement;
    }

    // position in move slide
    onMove(event) {
        const pointerPosition =
        event.type === "mousemove"
            ? event.clientX
            : event.changedTouches[0].clientX;
        const finalPosition = this.updateDistance(pointerPosition);

        this.moveSlide(finalPosition);
    }

    // finish slide
    onEnd(event) {
        const movetype = event.type === "mouseup" ? "mousemove" : "touchmove";
        this.wrapper.removeEventListener(movetype, this.onMove);

        this.dist.finalPosition = this.dist.movePosition;
        this.changeSlideEnd();

        this.transition(true);
    }

    changeSlideEnd() {
        if (this.dist.movement > 120 && this.index.next !== undefined) {
            this.activeNextSlide();
        } else if (this.dist.movement < -120 && this.index.prev !== undefined) {
            this.activePrevSlide();
        } else {
            this.changeSlide(this.index.current);
        }

        this.transition(true);
    }

    changeActiveClass() {
        this.slideArray.forEach((slideItem) => {
            slideItem.slide.classList.remove(this.classActiveSlide);
        });

        this.slideArray[this.index.current].slide.classList.add(
            this.classActiveSlide
        );
    }

    // init position slide
    onStart(event) {
        let movetype;
        this.dist.movement = 0;

        if (event.type === "mousedown") {
            event.preventDefault();
            this.dist.startX = event.clientX;
            movetype = "mousemove";
        } else {
            this.dist.startX = event.changedTouches[0].clientX;
            movetype = "touchmove";
        }

        this.wrapper.addEventListener(movetype, this.onMove);

        this.transition(false);
    }

    // calc position slide on center
    calcSlidePosition(slide) {
        const marginSlide = (this.wrapper.offsetWidth - slide.offsetWidth) / 2;

        return -(slide.offsetLeft - marginSlide);
    }

    // slides config
    slidesConfig() {
        this.slideArray = [...this.slide.children].map((slidePart) => {
            const slidePosition = this.calcSlidePosition(slidePart);

            return {
                position: slidePosition,
                slide: slidePart,
            };
        });
    }

    // get index of slides
    slidesIndex(index) {
        const last = this.slideArray.length - 1;

        this.index = {
            prev: index === 0 ? undefined : index - 1,
            current: index,
            next: index === last ? undefined : index + 1,
        };
    }

    changeSlide(index) {
        const activeSlide = this.slideArray[index];

        this.moveSlide(activeSlide.position);
        this.slidesIndex(index);

        this.dist.finalPosition = activeSlide.position;
        this.changeActiveClass();

        this.wrapper.dispatchEvent(this.changeEvent);
    }

    activePrevSlide() {
        if (this.index.prev !== undefined) {
            this.changeSlide(this.index.prev);
        }
    }

    activeNextSlide() {
        if (this.index.next !== undefined) {
            this.changeSlide(this.index.next);
        }
    }

    addSlideEvents() {
        this.wrapper.addEventListener("mousedown", this.onStart);
        this.wrapper.addEventListener("touchstart", this.onStart);
        this.wrapper.addEventListener("mouseup", this.onEnd);
        this.wrapper.addEventListener("touchend", this.onEnd);
    }

    onResize() {
        setTimeout(() => {
            this.slidesConfig();
            this.changeSlide(this.index.current);
        }, 200);
    }

    addResizeEvent() {
        window.addEventListener("resize", this.onResize);
    }

    init() {
        if (this.slide && this.wrapper) {
            this.addSlideEvents();
            this.addResizeEvent();
            this.slidesConfig();
            this.transition(true);
        }

        return this;
    }
}

export default class SlideNav extends Slide {
    constructor(...args){
        super(...args);

        this.activePrevSlide = this.activePrevSlide.bind(this);
        this.activeNextSlide = this.activeNextSlide.bind(this);
        this.eventControl = this.eventControl.bind(this);
        this.activeControlItem = this.activeControlItem.bind(this);
    }

    addArrow(prev, next){
        this.prevButton = Select.Single(prev);
        this.nextButton = Select.Single(next);

        this.addArrowEvent();
    }

    addArrowEvent(){
        this.prevButton.addEventListener("click", this.activePrevSlide);
        this.nextButton.addEventListener("click", this.activeNextSlide);
    }

    createControl(){
        const control = document.createElement('ul');
        control.dataset.control = 'slide';

        this.slideArray.forEach((slideItem, index) => {
            control.innerHTML += `
                <li>
                    <a href="#${index + 1}">
                        ${index + 1}
                    </a>
                </li>
            `;
        });

        this.wrapper.appendChild(control);
        return control;
    }

    activeControlItem(){
        this.controlArray.forEach((control) => {
            control.classList.remove(this.classActiveSlide);
        });

        this.controlArray[this.index.current].classList.add(this.classActiveSlide);
    }

    eventControl(control, index){
        control.addEventListener("click", (event) => {
            event.preventDefault();
            this.changeSlide(index);
            this.activeControlItem();
        });

        this.wrapper.addEventListener('changeEvent', this.activeControlItem);
    }

    addControl(customControl){
        this.control = Select.Single(customControl) || this.createControl();

        this.controlArray = [...this.control.children];

        this.controlArray.forEach((control, index) => {
            this.eventControl(control, index);
        });

        this.activeControlItem();
    }
}