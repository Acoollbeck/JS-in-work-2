/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_modals__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/modals */ "./src/js/modules/modals.js");
/* harmony import */ var _modules_sliders__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/sliders */ "./src/js/modules/sliders.js");


window.addEventListener('DOMContentLoaded', () => {
  'use strict';

  Object(_modules_modals__WEBPACK_IMPORTED_MODULE_0__["default"])();
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.feedback-slider-item', 'gorizontal', '.main-prev-btn', '.main-next-btn');
  Object(_modules_sliders__WEBPACK_IMPORTED_MODULE_1__["default"])('.main-slider-item', 'vertical');
});

/***/ }),

/***/ "./src/js/modules/modals.js":
/*!**********************************!*\
  !*** ./src/js/modules/modals.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return modals; });
function modals() {
  let clickBtn = false;
  function openByScroll(selector) {
    window.addEventListener('scroll', function checkScroll() {
      if (!clickBtn && window.scrollY + document.documentElement.clientHeight >= document.documentElement.scrollHeight && document.querySelector(selector)) {
        clickBtn = true;
        document.querySelector(selector).click();
        window.removeEventListener('scroll', checkScroll);
      }
    });
  }
  function initModal(triggerSelector, modalSelector, closeSelector, removeTrigger = false) {
    const triggers = document.querySelectorAll(triggerSelector);
    const modal = document.querySelector(modalSelector);
    const close = document.querySelectorAll(closeSelector);
    function calcScroll() {
      const div = document.createElement('div');
      div.style.width = '50px';
      div.style.height = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';
      div.style.position = 'absolute';
      document.body.appendChild(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      return scrollWidth;
    }
    function openModal(selector = modal) {
      const scrollWidth = calcScroll();
      selector.style.display = 'block';
      selector.classList.add('animated', 'fadeIn');
      selector.classList.remove("fadeOut");
      document.body.style.marginRight = `${scrollWidth}px`;
      document.body.style.overflow = 'hidden';
      if (!removeTrigger && document.querySelector('.fixed-gift')) {
        document.querySelector('.fixed-gift').style.marginRight = `${scrollWidth}px`;
      }
    }
    function closeModal() {
      setTimeout(() => {
        modal.style.display = "none";
        document.body.style.marginRight = "";
        document.body.style.marginRight = "";
        document.body.style.overflow = "";
        if (!removeTrigger && document.querySelector('.fixed-gift')) {
          document.querySelector('.fixed-gift').style.marginRight = '';
        }
      }, 200);
      modal.classList.add('fadeOut');
      modal.classList.remove("fadeIn");
    }
    function showModalByTime(selector, time) {
      setTimeout(() => {
        let display;
        document.querySelectorAll('[data-modal]').forEach(item => {
          if (getComputedStyle(item).display !== 'none') {
            display = 'block';
          }
        });
        if (!display) {
          openModal(document.querySelector(selector));
        }
      }, time);
    }
    triggers.forEach(trigger => {
      trigger.addEventListener('click', () => {
        clickBtn = true;
        console.log(clickBtn);
        if (removeTrigger) {
          trigger.remove();
        }
        openModal();
      });
    });
    close.forEach(item => {
      item.addEventListener('click', () => {
        closeModal();
      });
    });
    modal.addEventListener('click', e => {
      if (e.target == modal) {
        closeModal();
      }
    });
    showModalByTime('.popup-consultation', 60000);
  }
  openByScroll('.fixed-gift');
  initModal('.button-design', '.popup-design', '.popup-close');
  initModal('.button-consultation', '.popup-consultation', '.popup-close');
  initModal('.fixed-gift', '.popup-gift', '.popup-close', true);
}

/***/ }),

/***/ "./src/js/modules/sliders.js":
/*!***********************************!*\
  !*** ./src/js/modules/sliders.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sliders; });
function sliders(slidesSelector, dist, prevBtnSelector, nextBtnSelector) {
  const slides = document.querySelectorAll(slidesSelector);
  if (slides.length === 0) return;
  let slideIndex = 1;
  let intervalId = null;
  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.add('animated');
      slide.style.display = 'none';
    });
    slides[slideIndex - 1].style.display = 'block';
  }
  function changeSlide(n) {
    let newIndex = slideIndex += n;
    if (newIndex > slides.length) newIndex = 1;
    if (newIndex < 1) newIndex = slides.length;
    slideIndex = newIndex;
    showSlide(slideIndex);
  }
  function animateSlide(direction) {
    const currentSlider = slides[slideIndex - 1];
    if (!currentSlider) return;
    currentSlider.classList.remove('slideInRight', 'slideInLeft', 'slideInDown');
    if (direction === 'left') {
      currentSlider.classList.add('slideInLeft');
    } else if (direction === 'right') {
      currentSlider.classList.add('slideInRight');
    } else if (direction === 'down') {
      currentSlider.classList.add('slideInDown');
    }
  }
  showSlide(slideIndex);
  const prevBtn = document.querySelector(prevBtnSelector);
  const nextBtn = document.querySelector(nextBtnSelector);
  if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
      changeSlide(-1);
      animateSlide('right');
    });
    nextBtn.addEventListener('click', () => {
      changeSlide(1);
      animateSlide('left');
    });
  } else {
    console.warn('Отсутсвуют селекторы prevBtn и nextBtn');
  }
  function startAutoSlide() {
    stopAutoSlide();
    intervalId = setInterval(() => {
      changeSlide(1);
      animateSlide(dist === 'vertical' ? 'down' : 'left');
    }, 3000);
  }
  function stopAutoSlide() {
    if (intervalId != null) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  startAutoSlide();
  const sliderWrapper = slides[0].parentNode;
  if (sliderWrapper) {
    sliderWrapper.addEventListener('mouseenter', stopAutoSlide);
    sliderWrapper.addEventListener('mouseleave', startAutoSlide);
  }
}

/***/ })

/******/ });
//# sourceMappingURL=script.js.map