/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./font/RampartOne-Regular.ttf */ "./src/font/RampartOne-Regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./font/BalooBhai2.ttf */ "./src/font/BalooBhai2.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  font-size: 62.5%;

  /* Main colors */
  --BG_COLOR: rgb(236, 216, 228);
  --BAM_RED: rgb(180, 40, 40);
  --BAM_PINK: rgba(255, 0, 0, 0.1);
  --BORDER_LIGHT: 1px solid rgba(0, 0, 0, 0.2);

  /* Text */
  --TEXT_SHADOW: 1px 1px 1px black;
}

/******************************************
/* BASE STYLES
/*******************************************/

* {
  margin: 0;
  padding: 0;
  border: 0;
  list-style: none;
  outline: none;
  box-sizing: border-box;
  line-height: 1.5;
  font-size: 1.6rem; /* Set default back to 16px for fallback */
}

body {
  background-color: var(--BG_COLOR);
}

/******************************************
/* TEXT
/*******************************************/

@font-face {
  font-family: 'Rampart';
  font-weight: 400;
  font-style: normal;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

@font-face {
  font-family: 'BalooBhai';
  font-weight: 400;
  font-style: normal;
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

h1 {
  text-align: center;
  line-height: 1.2;
  font-family: 'Rampart';
  font-size: clamp(4.6rem, 1rem + 10vw, 12rem);
  color: var(--BAM_RED);
  text-shadow: var(--TEXT_SHADOW);
  user-select: none;
}

h2 {
  font-family: 'Rampart';
  font-size: clamp(4.4rem, 5vw, 6rem);
  transform: rotate(-2deg);
  color: var(--BAM_RED);
  text-shadow: var(--TEXT_SHADOW);
  text-align: center;
  user-select: none;
}

p {
  font-size: 2.6rem;
  padding: 0 20px;
}


/******************************************
/* HEADER
/*******************************************/

nav {
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  margin: 0 4px;

  & button {
    width: 33%;
    background-color: white;
    font-size: clamp(3rem, 1rem + 3vw, 4.6rem);
    font-family: 'BalooBhai';
    font-weight: 600;
    border-radius: 3px;
    border: var(--BORDER_LIGHT);
    transition: all 600ms;
  }

  & button:hover {
    background-color: var(--BAM_RED);
    color: white;
  }

  & .active {
    background-color: var(--BAM_RED);
    color: white;
    border-bottom: 5px solid black;
    margin-bottom: -5px;
  }
}

/******************************************
/* CONTENT
/*******************************************/


#content {
  display: flex;
  justify-content: center; /* justify and align centers for smaller screens */
  align-items: center;
  max-width: 1400px;
  margin: 40px auto;
  font-family: 'BalooBhai';
  white-space: pre-line; /* Make sure linebreaks work! */

  & > div { /* every container inside content */
    width: 94vw;
    border-radius: 4px;
    display: grid;
  }
}

.img-container {
  display: flex;
  align-items: center;
  justify-content: center;
  /* adjust grid area in individual components */

  & img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
}



/******************************************
/* ABOUT
/*******************************************/

.about-container {
  background-color: var(--BAM_PINK);
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  grid-template-rows: 150px repeat(3, auto);
  border: var(--BORDER_LIGHT);

  & .about-title { /* h2 */
    grid-area: 1 / 1 / 2 / 5;
    padding-top: 10px;
    height: 50%;
  }

  & .about-info {
    grid-area: 2 / 1 / 3 / 5;
    padding: 0 20px;
  }

  & .img-container {
    grid-area: 3 / 2 / 4 / 4;
  }

  & .review-container {
    grid-area: 4 / 1 / 5 / 5;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    padding: 20px 0;
    border-top: var(--BORDER_LIGHT);

    & > .about-review {
      font-size: 3rem;
      text-align: center;      
    }
  }


  /* MEDIA QUERIES */
  @media screen and (max-width: 900px) {
    & .about-review { width: 50%; padding-top: 30px;}
  }
  
  @media screen and (max-width: 700px) {
    & .about-info       { grid-area: 2 / 1 / 3 / 5; }
    & .img-container    { grid-area: 3 / 1 / 4 / 5; }
    & .about-review     { width: 100%; }
  }
}

/******************************************
/* MENU
/*******************************************/

.menu-container {
  gap: 40px;

  & .menu-item {
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    background-color: var(--BAM_PINK);
    border: var(--BORDER_LIGHT);

    & > div {
      padding: 20px;
    }
  }

  & .menu-info {
    display: flex;
    flex-direction: column;

    & .item-name { /* h2 */
        font-size: clamp(5rem, 5vw, 5.5rem);
        transform: rotate(-3deg);
    }

    & p {
      padding-top: 20px;
    }

    & .item-ingredients {
      border-top: var(--BORDER_LIGHT);
      font-size: 2rem;
      text-align: right;
      opacity: 0.6;
    }

    & .item-calories {
      font-size: 2rem;
      text-align: right;
      padding-top: 10px;
      color: var(--BAM_RED);
    }
  }

  
  /* EVERY OTHER DIV WILL HAVE THE INFO AND IMAGES POSITION SWAPPED */
  /* INFO LEFT - IMAGE RIGHT */
  & .menu-info      { grid-area: 1 / 1 / 3 / 2; }
  & .img-container  { grid-area: 1 / 2 / 3 / 3; }

  /* IMAGE LEFT - INFO RIGHT */
  & .menu-item:nth-child(even) > .menu-info     { grid-area: 1 / 2 / 3 / 3; }  
  & .menu-item:nth-child(even) > .img-container { grid-area: 1 / 1 / 3 / 2; }


  /* MEDIA QUERIES */
  @media screen and (max-width: 850px) {
    & .menu-item      { grid-template-columns: 1fr; }
    & .menu-info      { grid-area: 1 / 1 / 2 / 2 !important; } /* important is added to not rewrite the above .menu-items */
    & .img-container  { grid-area: 2 / 1 / 3 / 3 !important; }
  }
}

/******************************************
/* CONTACT
/*******************************************/

.contact-container {
  gap: 20px;
  
  & .contact-item {
    display: flex;
    flex-direction: column;
    background-color: var(--BAM_PINK);
    border: var(--BORDER_LIGHT);
  }

  /* & h2 {
    font-size: clamp(3rem, 5rem + 0.5vw, 6rem);
  } */
  
  & span {
    padding: 10px 0;
    font-size: 2.4rem;
    text-align: center;
  }
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  font-size: 62.5%;\r\n\r\n  /* Main colors */\r\n  --BG_COLOR: rgb(236, 216, 228);\r\n  --BAM_RED: rgb(180, 40, 40);\r\n  --BAM_PINK: rgba(255, 0, 0, 0.1);\r\n  --BORDER_LIGHT: 1px solid rgba(0, 0, 0, 0.2);\r\n\r\n  /* Text */\r\n  --TEXT_SHADOW: 1px 1px 1px black;\r\n}\r\n\r\n/******************************************\r\n/* BASE STYLES\r\n/*******************************************/\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  list-style: none;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  line-height: 1.5;\r\n  font-size: 1.6rem; /* Set default back to 16px for fallback */\r\n}\r\n\r\nbody {\r\n  background-color: var(--BG_COLOR);\r\n}\r\n\r\n/******************************************\r\n/* TEXT\r\n/*******************************************/\r\n\r\n@font-face {\r\n  font-family: 'Rampart';\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  src: url(./font/RampartOne-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'BalooBhai';\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  src: url(./font/BalooBhai2.ttf);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  line-height: 1.2;\r\n  font-family: 'Rampart';\r\n  font-size: clamp(4.6rem, 1rem + 10vw, 12rem);\r\n  color: var(--BAM_RED);\r\n  text-shadow: var(--TEXT_SHADOW);\r\n  user-select: none;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Rampart';\r\n  font-size: clamp(4.4rem, 5vw, 6rem);\r\n  transform: rotate(-2deg);\r\n  color: var(--BAM_RED);\r\n  text-shadow: var(--TEXT_SHADOW);\r\n  text-align: center;\r\n  user-select: none;\r\n}\r\n\r\np {\r\n  font-size: 2.6rem;\r\n  padding: 0 20px;\r\n}\r\n\r\n\r\n/******************************************\r\n/* HEADER\r\n/*******************************************/\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 20px;\r\n  margin: 0 4px;\r\n\r\n  & button {\r\n    width: 33%;\r\n    background-color: white;\r\n    font-size: clamp(3rem, 1rem + 3vw, 4.6rem);\r\n    font-family: 'BalooBhai';\r\n    font-weight: 600;\r\n    border-radius: 3px;\r\n    border: var(--BORDER_LIGHT);\r\n    transition: all 600ms;\r\n  }\r\n\r\n  & button:hover {\r\n    background-color: var(--BAM_RED);\r\n    color: white;\r\n  }\r\n\r\n  & .active {\r\n    background-color: var(--BAM_RED);\r\n    color: white;\r\n    border-bottom: 5px solid black;\r\n    margin-bottom: -5px;\r\n  }\r\n}\r\n\r\n/******************************************\r\n/* CONTENT\r\n/*******************************************/\r\n\r\n\r\n#content {\r\n  display: flex;\r\n  justify-content: center; /* justify and align centers for smaller screens */\r\n  align-items: center;\r\n  max-width: 1400px;\r\n  margin: 40px auto;\r\n  font-family: 'BalooBhai';\r\n  white-space: pre-line; /* Make sure linebreaks work! */\r\n\r\n  & > div { /* every container inside content */\r\n    width: 94vw;\r\n    border-radius: 4px;\r\n    display: grid;\r\n  }\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* adjust grid area in individual components */\r\n\r\n  & img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    object-fit: contain;\r\n  }\r\n}\r\n\r\n\r\n\r\n/******************************************\r\n/* ABOUT\r\n/*******************************************/\r\n\r\n.about-container {\r\n  background-color: var(--BAM_PINK);\r\n  grid-template-columns: repeat(4, 1fr);\r\n  gap: 30px;\r\n  grid-template-rows: 150px repeat(3, auto);\r\n  border: var(--BORDER_LIGHT);\r\n\r\n  & .about-title { /* h2 */\r\n    grid-area: 1 / 1 / 2 / 5;\r\n    padding-top: 10px;\r\n    height: 50%;\r\n  }\r\n\r\n  & .about-info {\r\n    grid-area: 2 / 1 / 3 / 5;\r\n    padding: 0 20px;\r\n  }\r\n\r\n  & .img-container {\r\n    grid-area: 3 / 2 / 4 / 4;\r\n  }\r\n\r\n  & .review-container {\r\n    grid-area: 4 / 1 / 5 / 5;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding: 20px 0;\r\n    border-top: var(--BORDER_LIGHT);\r\n\r\n    & > .about-review {\r\n      font-size: 3rem;\r\n      text-align: center;      \r\n    }\r\n  }\r\n\r\n\r\n  /* MEDIA QUERIES */\r\n  @media screen and (max-width: 900px) {\r\n    & .about-review { width: 50%; padding-top: 30px;}\r\n  }\r\n  \r\n  @media screen and (max-width: 700px) {\r\n    & .about-info       { grid-area: 2 / 1 / 3 / 5; }\r\n    & .img-container    { grid-area: 3 / 1 / 4 / 5; }\r\n    & .about-review     { width: 100%; }\r\n  }\r\n}\r\n\r\n/******************************************\r\n/* MENU\r\n/*******************************************/\r\n\r\n.menu-container {\r\n  gap: 40px;\r\n\r\n  & .menu-item {\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto auto;\r\n    background-color: var(--BAM_PINK);\r\n    border: var(--BORDER_LIGHT);\r\n\r\n    & > div {\r\n      padding: 20px;\r\n    }\r\n  }\r\n\r\n  & .menu-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    & .item-name { /* h2 */\r\n        font-size: clamp(5rem, 5vw, 5.5rem);\r\n        transform: rotate(-3deg);\r\n    }\r\n\r\n    & p {\r\n      padding-top: 20px;\r\n    }\r\n\r\n    & .item-ingredients {\r\n      border-top: var(--BORDER_LIGHT);\r\n      font-size: 2rem;\r\n      text-align: right;\r\n      opacity: 0.6;\r\n    }\r\n\r\n    & .item-calories {\r\n      font-size: 2rem;\r\n      text-align: right;\r\n      padding-top: 10px;\r\n      color: var(--BAM_RED);\r\n    }\r\n  }\r\n\r\n  \r\n  /* EVERY OTHER DIV WILL HAVE THE INFO AND IMAGES POSITION SWAPPED */\r\n  /* INFO LEFT - IMAGE RIGHT */\r\n  & .menu-info      { grid-area: 1 / 1 / 3 / 2; }\r\n  & .img-container  { grid-area: 1 / 2 / 3 / 3; }\r\n\r\n  /* IMAGE LEFT - INFO RIGHT */\r\n  & .menu-item:nth-child(even) > .menu-info     { grid-area: 1 / 2 / 3 / 3; }  \r\n  & .menu-item:nth-child(even) > .img-container { grid-area: 1 / 1 / 3 / 2; }\r\n\r\n\r\n  /* MEDIA QUERIES */\r\n  @media screen and (max-width: 850px) {\r\n    & .menu-item      { grid-template-columns: 1fr; }\r\n    & .menu-info      { grid-area: 1 / 1 / 2 / 2 !important; } /* important is added to not rewrite the above .menu-items */\r\n    & .img-container  { grid-area: 2 / 1 / 3 / 3 !important; }\r\n  }\r\n}\r\n\r\n/******************************************\r\n/* CONTACT\r\n/*******************************************/\r\n\r\n.contact-container {\r\n  gap: 20px;\r\n  \r\n  & .contact-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--BAM_PINK);\r\n    border: var(--BORDER_LIGHT);\r\n  }\r\n\r\n  /* & h2 {\r\n    font-size: clamp(3rem, 5rem + 0.5vw, 6rem);\r\n  } */\r\n  \r\n  & span {\r\n    padding: 10px 0;\r\n    font-size: 2.4rem;\r\n    text-align: center;\r\n  }\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
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
  };

  // import a list of modules into the list
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



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
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
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



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



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
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
  }

  // For old IE
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
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
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

