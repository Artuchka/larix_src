/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/Rounded_Elegance.ttf */ "./src/fonts/Rounded_Elegance.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/Inter-Regular.ttf */ "./src/fonts/Inter-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ./../fonts/Inter-Medium.ttf */ "./src/fonts/Inter-Medium.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@charset \"UTF-8\";\n*,\n*::after,\n*::before {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n  font-family: \"noto\";\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  min-height: 200vh;\n}\n\n.main {\n  flex-grow: 1;\n}\n\n@font-face {\n  font-family: \"secondary\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"noto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\n  font-weight: 400;\n}\n@font-face {\n  font-family: \"noto\";\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ");\n  font-weight: 500;\n}\n.button {\n  background-color: #e17d21;\n  font-family: \"noto\";\n  max-width: 200px;\n  border-radius: 0.2em;\n  text-align: center;\n  border: none;\n  outline: none;\n  display: block;\n}\n.button a {\n  color: white;\n  text-decoration: none;\n  text-transform: capitalize;\n  line-height: 30px;\n  padding: 0 2em;\n  font-weight: bold;\n  font-size: 1rem;\n  display: inline-block;\n}\n.button--full {\n  max-width: 100%;\n}\n.button--half {\n  width: 50%;\n  max-width: 800px;\n  min-width: 150px;\n}\n.button--padding a {\n  padding: 0.5em 2em;\n  font-weight: normal;\n  word-break: break-all;\n}\n\n.card {\n  container-type: inline-size;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.387);\n  max-width: 400px;\n  min-width: 200px;\n  padding: 0.5rem 1rem;\n  border-radius: 0.3em;\n}\n.card__image {\n  border-radius: 0.3em;\n  width: 100%;\n  height: 100%;\n}\n.card__title {\n  font-size: 1em;\n  text-transform: capitalize;\n}\n.card__type {\n  background-color: gray;\n  color: white;\n  width: max-content;\n  padding: 0.3em;\n  border-radius: 0.3em;\n  text-transform: capitalize;\n}\n.card__price {\n  color: #1e5128;\n  font-weight: bold;\n  font-size: 1rem;\n}\n.card__price::after {\n  margin-left: 0.3em;\n  content: \"₽\";\n}\n.card__flexy {\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n}\n.card__actions {\n  display: flex;\n  width: 100%;\n  gap: 1rem;\n}\n.card__actions > * {\n  flex-grow: 1;\n}\n.card__actions .discount {\n  background-color: #4e9f3d;\n  border-radius: 0.3em;\n  text-align: center;\n  color: white;\n  font-weight: bold;\n  line-height: 30px;\n}\n\n@container (min-width: 200px) {\n  .card__title {\n    font-size: 2rem;\n  }\n  .card__type {\n    font-size: 1.3rem;\n  }\n  .card__price {\n    font-size: 1.7rem;\n  }\n}\n@container (min-width: 300px) {\n  .card__flexy {\n    flex-direction: row;\n    gap: 3rem;\n  }\n}\n.search-field__list {\n  display: none;\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  box-shadow: -5px 5px 10px 0px rgba(68, 68, 68, 0.632), 5px 5px 10px 0px rgba(68, 68, 68, 0.632), 0 5px 10px 0px rgba(68, 68, 68, 0.632);\n  padding: 1rem 0.5rem 0.5rem;\n  background-color: #fff;\n  max-width: 400px;\n  width: 100%;\n}\n.search-field__list__item {\n  display: grid;\n  grid-template-columns: 100px 1fr;\n  column-gap: 10px;\n  width: 100%;\n  overflow: hidden;\n  padding: 0.5rem;\n  background-color: white;\n  border-bottom: 1px solid gray;\n}\n.search-field__list__item:last-child {\n  border-bottom: none;\n}\n.search-field__list__item img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.search-field__list__item .properties {\n  display: flex;\n  flex-direction: column;\n  font-weight: bold;\n  gap: 0.3rem;\n}\n.search-field__list__item .properties .title {\n  margin-bottom: auto;\n  color: rgb(76, 76, 76);\n}\n.search-field__list__item .properties .price {\n  color: rgb(8, 80, 0);\n  font-size: 1.3rem;\n}\n.search-field__list__item .properties .price::after {\n  content: \" ₽\";\n}\n.search-field__list__item .properties .size {\n  color: #7f7f7f;\n}\n\n.search-field {\n  display: flex;\n  align-items: center;\n  border: 2px solid rgba(255, 255, 255, 0.7568627451);\n  border-radius: 0.3em;\n  width: max-content;\n  max-width: 350px;\n  min-width: 270px;\n  padding: 0 1rem;\n  max-height: 50px;\n  position: relative;\n}\n.search-field > input {\n  border: none;\n  outline: none;\n  font-size: 1.7rem;\n  width: 200px;\n  height: 100%;\n}\n.search-field > input:focus ~ .search-field__list {\n  display: block;\n}\n.search-field > img {\n  width: 100%;\n  height: 100%;\n  max-width: 30px;\n  max-height: 30px;\n}\n\n.accordion {\n  overflow: hidden;\n  min-width: 250px;\n  width: 100%;\n}\n.accordion__list {\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n.accordion__list .accordion__list {\n  height: 0;\n  display: none;\n}\n.accordion__item {\n  background-color: white;\n  padding: 1em 0.5em;\n  display: grid;\n  grid-template-columns: 1fr 30px;\n  width: 100%;\n}\n.accordion__item::after {\n  content: attr(data-after);\n  max-height: 20px;\n  align-self: start;\n  justify-self: center;\n}\n.accordion__item input {\n  display: none;\n}\n.accordion__item input:checked ~ .accordion__list {\n  display: block;\n  height: initial;\n}\n.accordion__item input:checked ~ span {\n  color: var(--coloritto);\n}\n\n.notification {\n  background-color: #fff;\n  width: max-content;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 1rem 2rem;\n  gap: 1rem;\n  position: absolute;\n  top: 50vh;\n  left: 50vw;\n  translate: -50% -50%;\n  opacity: 0;\n  visibility: hidden;\n  transition: opacity 500ms;\n}\n.notification.show {\n  opacity: 1;\n  visibility: visible;\n}\n.notification .text .title {\n  text-transform: uppercase;\n  font-weight: bold;\n  font-size: 1.3rem;\n}\n\n.header {\n  font-family: \"noto\";\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n.header .logo {\n  font-size: 3rem;\n}\n.header .logo span {\n  font-family: \"secondary\";\n}\n.header .logo img {\n  display: none;\n  width: 100%;\n  height: 100%;\n}\n.header .burger {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.header .burger span {\n  width: 30px;\n  height: 4px;\n  max-height: 5px;\n  background-color: black;\n  display: block;\n}\n.header .nav {\n  position: absolute;\n  z-index: 10;\n  padding: 1rem;\n  right: 0;\n  top: 0;\n  left: -200%;\n  width: 100vw;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 1rem;\n  background-color: #fff;\n  transition: left 300ms ease-in-out;\n}\n.header .nav.show {\n  left: 0;\n}\n.header .nav__close {\n  position: relative;\n  min-height: 70px;\n  width: 100px;\n}\n.header .nav__close span {\n  position: absolute;\n  width: 30px;\n  height: 5px;\n  background: black;\n  left: 0px;\n  top: 50%;\n  translate: 0 -50%;\n}\n.header .nav__close span:nth-child(1) {\n  rotate: 45deg;\n}\n.header .nav__close span:nth-child(2) {\n  rotate: -45deg;\n}\n.header .nav__list {\n  padding: 1rem;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  width: 100%;\n}\n.header .nav__item {\n  width: 100%;\n}\n.header .nav__link {\n  text-decoration: none;\n  color: black;\n  font-weight: bold;\n  width: 100%;\n  display: inline-block;\n  padding: 1rem;\n  cursor: pointer;\n}\n.header .nav__action-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.header .nav__action-item {\n  display: grid;\n  grid-template-columns: repeat(2, 20px) 1fr;\n  place-items: center left;\n  column-gap: 0.5rem;\n}\n.header .nav__action-item img {\n  width: 100%;\n  height: 100%;\n}\n.header .nav__search-field {\n  border-width: 2px;\n  border-color: rgb(165, 165, 165);\n}\n\n@media (min-width: 1000px) {\n  .header {\n    justify-content: center;\n    background-color: #fff;\n  }\n  .header .burger {\n    display: none;\n  }\n  .header .logo span {\n    display: none;\n  }\n  .header .logo img {\n    display: block;\n  }\n  .header .nav {\n    position: static;\n    flex-direction: row;\n    justify-content: space-around;\n  }\n  .header .nav__close {\n    display: none;\n  }\n  .header .nav__list {\n    flex-direction: row;\n    gap: 0;\n    width: max-content;\n  }\n  .header .nav__item {\n    width: max-content;\n    min-width: 100px;\n  }\n  .header .search {\n    display: none;\n  }\n}\n.footer {\n  background-color: #191a19;\n  color: white;\n  padding: 1rem;\n}\n.footer__wrapper {\n  max-width: 900px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-areas: \"list logo\" \"action action\";\n}\n.footer__logo {\n  grid-area: logo;\n  margin-top: auto;\n  margin-bottom: auto;\n  margin-left: auto;\n}\n.footer__logo > * {\n  display: none;\n}\n.footer__logo span {\n  font-family: \"secondary\";\n  display: inline-block;\n  font-size: 3rem;\n  writing-mode: vertical-rl;\n  rotate: 180deg;\n}\n.footer .nav__list {\n  grid-area: list;\n  margin-bottom: 1rem;\n  display: flex;\n  flex-direction: column;\n  list-style: none;\n  width: 100%;\n}\n.footer .nav__item {\n  width: 100%;\n}\n.footer .nav__link {\n  text-decoration: none;\n  color: white;\n  font-weight: bold;\n  width: 100%;\n  display: inline-block;\n  padding: 1rem;\n  cursor: pointer;\n}\n.footer__action-list {\n  grid-area: action;\n  place-self: center;\n  display: flex;\n  flex-direction: column;\n  gap: 0.3rem;\n}\n.footer__action-item {\n  align-self: flex-end;\n  display: grid;\n  grid-template-columns: repeat(2, 20px) minmax(150px, 1fr);\n  place-items: center left;\n  column-gap: 0.5rem;\n  color: #ffffff;\n}\n.footer__action-item span {\n  margin-left: auto;\n}\n.footer__action-item img {\n  width: 100%;\n  height: 100%;\n  filter: invert(100%) sepia(0%) saturate(211%) hue-rotate(166deg) brightness(228%) contrast(100%);\n}\n.footer__search-field {\n  margin-bottom: 1.5rem;\n  border-color: rgba(255, 255, 255, 0.7568627451);\n}\n.footer__search-field input {\n  background-color: #191a19;\n  color: white;\n}\n.footer__search-field img {\n  filter: invert(100%) sepia(0%) saturate(211%) hue-rotate(166deg) brightness(228%) contrast(100%);\n}\n\n@media (min-width: 1000px) {\n  .footer__wrapper {\n    grid-template-areas: \"list logo action\";\n  }\n  .footer__logo {\n    text-align: center;\n    display: flex;\n    flex-direction: column;\n    gap: 1rem;\n    justify-content: center;\n    margin: 0;\n  }\n  .footer__logo > * {\n    display: block;\n  }\n  .footer__logo span {\n    writing-mode: horizontal-tb;\n    rotate: 0deg;\n  }\n  .footer__logo .to-start {\n    text-decoration: underline;\n    font-size: 1.5rem;\n  }\n  .footer .nav__list {\n    margin-bottom: 0;\n  }\n}\n.modal {\n  position: absolute;\n  z-index: 30;\n  top: 80vh;\n  left: 50vw;\n  translate: -50% -50%;\n  container-type: inline-size;\n  container-name: modal;\n  max-width: 1500px;\n  min-width: 200px;\n  width: 80%;\n  grid-template-columns: repeat(2, 1fr);\n  overflow: hidden;\n  display: none;\n}\n.modal.show {\n  display: grid;\n}\n.modal img {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n.modal .form {\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  gap: 1rem;\n  padding: 1rem;\n}\n.modal .form__close {\n  align-self: flex-end;\n  display: flex;\n  justify-content: flex-end;\n  position: relative;\n  height: 50px;\n  width: 50px;\n}\n.modal .form__close:hover span {\n  background-color: rgb(205, 55, 55);\n}\n.modal .form__close span {\n  position: absolute;\n  top: 20px;\n  right: 20px;\n  width: 30px;\n  height: 5px;\n  background-color: black;\n  display: inline-block;\n  transition: background-color 300ms;\n}\n.modal .form__close span:nth-child(1) {\n  rotate: 45deg;\n}\n.modal .form__close span:nth-child(2) {\n  rotate: -45deg;\n}\n.modal .form__title {\n  font-family: \"secondary\";\n  color: rgb(60, 60, 60);\n  font-size: 2rem;\n}\n.modal .form__input-container {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1rem;\n}\n.modal .form__input {\n  min-width: 150px;\n  width: 40%;\n  max-width: 200px;\n  font-size: 1rem;\n  border: none;\n  outline: none;\n  padding: 1rem 0;\n  border-bottom: 2px solid gray;\n}\n.modal .form__input::placeholder {\n  color: gray;\n}\n.modal .form__textarea {\n  grid-column: 1/3;\n  font-size: 1rem;\n  width: 100%;\n  height: 120px;\n  border: 1px solid gray;\n  outline: none;\n  padding: 0.5rem 1rem;\n  resize: none;\n}\n.modal__bg {\n  z-index: 25;\n  position: absolute;\n  inset: 0;\n  bottom: -90vh;\n  display: none;\n}\n.modal__bg.show {\n  display: block;\n}\n\n@container modal (max-width: 400px) {\n  .modal img {\n    display: none;\n  }\n  .modal .form {\n    grid-column: 1/3;\n  }\n}\nbody {\n  background-color: rgb(193, 193, 193);\n}\n\n.sidebar {\n  width: 50vw;\n  max-width: 400px;\n  min-width: 250px;\n}", "",{"version":3,"sources":["webpack://./src/styles/index.scss","webpack://./src/styles/blocks/_zero.scss","webpack://./src/styles/blocks/_variables.scss","webpack://./src/styles/blocks/_fonts.scss","webpack://./src/styles/blocks/_buttons.scss","webpack://./src/styles/blocks/_card.scss","webpack://./src/styles/blocks/_searchFieldList.scss","webpack://./src/styles/blocks/_search.scss","webpack://./src/styles/blocks/_accordion.scss","webpack://./src/styles/blocks/_notification.scss","webpack://./src/styles/blocks/_header.scss","webpack://./src/styles/blocks/_footer.scss","webpack://./src/styles/blocks/_modal.scss"],"names":[],"mappings":"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","sourcesContent":["@import \"./blocks/default\";\n\nbody {\n\tbackground-color: rgb(193, 193, 193);\n}\n.sidebar {\n\twidth: 50vw;\n\tmax-width: 400px;\n\tmin-width: 250px;\n}\n","*,\n*::after,\n*::before {\n\tmargin: 0;\n\tpadding: 0;\n\tbox-sizing: border-box;\n\tfont-family: $main-font;\n}\n\nbody {\n\tdisplay: flex;\n\tflex-direction: column;\n\tmin-height: 200vh;\n}\n\n.main {\n\tflex-grow: 1;\n}\n","$desktop-size: 1000px;\n\n$secondary-font: \"secondary\";\n$main-font: \"noto\";\n\n$main-text-color: black;\n\n$button-bg-color: #e17d21;\n$button-text-color: white;\n\n$discount-bg-color: #4e9f3d;\n$discount-text-color: white;\n\n$type-bg-color: gray;\n$type-text-color: white;\n\n$price-text-color: #1e5128;\n\n$footer-bg-color: #191a19;\n$footer-text-color: white;\n\n$search-field-border-color-header: rgb(165, 165, 165);\n$search-field-border-color: #ffffffc1;\n$search-result-price-color: rgb(8, 80, 0);\n$search-result-title-color: rgb(76, 76, 76);\n$search-result-size-color: lighten($search-result-title-color, 20%);\n$search-field-list-shador-color: rgba(68, 68, 68, 0.632);\n\n$active-accordion-text-color: lightgreen;\n\n$modal-bg-z: 25;\n$modal-z: 30;\n$nav-z: 10;\n","@font-face {\n\tfont-family: $secondary-font;\n\tsrc: url(\"./../fonts/Rounded_Elegance.ttf\");\n\tfont-weight: 400;\n}\n\n@font-face {\n\tfont-family: $main-font;\n\tsrc: url(\"./../fonts/Inter-Regular.ttf\");\n\tfont-weight: 400;\n}\n@font-face {\n\tfont-family: $main-font;\n\tsrc: url(\"./../fonts/Inter-Medium.ttf\");\n\tfont-weight: 500;\n}\n",".button {\n\tbackground-color: $button-bg-color;\n\tfont-family: $main-font;\n\tmax-width: 200px;\n\tborder-radius: 0.2em;\n\ttext-align: center;\n\tborder: none;\n\toutline: none;\n\tdisplay: block;\n\ta {\n\t\tcolor: $button-text-color;\n\t\ttext-decoration: none;\n\t\ttext-transform: capitalize;\n\t\tline-height: 30px;\n\t\tpadding: 0 2em;\n\t\tfont-weight: bold;\n\t\tfont-size: 1rem;\n\t\tdisplay: inline-block;\n\t}\n\n\t&--full {\n\t\tmax-width: 100%;\n\t}\n\t&--half {\n\t\twidth: 50%;\n\t\tmax-width: 800px;\n\t\tmin-width: 150px;\n\t}\n\t&--padding {\n\t\ta {\n\t\t\tpadding: 0.5em 2em;\n\t\t\tfont-weight: normal;\n\t\t\tword-break: break-all;\n\t\t}\n\t}\n}\n",".card {\n\tcontainer-type: inline-size;\n\tdisplay: flex;\n\tflex-direction: column;\n\tgap: 1rem;\n\n\tbox-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.387);\n\tmax-width: 400px;\n\tmin-width: 200px;\n\n\tpadding: 0.5rem 1rem;\n\tborder-radius: 0.3em;\n\n\t&__image {\n\t\tborder-radius: 0.3em;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t}\n\n\t&__title {\n\t\tfont-size: 1em;\n\t\ttext-transform: capitalize;\n\t}\n\n\t&__type {\n\t\tbackground-color: $type-bg-color;\n\t\tcolor: $type-text-color;\n\t\twidth: max-content;\n\t\tpadding: 0.3em;\n\t\tborder-radius: 0.3em;\n\t\ttext-transform: capitalize;\n\t}\n\n\t&__price {\n\t\tcolor: $price-text-color;\n\t\tfont-weight: bold;\n\t\tfont-size: 1rem;\n\n\t\t&::after {\n\t\t\tmargin-left: 0.3em;\n\t\t\tcontent: \"₽\";\n\t\t}\n\t}\n\n\t&__flexy {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\t}\n\n\t&__actions {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tgap: 1rem;\n\t\t& > * {\n\t\t\tflex-grow: 1;\n\t\t}\n\t\t.discount {\n\t\t\tbackground-color: $discount-bg-color;\n\t\t\tborder-radius: 0.3em;\n\t\t\ttext-align: center;\n\t\t\tcolor: $discount-text-color;\n\t\t\tfont-weight: bold;\n\t\t\t// vertical-align: middle;\n\t\t\tline-height: 30px;\n\t\t}\n\t}\n}\n\n@container (min-width: 200px) {\n\t.card {\n\t\t&__title {\n\t\t\tfont-size: 2rem;\n\t\t}\n\t\t&__type {\n\t\t\tfont-size: 1.3rem;\n\t\t}\n\t\t&__price {\n\t\t\tfont-size: 1.7rem;\n\t\t}\n\t}\n}\n\n@container (min-width: 300px) {\n\t.card {\n\t\t&__flexy {\n\t\t\tflex-direction: row;\n\t\t\tgap: 3rem;\n\t\t}\n\t}\n}\n",".search-field__list {\n\tdisplay: none;\n\n\tposition: absolute;\n\ttop: 100%;\n\tleft: 0;\n\tright: 0;\n\tbox-shadow: -5px 5px 10px 0px $search-field-list-shador-color,\n\t\t5px 5px 10px 0px $search-field-list-shador-color,\n\t\t0 5px 10px 0px $search-field-list-shador-color;\n\tpadding: 1rem 0.5rem 0.5rem;\n\tbackground-color: #fff;\n\tmax-width: 400px;\n\twidth: 100%;\n\t&__item {\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 100px 1fr;\n\t\tcolumn-gap: 10px;\n\t\twidth: 100%;\n\t\toverflow: hidden;\n\t\tpadding: 0.5rem;\n\t\tbackground-color: white;\n\t\tborder-bottom: 1px solid gray;\n\t\t&:last-child {\n\t\t\tborder-bottom: none;\n\t\t}\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tobject-fit: cover;\n\t\t}\n\n\t\t.properties {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tfont-weight: bold;\n\t\t\tgap: 0.3rem;\n\t\t\t.title {\n\t\t\t\tmargin-bottom: auto;\n\t\t\t\tcolor: $search-result-title-color;\n\t\t\t}\n\t\t\t.price {\n\t\t\t\tcolor: $search-result-price-color;\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t\t&::after {\n\t\t\t\t\tcontent: \" ₽\";\n\t\t\t\t}\n\t\t\t}\n\t\t\t.size {\n\t\t\t\tcolor: $search-result-size-color;\n\t\t\t}\n\t\t}\n\t}\n}\n","@import \"searchFieldList\";\n.search-field {\n\tdisplay: flex;\n\talign-items: center;\n\tborder: 2px solid $search-field-border-color;\n\tborder-radius: 0.3em;\n\twidth: max-content;\n\tmax-width: 350px;\n\tmin-width: 270px;\n\tpadding: 0 1rem;\n\tmax-height: 50px;\n\tposition: relative;\n\t& > input {\n\t\tborder: none;\n\t\toutline: none;\n\t\tfont-size: 1.7rem;\n\t\twidth: 200px;\n\t\theight: 100%;\n\t\t&:focus ~ .search-field__list {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\t& > img {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tmax-width: 30px;\n\t\tmax-height: 30px;\n\t}\n}\n",".accordion {\n\toverflow: hidden;\n\tmin-width: 250px;\n\twidth: 100%;\n\t&__list {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\twidth: 100%;\n\t\t& .accordion__list {\n\t\t\theight: 0;\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t&__item {\n\t\tbackground-color: white;\n\t\tpadding: 1em 0.5em;\n\t\tdisplay: grid;\n\t\tgrid-template-columns: 1fr 30px;\n\t\twidth: 100%;\n\n\t\t&::after {\n\t\t\tcontent: attr(data-after);\n\t\t\tmax-height: 20px;\n\t\t\talign-self: start;\n\t\t\tjustify-self: center;\n\t\t}\n\n\t\tinput {\n\t\t\tdisplay: none;\n\n\t\t\t&:checked ~ .accordion__list {\n\t\t\t\tdisplay: block;\n\t\t\t\theight: initial;\n\t\t\t}\n\t\t\t&:checked ~ span {\n\t\t\t\tcolor: var(--coloritto);\n\t\t\t}\n\t\t}\n\t}\n}\n",".notification {\n\tbackground-color: #fff;\n\twidth: max-content;\n\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tpadding: 1rem 2rem;\n\tgap: 1rem;\n\n\tposition: absolute;\n\ttop: 50vh;\n\tleft: 50vw;\n\ttranslate: -50% -50%;\n\n\topacity: 0;\n\tvisibility: hidden;\n\ttransition: opacity 500ms;\n\t&.show {\n\t\topacity: 1;\n\t\tvisibility: visible;\n\t}\n\n\t.text {\n\t\t.title {\n\t\t\ttext-transform: uppercase;\n\t\t\tfont-weight: bold;\n\t\t\tfont-size: 1.3rem;\n\t\t}\n\t}\n}\n",".header {\n\tfont-family: $main-font;\n\n\tdisplay: flex;\n\n\tjustify-content: space-between;\n\talign-items: center;\n\n\t.logo {\n\t\tfont-size: 3rem;\n\t\tspan {\n\t\t\tfont-family: $secondary-font;\n\t\t}\n\t\timg {\n\t\t\t// background-color: #fff;\n\t\t\tdisplay: none;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.burger {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 5px;\n\t\tspan {\n\t\t\twidth: 30px;\n\t\t\theight: 4px;\n\t\t\tmax-height: 5px;\n\t\t\tbackground-color: black;\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t.nav {\n\t\tposition: absolute;\n\t\tz-index: $nav-z;\n\n\t\tpadding: 1rem;\n\t\tright: 0;\n\t\ttop: 0;\n\t\tleft: -200%;\n\n\t\twidth: 100vw;\n\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 1rem;\n\n\t\tbackground-color: #fff;\n\n\t\ttransition: left 300ms ease-in-out;\n\n\t\t&.show {\n\t\t\tleft: 0;\n\t\t}\n\n\t\t&__close {\n\t\t\tposition: relative;\n\t\t\tmin-height: 70px;\n\t\t\twidth: 100px;\n\t\t\tspan {\n\t\t\t\tposition: absolute;\n\t\t\t\twidth: 30px;\n\t\t\t\theight: 5px;\n\t\t\t\tbackground: black;\n\t\t\t\tleft: 0px;\n\t\t\t\ttop: 50%;\n\t\t\t\ttranslate: 0 -50%;\n\t\t\t\t&:nth-child(1) {\n\t\t\t\t\trotate: 45deg;\n\t\t\t\t}\n\t\t\t\t&:nth-child(2) {\n\t\t\t\t\trotate: -45deg;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t&__list {\n\t\t\tpadding: 1rem;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t// gap: 1rem;\n\n\t\t\tlist-style: none;\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t&__item {\n\t\t\twidth: 100%;\n\t\t}\n\n\t\t&__link {\n\t\t\ttext-decoration: none;\n\t\t\tcolor: $main-text-color;\n\t\t\tfont-weight: bold;\n\t\t\twidth: 100%;\n\t\t\tdisplay: inline-block;\n\t\t\tpadding: 1rem;\n\t\t\tcursor: pointer;\n\t\t}\n\n\t\t&__action-list {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 0.3rem;\n\t\t}\n\n\t\t&__action-item {\n\t\t\tdisplay: grid;\n\t\t\tgrid-template-columns: repeat(2, 20px) 1fr;\n\t\t\tplace-items: center left;\n\t\t\tcolumn-gap: 0.5rem;\n\t\t\timg {\n\t\t\t\twidth: 100%;\n\t\t\t\theight: 100%;\n\t\t\t}\n\t\t}\n\n\t\t&__search-field {\n\t\t\tborder-width: 2px;\n\t\t\tborder-color: $search-field-border-color-header;\n\t\t}\n\t}\n}\n\n@media (min-width: $desktop-size) {\n\t.header {\n\t\tjustify-content: center;\n\t\tbackground-color: #fff;\n\n\t\t.burger {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.logo {\n\t\t\tspan {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\timg {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t}\n\n\t\t.nav {\n\t\t\tposition: static;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: space-around;\n\t\t\t&__close {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t&__list {\n\t\t\t\tflex-direction: row;\n\t\t\t\tgap: 0;\n\t\t\t\twidth: max-content;\n\t\t\t}\n\n\t\t\t&__item {\n\t\t\t\twidth: max-content;\n\t\t\t\tmin-width: 100px;\n\t\t\t}\n\t\t}\n\n\t\t.search {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n}\n",".footer {\n\tbackground-color: $footer-bg-color;\n\tcolor: $footer-text-color;\n\tpadding: 1rem;\n\n\t// min-width: 100vw;\n\n\t&__wrapper {\n\t\tmax-width: 900px;\n\t\tmargin: 0 auto;\n\t\tdisplay: grid;\n\t\tgrid-template-areas:\n\t\t\t\"list logo\"\n\t\t\t\"action action\";\n\t}\n\n\t&__logo {\n\t\t& > * {\n\t\t\tdisplay: none;\n\t\t}\n\t\tgrid-area: logo;\n\t\tspan {\n\t\t\tfont-family: $secondary-font;\n\t\t\tdisplay: inline-block;\n\t\t\tfont-size: 3rem;\n\t\t\twriting-mode: vertical-rl;\n\t\t\trotate: 180deg;\n\t\t}\n\t\tmargin-top: auto;\n\t\tmargin-bottom: auto;\n\t\tmargin-left: auto;\n\t}\n\n\t.nav__list {\n\t\tgrid-area: list;\n\t\tmargin-bottom: 1rem;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\n\t\tlist-style: none;\n\t\twidth: 100%;\n\t}\n\n\t.nav__item {\n\t\twidth: 100%;\n\t}\n\n\t.nav__link {\n\t\ttext-decoration: none;\n\t\tcolor: $footer-text-color;\n\t\tfont-weight: bold;\n\t\twidth: 100%;\n\t\tdisplay: inline-block;\n\t\tpadding: 1rem;\n\t\tcursor: pointer;\n\t}\n\n\t&__action-list {\n\t\tgrid-area: action;\n\t\tplace-self: center;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 0.3rem;\n\t}\n\n\t&__action-item {\n\t\talign-self: flex-end;\n\n\t\tdisplay: grid;\n\t\tgrid-template-columns: repeat(2, 20px) minmax(150px, 1fr);\n\t\tplace-items: center left;\n\t\tcolumn-gap: 0.5rem;\n\t\tcolor: #ffffff;\n\t\tspan {\n\t\t\tmargin-left: auto;\n\t\t}\n\t\timg {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tfilter: invert(100%) sepia(0%) saturate(211%) hue-rotate(166deg)\n\t\t\t\tbrightness(228%) contrast(100%);\n\t\t}\n\t}\n\n\t&__search-field {\n\t\tmargin-bottom: 1.5rem;\n\t\tborder-color: $search-field-border-color;\n\n\t\tinput {\n\t\t\tbackground-color: $footer-bg-color;\n\t\t\tcolor: white;\n\t\t}\n\t\timg {\n\t\t\tfilter: invert(100%) sepia(0%) saturate(211%) hue-rotate(166deg)\n\t\t\t\tbrightness(228%) contrast(100%);\n\t\t}\n\t}\n}\n\n@media (min-width: $desktop-size) {\n\t.footer {\n\t\t&__wrapper {\n\t\t\tgrid-template-areas: \"list logo action\";\n\t\t}\n\n\t\t&__logo {\n\t\t\t& > * {\n\t\t\t\tdisplay: block;\n\t\t\t}\n\t\t\ttext-align: center;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\tgap: 1rem;\n\t\t\tjustify-content: center;\n\t\t\tmargin: 0;\n\t\t\tspan {\n\t\t\t\twriting-mode: horizontal-tb;\n\t\t\t\trotate: 0deg;\n\t\t\t}\n\t\t\t.to-start {\n\t\t\t\ttext-decoration: underline;\n\t\t\t\tfont-size: 1.5rem;\n\t\t\t}\n\t\t}\n\n\t\t.nav__list {\n\t\t\tmargin-bottom: 0;\n\t\t}\n\t}\n}\n",".modal {\n\tposition: absolute;\n\n\tz-index: $modal-z;\n\ttop: 80vh;\n\tleft: 50vw;\n\ttranslate: -50% -50%;\n\n\tcontainer-type: inline-size;\n\tcontainer-name: modal;\n\tmax-width: 1500px;\n\tmin-width: 200px;\n\twidth: 80%;\n\n\tgrid-template-columns: repeat(2, 1fr);\n\toverflow: hidden;\n\n\tdisplay: none;\n\t&.show {\n\t\tdisplay: grid;\n\t}\n\timg {\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tobject-fit: cover;\n\t}\n\n\t.form {\n\t\tbackground-color: #fff;\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tgap: 1rem;\n\t\tpadding: 1rem;\n\t\t&__close {\n\t\t\talign-self: flex-end;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: flex-end;\n\t\t\tposition: relative;\n\t\t\theight: 50px;\n\t\t\twidth: 50px;\n\n\t\t\t&:hover {\n\t\t\t\tspan {\n\t\t\t\t\tbackground-color: rgb(205, 55, 55);\n\t\t\t\t}\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 20px;\n\t\t\t\tright: 20px;\n\n\t\t\t\twidth: 30px;\n\t\t\t\theight: 5px;\n\t\t\t\tbackground-color: black;\n\t\t\t\tdisplay: inline-block;\n\n\t\t\t\ttransition: background-color 300ms;\n\n\t\t\t\t&:nth-child(1) {\n\t\t\t\t\trotate: 45deg;\n\t\t\t\t}\n\t\t\t\t&:nth-child(2) {\n\t\t\t\t\trotate: -45deg;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t&__title {\n\t\t\tfont-family: $secondary-font;\n\t\t\tcolor: rgb(60, 60, 60);\n\t\t\tfont-size: 2rem;\n\t\t}\n\n\t\t&__input-container {\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tgap: 1rem;\n\t\t}\n\n\t\t&__input {\n\t\t\tmin-width: 150px;\n\t\t\twidth: 40%;\n\t\t\tmax-width: 200px;\n\t\t\tfont-size: 1rem;\n\t\t\tborder: none;\n\t\t\toutline: none;\n\t\t\tpadding: 1rem 0;\n\t\t\tborder-bottom: 2px solid gray;\n\t\t\t&::placeholder {\n\t\t\t\tcolor: gray;\n\t\t\t}\n\t\t}\n\t\t&__textarea {\n\t\t\tgrid-column: 1 / 3;\n\t\t\tfont-size: 1rem;\n\t\t\twidth: 100%;\n\t\t\theight: 120px;\n\t\t\tborder: 1px solid gray;\n\t\t\toutline: none;\n\t\t\tpadding: 0.5rem 1rem;\n\t\t\tresize: none;\n\t\t}\n\t}\n\n\t&__bg {\n\t\tz-index: $modal-bg-z;\n\t\tposition: absolute;\n\t\tinset: 0;\n\t\tbottom: -90vh;\n\n\t\tdisplay: none;\n\t\t&.show {\n\t\t\tdisplay: block;\n\t\t}\n\t}\n}\n\n@container modal (max-width: 400px) {\n\t.modal {\n\t\timg {\n\t\t\tdisplay: none;\n\t\t}\n\t\t.form {\n\t\t\tgrid-column: 1/3;\n\t\t}\n\t}\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/scripts/_accordion.js":
/*!***********************************!*\
  !*** ./src/scripts/_accordion.js ***!
  \***********************************/
/***/ (() => {

const accordion = document.querySelector("[data-accordion]")

if (accordion) accordion.addEventListener("click", toggleCheckbox)

function toggleCheckbox(e) {
	e.stopPropagation()
	e.preventDefault()
	let targetAccordion = undefined
	if (e.target.matches("label.label")) {
		targetAccordion = e.target.querySelector("input")
	}
	if (e.target.matches("span")) {
		targetAccordion = e.target.parentNode.querySelector("input")
	}
	if (
		e.target.matches(".accordion__item[data-after]") &&
		!e.target.querySelector("input").checked
	) {
		targetAccordion = e.target.querySelector("input")
	}
	if (targetAccordion) {
		targetAccordion.checked = !targetAccordion.checked
	}
}


/***/ }),

/***/ "./src/scripts/_header.js":
/*!********************************!*\
  !*** ./src/scripts/_header.js ***!
  \********************************/
/***/ (() => {

const openNavButton = document.querySelector("[data-nav-open]")
const closeNavButton = document.querySelector("[data-nav-close]")

const nav = document.querySelector("[data-nav]")

openNavButton.addEventListener("click", openNav)
closeNavButton.addEventListener("click", closeNav)

function closeNav() {
	nav.classList.remove("show")
}

function openNav() {
	nav.classList.add("show")
}


/***/ }),

/***/ "./src/scripts/_modal.js":
/*!*******************************!*\
  !*** ./src/scripts/_modal.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setUpModalButtons": () => (/* binding */ setUpModalButtons)
