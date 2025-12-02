/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./Assets/Javascript/components/animationNumbers.js":
/*!**********************************************************!*\
  !*** ./Assets/Javascript/components/animationNumbers.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initAnimationNumbers)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initAnimationNumbers() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var numbers = select.All('[data-number]');\n  if (numbers) {\n    var animationNumber = function animationNumber() {\n      numbers.forEach(function (number) {\n        var totalNumber = Number(number.textContent);\n        var increment = Math.floor(totalNumber / 100);\n        var start = 0;\n        var timer = setInterval(function () {\n          start = start + increment;\n          number.textContent = start;\n          if (start > totalNumber) {\n            number.textContent = totalNumber;\n            clearInterval(timer);\n          }\n        }, 25 * Math.random());\n      });\n    };\n    var handleMutation = function handleMutation(mutation) {\n      if (mutation[0].target.classList.contains('showScroll')) {\n        animationNumber();\n        observer.disconnect();\n      }\n    };\n    var observerTarget = select.Single('[data-observer]');\n    var observer = new MutationObserver(handleMutation);\n    observer.observe(observerTarget, {\n      attributes: true\n    });\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/animationNumbers.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/bitcoin.js":
/*!*************************************************!*\
  !*** ./Assets/Javascript/components/bitcoin.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initBitCoinFetch)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initBitCoinFetch() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  fetch(\"https://blockchain.info/ticker\").then(function (response) {\n    return response.json();\n  }).then(function (bitcoin) {\n    var contentValueBitcoin = select.Single('[data-value=\"bitcoin\"]');\n    contentValueBitcoin.textContent = (1000 / bitcoin.BRL.sell).toFixed(4);\n  })[\"catch\"](function (error) {\n    console.log(Error(error));\n  });\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/bitcoin.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/dropDownNav.js":
/*!*****************************************************!*\
  !*** ./Assets/Javascript/components/dropDownNav.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initDropDownNav)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initDropDownNav() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var dropDowns = select.All('[data-dropdown]');\n  function handleClick() {\n    var _this = this;\n    this.dataset.dropdown = this.dataset.dropdown = 'active';\n    (0,_utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clickOutside)(this, ['touchstart', 'click'], function () {\n      _this.dataset.dropdown = '';\n    });\n  }\n  dropDowns.forEach(function (dropDown) {\n    ['touchstart', 'click'].forEach(function (userEvent) {\n      dropDown.addEventListener(userEvent, handleClick);\n    });\n  });\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/dropDownNav.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/fetchAnimals.js":
/*!******************************************************!*\
  !*** ./Assets/Javascript/components/fetchAnimals.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initFetchAnimals)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n/* harmony import */ var _animationNumbers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./animationNumbers.js */ \"./Assets/Javascript/components/animationNumbers.js\");\n\n\n\n\nfunction initFetchAnimals() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_2__.Select();\n  function fetchAnimals(_x) {\n    return _fetchAnimals.apply(this, arguments);\n  }\n  function _fetchAnimals() {\n    _fetchAnimals = (0,_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(/*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().mark(function _callee(url) {\n      var animalsResponse, contentAnimals, _t;\n      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default().wrap(function (_context) {\n        while (1) switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 1;\n            return fetch(url);\n          case 1:\n            _context.next = 2;\n            return _context.sent.json();\n          case 2:\n            animalsResponse = _context.sent;\n            contentAnimals = select.Single('[data-animals=\"number\"]');\n            animalsResponse.animals.forEach(function (animal) {\n              var divAnimalCompleted = createAnimal(animal);\n              contentAnimals.appendChild(divAnimalCompleted);\n            });\n            (0,_animationNumbers_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n            _context.next = 4;\n            break;\n          case 3:\n            _context.prev = 3;\n            _t = _context[\"catch\"](0);\n            console.log(Error(_t));\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }, _callee, null, [[0, 3]]);\n    }));\n    return _fetchAnimals.apply(this, arguments);\n  }\n  function createAnimal(animal) {\n    var divAnimal = document.createElement('div');\n    var htmlAnimal = \"\\n            <h3>\".concat(animal.specie, \"</h3>\\n            <span data-number>\").concat(animal.total, \"</span>\\n        \");\n    var classDivStyle = 'number-animal';\n    divAnimal.classList.add(classDivStyle);\n    divAnimal.innerHTML = htmlAnimal;\n    return divAnimal;\n  }\n  fetchAnimals('Assets/data/animals.json');\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/fetchAnimals.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/infoContact.js":