/***/ "./src/DOMUtils.js":
/*!*************************!*\
  !*** ./src/DOMUtils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DOMUtils)
/* harmony export */ });
class DOMUtils {
  static createDiv(className) {
    const div = document.createElement('div')
    div.classList.add(className)
    return div
  }


  static createElementWithContent(tagName, content, className) {
    // Create Element
    const element = document.createElement(tagName)
    // Populate Content
    element.textContent = content
    // Add className
    element.classList.add(className)
    return element
  }

  static createImage(src, className, alt) {
    const img = new Image()
    img.src = src
    img.alt = alt
    img.classList.add(className)
    return img
  }


}

/***/ }),

/***/ "./src/about.js":
/*!**********************!*\
  !*** ./src/about.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMUtils */ "./src/DOMUtils.js");
/* harmony import */ var _img_burger_large_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/burger_large.webp */ "./src/img/burger_large.webp");



function about() {
  console.log('About.js working')

  const content = document.getElementById('content')
  const container = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('about-container')
  const imgContainer = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('img-container')
  
  const aboutTitle = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('h2', 'Home of the Bamburger!', 'about-title')
  const aboutImg = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createImage(_img_burger_large_webp__WEBPACK_IMPORTED_MODULE_1__, 'about-img', 'Hamburger')
  const aboutInfo = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('p',
  `Nestled on a cozy corner in the heart of downtown Detroit, Bamburgers has been serving up delicious, no-frills burgers since 1991. Serving everyone including yourself, local legends, and all the way to Big Three CEOs. Step through our doors and you'll be transported back in time to an era when burgers reigned supreme and quality was paramount.
  
  We've stayed true to our Detroit roots, crafting every burger with the freshest, locally-sourced ingredients and our signature "Bam-Sauce" that folks go crazy for. What's the secret to our legendary burgers? It starts with using only premium grass-fed beef that gets hand-pattied and grilled to juicy perfection. Our burger buns are baked fresh daily using a decades-old recipe. And then there's the toppings - crisp lettuce, ripe tomatoes, zesty onions, and sharp cheddar cheeses - all sourced from local farms and purveyors we've built relationships with over the years.
  
  As proud as we are of the food, Bamburgers is more than just food - it's an experience. The retro digs, neon signs, and checkerboard floors welcome anyone who is hungry. Our staff will treat you like family from the moment you belly up to the counter. At Bamburgers, we take pride in every burger we serve and every customer we welcome. It's what has made this little burger joint a favorite to everyone that visits.`, 'about-info'
)

  const reviewContainer = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('review-container')
  const review1 = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('span', `Best of Detroit! \n -BurgerSpot`, 'about-review')
  const review2 = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('span', `Amazing milkshakes! \n -DETReviewer`, 'about-review')
  const review3 = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('span', `11/10 \n -MoTown Food`, 'about-review')
  const review4 = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('span', `Retro Paradise \n -Review Girl`, 'about-review')

  content.appendChild(container)
  container.appendChild(aboutTitle)
  container.appendChild(aboutInfo)
  container.appendChild(imgContainer)
  imgContainer.appendChild(aboutImg)
  container.appendChild(reviewContainer)
  reviewContainer.append(review1, review2, review3, review4)

  return container
}

