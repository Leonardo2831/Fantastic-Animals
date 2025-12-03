import ScrollSmooth from './components/scrollSmooth.js';
import Questions from './components/question.js';
import TabNav from './components/tabNav.js';

import initShowSection from './components/showSection.js';
import initInfoOperation from './components/infoContact.js';
import initModalForm from './components/modalForm.js';
import initToolTip from './components/tooltip.js';
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

initShowSection();
initInfoOperation();
initModalForm();
initToolTip();
initDropDownNav();
initMenuMobile();
initFetchAnimals();
initBitCoinFetch();