/* harmony export */ });
const modalEl = document.querySelector("[data-modal]")
const modalBgEl = document.querySelector("[data-modal-bg]")

if (!modalEl) {
	console.log(modalEl)
}

const closeModalBtn = modalEl.querySelector("[data-close-modal-btn]")
const form = modalEl.querySelector("form.form")
const successNotification = document.querySelector("[data-notification]")

closeModalBtn.addEventListener("click", closeModal)
form.addEventListener("submit", successModal)

function setUpModalButtons(documentElement) {
	const modalButtons = Array.from(
		documentElement.querySelectorAll("[data-modal-open-btn]")
	)

	modalButtons.forEach((btn) => btn.addEventListener("click", openModal))
	console.log(documentElement)
}

function openModal() {
	modalEl.classList.add("show")
	modalBgEl.classList.add("show")
}
function closeModal() {
	modalEl.classList.remove("show")
	modalBgEl.classList.remove("show")
}

function successModal() {
	event.preventDefault()
	closeModal()
	successNotification.classList.add("show")
	console.log("before")
	setTimeout(() => {
		console.log("in")
		successNotification.classList.remove("show")
	}, 3000)
}


/***/ }),

/***/ "./src/scripts/_searchField.js":
/*!*************************************!*\
  !*** ./src/scripts/_searchField.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "updateSearch": () => (/* binding */ updateSearch)