/***/ }),

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ contact)
/* harmony export */ });
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMUtils */ "./src/DOMUtils.js");


const contactArr = [
  {
    title: `PHONE #`,
    contact: '1-234-567-8910'
  },
  {
    title: `EMAIL`,
    contact: `bam@burgers.eat`
  },
  {
    title: `LOCATION`,
    contact: `5005 Burger Drive, Detroit, MI 48201`
  }
]

function contact() {
  console.log('Contact.js working')

  const container = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('contact-container')

  contactArr.forEach((item) => {
    const contactItem = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('contact-item')
    const contactTitle = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('h2', item.title, 'contact-title')
    const contactMethod = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('span', item.contact, 'contact-phone')

    container.appendChild(contactItem)
    contactItem.append(contactTitle, contactMethod)
  })

  content.appendChild(container)

  return container
}

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ menu)
/* harmony export */ });
/* harmony import */ var _DOMUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DOMUtils */ "./src/DOMUtils.js");
/* harmony import */ var _img_burger_webp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/burger.webp */ "./src/img/burger.webp");
/* harmony import */ var _img_fries_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/fries.webp */ "./src/img/fries.webp");
/* harmony import */ var _img_shake_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/shake.webp */ "./src/img/shake.webp");
/* harmony import */ var _img_tendies_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/tendies.webp */ "./src/img/tendies.webp");







const menuItems = [
  {
    src: _img_burger_webp__WEBPACK_IMPORTED_MODULE_1__,
    name: `Bamburger`,
    description: `A delicious and juicy hamburger made with fresh ingredients and our top secret Bam-Sauce!`,
    ingredients: `100% Beef Patty, Hamburger Bun, Mayonaise, Lettuce, Onion, Tomato, Ketchup, and Cheddar Cheese`,
    calories: `940 Calories`
  },
  {
    src: _img_fries_webp__WEBPACK_IMPORTED_MODULE_2__,
    name: 'Bam Fries',
    description: `Golden and crispy fries made from the finest locally sourced potatoes.`,
    ingredients: `Potato, Black Pepper`,
    calories: `320 Calories`
  },
  {
    src: _img_tendies_webp__WEBPACK_IMPORTED_MODULE_4__,
    name: `Chicky Tenders`,
    description: `Juicy and tender chicken tenders, perfectly breaded and fried to a golden crisp.`,
    ingredients: `Chicken Breast, Breading (Flour, Eggs, Breadcrumbs, Spices)`,
    calories: `720 Calories`
  },
  {
    src: _img_shake_webp__WEBPACK_IMPORTED_MODULE_3__,
    name: `Wham-Bam Shake`,
    description: `Thick and creamy chocolate shake made with premium ice cream with crunched up bits of freshly baked chocolate chip cookies.`,
    ingredients: `Chocolate Ice Cream, Milk, Chocolate Syrup, Whipped Cream, and a Chocolate Cookie`,
    calories: `1080 Calories`
  },
]

function menu() {
  console.log('Menu.js working')
  const container = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('menu-container')
  
  menuItems.forEach((item) => {
    const menuItem = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('menu-item')
    const itemInfo = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('menu-info')
    const imgContainer = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createDiv('img-container')
    const menuImg = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createImage(item.src, 'menu-img', item.name)

    const itemName = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('h2', item.name, 'item-name')
    const itemDesc = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('p', item.description, 'item-description')
    const itemIngredients = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('p', item.ingredients, 'item-ingredients')
    const itemCalories = _DOMUtils__WEBPACK_IMPORTED_MODULE_0__["default"].createElementWithContent('span', item.calories, 'item-calories')

    container.appendChild(menuItem)
    menuItem.append(itemInfo, imgContainer)
    itemInfo.append(itemName, itemDesc, itemIngredients, itemCalories)
    imgContainer.appendChild(menuImg)
    
  })



  // Basic structure
  // ----------------------------------------------------
  // |                        div                       |
  // |                  -- menu-item --                 |
  // |  ---------------------------------------------   |
  // |  |        div        |           div         |   |
  // |  |  -- menu-info --  |  -- img-container --  |   |
  // |  |                   |                       |   |
  // |  |                   |        menuImg        |   |
  // |  |                   |                       |   |
  // |  |                   |                       |   |
  // |  |                   |                       |   |
  // |  ---------------------------------------------   |
  // ----------------------------------------------------

  content.appendChild(container)

  return container
}

/***/ }),

/***/ "./src/font/BalooBhai2.ttf":
/*!*********************************!*\
  !*** ./src/font/BalooBhai2.ttf ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "font/9dcc1d2d3e3b930b0953.ttf";

/***/ }),

/***/ "./src/font/RampartOne-Regular.ttf":
/*!*****************************************!*\
  !*** ./src/font/RampartOne-Regular.ttf ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "font/2460d26f5bdb95e19f32.ttf";

/***/ }),

/***/ "./src/img/burger.webp":
/*!*****************************!*\
  !*** ./src/img/burger.webp ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/6bf8360da175c7bbdf11.webp";

/***/ }),

/***/ "./src/img/burger_large.webp":
/*!***********************************!*\
  !*** ./src/img/burger_large.webp ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/847445b31c0d23883b23.webp";

/***/ }),

/***/ "./src/img/fries.webp":
/*!****************************!*\
  !*** ./src/img/fries.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/db231943ecf5ffde87a3.webp";

/***/ }),

/***/ "./src/img/shake.webp":
/*!****************************!*\
  !*** ./src/img/shake.webp ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/4d8e4e311feae58f2a99.webp";

/***/ }),

/***/ "./src/img/tendies.webp":
/*!******************************!*\
  !*** ./src/img/tendies.webp ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/4fea8701ead2d5594aea.webp";

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
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
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
/******/ 			"main": 0
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./about */ "./src/about.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ "./src/contact.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./style.css */ "./src/style.css");





console.log('RUNNING!!')

// --------------------------------------------------------
// --------------------------------------------------------
// DOM ELEMENTS

const content = document.getElementById('content')
const navItems = document.querySelectorAll('nav > *')

const aboutBtn = document.getElementById('navAbout')
const menuBtn = document.getElementById('navMenu')
const contactBtn = document.getElementById('navContact')

// --------------------------------------------------------
// --------------------------------------------------------
// EVENT LISTENERS

aboutBtn.addEventListener('click', () => renderTab(_about__WEBPACK_IMPORTED_MODULE_0__["default"], aboutBtn))
menuBtn.addEventListener('click', () => renderTab(_menu__WEBPACK_IMPORTED_MODULE_1__["default"], menuBtn))
contactBtn.addEventListener('click', () => renderTab(_contact__WEBPACK_IMPORTED_MODULE_2__["default"], contactBtn))

// --------------------------------------------------------
// --------------------------------------------------------
// FUNCTIONS