/*!*****************************************************!*\
  !*** ./Assets/Javascript/components/infoContact.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initInfoOperation)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initInfoOperation() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var date = new Date();\n  var dayWeek = date.getDay();\n  var hours = date.getHours();\n  var closeDay = dayWeek === 6 || dayWeek === 0;\n  var closeHours = hours <= 8 || hours >= 18;\n  var openInfo = select.Single('[data-open=\"content\"] ul li:last-of-type');\n  if (openInfo) {\n    if (closeDay || closeHours) {\n      openInfo.dataset.open = false;\n    } else {\n      openInfo.dataset.open = true;\n    }\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/infoContact.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/menu-mobile.js":
/*!*****************************************************!*\
  !*** ./Assets/Javascript/components/menu-mobile.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initMenuMobile)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initMenuMobile() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var buttonMobile = select.Single('[data-mobile=\"button\"]');\n  var listMenu = select.Single('[data-mobile=\"list\"]');\n  var events = ['click', 'touchstart'];\n  if (buttonMobile) {\n    var openMenuMobile = function openMenuMobile() {\n      var classActiveMenu = 'activeMobile';\n      buttonMobile.classList.toggle(classActiveMenu);\n      (0,_utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.clickOutside)(listMenu, events, function () {\n        buttonMobile.classList.remove(classActiveMenu);\n      });\n    };\n    events.forEach(function (userEvent) {\n      buttonMobile.addEventListener(userEvent, openMenuMobile);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/menu-mobile.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/modalForm.js":
/*!***************************************************!*\
  !*** ./Assets/Javascript/components/modalForm.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initModalForm)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initModalForm() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var modal = select.Single('[data-modal]');\n  var buttonsModal = select.All('[data-button-modal]');\n  if (modal && buttonsModal.length) {\n    var modalFunction = function modalFunction(event) {\n      event.preventDefault();\n      if (event.target === modal || event.target === buttonsModal[1]) {\n        modal.dataset.modal = 'disabled';\n      } else {\n        modal.dataset.modal = 'active';\n      }\n    };\n    buttonsModal.forEach(function (button) {\n      button.addEventListener('click', modalFunction);\n    });\n    modal.addEventListener('click', modalFunction);\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/modalForm.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/question.js":
/*!**************************************************!*\
  !*** ./Assets/Javascript/components/question.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initQuestion)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initQuestion() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var faqQuestions = select.All('[data-faq] dl dt');\n  var nameClassDD = 'openQuestion';\n  var nameClassSpan = 'openFaq';\n  if (faqQuestions.length) {\n    var openQuestion = function openQuestion() {\n      var questionEvent = this;\n      questionEvent.nextElementSibling.classList.toggle(nameClassDD);\n      questionEvent.children[0].classList.toggle(nameClassSpan);\n    };\n    faqQuestions[0].nextElementSibling.classList.add(nameClassDD);\n    faqQuestions[0].children[0].classList.add(nameClassSpan);\n    faqQuestions.forEach(function (faqQuestion) {\n      faqQuestion.addEventListener('click', openQuestion);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/question.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/scrollSmooth.js":
/*!******************************************************!*\
  !*** ./Assets/Javascript/components/scrollSmooth.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initScrollSmooth)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initScrollSmooth() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var linksHeader = select.All('[data-scroll=\"behavior\"] a[href^=\"#\"]');\n  if (linksHeader) {\n    var scrollSmooth = function scrollSmooth(event) {\n      event.preventDefault();\n      var hrefLinks = this.getAttribute('href');\n      var sectionLink = select.Single(hrefLinks);\n      sectionLink.scrollIntoView({\n        behavior: 'smooth',\n        block: 'start'\n      });\n    };\n    linksHeader.forEach(function (linkHeader) {\n      linkHeader.addEventListener('click', scrollSmooth);\n    });\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/scrollSmooth.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/showSection.js":
/*!*****************************************************!*\
  !*** ./Assets/Javascript/components/showSection.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initShowSection)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initShowSection() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var sectionsShow = select.All('[data-section=\"show\"]');\n  var windowHalf = window.innerHeight * 0.5;\n  var nameClass = 'showScroll';\n  sectionsShow[0].classList.add(nameClass);\n  if (sectionsShow.length) {\n    var showScroll = function showScroll() {\n      sectionsShow.forEach(function (sectionShow) {\n        var sectionTop = sectionShow.getBoundingClientRect().top;\n        var sectionVisible = sectionTop - windowHalf;\n        if (sectionVisible < 0) {\n          sectionShow.classList.add(nameClass);\n        } else if (sectionShow.classList.contains(nameClass)) {\n          sectionShow.classList.remove(nameClass);\n        }\n      });\n    };\n    window.addEventListener('scroll', showScroll);\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/showSection.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/tabNav.js":
/*!************************************************!*\
  !*** ./Assets/Javascript/components/tabNav.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initTabNav)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initTabNav() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var animalsTab = select.All('[data-animals=\"tab\"] picture img');\n  var animalsText = select.All('[data-animals=\"tab\"] article');\n  var nameClass = 'activeAnimal';\n  if (animalsTab.length && animalsText.length) {\n    var navigationTab = function navigationTab(index) {\n      animalsText.forEach(function (animalText) {\n        animalText.classList.remove(nameClass);\n      });\n      animalsText[index].classList.add(nameClass);\n    };\n    animalsText[0].classList.add(nameClass);\n    animalsTab.forEach(function (animalTab, index) {\n      animalTab.addEventListener('click', function () {\n        navigationTab(index);\n      });\n    });\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/tabNav.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/tooltip.js":
/*!*************************************************!*\
  !*** ./Assets/Javascript/components/tooltip.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initToolTip)\n/* harmony export */ });\n/* harmony import */ var _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utilitarianFunctions.js */ \"./Assets/Javascript/components/utilitarianFunctions.js\");\n\nfunction initToolTip() {\n  var select = new _utilitarianFunctions_js__WEBPACK_IMPORTED_MODULE_0__.Select();\n  var toolsTip = select.All('[data-tooltip]');\n\n  /**\r\n   * \r\n   * @param {Element | null} element - container que terá a toolTipBox\r\n   * @returns {Element | null} - toolTipBox criada\r\n   */\n  function createToolTipBox(element) {\n    var toolTipBox = document.createElement('div');\n    var textToolTip = element.getAttribute('aria-label');\n    toolTipBox.classList.add('toolTip');\n    toolTipBox.textContent = textToolTip;\n    document.body.appendChild(toolTipBox);\n    return toolTipBox;\n  }\n  var onMouseLeave = {\n    handleEvent: function handleEvent() {\n      this.toolTipBoxElement.remove();\n      this.element.removeEventListener('mouseleave', onMouseLeave);\n      this.element.removeEventListener('mousemove', onMouseMove);\n    }\n  };\n  var onMouseMove = {\n    handleEvent: function handleEvent(event) {\n      var pageY = event.pageY;\n      var pageX = event.pageX;\n      this.toolTipBoxElement.style.cssText = \"top: \".concat(pageY + 20, \"px; left: \").concat(pageX + 20, \"px;\");\n    }\n  };\n  function onMouseOver() {\n    var toolTipBox = createToolTipBox(this);\n    onMouseLeave.toolTipBoxElement = toolTipBox;\n    onMouseLeave.element = this;\n    onMouseMove.toolTipBoxElement = toolTipBox;\n    this.addEventListener('mouseleave', onMouseLeave);\n    this.addEventListener('mousemove', onMouseMove);\n  }\n  toolsTip.forEach(function (toolTip) {\n    toolTip.addEventListener('mouseover', onMouseOver);\n  });\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/tooltip.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/components/utilitarianFunctions.js":
