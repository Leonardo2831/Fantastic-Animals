import ScrollSmooth from './components/scrollSmooth.js';
import initShowSection from './components/showSection.js';
import initTabNav from './components/tabNav.js';
import initQuestion from './components/question.js';
import initInfoOperation from './components/infoContact.js';
import initModalForm from './components/modalForm.js';
import initToolTip from './components/tooltip.js';
import initDropDownNav from './components/dropDownNav.js';
import initMenuMobile from './components/menu-mobile.js';
import initFetchAnimals from './components/fetchAnimals.js';
import initBitCoinFetch from './components/bitcoin.js';

const optionsScroll = {
    behavior: "smooth",
    block: "start",
};
const scrollSmooth = new ScrollSmooth("[data-scroll='behavior'] a[href^='#']", optionsScroll);
scrollSmooth.init();

initShowSection();
initTabNav();
initQuestion();
initInfoOperation();
initModalForm();
initToolTip();
initDropDownNav();
initMenuMobile();
initFetchAnimals();
initBitCoinFetch();