;(0,_about__WEBPACK_IMPORTED_MODULE_0__["default"])() // Default page and Tab selected
aboutBtn.classList.add('active') // --^

function renderTab(tabFunction, btnClicked) { // Get current tab selected & Highlight its corresponding button
  removeActive(btnClicked)
  btnClicked.classList.add('active')
  content.replaceChildren(tabFunction())
}

function removeActive(activeBtn) {
  navItems.forEach((btn) => {
    if(btn !== activeBtn) {
      btn.removeAttribute('class')
    }
  })
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDhDQUFLO0FBQ3hELGtEQUFrRCw2Q0FBSTtBQUN0RCxxREFBcUQsZ0RBQU87QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFLO0FBQ0w7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9SYW1wYXJ0T25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L0JhbG9vQmhhaTIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcblxyXG4gIC8qIE1haW4gY29sb3JzICovXHJcbiAgLS1CR19DT0xPUjogcmdiKDIzNiwgMjE2LCAyMjgpO1xyXG4gIC0tQkFNX1JFRDogcmdiKDE4MCwgNDAsIDQwKTtcclxuICAtLUJBTV9QSU5LOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcclxuICAtLUJPUkRFUl9MSUdIVDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgLyogVGV4dCAqL1xyXG4gIC0tVEVYVF9TSEFET1c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIEJBU0UgU1RZTEVTXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07IC8qIFNldCBkZWZhdWx0IGJhY2sgdG8gMTZweCBmb3IgZmFsbGJhY2sgKi9cclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkdfQ09MT1IpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIFRFWFRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1JhbXBhcnQnO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0JhbG9vQmhhaSc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LWZhbWlseTogJ1JhbXBhcnQnO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoNC42cmVtLCAxcmVtICsgMTB2dywgMTJyZW0pO1xyXG4gIGNvbG9yOiB2YXIoLS1CQU1fUkVEKTtcclxuICB0ZXh0LXNoYWRvdzogdmFyKC0tVEVYVF9TSEFET1cpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSYW1wYXJ0JztcclxuICBmb250LXNpemU6IGNsYW1wKDQuNHJlbSwgNXZ3LCA2cmVtKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XHJcbiAgY29sb3I6IHZhcigtLUJBTV9SRUQpO1xyXG4gIHRleHQtc2hhZG93OiB2YXIoLS1URVhUX1NIQURPVyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIEhFQURFUlxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDRweDtcclxuXHJcbiAgJiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCAxcmVtICsgM3Z3LCA0LjZyZW0pO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYWxvb0JoYWknO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogdmFyKC0tQk9SREVSX0xJR0hUKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcclxuICB9XHJcblxyXG4gICYgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9SRUQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9SRUQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLyogQ09OVEVOVFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4jY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyoganVzdGlmeSBhbmQgYWxpZ24gY2VudGVycyBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBmb250LWZhbWlseTogJ0JhbG9vQmhhaSc7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lOyAvKiBNYWtlIHN1cmUgbGluZWJyZWFrcyB3b3JrISAqL1xyXG5cclxuICAmID4gZGl2IHsgLyogZXZlcnkgY29udGFpbmVyIGluc2lkZSBjb250ZW50ICovXHJcbiAgICB3aWR0aDogOTR2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIGFkanVzdCBncmlkIGFyZWEgaW4gaW5kaXZpZHVhbCBjb21wb25lbnRzICovXHJcblxyXG4gICYgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIEFCT1VUXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmFib3V0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkFNX1BJTkspO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMTUwcHggcmVwZWF0KDMsIGF1dG8pO1xyXG4gIGJvcmRlcjogdmFyKC0tQk9SREVSX0xJR0hUKTtcclxuXHJcbiAgJiAuYWJvdXQtdGl0bGUgeyAvKiBoMiAqL1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA1O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gICYgLmFib3V0LWluZm8ge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA1O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJiAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDQ7XHJcbiAgfVxyXG5cclxuICAmIC5yZXZpZXctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogNCAvIDEgLyA1IC8gNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiB2YXIoLS1CT1JERVJfTElHSFQpO1xyXG5cclxuICAgICYgPiAuYWJvdXQtcmV2aWV3IHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogTUVESUEgUVVFUklFUyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAmIC5hYm91dC1yZXZpZXcgeyB3aWR0aDogNTAlOyBwYWRkaW5nLXRvcDogMzBweDt9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAmIC5hYm91dC1pbmZvICAgICAgIHsgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA1OyB9XHJcbiAgICAmIC5pbWctY29udGFpbmVyICAgIHsgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyA1OyB9XHJcbiAgICAmIC5hYm91dC1yZXZpZXcgICAgIHsgd2lkdGg6IDEwMCU7IH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLyogTUVOVVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgZ2FwOiA0MHB4O1xyXG5cclxuICAmIC5tZW51LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQU1fUElOSyk7XHJcbiAgICBib3JkZXI6IHZhcigtLUJPUkRFUl9MSUdIVCk7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5tZW51LWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJiAuaXRlbS1uYW1lIHsgLyogaDIgKi9cclxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDVyZW0sIDV2dywgNS41cmVtKTtcclxuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtM2RlZyk7XHJcbiAgICB9XHJcblxyXG4gICAgJiBwIHtcclxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgJiAuaXRlbS1pbmdyZWRpZW50cyB7XHJcbiAgICAgIGJvcmRlci10b3A6IHZhcigtLUJPUkRFUl9MSUdIVCk7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIG9wYWNpdHk6IDAuNjtcclxuICAgIH1cclxuXHJcbiAgICAmIC5pdGVtLWNhbG9yaWVzIHtcclxuICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1CQU1fUkVEKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIFxyXG4gIC8qIEVWRVJZIE9USEVSIERJViBXSUxMIEhBVkUgVEhFIElORk8gQU5EIElNQUdFUyBQT1NJVElPTiBTV0FQUEVEICovXHJcbiAgLyogSU5GTyBMRUZUIC0gSU1BR0UgUklHSFQgKi9cclxuICAmIC5tZW51LWluZm8gICAgICB7IGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjsgfVxyXG4gICYgLmltZy1jb250YWluZXIgIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzOyB9XHJcblxyXG4gIC8qIElNQUdFIExFRlQgLSBJTkZPIFJJR0hUICovXHJcbiAgJiAubWVudS1pdGVtOm50aC1jaGlsZChldmVuKSA+IC5tZW51LWluZm8gICAgIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzOyB9ICBcclxuICAmIC5tZW51LWl0ZW06bnRoLWNoaWxkKGV2ZW4pID4gLmltZy1jb250YWluZXIgeyBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7IH1cclxuXHJcblxyXG4gIC8qIE1FRElBIFFVRVJJRVMgKi9cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgJiAubWVudS1pdGVtICAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gICAgJiAubWVudS1pbmZvICAgICAgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDIgIWltcG9ydGFudDsgfSAvKiBpbXBvcnRhbnQgaXMgYWRkZWQgdG8gbm90IHJld3JpdGUgdGhlIGFib3ZlIC5tZW51LWl0ZW1zICovXHJcbiAgICAmIC5pbWctY29udGFpbmVyICB7IGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMyAhaW1wb3J0YW50OyB9XHJcbiAgfVxyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIENPTlRBQ1RcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG4uY29udGFjdC1jb250YWluZXIge1xyXG4gIGdhcDogMjBweDtcclxuICBcclxuICAmIC5jb250YWN0LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQU1fUElOSyk7XHJcbiAgICBib3JkZXI6IHZhcigtLUJPUkRFUl9MSUdIVCk7XHJcbiAgfVxyXG5cclxuICAvKiAmIGgyIHtcclxuICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXJlbSArIDAuNXZ3LCA2cmVtKTtcclxuICB9ICovXHJcbiAgXHJcbiAgJiBzcGFuIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjs7RUFFaEIsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0IsZ0NBQWdDO0VBQ2hDLDRDQUE0Qzs7RUFFNUMsU0FBUztFQUNULGdDQUFnQztBQUNsQzs7QUFFQTs7NENBRTRDOztBQUU1QztFQUNFLFNBQVM7RUFDVCxVQUFVO0VBQ1YsU0FBUztFQUNULGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixpQkFBaUIsRUFBRSwwQ0FBMEM7QUFDL0Q7O0FBRUE7RUFDRSxpQ0FBaUM7QUFDbkM7O0FB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O0VBQ25FLDRCQUE0QjtFQUM1QixvQkFBb0Isd0JBQXdCLEVBQUU7RUFDOUMsb0JBQW9CLHdCQUF3QixFQUFFOztFQUU5Qyw0QkFBNEI7RUFDNUIsZ0RBQWdELHdCQUF3QixFQUFFO0VBQzFFLGdEQUFnRCx3QkFBd0IsRUFBRTs7O0VBRzFFLGtCQUFrQjtFQUNsQjtJQUNFLG9CQUFvQiwwQkFBMEIsRUFBRTtJQUNoRCxvQkFBb0IsbUNBQW1DLEVBQUUsRUFBRSw0REFBNEQ7SUFDdkgsb0JBQW9CLG1DQUFtQyxFQUFFO0VBQzNEO0FBQ0Y7O0FBRUE7OzRDQUU0Qzs7QUFFNUM7RUFDRSxTQUFTOztFQUVUO0lBQ0UsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixpQ0FBaUM7SUFDakMsMkJBQTJCO0VBQzdCOztFQUVBOztLQUVHOztFQUVIO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixrQkFBa0I7RUFDcEI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxyXFxuICBmb250LXNpemU6IDYyLjUlO1xcclxcblxcclxcbiAgLyogTWFpbiBjb2xvcnMgKi9cXHJcXG4gIC0tQkdfQ09MT1I6IHJnYigyMzYsIDIxNiwgMjI4KTtcXHJcXG4gIC0tQkFNX1JFRDogcmdiKDE4MCwgNDAsIDQwKTtcXHJcXG4gIC0tQkFNX1BJTks6IHJnYmEoMjU1LCAwLCAwLCAwLjEpO1xcclxcbiAgLS1CT1JERVJfTElHSFQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMik7XFxyXFxuXFxyXFxuICAvKiBUZXh0ICovXFxyXFxuICAtLVRFWFRfU0hBRE9XOiAxcHggMXB4IDFweCBibGFjaztcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8qIEJBU0UgU1RZTEVTXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuKiB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgYm9yZGVyOiAwO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG4gIGZvbnQtc2l6ZTogMS42cmVtOyAvKiBTZXQgZGVmYXVsdCBiYWNrIHRvIDE2cHggZm9yIGZhbGxiYWNrICovXFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkdfQ09MT1IpO1xcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuLyogVEVYVFxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYW1wYXJ0JztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBzcmM6IHVybCguL2ZvbnQvUmFtcGFydE9uZS1SZWd1bGFyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbkBmb250LWZhY2Uge1xcclxcbiAgZm9udC1mYW1pbHk6ICdCYWxvb0JoYWknO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIHNyYzogdXJsKC4vZm9udC9CYWxvb0JoYWkyLnR0Zik7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjI7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbXBhcnQnO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCg0LjZyZW0sIDFyZW0gKyAxMHZ3LCAxMnJlbSk7XFxyXFxuICBjb2xvcjogdmFyKC0tQkFNX1JFRCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tVEVYVF9TSEFET1cpO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmgyIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFtcGFydCc7XFxyXFxuICBmb250LXNpemU6IGNsYW1wKDQuNHJlbSwgNXZ3LCA2cmVtKTtcXHJcXG4gIHRyYW5zZm9ybTogcm90YXRlKC0yZGVnKTtcXHJcXG4gIGNvbG9yOiB2YXIoLS1CQU1fUkVEKTtcXHJcXG4gIHRleHQtc2hhZG93OiB2YXIoLS1URVhUX1NIQURPVyk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICBmb250LXNpemU6IDIuNnJlbTtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8qIEhFQURFUlxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbm5hdiB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICBtYXJnaW46IDAgNHB4O1xcclxcblxcclxcbiAgJiBidXR0b24ge1xcclxcbiAgICB3aWR0aDogMzMlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCAxcmVtICsgM3Z3LCA0LjZyZW0pO1xcclxcbiAgICBmb250LWZhbWlseTogJ0JhbG9vQmhhaSc7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1CT1JERVJfTElHSFQpO1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgNjAwbXM7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGJ1dHRvbjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9SRUQpO1xcclxcbiAgICBjb2xvcjogd2hpdGU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5hY3RpdmUge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQU1fUkVEKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgYmxhY2s7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IC01cHg7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG4vKiBDT05URU5UXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuXFxyXFxuI2NvbnRlbnQge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyAvKiBqdXN0aWZ5IGFuZCBhbGlnbiBjZW50ZXJzIGZvciBzbWFsbGVyIHNjcmVlbnMgKi9cXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDE0MDBweDtcXHJcXG4gIG1hcmdpbjogNDBweCBhdXRvO1xcclxcbiAgZm9udC1mYW1pbHk6ICdCYWxvb0JoYWknO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lOyAvKiBNYWtlIHN1cmUgbGluZWJyZWFrcyB3b3JrISAqL1xcclxcblxcclxcbiAgJiA+IGRpdiB7IC8qIGV2ZXJ5IGNvbnRhaW5lciBpbnNpZGUgY29udGVudCAqL1xcclxcbiAgICB3aWR0aDogOTR2dztcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uaW1nLWNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLyogYWRqdXN0IGdyaWQgYXJlYSBpbiBpbmRpdmlkdWFsIGNvbXBvbmVudHMgKi9cXHJcXG5cXHJcXG4gICYgaW1nIHtcXHJcXG4gICAgbWF4LXdpZHRoOiAxMDAlO1xcclxcbiAgICBtYXgtaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuLyogQUJPVVRcXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG4uYWJvdXQtY29udGFpbmVyIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9QSU5LKTtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDE1MHB4IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gIGJvcmRlcjogdmFyKC0tQk9SREVSX0xJR0hUKTtcXHJcXG5cXHJcXG4gICYgLmFib3V0LXRpdGxlIHsgLyogaDIgKi9cXHJcXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA1O1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgaGVpZ2h0OiA1MCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5hYm91dC1pbmZvIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA1O1xcclxcbiAgICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5pbWctY29udGFpbmVyIHtcXHJcXG4gICAgZ3JpZC1hcmVhOiAzIC8gMiAvIDQgLyA0O1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAucmV2aWV3LWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtYXJlYTogNCAvIDEgLyA1IC8gNTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgcGFkZGluZzogMjBweCAwO1xcclxcbiAgICBib3JkZXItdG9wOiB2YXIoLS1CT1JERVJfTElHSFQpO1xcclxcblxcclxcbiAgICAmID4gLmFib3V0LXJldmlldyB7XFxyXFxuICAgICAgZm9udC1zaXplOiAzcmVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjsgICAgICBcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcblxcclxcbiAgLyogTUVESUEgUVVFUklFUyAqL1xcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcXHJcXG4gICAgJiAuYWJvdXQtcmV2aWV3IHsgd2lkdGg6IDUwJTsgcGFkZGluZy10b3A6IDMwcHg7fVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MDBweCkge1xcclxcbiAgICAmIC5hYm91dC1pbmZvICAgICAgIHsgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA1OyB9XFxyXFxuICAgICYgLmltZy1jb250YWluZXIgICAgeyBncmlkLWFyZWE6IDMgLyAxIC8gNCAvIDU7IH1cXHJcXG4gICAgJiAuYWJvdXQtcmV2aWV3ICAgICB7IHdpZHRoOiAxMDAlOyB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG4vKiBNRU5VXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLm1lbnUtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogNDBweDtcXHJcXG5cXHJcXG4gICYgLm1lbnUtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG8gYXV0bztcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkFNX1BJTkspO1xcclxcbiAgICBib3JkZXI6IHZhcigtLUJPUkRFUl9MSUdIVCk7XFxyXFxuXFxyXFxuICAgICYgPiBkaXYge1xcclxcbiAgICAgIHBhZGRpbmc6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLm1lbnUtaW5mbyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuXFxyXFxuICAgICYgLml0ZW0tbmFtZSB7IC8qIGgyICovXFxyXFxuICAgICAgICBmb250LXNpemU6IGNsYW1wKDVyZW0sIDV2dywgNS41cmVtKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0zZGVnKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIHAge1xcclxcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgLml0ZW0taW5ncmVkaWVudHMge1xcclxcbiAgICAgIGJvcmRlci10b3A6IHZhcigtLUJPUkRFUl9MSUdIVCk7XFxyXFxuICAgICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgICAgIG9wYWNpdHk6IDAuNjtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIC5pdGVtLWNhbG9yaWVzIHtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLUJBTV9SRUQpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4gIC8qIEVWRVJZIE9USEVSIERJViBXSUxMIEhBVkUgVEhFIElORk8gQU5EIElNQUdFUyBQT1NJVElPTiBTV0FQUEVEICovXFxyXFxuICAvKiBJTkZPIExFRlQgLSBJTUFHRSBSSUdIVCAqL1xcclxcbiAgJiAubWVudS1pbmZvICAgICAgeyBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7IH1cXHJcXG4gICYgLmltZy1jb250YWluZXIgIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzOyB9XFxyXFxuXFxyXFxuICAvKiBJTUFHRSBMRUZUIC0gSU5GTyBSSUdIVCAqL1xcclxcbiAgJiAubWVudS1pdGVtOm50aC1jaGlsZChldmVuKSA+IC5tZW51LWluZm8gICAgIHsgZ3JpZC1hcmVhOiAxIC8gMiAvIDMgLyAzOyB9ICBcXHJcXG4gICYgLm1lbnUtaXRlbTpudGgtY2hpbGQoZXZlbikgPiAuaW1nLWNvbnRhaW5lciB7IGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjsgfVxcclxcblxcclxcblxcclxcbiAgLyogTUVESUEgUVVFUklFUyAqL1xcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcXHJcXG4gICAgJiAubWVudS1pdGVtICAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxcclxcbiAgICAmIC5tZW51LWluZm8gICAgICB7IGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gMiAhaW1wb3J0YW50OyB9IC8qIGltcG9ydGFudCBpcyBhZGRlZCB0byBub3QgcmV3cml0ZSB0aGUgYWJvdmUgLm1lbnUtaXRlbXMgKi9cXHJcXG4gICAgJiAuaW1nLWNvbnRhaW5lciAgeyBncmlkLWFyZWE6IDIgLyAxIC8gMyAvIDMgIWltcG9ydGFudDsgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuLyogQ09OVEFDVFxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5jb250YWN0LWNvbnRhaW5lciB7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuICBcXHJcXG4gICYgLmNvbnRhY3QtaXRlbSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9QSU5LKTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1CT1JERVJfTElHSFQpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLyogJiBoMiB7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgNXJlbSArIDAuNXZ3LCA2cmVtKTtcXHJcXG4gIH0gKi9cXHJcXG4gIFxcclxcbiAgJiBzcGFuIHtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBET01VdGlscyB7XHJcbiAgc3RhdGljIGNyZWF0ZURpdihjbGFzc05hbWUpIHtcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gZGl2XHJcbiAgfVxyXG5cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCh0YWdOYW1lLCBjb250ZW50LCBjbGFzc05hbWUpIHtcclxuICAgIC8vIENyZWF0ZSBFbGVtZW50XHJcbiAgICBjb25zdCBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCh0YWdOYW1lKVxyXG4gICAgLy8gUG9wdWxhdGUgQ29udGVudFxyXG4gICAgZWxlbWVudC50ZXh0Q29udGVudCA9IGNvbnRlbnRcclxuICAgIC8vIEFkZCBjbGFzc05hbWVcclxuICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG4gIH1cclxuXHJcbiAgc3RhdGljIGNyZWF0ZUltYWdlKHNyYywgY2xhc3NOYW1lLCBhbHQpIHtcclxuICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpXHJcbiAgICBpbWcuc3JjID0gc3JjXHJcbiAgICBpbWcuYWx0ID0gYWx0XHJcbiAgICBpbWcuY2xhc3NMaXN0LmFkZChjbGFzc05hbWUpXHJcbiAgICByZXR1cm4gaW1nXHJcbiAgfVxyXG5cclxuXHJcbn0iLCJpbXBvcnQgRE9NVXRpbHMgZnJvbSAnLi9ET01VdGlscydcclxuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2ltZy9idXJnZXJfbGFyZ2Uud2VicCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFib3V0KCkge1xyXG4gIGNvbnNvbGUubG9nKCdBYm91dC5qcyB3b3JraW5nJylcclxuXHJcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb250ZW50JylcclxuICBjb25zdCBjb250YWluZXIgPSBET01VdGlscy5jcmVhdGVEaXYoJ2Fib3V0LWNvbnRhaW5lcicpXHJcbiAgY29uc3QgaW1nQ29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRGl2KCdpbWctY29udGFpbmVyJylcclxuICBcclxuICBjb25zdCBhYm91dFRpdGxlID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdoMicsICdIb21lIG9mIHRoZSBCYW1idXJnZXIhJywgJ2Fib3V0LXRpdGxlJylcclxuICBjb25zdCBhYm91dEltZyA9IERPTVV0aWxzLmNyZWF0ZUltYWdlKEJ1cmdlciwgJ2Fib3V0LWltZycsICdIYW1idXJnZXInKVxyXG4gIGNvbnN0IGFib3V0SW5mbyA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgncCcsXHJcbiAgYE5lc3RsZWQgb24gYSBjb3p5IGNvcm5lciBpbiB0aGUgaGVhcnQgb2YgZG93bnRvd24gRGV0cm9pdCwgQmFtYnVyZ2VycyBoYXMgYmVlbiBzZXJ2aW5nIHVwIGRlbGljaW91cywgbm8tZnJpbGxzIGJ1cmdlcnMgc2luY2UgMTk5MS4gU2VydmluZyBldmVyeW9uZSBpbmNsdWRpbmcgeW91cnNlbGYsIGxvY2FsIGxlZ2VuZHMsIGFuZCBhbGwgdGhlIHdheSB0byBCaWcgVGhyZWUgQ0VPcy4gU3RlcCB0aHJvdWdoIG91ciBkb29ycyBhbmQgeW91J2xsIGJlIHRyYW5zcG9ydGVkIGJhY2sgaW4gdGltZSB0byBhbiBlcmEgd2hlbiBidXJnZXJzIHJlaWduZWQgc3VwcmVtZSBhbmQgcXVhbGl0eSB3YXMgcGFyYW1vdW50LlxyXG4gIFxyXG4gIFdlJ3ZlIHN0YXllZCB0cnVlIHRvIG91ciBEZXRyb2l0IHJvb3RzLCBjcmFmdGluZyBldmVyeSBidXJnZXIgd2l0aCB0aGUgZnJlc2hlc3QsIGxvY2FsbHktc291cmNlZCBpbmdyZWRpZW50cyBhbmQgb3VyIHNpZ25hdHVyZSBcIkJhbS1TYXVjZVwiIHRoYXQgZm9sa3MgZ28gY3JhenkgZm9yLiBXaGF0J3MgdGhlIHNlY3JldCB0byBvdXIgbGVnZW5kYXJ5IGJ1cmdlcnM/IEl0IHN0YXJ0cyB3aXRoIHVzaW5nIG9ubHkgcHJlbWl1bSBncmFzcy1mZWQgYmVlZiB0aGF0IGdldHMgaGFuZC1wYXR0aWVkIGFuZCBncmlsbGVkIHRvIGp1aWN5IHBlcmZlY3Rpb24uIE91ciBidXJnZXIgYnVucyBhcmUgYmFrZWQgZnJlc2ggZGFpbHkgdXNpbmcgYSBkZWNhZGVzLW9sZCByZWNpcGUuIEFuZCB0aGVuIHRoZXJlJ3MgdGhlIHRvcHBpbmdzIC0gY3Jpc3AgbGV0dHVjZSwgcmlwZSB0b21hdG9lcywgemVzdHkgb25pb25zLCBhbmQgc2hhcnAgY2hlZGRhciBjaGVlc2VzIC0gYWxsIHNvdXJjZWQgZnJvbSBsb2NhbCBmYXJtcyBhbmQgcHVydmV5b3JzIHdlJ3ZlIGJ1aWx0IHJlbGF0aW9uc2hpcHMgd2l0aCBvdmVyIHRoZSB5ZWFycy5cclxuICBcclxuICBBcyBwcm91ZCBhcyB3ZSBhcmUgb2YgdGhlIGZvb2QsIEJhbWJ1cmdlcnMgaXMgbW9yZSB0aGFuIGp1c3QgZm9vZCAtIGl0J3MgYW4gZXhwZXJpZW5jZS4gVGhlIHJldHJvIGRpZ3MsIG5lb24gc2lnbnMsIGFuZCBjaGVja2VyYm9hcmQgZmxvb3JzIHdlbGNvbWUgYW55b25lIHdobyBpcyBodW5ncnkuIE91ciBzdGFmZiB3aWxsIHRyZWF0IHlvdSBsaWtlIGZhbWlseSBmcm9tIHRoZSBtb21lbnQgeW91IGJlbGx5IHVwIHRvIHRoZSBjb3VudGVyLiBBdCBCYW1idXJnZXJzLCB3ZSB0YWtlIHByaWRlIGluIGV2ZXJ5IGJ1cmdlciB3ZSBzZXJ2ZSBhbmQgZXZlcnkgY3VzdG9tZXIgd2Ugd2VsY29tZS4gSXQncyB3aGF0IGhhcyBtYWRlIHRoaXMgbGl0dGxlIGJ1cmdlciBqb2ludCBhIGZhdm9yaXRlIHRvIGV2ZXJ5b25lIHRoYXQgdmlzaXRzLmAsICdhYm91dC1pbmZvJ1xyXG4pXHJcblxyXG4gIGNvbnN0IHJldmlld0NvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZURpdigncmV2aWV3LWNvbnRhaW5lcicpXHJcbiAgY29uc3QgcmV2aWV3MSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgnc3BhbicsIGBCZXN0IG9mIERldHJvaXQhIFxcbiAtQnVyZ2VyU3BvdGAsICdhYm91dC1yZXZpZXcnKVxyXG4gIGNvbnN0IHJldmlldzIgPSBET01VdGlscy5jcmVhdGVFbGVtZW50V2l0aENvbnRlbnQoJ3NwYW4nLCBgQW1hemluZyBtaWxrc2hha2VzISBcXG4gLURFVFJldmlld2VyYCwgJ2Fib3V0LXJldmlldycpXHJcbiAgY29uc3QgcmV2aWV3MyA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgnc3BhbicsIGAxMS8xMCBcXG4gLU1vVG93biBGb29kYCwgJ2Fib3V0LXJldmlldycpXHJcbiAgY29uc3QgcmV2aWV3NCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgnc3BhbicsIGBSZXRybyBQYXJhZGlzZSBcXG4gLVJldmlldyBHaXJsYCwgJ2Fib3V0LXJldmlldycpXHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dFRpdGxlKVxyXG4gIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEluZm8pXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGltZ0NvbnRhaW5lcilcclxuICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQoYWJvdXRJbWcpXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKHJldmlld0NvbnRhaW5lcilcclxuICByZXZpZXdDb250YWluZXIuYXBwZW5kKHJldmlldzEsIHJldmlldzIsIHJldmlldzMsIHJldmlldzQpXHJcblxyXG4gIHJldHVybiBjb250YWluZXJcclxufSIsImltcG9ydCBET01VdGlscyBmcm9tICcuL0RPTVV0aWxzJ1xyXG5cclxuY29uc3QgY29udGFjdEFyciA9IFtcclxuICB7XHJcbiAgICB0aXRsZTogYFBIT05FICNgLFxyXG4gICAgY29udGFjdDogJzEtMjM0LTU2Ny04OTEwJ1xyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IGBFTUFJTGAsXHJcbiAgICBjb250YWN0OiBgYmFtQGJ1cmdlcnMuZWF0YFxyXG4gIH0sXHJcbiAge1xyXG4gICAgdGl0bGU6IGBMT0NBVElPTmAsXHJcbiAgICBjb250YWN0OiBgNTAwNSBCdXJnZXIgRHJpdmUsIERldHJvaXQsIE1JIDQ4MjAxYFxyXG4gIH1cclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29udGFjdCgpIHtcclxuICBjb25zb2xlLmxvZygnQ29udGFjdC5qcyB3b3JraW5nJylcclxuXHJcbiAgY29uc3QgY29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRGl2KCdjb250YWN0LWNvbnRhaW5lcicpXHJcblxyXG4gIGNvbnRhY3RBcnIuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgY29udGFjdEl0ZW0gPSBET01VdGlscy5jcmVhdGVEaXYoJ2NvbnRhY3QtaXRlbScpXHJcbiAgICBjb25zdCBjb250YWN0VGl0bGUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50V2l0aENvbnRlbnQoJ2gyJywgaXRlbS50aXRsZSwgJ2NvbnRhY3QtdGl0bGUnKVxyXG4gICAgY29uc3QgY29udGFjdE1ldGhvZCA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgnc3BhbicsIGl0ZW0uY29udGFjdCwgJ2NvbnRhY3QtcGhvbmUnKVxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjb250YWN0SXRlbSlcclxuICAgIGNvbnRhY3RJdGVtLmFwcGVuZChjb250YWN0VGl0bGUsIGNvbnRhY3RNZXRob2QpXHJcbiAgfSlcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcblxyXG4gIHJldHVybiBjb250YWluZXJcclxufSIsImltcG9ydCBET01VdGlscyBmcm9tICcuL0RPTVV0aWxzJ1xyXG5cclxuaW1wb3J0IEJ1cmdlciBmcm9tICcuL2ltZy9idXJnZXIud2VicCdcclxuaW1wb3J0IEZyaWVzIGZyb20gJy4vaW1nL2ZyaWVzLndlYnAnXHJcbmltcG9ydCBTaGFrZSBmcm9tICcuL2ltZy9zaGFrZS53ZWJwJ1xyXG5pbXBvcnQgVGVuZGVycyAgZnJvbSAnLi9pbWcvdGVuZGllcy53ZWJwJ1xyXG5cclxuY29uc3QgbWVudUl0ZW1zID0gW1xyXG4gIHtcclxuICAgIHNyYzogQnVyZ2VyLFxyXG4gICAgbmFtZTogYEJhbWJ1cmdlcmAsXHJcbiAgICBkZXNjcmlwdGlvbjogYEEgZGVsaWNpb3VzIGFuZCBqdWljeSBoYW1idXJnZXIgbWFkZSB3aXRoIGZyZXNoIGluZ3JlZGllbnRzIGFuZCBvdXIgdG9wIHNlY3JldCBCYW0tU2F1Y2UhYCxcclxuICAgIGluZ3JlZGllbnRzOiBgMTAwJSBCZWVmIFBhdHR5LCBIYW1idXJnZXIgQnVuLCBNYXlvbmFpc2UsIExldHR1Y2UsIE9uaW9uLCBUb21hdG8sIEtldGNodXAsIGFuZCBDaGVkZGFyIENoZWVzZWAsXHJcbiAgICBjYWxvcmllczogYDk0MCBDYWxvcmllc2BcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogRnJpZXMsXHJcbiAgICBuYW1lOiAnQmFtIEZyaWVzJyxcclxuICAgIGRlc2NyaXB0aW9uOiBgR29sZGVuIGFuZCBjcmlzcHkgZnJpZXMgbWFkZSBmcm9tIHRoZSBmaW5lc3QgbG9jYWxseSBzb3VyY2VkIHBvdGF0b2VzLmAsXHJcbiAgICBpbmdyZWRpZW50czogYFBvdGF0bywgQmxhY2sgUGVwcGVyYCxcclxuICAgIGNhbG9yaWVzOiBgMzIwIENhbG9yaWVzYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiBUZW5kZXJzLFxyXG4gICAgbmFtZTogYENoaWNreSBUZW5kZXJzYCxcclxuICAgIGRlc2NyaXB0aW9uOiBgSnVpY3kgYW5kIHRlbmRlciBjaGlja2VuIHRlbmRlcnMsIHBlcmZlY3RseSBicmVhZGVkIGFuZCBmcmllZCB0byBhIGdvbGRlbiBjcmlzcC5gLFxyXG4gICAgaW5ncmVkaWVudHM6IGBDaGlja2VuIEJyZWFzdCwgQnJlYWRpbmcgKEZsb3VyLCBFZ2dzLCBCcmVhZGNydW1icywgU3BpY2VzKWAsXHJcbiAgICBjYWxvcmllczogYDcyMCBDYWxvcmllc2BcclxuICB9LFxyXG4gIHtcclxuICAgIHNyYzogU2hha2UsXHJcbiAgICBuYW1lOiBgV2hhbS1CYW0gU2hha2VgLFxyXG4gICAgZGVzY3JpcHRpb246IGBUaGljayBhbmQgY3JlYW15IGNob2NvbGF0ZSBzaGFrZSBtYWRlIHdpdGggcHJlbWl1bSBpY2UgY3JlYW0gd2l0aCBjcnVuY2hlZCB1cCBiaXRzIG9mIGZyZXNobHkgYmFrZWQgY2hvY29sYXRlIGNoaXAgY29va2llcy5gLFxyXG4gICAgaW5ncmVkaWVudHM6IGBDaG9jb2xhdGUgSWNlIENyZWFtLCBNaWxrLCBDaG9jb2xhdGUgU3lydXAsIFdoaXBwZWQgQ3JlYW0sIGFuZCBhIENob2NvbGF0ZSBDb29raWVgLFxyXG4gICAgY2Fsb3JpZXM6IGAxMDgwIENhbG9yaWVzYFxyXG4gIH0sXHJcbl1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lbnUoKSB7XHJcbiAgY29uc29sZS5sb2coJ01lbnUuanMgd29ya2luZycpXHJcbiAgY29uc3QgY29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRGl2KCdtZW51LWNvbnRhaW5lcicpXHJcbiAgXHJcbiAgbWVudUl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcclxuICAgIGNvbnN0IG1lbnVJdGVtID0gRE9NVXRpbHMuY3JlYXRlRGl2KCdtZW51LWl0ZW0nKVxyXG4gICAgY29uc3QgaXRlbUluZm8gPSBET01VdGlscy5jcmVhdGVEaXYoJ21lbnUtaW5mbycpXHJcbiAgICBjb25zdCBpbWdDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVEaXYoJ2ltZy1jb250YWluZXInKVxyXG4gICAgY29uc3QgbWVudUltZyA9IERPTVV0aWxzLmNyZWF0ZUltYWdlKGl0ZW0uc3JjLCAnbWVudS1pbWcnLCBpdGVtLm5hbWUpXHJcblxyXG4gICAgY29uc3QgaXRlbU5hbWUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50V2l0aENvbnRlbnQoJ2gyJywgaXRlbS5uYW1lLCAnaXRlbS1uYW1lJylcclxuICAgIGNvbnN0IGl0ZW1EZXNjID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdwJywgaXRlbS5kZXNjcmlwdGlvbiwgJ2l0ZW0tZGVzY3JpcHRpb24nKVxyXG4gICAgY29uc3QgaXRlbUluZ3JlZGllbnRzID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdwJywgaXRlbS5pbmdyZWRpZW50cywgJ2l0ZW0taW5ncmVkaWVudHMnKVxyXG4gICAgY29uc3QgaXRlbUNhbG9yaWVzID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdzcGFuJywgaXRlbS5jYWxvcmllcywgJ2l0ZW0tY2Fsb3JpZXMnKVxyXG5cclxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SXRlbSlcclxuICAgIG1lbnVJdGVtLmFwcGVuZChpdGVtSW5mbywgaW1nQ29udGFpbmVyKVxyXG4gICAgaXRlbUluZm8uYXBwZW5kKGl0ZW1OYW1lLCBpdGVtRGVzYywgaXRlbUluZ3JlZGllbnRzLCBpdGVtQ2Fsb3JpZXMpXHJcbiAgICBpbWdDb250YWluZXIuYXBwZW5kQ2hpbGQobWVudUltZylcclxuICAgIFxyXG4gIH0pXHJcblxyXG5cclxuXHJcbiAgLy8gQmFzaWMgc3RydWN0dXJlXHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4gIC8vIHwgICAgICAgICAgICAgICAgICAgICAgICBkaXYgICAgICAgICAgICAgICAgICAgICAgIHxcclxuICAvLyB8ICAgICAgICAgICAgICAgICAgLS0gbWVudS1pdGVtIC0tICAgICAgICAgICAgICAgICB8XHJcbiAgLy8gfCAgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICAgfFxyXG4gIC8vIHwgIHwgICAgICAgIGRpdiAgICAgICAgfCAgICAgICAgICAgZGl2ICAgICAgICAgfCAgIHxcclxuICAvLyB8ICB8ICAtLSBtZW51LWluZm8gLS0gIHwgIC0tIGltZy1jb250YWluZXIgLS0gIHwgICB8XHJcbiAgLy8gfCAgfCAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgfFxyXG4gIC8vIHwgIHwgICAgICAgICAgICAgICAgICAgfCAgICAgICAgbWVudUltZyAgICAgICAgfCAgIHxcclxuICAvLyB8ICB8ICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICB8XHJcbiAgLy8gfCAgfCAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgfFxyXG4gIC8vIHwgIHwgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgfCAgIHxcclxuICAvLyB8ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICB8XHJcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lclxyXG59IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBhYm91dCBmcm9tICcuL2Fib3V0J1xyXG5pbXBvcnQgbWVudSBmcm9tICcuL21lbnUnXHJcbmltcG9ydCBjb250YWN0IGZyb20gJy4vY29udGFjdCdcclxuaW1wb3J0ICcuL3N0eWxlLmNzcydcclxuXHJcbmNvbnNvbGUubG9nKCdSVU5OSU5HISEnKVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRE9NIEVMRU1FTlRTXHJcblxyXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG5jb25zdCBuYXZJdGVtcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ25hdiA+IConKVxyXG5cclxuY29uc3QgYWJvdXRCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2QWJvdXQnKVxyXG5jb25zdCBtZW51QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdk1lbnUnKVxyXG5jb25zdCBjb250YWN0QnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hdkNvbnRhY3QnKVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRVZFTlQgTElTVEVORVJTXHJcblxyXG5hYm91dEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHJlbmRlclRhYihhYm91dCwgYWJvdXRCdG4pKVxyXG5tZW51QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFiKG1lbnUsIG1lbnVCdG4pKVxyXG5jb250YWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFiKGNvbnRhY3QsIGNvbnRhY3RCdG4pKVxyXG5cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuLy8gRlVOQ1RJT05TXHJcblxyXG5hYm91dCgpIC8vIERlZmF1bHQgcGFnZSBhbmQgVGFiIHNlbGVjdGVkXHJcbmFib3V0QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpIC8vIC0tXlxyXG5cclxuZnVuY3Rpb24gcmVuZGVyVGFiKHRhYkZ1bmN0aW9uLCBidG5DbGlja2VkKSB7IC8vIEdldCBjdXJyZW50IHRhYiBzZWxlY3RlZCAmIEhpZ2hsaWdodCBpdHMgY29ycmVzcG9uZGluZyBidXR0b25cclxuICByZW1vdmVBY3RpdmUoYnRuQ2xpY2tlZClcclxuICBidG5DbGlja2VkLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgY29udGVudC5yZXBsYWNlQ2hpbGRyZW4odGFiRnVuY3Rpb24oKSlcclxufVxyXG5cclxuZnVuY3Rpb24gcmVtb3ZlQWN0aXZlKGFjdGl2ZUJ0bikge1xyXG4gIG5hdkl0ZW1zLmZvckVhY2goKGJ0bikgPT4ge1xyXG4gICAgaWYoYnRuICE9PSBhY3RpdmVCdG4pIHtcclxuICAgICAgYnRuLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKVxyXG4gICAgfVxyXG4gIH0pXHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9