/*!**************************************************************!*\
  !*** ./Assets/Javascript/components/utilitarianFunctions.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Select: () => (/* binding */ Select),\n/* harmony export */   clickOutside: () => (/* binding */ clickOutside)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n\n\nvar Select = /*#__PURE__*/function () {\n  function Select() {\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Select);\n  }\n  return (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Select, [{\n    key: \"Single\",\n    value:\n    /**\r\n     * \r\n     * @param {String} selector - Seletor css do elemento\r\n     * @returns {Element | null} - Elemento selecionado ou `null`\r\n     */\n    function Single(selector) {\n      return document.querySelector(selector);\n    }\n\n    /**\r\n     * \r\n     * @param {String} selector - Seletor css dos elementos\r\n     * @returns {NodeListOf<HTMLElement>} - NodeList com os elementos ou um array vazio\r\n     */\n  }, {\n    key: \"All\",\n    value: function All(selector) {\n      return document.querySelectorAll(selector);\n    }\n  }]);\n}();\n\n/**\r\n * \r\n * @param {Element | null} element - elemento que foi clicado\r\n * @param {Function} callback \r\n */\nfunction clickOutside(element, events, callback) {\n  var html = document.documentElement;\n  var dataOutside = 'data-outside';\n  if (!element.hasAttribute(dataOutside)) {\n    events.forEach(function (userEvent) {\n      setTimeout(function () {\n        html.addEventListener(userEvent, handleOutside);\n      });\n    });\n    element.setAttribute(dataOutside, '');\n  }\n  function handleOutside(event) {\n    if (!element.contains(event.target)) {\n      element.removeAttribute(dataOutside);\n      events.forEach(function (userEvent) {\n        html.removeEventListener(userEvent, handleOutside);\n      });\n      callback();\n    }\n  }\n}\n\n//# sourceURL=webpack:///./Assets/Javascript/components/utilitarianFunctions.js?\n}");

/***/ }),

