import ScrollSmooth from './components/scrollSmooth.js';
import Questions from './components/question.js';
import TabNav from './components/tabNav.js';
import ModalForm from './components/modalForm.js';
import ToolTip from './components/tooltip.js';

import initShowSection from './components/showSection.js';
import initInfoOperation from './components/infoContact.js';
import initDropDownNav from './components/dropDownNav.js';
import initMenuMobile from './components/menu-mobile.js';
import initFetchAnimals from './components/fetchAnimals.js';
import initBitCoinFetch from './components/bitcoin.js';

// scroll
const optionsScroll = {
    behavior: "smooth",
    block: "start",
};
const scrollSmooth = new ScrollSmooth("[data-scroll='behavior'] a[href^='#']", optionsScroll);
scrollSmooth.init();

// questions
const questions = new Questions("[data-faq] dl dt", "openQuestion");
questions.init();

// tabNav
const tabNav = new TabNav("[data-animals='tab'] picture img", '[data-animals="tab"] article', "activeAnimal");
tabNav.init();

// modal form
const modalForm = new ModalForm('[data-modal]', '[data-button-modal]');
modalForm.init();

// toolTip
const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

initShowSection();
initInfoOperation();
ModalForm();
initToolTip();
initDropDownNav();
initMenuMobile();
initFetchAnimals();
initBitCoinFetch();