/* harmony export */ });
const searchFieldTemplate = document.querySelector("[data-searchFieldList]")
const searchFieldItemTemplate = document.querySelector(
	"[data-searchFieldListItem]"
)
const searchFieldResultsContainer = document.querySelector("[data-searchField]")

function updateSearch() {
	const results = [
		{
			imgSrc: "../img/products/1.png",
			title: "Террасная доска",
			price: "18500",
			size: "20*40*6000",
		},
		{
			imgSrc: "../img/products/1.png",
			title: "Террасная доска",
			price: "18500",
			size: "20*40*6000",
		},
	]
	clearItems()
	populateItems([
		...results,
		,
		{
			imgSrc: "../img/products/1.png",
			title: "Террасная доска",
			price: "18500",
			size: "20*40*6000",
		},
	])
}

function populateItems(results) {
	const resultsWrapper = searchFieldTemplate.content
		.cloneNode(true)
		.querySelector("ul")
	searchFieldResultsContainer.append(resultsWrapper)

	results.forEach((res) => {
		resultsWrapper.append(createResultItem(res))
	})
}

function clearItems() {
	const items = Array.from(
		searchFieldResultsContainer.querySelectorAll(".search-field__list")
	)
	console.log(items)
	items.forEach((item) => item.remove())
}