/***/ "./Assets/Javascript/script.js":
/*!*************************************!*\
  !*** ./Assets/Javascript/script.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/scrollSmooth.js */ \"./Assets/Javascript/components/scrollSmooth.js\");\n/* harmony import */ var _components_showSection_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/showSection.js */ \"./Assets/Javascript/components/showSection.js\");\n/* harmony import */ var _components_tabNav_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/tabNav.js */ \"./Assets/Javascript/components/tabNav.js\");\n/* harmony import */ var _components_question_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/question.js */ \"./Assets/Javascript/components/question.js\");\n/* harmony import */ var _components_infoContact_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/infoContact.js */ \"./Assets/Javascript/components/infoContact.js\");\n/* harmony import */ var _components_modalForm_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/modalForm.js */ \"./Assets/Javascript/components/modalForm.js\");\n/* harmony import */ var _components_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/tooltip.js */ \"./Assets/Javascript/components/tooltip.js\");\n/* harmony import */ var _components_dropDownNav_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/dropDownNav.js */ \"./Assets/Javascript/components/dropDownNav.js\");\n/* harmony import */ var _components_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/menu-mobile.js */ \"./Assets/Javascript/components/menu-mobile.js\");\n/* harmony import */ var _components_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/fetchAnimals.js */ \"./Assets/Javascript/components/fetchAnimals.js\");\n/* harmony import */ var _components_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bitcoin.js */ \"./Assets/Javascript/components/bitcoin.js\");\n\n\n\n\n\n\n\n\n\n\n\n(0,_components_scrollSmooth_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n(0,_components_showSection_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n(0,_components_tabNav_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n(0,_components_question_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n(0,_components_infoContact_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n(0,_components_modalForm_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\n(0,_components_tooltip_js__WEBPACK_IMPORTED_MODULE_6__[\"default\"])();\n(0,_components_dropDownNav_js__WEBPACK_IMPORTED_MODULE_7__[\"default\"])();\n(0,_components_menu_mobile_js__WEBPACK_IMPORTED_MODULE_8__[\"default\"])();\n(0,_components_fetchAnimals_js__WEBPACK_IMPORTED_MODULE_9__[\"default\"])();\n(0,_components_bitcoin_js__WEBPACK_IMPORTED_MODULE_10__[\"default\"])();\n\n//# sourceURL=webpack:///./Assets/Javascript/script.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/OverloadYield.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/OverloadYield.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("{function _OverloadYield(e, d) {\n  this.v = e, this.k = d;\n}\nmodule.exports = _OverloadYield, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/OverloadYield.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _asyncToGenerator)\n/* harmony export */ });\nfunction asyncGeneratorStep(n, t, e, r, o, a, c) {\n  try {\n    var i = n[a](c),\n      u = i.value;\n  } catch (n) {\n    return void e(n);\n  }\n  i.done ? t(u) : Promise.resolve(u).then(r, o);\n}\nfunction _asyncToGenerator(n) {\n  return function () {\n    var t = this,\n      e = arguments;\n    return new Promise(function (r, o) {\n      var a = n.apply(t, e);\n      function _next(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"next\", n);\n      }\n      function _throw(n) {\n        asyncGeneratorStep(a, r, o, _next, _throw, \"throw\", n);\n      }\n      _next(void 0);\n    });\n  };\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _classCallCheck)\n/* harmony export */ });\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/classCallCheck.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _createClass)\n/* harmony export */ });\n/* harmony import */ var _toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toPropertyKey.js */ \"./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js\");\n\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, (0,_toPropertyKey_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/createClass.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPrimitive.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPrimitive)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n\nfunction toPrimitive(t, r) {\n  if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(t) || !t) return t;\n  var e = t[Symbol.toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i)) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/toPrimitive.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ toPropertyKey)\n/* harmony export */ });\n/* harmony import */ var _typeof_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/esm/typeof.js\");\n/* harmony import */ var _toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toPrimitive.js */ \"./node_modules/@babel/runtime/helpers/esm/toPrimitive.js\");\n\n\nfunction toPropertyKey(t) {\n  var i = (0,_toPrimitive_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(t, \"string\");\n  return \"symbol\" == (0,_typeof_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(i) ? i : i + \"\";\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _typeof)\n/* harmony export */ });\nfunction _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, _typeof(o);\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/esm/typeof.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regenerator.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regenerator.js ***!
  \************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction _regenerator() {\n  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */\n  var e,\n    t,\n    r = \"function\" == typeof Symbol ? Symbol : {},\n    n = r.iterator || \"@@iterator\",\n    o = r.toStringTag || \"@@toStringTag\";\n  function i(r, n, o, i) {\n    var c = n && n.prototype instanceof Generator ? n : Generator,\n      u = Object.create(c.prototype);\n    return regeneratorDefine(u, \"_invoke\", function (r, n, o) {\n      var i,\n        c,\n        u,\n        f = 0,\n        p = o || [],\n        y = !1,\n        G = {\n          p: 0,\n          n: 0,\n          v: e,\n          a: d,\n          f: d.bind(e, 4),\n          d: function d(t, r) {\n            return i = t, c = 0, u = e, G.n = r, a;\n          }\n        };\n      function d(r, n) {\n        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {\n          var o,\n            i = p[t],\n            d = G.p,\n            l = i[2];\n          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));\n        }\n        if (o || r > 1) return a;\n        throw y = !0, n;\n      }\n      return function (o, p, l) {\n        if (f > 1) throw TypeError(\"Generator is already running\");\n        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {\n          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);\n          try {\n            if (f = 2, i) {\n              if (c || (o = \"next\"), t = i[o]) {\n                if (!(t = t.call(i, u))) throw TypeError(\"iterator result is not an object\");\n                if (!t.done) return t;\n                u = t.value, c < 2 && (c = 0);\n              } else 1 === c && (t = i[\"return\"]) && t.call(i), c < 2 && (u = TypeError(\"The iterator does not provide a '\" + o + \"' method\"), c = 1);\n              i = e;\n            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;\n          } catch (t) {\n            i = e, c = 1, u = t;\n          } finally {\n            f = 1;\n          }\n        }\n        return {\n          value: t,\n          done: y\n        };\n      };\n    }(r, o, i), !0), u;\n  }\n  var a = {};\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n  t = Object.getPrototypeOf;\n  var c = [][n] ? t(t([][n]())) : (regeneratorDefine(t = {}, n, function () {\n      return this;\n    }), t),\n    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);\n  function f(e) {\n    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, regeneratorDefine(e, o, \"GeneratorFunction\")), e.prototype = Object.create(u), e;\n  }\n  return GeneratorFunction.prototype = GeneratorFunctionPrototype, regeneratorDefine(u, \"constructor\", GeneratorFunctionPrototype), regeneratorDefine(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction), GeneratorFunction.displayName = \"GeneratorFunction\", regeneratorDefine(GeneratorFunctionPrototype, o, \"GeneratorFunction\"), regeneratorDefine(u), regeneratorDefine(u, o, \"Generator\"), regeneratorDefine(u, n, function () {\n    return this;\n  }), regeneratorDefine(u, \"toString\", function () {\n    return \"[object Generator]\";\n  }), (module.exports = _regenerator = function _regenerator() {\n    return {\n      w: i,\n      m: f\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regenerator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regenerator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsync.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsync.js ***!
  \*****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nfunction _regeneratorAsync(n, e, r, t, o) {\n  var a = regeneratorAsyncGen(n, e, r, t, o);\n  return a.next().then(function (n) {\n    return n.done ? n.value : a.next();\n  });\n}\nmodule.exports = _regeneratorAsync, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regeneratorAsync.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nfunction _regeneratorAsyncGen(r, e, t, o, n) {\n  return new regeneratorAsyncIterator(regenerator().w(r, e, t, o), n || Promise);\n}\nmodule.exports = _regeneratorAsyncGen, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js ***!
  \*************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regeneratorDefine = __webpack_require__(/*! ./regeneratorDefine.js */ \"./node_modules/@babel/runtime/helpers/regeneratorDefine.js\");\nfunction AsyncIterator(t, e) {\n  function n(r, o, i, f) {\n    try {\n      var c = t[r](o),\n        u = c.value;\n      return u instanceof OverloadYield ? e.resolve(u.v).then(function (t) {\n        n(\"next\", t, i, f);\n      }, function (t) {\n        n(\"throw\", t, i, f);\n      }) : e.resolve(u).then(function (t) {\n        c.value = t, i(c);\n      }, function (t) {\n        return n(\"throw\", t, i, f);\n      });\n    } catch (t) {\n      f(t);\n    }\n  }\n  var r;\n  this.next || (regeneratorDefine(AsyncIterator.prototype), regeneratorDefine(AsyncIterator.prototype, \"function\" == typeof Symbol && Symbol.asyncIterator || \"@asyncIterator\", function () {\n    return this;\n  })), regeneratorDefine(this, \"_invoke\", function (t, o, i) {\n    function f() {\n      return new e(function (e, r) {\n        n(t, i, e, r);\n      });\n    }\n    return r = r ? r.then(f, f) : f();\n  }, !0);\n}\nmodule.exports = AsyncIterator, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorDefine.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorDefine.js ***!
  \******************************************************************/
/***/ ((module) => {

eval("{function _regeneratorDefine(e, r, n, t) {\n  var i = Object.defineProperty;\n  try {\n    i({}, \"\", {});\n  } catch (e) {\n    i = 0;\n  }\n  module.exports = _regeneratorDefine = function regeneratorDefine(e, r, n, t) {\n    function o(r, n) {\n      _regeneratorDefine(e, r, function (e) {\n        return this._invoke(r, n, e);\n      });\n    }\n    r ? i ? i(e, r, {\n      value: n,\n      enumerable: !t,\n      configurable: !t,\n      writable: !t\n    }) : e[r] = n : (o(\"next\", 0), o(\"throw\", 1), o(\"return\", 2));\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _regeneratorDefine(e, r, n, t);\n}\nmodule.exports = _regeneratorDefine, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regeneratorDefine.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorKeys.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorKeys.js ***!
  \****************************************************************/
/***/ ((module) => {

eval("{function _regeneratorKeys(e) {\n  var n = Object(e),\n    r = [];\n  for (var t in n) r.unshift(t);\n  return function e() {\n    for (; r.length;) if ((t = r.pop()) in n) return e.value = t, e.done = !1, e;\n    return e.done = !0, e;\n  };\n}\nmodule.exports = _regeneratorKeys, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regeneratorKeys.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorRuntime.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorRuntime.js ***!
  \*******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var OverloadYield = __webpack_require__(/*! ./OverloadYield.js */ \"./node_modules/@babel/runtime/helpers/OverloadYield.js\");\nvar regenerator = __webpack_require__(/*! ./regenerator.js */ \"./node_modules/@babel/runtime/helpers/regenerator.js\");\nvar regeneratorAsync = __webpack_require__(/*! ./regeneratorAsync.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsync.js\");\nvar regeneratorAsyncGen = __webpack_require__(/*! ./regeneratorAsyncGen.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncGen.js\");\nvar regeneratorAsyncIterator = __webpack_require__(/*! ./regeneratorAsyncIterator.js */ \"./node_modules/@babel/runtime/helpers/regeneratorAsyncIterator.js\");\nvar regeneratorKeys = __webpack_require__(/*! ./regeneratorKeys.js */ \"./node_modules/@babel/runtime/helpers/regeneratorKeys.js\");\nvar regeneratorValues = __webpack_require__(/*! ./regeneratorValues.js */ \"./node_modules/@babel/runtime/helpers/regeneratorValues.js\");\nfunction _regeneratorRuntime() {\n  \"use strict\";\n\n  var r = regenerator(),\n    e = r.m(_regeneratorRuntime),\n    t = (Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__).constructor;\n  function n(r) {\n    var e = \"function\" == typeof r && r.constructor;\n    return !!e && (e === t || \"GeneratorFunction\" === (e.displayName || e.name));\n  }\n  var o = {\n    \"throw\": 1,\n    \"return\": 2,\n    \"break\": 3,\n    \"continue\": 3\n  };\n  function a(r) {\n    var e, t;\n    return function (n) {\n      e || (e = {\n        stop: function stop() {\n          return t(n.a, 2);\n        },\n        \"catch\": function _catch() {\n          return n.v;\n        },\n        abrupt: function abrupt(r, e) {\n          return t(n.a, o[r], e);\n        },\n        delegateYield: function delegateYield(r, o, a) {\n          return e.resultName = o, t(n.d, regeneratorValues(r), a);\n        },\n        finish: function finish(r) {\n          return t(n.f, r);\n        }\n      }, t = function t(r, _t, o) {\n        n.p = e.prev, n.n = e.next;\n        try {\n          return r(_t, o);\n        } finally {\n          e.next = n.n;\n        }\n      }), e.resultName && (e[e.resultName] = n.v, e.resultName = void 0), e.sent = n.v, e.next = n.n;\n      try {\n        return r.call(this, e);\n      } finally {\n        n.p = e.prev, n.n = e.next;\n      }\n    };\n  }\n  return (module.exports = _regeneratorRuntime = function _regeneratorRuntime() {\n    return {\n      wrap: function wrap(e, t, n, o) {\n        return r.w(a(e), t, n, o && o.reverse());\n      },\n      isGeneratorFunction: n,\n      mark: r.m,\n      awrap: function awrap(r, e) {\n        return new OverloadYield(r, e);\n      },\n      AsyncIterator: regeneratorAsyncIterator,\n      async: function async(r, e, t, o, u) {\n        return (n(e) ? regeneratorAsyncGen : regeneratorAsync)(a(r), e, t, o, u);\n      },\n      keys: regeneratorKeys,\n      values: regeneratorValues\n    };\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports)();\n}\nmodule.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regeneratorRuntime.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/regeneratorValues.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/regeneratorValues.js ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{var _typeof = (__webpack_require__(/*! ./typeof.js */ \"./node_modules/@babel/runtime/helpers/typeof.js\")[\"default\"]);\nfunction _regeneratorValues(e) {\n  if (null != e) {\n    var t = e[\"function\" == typeof Symbol && Symbol.iterator || \"@@iterator\"],\n      r = 0;\n    if (t) return t.call(e);\n    if (\"function\" == typeof e.next) return e;\n    if (!isNaN(e.length)) return {\n      next: function next() {\n        return e && r >= e.length && (e = void 0), {\n          value: e && e[r++],\n          done: !e\n        };\n      }\n    };\n  }\n  throw new TypeError(_typeof(e) + \" is not iterable\");\n}\nmodule.exports = _regeneratorValues, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/regeneratorValues.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ ((module) => {

eval("{function _typeof(o) {\n  \"@babel/helpers - typeof\";\n\n  return module.exports = _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (o) {\n    return typeof o;\n  } : function (o) {\n    return o && \"function\" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? \"symbol\" : typeof o;\n  }, module.exports.__esModule = true, module.exports[\"default\"] = module.exports, _typeof(o);\n}\nmodule.exports = _typeof, module.exports.__esModule = true, module.exports[\"default\"] = module.exports;\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/helpers/typeof.js?\n}");

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("{// TODO(Babel 8): Remove this file.\n\nvar runtime = __webpack_require__(/*! ../helpers/regeneratorRuntime */ \"./node_modules/@babel/runtime/helpers/regeneratorRuntime.js\")();\nmodule.exports = runtime;\n\n// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack:///./node_modules/@babel/runtime/regenerator/index.js?\n}");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./Assets/Javascript/script.js");
/******/ 	
/******/ })()
;