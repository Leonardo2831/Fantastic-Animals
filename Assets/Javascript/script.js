import ScrollSmooth from "./components/scrollSmooth.js";
import Questions from "./components/question.js";
import TabNav from "./components/tabNav.js";
import ModalForm from "./components/modalForm.js";
import ToolTip from "./components/tooltip.js";
import createAnimals from "./components/fetchAnimals.js";
import fetchBitcoin from "./components/bitcoin.js";
import ShowSection from "./components/showSection.js";
import DropDownNav from "./components/dropDownNav.js";

import initInfoOperation from "./components/infoContact.js";
import initMenuMobile from "./components/menu-mobile.js";

// scroll
const optionsScroll = {
    behavior: "smooth",
    block: "start",
};
const scrollSmooth = new ScrollSmooth(
    "[data-scroll='behavior'] a[href^='#']",
    optionsScroll
);
scrollSmooth.init();

// questions
const questions = new Questions("[data-faq] dl dt", "openQuestion");
questions.init();

// tabNav
const tabNav = new TabNav(
    "[data-animals='tab'] picture img",
    '[data-animals="tab"] article',
    "activeAnimal"
);
tabNav.init();

// modal form
const modalForm = new ModalForm("[data-modal]", "[data-button-modal]");
modalForm.init();

// toolTip
const toolTip = new ToolTip("[data-tooltip]");
toolTip.init();

// createAnimals
const urlFetchAnimals = "Assets/data/animals.json";
createAnimals(urlFetchAnimals, '[data-animals="number"]');

// fetchBitcoin
fetchBitcoin("https://blockchain.info/ticker", '[data-value="bitcoin"]');

// showSection
const showSection = new ShowSection('[data-section="show"]');
showSection.init();

// dropDownNav
const dropDownNav = new DropDownNav("[data-dropdown]", "active");
dropDownNav.init();

initInfoOperation();
initMenuMobile();