function createResultItem({ imgSrc, title, price, size }) {
	const resultItem = searchFieldItemTemplate.content.cloneNode(true)

	resultItem.querySelector("[data-image]").src = imgSrc
	resultItem.querySelector("[data-title]").textContent = title
	resultItem.querySelector("[data-price]").textContent = price
	resultItem.querySelector("[data-size]").textContent = size

	return resultItem
}


/***/ }),

/***/ "./src/fonts/Inter-Medium.ttf":
/*!************************************!*\
  !*** ./src/fonts/Inter-Medium.ttf ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./fonts/Inter-Medium.ttf";

/***/ }),

/***/ "./src/fonts/Inter-Regular.ttf":
/*!*************************************!*\
  !*** ./src/fonts/Inter-Regular.ttf ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./fonts/Inter-Regular.ttf";

/***/ }),

/***/ "./src/fonts/Rounded_Elegance.ttf":
/*!****************************************!*\
  !*** ./src/fonts/Rounded_Elegance.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "./fonts/Rounded_Elegance.ttf";

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_header */ "./src/scripts/_header.js");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_header__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_accordion */ "./src/scripts/_accordion.js");
/* harmony import */ var _accordion__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_accordion__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _searchField__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_searchField */ "./src/scripts/_searchField.js");
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_modal */ "./src/scripts/_modal.js");








(0,_modal__WEBPACK_IMPORTED_MODULE_4__.setUpModalButtons)(document.body)

const searchFieldResultsContainer = document.querySelector("[data-searchField]")

searchFieldResultsContainer
	.querySelector("input")
	.addEventListener("input", _searchField__WEBPACK_IMPORTED_MODULE_3__.updateSearch)

})();

/******/ })()
;
//# sourceMappingURL=index.js.map