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
  font-size: clamp(4rem, 1rem + 8vw, 12rem);
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
  grid-template-rows: repeat(4, auto);
  gap: 30px;
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
        font-size: 5rem;
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

  @media screen and (max-width: 900px) {
    & .item-name { font-size: 4.4rem !important; }
  }

  @media screen and (max-width: 850px) {
    & .menu-item      { grid-template-columns: 1fr; }
    & .menu-info      { grid-area: 1 / 1 / 2 / 2 !important; } /* important is added to not rewrite the above .menu-items */
    & .img-container  { grid-area: 2 / 1 / 3 / 2 !important; }
  }

  @media screen and (max-width: 450px) {
    & .item-name { font-size: 4rem !important;}
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
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":[":root {\r\n  font-size: 62.5%;\r\n\r\n  /* Main colors */\r\n  --BG_COLOR: rgb(236, 216, 228);\r\n  --BAM_RED: rgb(180, 40, 40);\r\n  --BAM_PINK: rgba(255, 0, 0, 0.1);\r\n  --BORDER_LIGHT: 1px solid rgba(0, 0, 0, 0.2);\r\n\r\n  /* Text */\r\n  --TEXT_SHADOW: 1px 1px 1px black;\r\n}\r\n\r\n/******************************************\r\n/* BASE STYLES\r\n/*******************************************/\r\n\r\n* {\r\n  margin: 0;\r\n  padding: 0;\r\n  border: 0;\r\n  list-style: none;\r\n  outline: none;\r\n  box-sizing: border-box;\r\n  line-height: 1.5;\r\n  font-size: 1.6rem; /* Set default back to 16px for fallback */\r\n}\r\n\r\nbody {\r\n  background-color: var(--BG_COLOR);\r\n}\r\n\r\n/******************************************\r\n/* TEXT\r\n/*******************************************/\r\n\r\n@font-face {\r\n  font-family: 'Rampart';\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  src: url(./font/RampartOne-Regular.ttf);\r\n}\r\n\r\n@font-face {\r\n  font-family: 'BalooBhai';\r\n  font-weight: 400;\r\n  font-style: normal;\r\n  src: url(./font/BalooBhai2.ttf);\r\n}\r\n\r\nh1 {\r\n  text-align: center;\r\n  line-height: 1.2;\r\n  font-family: 'Rampart';\r\n  font-size: clamp(4rem, 1rem + 8vw, 12rem);\r\n  color: var(--BAM_RED);\r\n  text-shadow: var(--TEXT_SHADOW);\r\n  user-select: none;\r\n}\r\n\r\nh2 {\r\n  font-family: 'Rampart';\r\n  font-size: clamp(4.4rem, 5vw, 6rem);\r\n  transform: rotate(-2deg);\r\n  color: var(--BAM_RED);\r\n  text-shadow: var(--TEXT_SHADOW);\r\n  text-align: center;\r\n  user-select: none;\r\n}\r\n\r\np {\r\n  font-size: 2.6rem;\r\n  padding: 0 20px;\r\n}\r\n\r\n\r\n/******************************************\r\n/* HEADER\r\n/*******************************************/\r\n\r\nnav {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  padding-top: 20px;\r\n  margin: 0 4px;\r\n\r\n  & button {\r\n    width: 33%;\r\n    background-color: white;\r\n    font-size: clamp(3rem, 1rem + 3vw, 4.6rem);\r\n    font-family: 'BalooBhai';\r\n    font-weight: 600;\r\n    border-radius: 3px;\r\n    border: var(--BORDER_LIGHT);\r\n    transition: all 600ms;\r\n  }\r\n\r\n  & button:hover {\r\n    background-color: var(--BAM_RED);\r\n    color: white;\r\n  }\r\n\r\n  & .active {\r\n    background-color: var(--BAM_RED);\r\n    color: white;\r\n    border-bottom: 5px solid black;\r\n    margin-bottom: -5px;\r\n  }\r\n}\r\n\r\n/******************************************\r\n/* CONTENT\r\n/*******************************************/\r\n\r\n\r\n#content {\r\n  display: flex;\r\n  justify-content: center; /* justify and align centers for smaller screens */\r\n  align-items: center;\r\n  max-width: 1400px;\r\n  margin: 40px auto;\r\n  font-family: 'BalooBhai';\r\n  white-space: pre-line; /* Make sure linebreaks work! */\r\n\r\n  & > div { /* every container inside content */\r\n    width: 94vw;\r\n    border-radius: 4px;\r\n    display: grid;\r\n  }\r\n}\r\n\r\n.img-container {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* adjust grid area in individual components */\r\n\r\n  & img {\r\n    max-width: 100%;\r\n    max-height: 100%;\r\n    object-fit: contain;\r\n  }\r\n}\r\n\r\n\r\n\r\n/******************************************\r\n/* ABOUT\r\n/*******************************************/\r\n\r\n.about-container {\r\n  background-color: var(--BAM_PINK);\r\n  grid-template-columns: repeat(4, 1fr);\r\n  grid-template-rows: repeat(4, auto);\r\n  gap: 30px;\r\n  border: var(--BORDER_LIGHT);\r\n\r\n  & .about-title { /* h2 */\r\n    grid-area: 1 / 1 / 2 / 5;\r\n    padding-top: 10px;\r\n    height: 50%;\r\n  }\r\n\r\n  & .about-info {\r\n    grid-area: 2 / 1 / 3 / 5;\r\n    padding: 0 20px;\r\n  }\r\n\r\n  & .img-container {\r\n    grid-area: 3 / 2 / 4 / 4;\r\n  }\r\n\r\n  & .review-container {\r\n    grid-area: 4 / 1 / 5 / 5;\r\n    display: flex;\r\n    justify-content: space-evenly;\r\n    align-items: center;\r\n    flex-wrap: wrap;\r\n    padding: 20px 0;\r\n    border-top: var(--BORDER_LIGHT);\r\n\r\n    & > .about-review {\r\n      font-size: 3rem;\r\n      text-align: center;      \r\n    }\r\n  }\r\n\r\n\r\n  /* MEDIA QUERIES */\r\n  @media screen and (max-width: 900px) {\r\n    & .about-review { width: 50%; padding-top: 30px;}\r\n  }\r\n  \r\n  @media screen and (max-width: 700px) {\r\n    & .about-info       { grid-area: 2 / 1 / 3 / 5; }\r\n    & .img-container    { grid-area: 3 / 1 / 4 / 5; }\r\n    & .about-review     { width: 100%; }\r\n  }\r\n}\r\n\r\n/******************************************\r\n/* MENU\r\n/*******************************************/\r\n\r\n.menu-container {\r\n  gap: 40px;\r\n\r\n  & .menu-item {\r\n    display: grid;\r\n    grid-template-columns: auto auto;\r\n    grid-template-rows: auto auto;\r\n    background-color: var(--BAM_PINK);\r\n    border: var(--BORDER_LIGHT);\r\n\r\n    & > div {\r\n      padding: 20px;\r\n    }\r\n  }\r\n\r\n  & .menu-info {\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    & .item-name { /* h2 */\r\n        font-size: 5rem;\r\n        transform: rotate(-3deg);\r\n    }\r\n\r\n    & p {\r\n      padding-top: 20px;\r\n    }\r\n\r\n    & .item-ingredients {\r\n      border-top: var(--BORDER_LIGHT);\r\n      font-size: 2rem;\r\n      text-align: right;\r\n      opacity: 0.6;\r\n    }\r\n\r\n    & .item-calories {\r\n      font-size: 2rem;\r\n      text-align: right;\r\n      padding-top: 10px;\r\n      color: var(--BAM_RED);\r\n    }\r\n  }\r\n\r\n  \r\n  /* EVERY OTHER DIV WILL HAVE THE INFO AND IMAGES POSITION SWAPPED */\r\n  /* INFO LEFT - IMAGE RIGHT */\r\n  & .menu-info      { grid-area: 1 / 1 / 3 / 2; }\r\n  & .img-container  { grid-area: 1 / 2 / 3 / 3; }\r\n\r\n  /* IMAGE LEFT - INFO RIGHT */\r\n  & .menu-item:nth-child(even) > .menu-info     { grid-area: 1 / 2 / 3 / 3; }  \r\n  & .menu-item:nth-child(even) > .img-container { grid-area: 1 / 1 / 3 / 2; }\r\n\r\n\r\n  /* MEDIA QUERIES */\r\n\r\n  @media screen and (max-width: 900px) {\r\n    & .item-name { font-size: 4.4rem !important; }\r\n  }\r\n\r\n  @media screen and (max-width: 850px) {\r\n    & .menu-item      { grid-template-columns: 1fr; }\r\n    & .menu-info      { grid-area: 1 / 1 / 2 / 2 !important; } /* important is added to not rewrite the above .menu-items */\r\n    & .img-container  { grid-area: 2 / 1 / 3 / 2 !important; }\r\n  }\r\n\r\n  @media screen and (max-width: 450px) {\r\n    & .item-name { font-size: 4rem !important;}\r\n  }\r\n}\r\n\r\n/******************************************\r\n/* CONTACT\r\n/*******************************************/\r\n\r\n.contact-container {\r\n  gap: 20px;\r\n  \r\n  & .contact-item {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: var(--BAM_PINK);\r\n    border: var(--BORDER_LIGHT);\r\n  }\r\n\r\n  /* & h2 {\r\n    font-size: clamp(3rem, 5rem + 0.5vw, 6rem);\r\n  } */\r\n  \r\n  & span {\r\n    padding: 10px 0;\r\n    font-size: 2.4rem;\r\n    text-align: center;\r\n  }\r\n}"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7QUNBMkI7QUFDRjtBQUNNO0FBQ1g7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELDhDQUFLO0FBQ3hELGtEQUFrRCw2Q0FBSTtBQUN0RCxxREFBcUQsZ0RBQU87QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1EQUFLO0FBQ0w7QUFDQTtBQUNBLDhDQUE4QztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9ET01VdGlscy5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvYWJvdXQuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbnRhY3QuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udC9SYW1wYXJ0T25lLVJlZ3VsYXIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiLi9mb250L0JhbG9vQmhhaTIudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgOnJvb3Qge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7XHJcblxyXG4gIC8qIE1haW4gY29sb3JzICovXHJcbiAgLS1CR19DT0xPUjogcmdiKDIzNiwgMjE2LCAyMjgpO1xyXG4gIC0tQkFNX1JFRDogcmdiKDE4MCwgNDAsIDQwKTtcclxuICAtLUJBTV9QSU5LOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcclxuICAtLUJPUkRFUl9MSUdIVDogMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yKTtcclxuXHJcbiAgLyogVGV4dCAqL1xyXG4gIC0tVEVYVF9TSEFET1c6IDFweCAxcHggMXB4IGJsYWNrO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIEJBU0UgU1RZTEVTXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuKiB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgYm9yZGVyOiAwO1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbiAgZm9udC1zaXplOiAxLjZyZW07IC8qIFNldCBkZWZhdWx0IGJhY2sgdG8gMTZweCBmb3IgZmFsbGJhY2sgKi9cclxufVxyXG5cclxuYm9keSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkdfQ09MT1IpO1xyXG59XHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIFRFWFRcclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ1JhbXBhcnQnO1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0JhbG9vQmhhaSc7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XHJcbn1cclxuXHJcbmgxIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICBmb250LWZhbWlseTogJ1JhbXBhcnQnO1xyXG4gIGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgMXJlbSArIDh2dywgMTJyZW0pO1xyXG4gIGNvbG9yOiB2YXIoLS1CQU1fUkVEKTtcclxuICB0ZXh0LXNoYWRvdzogdmFyKC0tVEVYVF9TSEFET1cpO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6ICdSYW1wYXJ0JztcclxuICBmb250LXNpemU6IGNsYW1wKDQuNHJlbSwgNXZ3LCA2cmVtKTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XHJcbiAgY29sb3I6IHZhcigtLUJBTV9SRUQpO1xyXG4gIHRleHQtc2hhZG93OiB2YXIoLS1URVhUX1NIQURPVyk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG59XHJcblxyXG5wIHtcclxuICBmb250LXNpemU6IDIuNnJlbTtcclxuICBwYWRkaW5nOiAwIDIwcHg7XHJcbn1cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIEhFQURFUlxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbm5hdiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDRweDtcclxuXHJcbiAgJiBidXR0b24ge1xyXG4gICAgd2lkdGg6IDMzJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCAxcmVtICsgM3Z3LCA0LjZyZW0pO1xyXG4gICAgZm9udC1mYW1pbHk6ICdCYWxvb0JoYWknO1xyXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJvcmRlcjogdmFyKC0tQk9SREVSX0xJR0hUKTtcclxuICAgIHRyYW5zaXRpb246IGFsbCA2MDBtcztcclxuICB9XHJcblxyXG4gICYgYnV0dG9uOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9SRUQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgJiAuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9SRUQpO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLyogQ09OVEVOVFxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcblxyXG4jY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyoganVzdGlmeSBhbmQgYWxpZ24gY2VudGVycyBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtYXgtd2lkdGg6IDE0MDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICBmb250LWZhbWlseTogJ0JhbG9vQmhhaSc7XHJcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lOyAvKiBNYWtlIHN1cmUgbGluZWJyZWFrcyB3b3JrISAqL1xyXG5cclxuICAmID4gZGl2IHsgLyogZXZlcnkgY29udGFpbmVyIGluc2lkZSBjb250ZW50ICovXHJcbiAgICB3aWR0aDogOTR2dztcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgfVxyXG59XHJcblxyXG4uaW1nLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIC8qIGFkanVzdCBncmlkIGFyZWEgaW4gaW5kaXZpZHVhbCBjb21wb25lbnRzICovXHJcblxyXG4gICYgaW1nIHtcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgIG1heC1oZWlnaHQ6IDEwMCU7XHJcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXHJcbi8qIEFCT1VUXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmFib3V0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkFNX1BJTkspO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIDFmcik7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XHJcbiAgZ2FwOiAzMHB4O1xyXG4gIGJvcmRlcjogdmFyKC0tQk9SREVSX0xJR0hUKTtcclxuXHJcbiAgJiAuYWJvdXQtdGl0bGUgeyAvKiBoMiAqL1xyXG4gICAgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyA1O1xyXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgICBoZWlnaHQ6IDUwJTtcclxuICB9XHJcblxyXG4gICYgLmFib3V0LWluZm8ge1xyXG4gICAgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA1O1xyXG4gICAgcGFkZGluZzogMCAyMHB4O1xyXG4gIH1cclxuXHJcbiAgJiAuaW1nLWNvbnRhaW5lciB7XHJcbiAgICBncmlkLWFyZWE6IDMgLyAyIC8gNCAvIDQ7XHJcbiAgfVxyXG5cclxuICAmIC5yZXZpZXctY29udGFpbmVyIHtcclxuICAgIGdyaWQtYXJlYTogNCAvIDEgLyA1IC8gNTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICBib3JkZXItdG9wOiB2YXIoLS1CT1JERVJfTElHSFQpO1xyXG5cclxuICAgICYgPiAuYWJvdXQtcmV2aWV3IHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuXHJcbiAgLyogTUVESUEgUVVFUklFUyAqL1xyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAmIC5hYm91dC1yZXZpZXcgeyB3aWR0aDogNTAlOyBwYWRkaW5nLXRvcDogMzBweDt9XHJcbiAgfVxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgICAmIC5hYm91dC1pbmZvICAgICAgIHsgZ3JpZC1hcmVhOiAyIC8gMSAvIDMgLyA1OyB9XHJcbiAgICAmIC5pbWctY29udGFpbmVyICAgIHsgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyA1OyB9XHJcbiAgICAmIC5hYm91dC1yZXZpZXcgICAgIHsgd2lkdGg6IDEwMCU7IH1cclxuICB9XHJcbn1cclxuXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuLyogTUVOVVxyXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cclxuXHJcbi5tZW51LWNvbnRhaW5lciB7XHJcbiAgZ2FwOiA0MHB4O1xyXG5cclxuICAmIC5tZW51LWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQU1fUElOSyk7XHJcbiAgICBib3JkZXI6IHZhcigtLUJPUkRFUl9MSUdIVCk7XHJcblxyXG4gICAgJiA+IGRpdiB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmIC5tZW51LWluZm8ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcblxyXG4gICAgJiAuaXRlbS1uYW1lIHsgLyogaDIgKi9cclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xyXG4gICAgfVxyXG5cclxuICAgICYgcCB7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgLml0ZW0taW5ncmVkaWVudHMge1xyXG4gICAgICBib3JkZXItdG9wOiB2YXIoLS1CT1JERVJfTElHSFQpO1xyXG4gICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBvcGFjaXR5OiAwLjY7XHJcbiAgICB9XHJcblxyXG4gICAgJiAuaXRlbS1jYWxvcmllcyB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICBjb2xvcjogdmFyKC0tQkFNX1JFRCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBcclxuICAvKiBFVkVSWSBPVEhFUiBESVYgV0lMTCBIQVZFIFRIRSBJTkZPIEFORCBJTUFHRVMgUE9TSVRJT04gU1dBUFBFRCAqL1xyXG4gIC8qIElORk8gTEVGVCAtIElNQUdFIFJJR0hUICovXHJcbiAgJiAubWVudS1pbmZvICAgICAgeyBncmlkLWFyZWE6IDEgLyAxIC8gMyAvIDI7IH1cclxuICAmIC5pbWctY29udGFpbmVyICB7IGdyaWQtYXJlYTogMSAvIDIgLyAzIC8gMzsgfVxyXG5cclxuICAvKiBJTUFHRSBMRUZUIC0gSU5GTyBSSUdIVCAqL1xyXG4gICYgLm1lbnUtaXRlbTpudGgtY2hpbGQoZXZlbikgPiAubWVudS1pbmZvICAgICB7IGdyaWQtYXJlYTogMSAvIDIgLyAzIC8gMzsgfSAgXHJcbiAgJiAubWVudS1pdGVtOm50aC1jaGlsZChldmVuKSA+IC5pbWctY29udGFpbmVyIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyOyB9XHJcblxyXG5cclxuICAvKiBNRURJQSBRVUVSSUVTICovXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XHJcbiAgICAmIC5pdGVtLW5hbWUgeyBmb250LXNpemU6IDQuNHJlbSAhaW1wb3J0YW50OyB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgJiAubWVudS1pdGVtICAgICAgeyBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgfVxyXG4gICAgJiAubWVudS1pbmZvICAgICAgeyBncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDIgIWltcG9ydGFudDsgfSAvKiBpbXBvcnRhbnQgaXMgYWRkZWQgdG8gbm90IHJld3JpdGUgdGhlIGFib3ZlIC5tZW51LWl0ZW1zICovXHJcbiAgICAmIC5pbWctY29udGFpbmVyICB7IGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMiAhaW1wb3J0YW50OyB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xyXG4gICAgJiAuaXRlbS1uYW1lIHsgZm9udC1zaXplOiA0cmVtICFpbXBvcnRhbnQ7fVxyXG4gIH1cclxufVxyXG5cclxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG4vKiBDT05UQUNUXHJcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xyXG5cclxuLmNvbnRhY3QtY29udGFpbmVyIHtcclxuICBnYXA6IDIwcHg7XHJcbiAgXHJcbiAgJiAuY29udGFjdC1pdGVtIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkFNX1BJTkspO1xyXG4gICAgYm9yZGVyOiB2YXIoLS1CT1JERVJfTElHSFQpO1xyXG4gIH1cclxuXHJcbiAgLyogJiBoMiB7XHJcbiAgICBmb250LXNpemU6IGNsYW1wKDNyZW0sIDVyZW0gKyAwLjV2dywgNnJlbSk7XHJcbiAgfSAqL1xyXG4gIFxyXG4gICYgc3BhbiB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBmb250LXNpemU6IDIuNHJlbTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291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RSxTQUFTOztFQUVUO0lBQ0UsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyw2QkFBNkI7SUFDN0IsaUNBQWlDO0lBQ2pDLDJCQUEyQjs7SUFFM0I7TUFDRSxhQUFhO0lBQ2Y7RUFDRjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7O0lBRXRCLGVBQWUsT0FBTztRQUNsQixlQUFlO1FBQ2Ysd0JBQXdCO0lBQzVCOztJQUVBO01BQ0UsaUJBQWlCO0lBQ25COztJQUVBO01BQ0UsK0JBQStCO01BQy9CLGVBQWU7TUFDZixpQkFBaUI7TUFDakIsWUFBWTtJQUNkOztJQUVBO01BQ0UsZUFBZTtNQUNmLGlCQUFpQjtNQUNqQixpQkFBaUI7TUFDakIscUJBQXFCO0lBQ3ZCO0VBQ0Y7OztFQUdBLG1FQUFtRTtFQUNuRSw0QkFBNEI7RUFDNUIsb0JBQW9CLHdCQUF3QixFQUFFO0VBQzlDLG9CQUFvQix3QkFBd0IsRUFBRTs7RUFFOUMsNEJBQTRCO0VBQzVCLGdEQUFnRCx3QkFBd0IsRUFBRTtFQUMxRSxnREFBZ0Qsd0JBQXdCLEVBQUU7OztFQUcxRSxrQkFBa0I7O0VBRWxCO0lBQ0UsZUFBZSw0QkFBNEIsRUFBRTtFQUMvQzs7RUFFQTtJQUNFLG9CQUFvQiwwQkFBMEIsRUFBRTtJQUNoRCxvQkFBb0IsbUNBQW1DLEVBQUUsRUFBRSw0REFBNEQ7SUFDdkgsb0JBQW9CLG1DQUFtQyxFQUFFO0VBQzNEOztFQUVBO0lBQ0UsZUFBZSwwQkFBMEIsQ0FBQztFQUM1QztBQUNGOztBQUVBOzs0Q0FFNEM7O0FBRTVDO0VBQ0UsU0FBUzs7RUFFVDtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsaUNBQWlDO0lBQ2pDLDJCQUEyQjtFQUM3Qjs7RUFFQTs7S0FFRzs7RUFFSDtJQUNFLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsa0JBQWtCO0VBQ3BCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiOnJvb3Qge1xcclxcbiAgZm9udC1zaXplOiA2Mi41JTtcXHJcXG5cXHJcXG4gIC8qIE1haW4gY29sb3JzICovXFxyXFxuICAtLUJHX0NPTE9SOiByZ2IoMjM2LCAyMTYsIDIyOCk7XFxyXFxuICAtLUJBTV9SRUQ6IHJnYigxODAsIDQwLCA0MCk7XFxyXFxuICAtLUJBTV9QSU5LOiByZ2JhKDI1NSwgMCwgMCwgMC4xKTtcXHJcXG4gIC0tQk9SREVSX0xJR0hUOiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIpO1xcclxcblxcclxcbiAgLyogVGV4dCAqL1xcclxcbiAgLS1URVhUX1NIQURPVzogMXB4IDFweCAxcHggYmxhY2s7XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG4vKiBCQVNFIFNUWUxFU1xcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbioge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIGJvcmRlcjogMDtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XFxyXFxuICBmb250LXNpemU6IDEuNnJlbTsgLyogU2V0IGRlZmF1bHQgYmFjayB0byAxNnB4IGZvciBmYWxsYmFjayAqL1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJHX0NPTE9SKTtcXHJcXG59XFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8qIFRFWFRcXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUmFtcGFydCc7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbiAgc3JjOiB1cmwoLi9mb250L1JhbXBhcnRPbmUtUmVndWxhci50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5AZm9udC1mYWNlIHtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmFsb29CaGFpJztcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBzcmM6IHVybCguL2ZvbnQvQmFsb29CaGFpMi50dGYpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgZm9udC1mYW1pbHk6ICdSYW1wYXJ0JztcXHJcXG4gIGZvbnQtc2l6ZTogY2xhbXAoNHJlbSwgMXJlbSArIDh2dywgMTJyZW0pO1xcclxcbiAgY29sb3I6IHZhcigtLUJBTV9SRUQpO1xcclxcbiAgdGV4dC1zaGFkb3c6IHZhcigtLVRFWFRfU0hBRE9XKTtcXHJcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oMiB7XFxyXFxuICBmb250LWZhbWlseTogJ1JhbXBhcnQnO1xcclxcbiAgZm9udC1zaXplOiBjbGFtcCg0LjRyZW0sIDV2dywgNnJlbSk7XFxyXFxuICB0cmFuc2Zvcm06IHJvdGF0ZSgtMmRlZyk7XFxyXFxuICBjb2xvcjogdmFyKC0tQkFNX1JFRCk7XFxyXFxuICB0ZXh0LXNoYWRvdzogdmFyKC0tVEVYVF9TSEFET1cpO1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgZm9udC1zaXplOiAyLjZyZW07XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG4vKiBIRUFERVJcXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cXHJcXG5cXHJcXG5uYXYge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDRweDtcXHJcXG5cXHJcXG4gICYgYnV0dG9uIHtcXHJcXG4gICAgd2lkdGg6IDMzJTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxyXFxuICAgIGZvbnQtc2l6ZTogY2xhbXAoM3JlbSwgMXJlbSArIDN2dywgNC42cmVtKTtcXHJcXG4gICAgZm9udC1mYW1pbHk6ICdCYWxvb0JoYWknO1xcclxcbiAgICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxyXFxuICAgIGJvcmRlcjogdmFyKC0tQk9SREVSX0xJR0hUKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDYwMG1zO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBidXR0b246aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQU1fUkVEKTtcXHJcXG4gICAgY29sb3I6IHdoaXRlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuYWN0aXZlIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkFNX1JFRCk7XFxyXFxuICAgIGNvbG9yOiB3aGl0ZTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkIGJsYWNrO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAtNXB4O1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuLyogQ09OVEVOVFxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcblxcclxcbiNjb250ZW50IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgLyoganVzdGlmeSBhbmQgYWxpZ24gY2VudGVycyBmb3Igc21hbGxlciBzY3JlZW5zICovXFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XFxyXFxuICBtYXJnaW46IDQwcHggYXV0bztcXHJcXG4gIGZvbnQtZmFtaWx5OiAnQmFsb29CaGFpJztcXHJcXG4gIHdoaXRlLXNwYWNlOiBwcmUtbGluZTsgLyogTWFrZSBzdXJlIGxpbmVicmVha3Mgd29yayEgKi9cXHJcXG5cXHJcXG4gICYgPiBkaXYgeyAvKiBldmVyeSBjb250YWluZXIgaW5zaWRlIGNvbnRlbnQgKi9cXHJcXG4gICAgd2lkdGg6IDk0dnc7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmltZy1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIC8qIGFkanVzdCBncmlkIGFyZWEgaW4gaW5kaXZpZHVhbCBjb21wb25lbnRzICovXFxyXFxuXFxyXFxuICAmIGltZyB7XFxyXFxuICAgIG1heC13aWR0aDogMTAwJTtcXHJcXG4gICAgbWF4LWhlaWdodDogMTAwJTtcXHJcXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxcclxcbi8qIEFCT1VUXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLmFib3V0LWNvbnRhaW5lciB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1CQU1fUElOSyk7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgYXV0byk7XFxyXFxuICBnYXA6IDMwcHg7XFxyXFxuICBib3JkZXI6IHZhcigtLUJPUkRFUl9MSUdIVCk7XFxyXFxuXFxyXFxuICAmIC5hYm91dC10aXRsZSB7IC8qIGgyICovXFxyXFxuICAgIGdyaWQtYXJlYTogMSAvIDEgLyAyIC8gNTtcXHJcXG4gICAgcGFkZGluZy10b3A6IDEwcHg7XFxyXFxuICAgIGhlaWdodDogNTAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuYWJvdXQtaW5mbyB7XFxyXFxuICAgIGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gNTtcXHJcXG4gICAgcGFkZGluZzogMCAyMHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuaW1nLWNvbnRhaW5lciB7XFxyXFxuICAgIGdyaWQtYXJlYTogMyAvIDIgLyA0IC8gNDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLnJldmlldy1jb250YWluZXIge1xcclxcbiAgICBncmlkLWFyZWE6IDQgLyAxIC8gNSAvIDU7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICAgIHBhZGRpbmc6IDIwcHggMDtcXHJcXG4gICAgYm9yZGVyLXRvcDogdmFyKC0tQk9SREVSX0xJR0hUKTtcXHJcXG5cXHJcXG4gICAgJiA+IC5hYm91dC1yZXZpZXcge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogM3JlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7ICAgICAgXFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIC8qIE1FRElBIFFVRVJJRVMgKi9cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XFxyXFxuICAgICYgLmFib3V0LXJldmlldyB7IHdpZHRoOiA1MCU7IHBhZGRpbmctdG9wOiAzMHB4O31cXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzAwcHgpIHtcXHJcXG4gICAgJiAuYWJvdXQtaW5mbyAgICAgICB7IGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gNTsgfVxcclxcbiAgICAmIC5pbWctY29udGFpbmVyICAgIHsgZ3JpZC1hcmVhOiAzIC8gMSAvIDQgLyA1OyB9XFxyXFxuICAgICYgLmFib3V0LXJldmlldyAgICAgeyB3aWR0aDogMTAwJTsgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXFxyXFxuLyogTUVOVVxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xcclxcblxcclxcbi5tZW51LWNvbnRhaW5lciB7XFxyXFxuICBnYXA6IDQwcHg7XFxyXFxuXFxyXFxuICAmIC5tZW51LWl0ZW0ge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBhdXRvIGF1dG87XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUJBTV9QSU5LKTtcXHJcXG4gICAgYm9yZGVyOiB2YXIoLS1CT1JERVJfTElHSFQpO1xcclxcblxcclxcbiAgICAmID4gZGl2IHtcXHJcXG4gICAgICBwYWRkaW5nOiAyMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5tZW51LWluZm8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcblxcclxcbiAgICAmIC5pdGVtLW5hbWUgeyAvKiBoMiAqL1xcclxcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xcclxcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTNkZWcpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgcCB7XFxyXFxuICAgICAgcGFkZGluZy10b3A6IDIwcHg7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgJiAuaXRlbS1pbmdyZWRpZW50cyB7XFxyXFxuICAgICAgYm9yZGVyLXRvcDogdmFyKC0tQk9SREVSX0xJR0hUKTtcXHJcXG4gICAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgICAgb3BhY2l0eTogMC42O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgLml0ZW0tY2Fsb3JpZXMge1xcclxcbiAgICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgICBwYWRkaW5nLXRvcDogMTBweDtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tQkFNX1JFRCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIFxcclxcbiAgLyogRVZFUlkgT1RIRVIgRElWIFdJTEwgSEFWRSBUSEUgSU5GTyBBTkQgSU1BR0VTIFBPU0lUSU9OIFNXQVBQRUQgKi9cXHJcXG4gIC8qIElORk8gTEVGVCAtIElNQUdFIFJJR0hUICovXFxyXFxuICAmIC5tZW51LWluZm8gICAgICB7IGdyaWQtYXJlYTogMSAvIDEgLyAzIC8gMjsgfVxcclxcbiAgJiAuaW1nLWNvbnRhaW5lciAgeyBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7IH1cXHJcXG5cXHJcXG4gIC8qIElNQUdFIExFRlQgLSBJTkZPIFJJR0hUICovXFxyXFxuICAmIC5tZW51LWl0ZW06bnRoLWNoaWxkKGV2ZW4pID4gLm1lbnUtaW5mbyAgICAgeyBncmlkLWFyZWE6IDEgLyAyIC8gMyAvIDM7IH0gIFxcclxcbiAgJiAubWVudS1pdGVtOm50aC1jaGlsZChldmVuKSA+IC5pbWctY29udGFpbmVyIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDMgLyAyOyB9XFxyXFxuXFxyXFxuXFxyXFxuICAvKiBNRURJQSBRVUVSSUVTICovXFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xcclxcbiAgICAmIC5pdGVtLW5hbWUgeyBmb250LXNpemU6IDQuNHJlbSAhaW1wb3J0YW50OyB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcclxcbiAgICAmIC5tZW51LWl0ZW0gICAgICB7IGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyB9XFxyXFxuICAgICYgLm1lbnUtaW5mbyAgICAgIHsgZ3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyICFpbXBvcnRhbnQ7IH0gLyogaW1wb3J0YW50IGlzIGFkZGVkIHRvIG5vdCByZXdyaXRlIHRoZSBhYm92ZSAubWVudS1pdGVtcyAqL1xcclxcbiAgICAmIC5pbWctY29udGFpbmVyICB7IGdyaWQtYXJlYTogMiAvIDEgLyAzIC8gMiAhaW1wb3J0YW50OyB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcclxcbiAgICAmIC5pdGVtLW5hbWUgeyBmb250LXNpemU6IDRyZW0gIWltcG9ydGFudDt9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcXHJcXG4vKiBDT05UQUNUXFxyXFxuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXFxyXFxuXFxyXFxuLmNvbnRhY3QtY29udGFpbmVyIHtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG4gIFxcclxcbiAgJiAuY29udGFjdC1pdGVtIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQkFNX1BJTkspO1xcclxcbiAgICBib3JkZXI6IHZhcigtLUJPUkRFUl9MSUdIVCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiAmIGgyIHtcXHJcXG4gICAgZm9udC1zaXplOiBjbGFtcCgzcmVtLCA1cmVtICsgMC41dncsIDZyZW0pO1xcclxcbiAgfSAqL1xcclxcbiAgXFxyXFxuICAmIHNwYW4ge1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIERPTVV0aWxzIHtcclxuICBzdGF0aWMgY3JlYXRlRGl2KGNsYXNzTmFtZSkge1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcblxyXG5cclxuICBzdGF0aWMgY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KHRhZ05hbWUsIGNvbnRlbnQsIGNsYXNzTmFtZSkge1xyXG4gICAgLy8gQ3JlYXRlIEVsZW1lbnRcclxuICAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHRhZ05hbWUpXHJcbiAgICAvLyBQb3B1bGF0ZSBDb250ZW50XHJcbiAgICBlbGVtZW50LnRleHRDb250ZW50ID0gY29udGVudFxyXG4gICAgLy8gQWRkIGNsYXNzTmFtZVxyXG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIHJldHVybiBlbGVtZW50XHJcbiAgfVxyXG5cclxuICBzdGF0aWMgY3JlYXRlSW1hZ2Uoc3JjLCBjbGFzc05hbWUsIGFsdCkge1xyXG4gICAgY29uc3QgaW1nID0gbmV3IEltYWdlKClcclxuICAgIGltZy5zcmMgPSBzcmNcclxuICAgIGltZy5hbHQgPSBhbHRcclxuICAgIGltZy5jbGFzc0xpc3QuYWRkKGNsYXNzTmFtZSlcclxuICAgIHJldHVybiBpbWdcclxuICB9XHJcblxyXG5cclxufSIsImltcG9ydCBET01VdGlscyBmcm9tICcuL0RPTVV0aWxzJ1xyXG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vaW1nL2J1cmdlcl9sYXJnZS53ZWJwJ1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWJvdXQoKSB7XHJcbiAgY29uc29sZS5sb2coJ0Fib3V0LmpzIHdvcmtpbmcnKVxyXG5cclxuICBjb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbnRlbnQnKVxyXG4gIGNvbnN0IGNvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZURpdignYWJvdXQtY29udGFpbmVyJylcclxuICBjb25zdCBpbWdDb250YWluZXIgPSBET01VdGlscy5jcmVhdGVEaXYoJ2ltZy1jb250YWluZXInKVxyXG4gIFxyXG4gIGNvbnN0IGFib3V0VGl0bGUgPSBET01VdGlscy5jcmVhdGVFbGVtZW50V2l0aENvbnRlbnQoJ2gyJywgJ0hvbWUgb2YgdGhlIEJhbWJ1cmdlciEnLCAnYWJvdXQtdGl0bGUnKVxyXG4gIGNvbnN0IGFib3V0SW1nID0gRE9NVXRpbHMuY3JlYXRlSW1hZ2UoQnVyZ2VyLCAnYWJvdXQtaW1nJywgJ0hhbWJ1cmdlcicpXHJcbiAgY29uc3QgYWJvdXRJbmZvID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdwJyxcclxuICBgTmVzdGxlZCBvbiBhIGNvenkgY29ybmVyIGluIHRoZSBoZWFydCBvZiBkb3dudG93biBEZXRyb2l0LCBCYW1idXJnZXJzIGhhcyBiZWVuIHNlcnZpbmcgdXAgZGVsaWNpb3VzLCBuby1mcmlsbHMgYnVyZ2VycyBzaW5jZSAxOTkxLiBTZXJ2aW5nIGV2ZXJ5b25lIGluY2x1ZGluZyB5b3Vyc2VsZiwgbG9jYWwgbGVnZW5kcywgYW5kIGFsbCB0aGUgd2F5IHRvIEJpZyBUaHJlZSBDRU9zLiBTdGVwIHRocm91Z2ggb3VyIGRvb3JzIGFuZCB5b3UnbGwgYmUgdHJhbnNwb3J0ZWQgYmFjayBpbiB0aW1lIHRvIGFuIGVyYSB3aGVuIGJ1cmdlcnMgcmVpZ25lZCBzdXByZW1lIGFuZCBxdWFsaXR5IHdhcyBwYXJhbW91bnQuXHJcbiAgXHJcbiAgV2UndmUgc3RheWVkIHRydWUgdG8gb3VyIERldHJvaXQgcm9vdHMsIGNyYWZ0aW5nIGV2ZXJ5IGJ1cmdlciB3aXRoIHRoZSBmcmVzaGVzdCwgbG9jYWxseS1zb3VyY2VkIGluZ3JlZGllbnRzIGFuZCBvdXIgc2lnbmF0dXJlIFwiQmFtLVNhdWNlXCIgdGhhdCBmb2xrcyBnbyBjcmF6eSBmb3IuIFdoYXQncyB0aGUgc2VjcmV0IHRvIG91ciBsZWdlbmRhcnkgYnVyZ2Vycz8gSXQgc3RhcnRzIHdpdGggdXNpbmcgb25seSBwcmVtaXVtIGdyYXNzLWZlZCBiZWVmIHRoYXQgZ2V0cyBoYW5kLXBhdHRpZWQgYW5kIGdyaWxsZWQgdG8ganVpY3kgcGVyZmVjdGlvbi4gT3VyIGJ1cmdlciBidW5zIGFyZSBiYWtlZCBmcmVzaCBkYWlseSB1c2luZyBhIGRlY2FkZXMtb2xkIHJlY2lwZS4gQW5kIHRoZW4gdGhlcmUncyB0aGUgdG9wcGluZ3MgLSBjcmlzcCBsZXR0dWNlLCByaXBlIHRvbWF0b2VzLCB6ZXN0eSBvbmlvbnMsIGFuZCBzaGFycCBjaGVkZGFyIGNoZWVzZXMgLSBhbGwgc291cmNlZCBmcm9tIGxvY2FsIGZhcm1zIGFuZCBwdXJ2ZXlvcnMgd2UndmUgYnVpbHQgcmVsYXRpb25zaGlwcyB3aXRoIG92ZXIgdGhlIHllYXJzLlxyXG4gIFxyXG4gIEFzIHByb3VkIGFzIHdlIGFyZSBvZiB0aGUgZm9vZCwgQmFtYnVyZ2VycyBpcyBtb3JlIHRoYW4ganVzdCBmb29kIC0gaXQncyBhbiBleHBlcmllbmNlLiBUaGUgcmV0cm8gZGlncywgbmVvbiBzaWducywgYW5kIGNoZWNrZXJib2FyZCBmbG9vcnMgd2VsY29tZSBhbnlvbmUgd2hvIGlzIGh1bmdyeS4gT3VyIHN0YWZmIHdpbGwgdHJlYXQgeW91IGxpa2UgZmFtaWx5IGZyb20gdGhlIG1vbWVudCB5b3UgYmVsbHkgdXAgdG8gdGhlIGNvdW50ZXIuIEF0IEJhbWJ1cmdlcnMsIHdlIHRha2UgcHJpZGUgaW4gZXZlcnkgYnVyZ2VyIHdlIHNlcnZlIGFuZCBldmVyeSBjdXN0b21lciB3ZSB3ZWxjb21lLiBJdCdzIHdoYXQgaGFzIG1hZGUgdGhpcyBsaXR0bGUgYnVyZ2VyIGpvaW50IGEgZmF2b3JpdGUgdG8gZXZlcnlvbmUgdGhhdCB2aXNpdHMuYCwgJ2Fib3V0LWluZm8nXHJcbilcclxuXHJcbiAgY29uc3QgcmV2aWV3Q29udGFpbmVyID0gRE9NVXRpbHMuY3JlYXRlRGl2KCdyZXZpZXctY29udGFpbmVyJylcclxuICBjb25zdCByZXZpZXcxID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdzcGFuJywgYEJlc3Qgb2YgRGV0cm9pdCEgXFxuIC1CdXJnZXJTcG90YCwgJ2Fib3V0LXJldmlldycpXHJcbiAgY29uc3QgcmV2aWV3MiA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgnc3BhbicsIGBBbWF6aW5nIG1pbGtzaGFrZXMhIFxcbiAtREVUUmV2aWV3ZXJgLCAnYWJvdXQtcmV2aWV3JylcclxuICBjb25zdCByZXZpZXczID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdzcGFuJywgYDExLzEwIFxcbiAtTW9Ub3duIEZvb2RgLCAnYWJvdXQtcmV2aWV3JylcclxuICBjb25zdCByZXZpZXc0ID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdzcGFuJywgYFJldHJvIFBhcmFkaXNlIFxcbiAtUmV2aWV3IEdpcmxgLCAnYWJvdXQtcmV2aWV3JylcclxuXHJcbiAgY29udGVudC5hcHBlbmRDaGlsZChjb250YWluZXIpXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0VGl0bGUpXHJcbiAgY29udGFpbmVyLmFwcGVuZENoaWxkKGFib3V0SW5mbylcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaW1nQ29udGFpbmVyKVxyXG4gIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dEltZylcclxuICBjb250YWluZXIuYXBwZW5kQ2hpbGQocmV2aWV3Q29udGFpbmVyKVxyXG4gIHJldmlld0NvbnRhaW5lci5hcHBlbmQocmV2aWV3MSwgcmV2aWV3MiwgcmV2aWV3MywgcmV2aWV3NClcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lclxyXG59IiwiaW1wb3J0IERPTVV0aWxzIGZyb20gJy4vRE9NVXRpbHMnXHJcblxyXG5jb25zdCBjb250YWN0QXJyID0gW1xyXG4gIHtcclxuICAgIHRpdGxlOiBgUEhPTkUgI2AsXHJcbiAgICBjb250YWN0OiAnMS0yMzQtNTY3LTg5MTAnXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYEVNQUlMYCxcclxuICAgIGNvbnRhY3Q6IGBiYW1AYnVyZ2Vycy5lYXRgXHJcbiAgfSxcclxuICB7XHJcbiAgICB0aXRsZTogYExPQ0FUSU9OYCxcclxuICAgIGNvbnRhY3Q6IGA1MDA1IEJ1cmdlciBEcml2ZSwgRGV0cm9pdCwgTUkgNDgyMDFgXHJcbiAgfVxyXG5dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjb250YWN0KCkge1xyXG4gIGNvbnNvbGUubG9nKCdDb250YWN0LmpzIHdvcmtpbmcnKVxyXG5cclxuICBjb25zdCBjb250YWluZXIgPSBET01VdGlscy5jcmVhdGVEaXYoJ2NvbnRhY3QtY29udGFpbmVyJylcclxuXHJcbiAgY29udGFjdEFyci5mb3JFYWNoKChpdGVtKSA9PiB7XHJcbiAgICBjb25zdCBjb250YWN0SXRlbSA9IERPTVV0aWxzLmNyZWF0ZURpdignY29udGFjdC1pdGVtJylcclxuICAgIGNvbnN0IGNvbnRhY3RUaXRsZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgnaDInLCBpdGVtLnRpdGxlLCAnY29udGFjdC10aXRsZScpXHJcbiAgICBjb25zdCBjb250YWN0TWV0aG9kID0gRE9NVXRpbHMuY3JlYXRlRWxlbWVudFdpdGhDb250ZW50KCdzcGFuJywgaXRlbS5jb250YWN0LCAnY29udGFjdC1waG9uZScpXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGNvbnRhY3RJdGVtKVxyXG4gICAgY29udGFjdEl0ZW0uYXBwZW5kKGNvbnRhY3RUaXRsZSwgY29udGFjdE1ldGhvZClcclxuICB9KVxyXG5cclxuICBjb250ZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lcilcclxuXHJcbiAgcmV0dXJuIGNvbnRhaW5lclxyXG59IiwiaW1wb3J0IERPTVV0aWxzIGZyb20gJy4vRE9NVXRpbHMnXHJcblxyXG5pbXBvcnQgQnVyZ2VyIGZyb20gJy4vaW1nL2J1cmdlci53ZWJwJ1xyXG5pbXBvcnQgRnJpZXMgZnJvbSAnLi9pbWcvZnJpZXMud2VicCdcclxuaW1wb3J0IFNoYWtlIGZyb20gJy4vaW1nL3NoYWtlLndlYnAnXHJcbmltcG9ydCBUZW5kZXJzICBmcm9tICcuL2ltZy90ZW5kaWVzLndlYnAnXHJcblxyXG5jb25zdCBtZW51SXRlbXMgPSBbXHJcbiAge1xyXG4gICAgc3JjOiBCdXJnZXIsXHJcbiAgICBuYW1lOiBgQmFtYnVyZ2VyYCxcclxuICAgIGRlc2NyaXB0aW9uOiBgQSBkZWxpY2lvdXMgYW5kIGp1aWN5IGhhbWJ1cmdlciBtYWRlIHdpdGggZnJlc2ggaW5ncmVkaWVudHMgYW5kIG91ciB0b3Agc2VjcmV0IEJhbS1TYXVjZSFgLFxyXG4gICAgaW5ncmVkaWVudHM6IGAxMDAlIEJlZWYgUGF0dHksIEhhbWJ1cmdlciBCdW4sIE1heW9uYWlzZSwgTGV0dHVjZSwgT25pb24sIFRvbWF0bywgS2V0Y2h1cCwgYW5kIENoZWRkYXIgQ2hlZXNlYCxcclxuICAgIGNhbG9yaWVzOiBgOTQwIENhbG9yaWVzYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiBGcmllcyxcclxuICAgIG5hbWU6ICdCYW0gRnJpZXMnLFxyXG4gICAgZGVzY3JpcHRpb246IGBHb2xkZW4gYW5kIGNyaXNweSBmcmllcyBtYWRlIGZyb20gdGhlIGZpbmVzdCBsb2NhbGx5IHNvdXJjZWQgcG90YXRvZXMuYCxcclxuICAgIGluZ3JlZGllbnRzOiBgUG90YXRvLCBCbGFjayBQZXBwZXJgLFxyXG4gICAgY2Fsb3JpZXM6IGAzMjAgQ2Fsb3JpZXNgXHJcbiAgfSxcclxuICB7XHJcbiAgICBzcmM6IFRlbmRlcnMsXHJcbiAgICBuYW1lOiBgQ2hpY2t5IFRlbmRlcnNgLFxyXG4gICAgZGVzY3JpcHRpb246IGBKdWljeSBhbmQgdGVuZGVyIGNoaWNrZW4gdGVuZGVycywgcGVyZmVjdGx5IGJyZWFkZWQgYW5kIGZyaWVkIHRvIGEgZ29sZGVuIGNyaXNwLmAsXHJcbiAgICBpbmdyZWRpZW50czogYENoaWNrZW4gQnJlYXN0LCBCcmVhZGluZyAoRmxvdXIsIEVnZ3MsIEJyZWFkY3J1bWJzLCBTcGljZXMpYCxcclxuICAgIGNhbG9yaWVzOiBgNzIwIENhbG9yaWVzYFxyXG4gIH0sXHJcbiAge1xyXG4gICAgc3JjOiBTaGFrZSxcclxuICAgIG5hbWU6IGBXaGFtLUJhbSBTaGFrZWAsXHJcbiAgICBkZXNjcmlwdGlvbjogYFRoaWNrIGFuZCBjcmVhbXkgY2hvY29sYXRlIHNoYWtlIG1hZGUgd2l0aCBwcmVtaXVtIGljZSBjcmVhbSB3aXRoIGNydW5jaGVkIHVwIGJpdHMgb2YgZnJlc2hseSBiYWtlZCBjaG9jb2xhdGUgY2hpcCBjb29raWVzLmAsXHJcbiAgICBpbmdyZWRpZW50czogYENob2NvbGF0ZSBJY2UgQ3JlYW0sIE1pbGssIENob2NvbGF0ZSBTeXJ1cCwgV2hpcHBlZCBDcmVhbSwgYW5kIGEgQ2hvY29sYXRlIENvb2tpZWAsXHJcbiAgICBjYWxvcmllczogYDEwODAgQ2Fsb3JpZXNgXHJcbiAgfSxcclxuXVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWVudSgpIHtcclxuICBjb25zb2xlLmxvZygnTWVudS5qcyB3b3JraW5nJylcclxuICBjb25zdCBjb250YWluZXIgPSBET01VdGlscy5jcmVhdGVEaXYoJ21lbnUtY29udGFpbmVyJylcclxuICBcclxuICBtZW51SXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xyXG4gICAgY29uc3QgbWVudUl0ZW0gPSBET01VdGlscy5jcmVhdGVEaXYoJ21lbnUtaXRlbScpXHJcbiAgICBjb25zdCBpdGVtSW5mbyA9IERPTVV0aWxzLmNyZWF0ZURpdignbWVudS1pbmZvJylcclxuICAgIGNvbnN0IGltZ0NvbnRhaW5lciA9IERPTVV0aWxzLmNyZWF0ZURpdignaW1nLWNvbnRhaW5lcicpXHJcbiAgICBjb25zdCBtZW51SW1nID0gRE9NVXRpbHMuY3JlYXRlSW1hZ2UoaXRlbS5zcmMsICdtZW51LWltZycsIGl0ZW0ubmFtZSlcclxuXHJcbiAgICBjb25zdCBpdGVtTmFtZSA9IERPTVV0aWxzLmNyZWF0ZUVsZW1lbnRXaXRoQ29udGVudCgnaDInLCBpdGVtLm5hbWUsICdpdGVtLW5hbWUnKVxyXG4gICAgY29uc3QgaXRlbURlc2MgPSBET01VdGlscy5jcmVhdGVFbGVtZW50V2l0aENvbnRlbnQoJ3AnLCBpdGVtLmRlc2NyaXB0aW9uLCAnaXRlbS1kZXNjcmlwdGlvbicpXHJcbiAgICBjb25zdCBpdGVtSW5ncmVkaWVudHMgPSBET01VdGlscy5jcmVhdGVFbGVtZW50V2l0aENvbnRlbnQoJ3AnLCBpdGVtLmluZ3JlZGllbnRzLCAnaXRlbS1pbmdyZWRpZW50cycpXHJcbiAgICBjb25zdCBpdGVtQ2Fsb3JpZXMgPSBET01VdGlscy5jcmVhdGVFbGVtZW50V2l0aENvbnRlbnQoJ3NwYW4nLCBpdGVtLmNhbG9yaWVzLCAnaXRlbS1jYWxvcmllcycpXHJcblxyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVJdGVtKVxyXG4gICAgbWVudUl0ZW0uYXBwZW5kKGl0ZW1JbmZvLCBpbWdDb250YWluZXIpXHJcbiAgICBpdGVtSW5mby5hcHBlbmQoaXRlbU5hbWUsIGl0ZW1EZXNjLCBpdGVtSW5ncmVkaWVudHMsIGl0ZW1DYWxvcmllcylcclxuICAgIGltZ0NvbnRhaW5lci5hcHBlbmRDaGlsZChtZW51SW1nKVxyXG4gICAgXHJcbiAgfSlcclxuXHJcblxyXG5cclxuICAvLyBCYXNpYyBzdHJ1Y3R1cmVcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbiAgLy8gfCAgICAgICAgICAgICAgICAgICAgICAgIGRpdiAgICAgICAgICAgICAgICAgICAgICAgfFxyXG4gIC8vIHwgICAgICAgICAgICAgICAgICAtLSBtZW51LWl0ZW0gLS0gICAgICAgICAgICAgICAgIHxcclxuICAvLyB8ICAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gICB8XHJcbiAgLy8gfCAgfCAgICAgICAgZGl2ICAgICAgICB8ICAgICAgICAgICBkaXYgICAgICAgICB8ICAgfFxyXG4gIC8vIHwgIHwgIC0tIG1lbnUtaW5mbyAtLSAgfCAgLS0gaW1nLWNvbnRhaW5lciAtLSAgfCAgIHxcclxuICAvLyB8ICB8ICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICB8XHJcbiAgLy8gfCAgfCAgICAgICAgICAgICAgICAgICB8ICAgICAgICBtZW51SW1nICAgICAgICB8ICAgfFxyXG4gIC8vIHwgIHwgICAgICAgICAgICAgICAgICAgfCAgICAgICAgICAgICAgICAgICAgICAgfCAgIHxcclxuICAvLyB8ICB8ICAgICAgICAgICAgICAgICAgIHwgICAgICAgICAgICAgICAgICAgICAgIHwgICB8XHJcbiAgLy8gfCAgfCAgICAgICAgICAgICAgICAgICB8ICAgICAgICAgICAgICAgICAgICAgICB8ICAgfFxyXG4gIC8vIHwgIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAgIHxcclxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcblxyXG4gIGNvbnRlbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKVxyXG5cclxuICByZXR1cm4gY29udGFpbmVyXHJcbn0iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IGFib3V0IGZyb20gJy4vYWJvdXQnXHJcbmltcG9ydCBtZW51IGZyb20gJy4vbWVudSdcclxuaW1wb3J0IGNvbnRhY3QgZnJvbSAnLi9jb250YWN0J1xyXG5pbXBvcnQgJy4vc3R5bGUuY3NzJ1xyXG5cclxuY29uc29sZS5sb2coJ1JVTk5JTkchIScpXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBET00gRUxFTUVOVFNcclxuXHJcbmNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpXHJcbmNvbnN0IG5hdkl0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnbmF2ID4gKicpXHJcblxyXG5jb25zdCBhYm91dEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYXZBYm91dCcpXHJcbmNvbnN0IG1lbnVCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2TWVudScpXHJcbmNvbnN0IGNvbnRhY3RCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmF2Q29udGFjdCcpXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBFVkVOVCBMSVNURU5FUlNcclxuXHJcbmFib3V0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gcmVuZGVyVGFiKGFib3V0LCBhYm91dEJ0bikpXHJcbm1lbnVCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJUYWIobWVudSwgbWVudUJ0bikpXHJcbmNvbnRhY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiByZW5kZXJUYWIoY29udGFjdCwgY29udGFjdEJ0bikpXHJcblxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxyXG4vLyBGVU5DVElPTlNcclxuXHJcbmFib3V0KCkgLy8gRGVmYXVsdCBwYWdlIGFuZCBUYWIgc2VsZWN0ZWRcclxuYWJvdXRCdG4uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJykgLy8gLS1eXHJcblxyXG5mdW5jdGlvbiByZW5kZXJUYWIodGFiRnVuY3Rpb24sIGJ0bkNsaWNrZWQpIHsgLy8gR2V0IGN1cnJlbnQgdGFiIHNlbGVjdGVkICYgSGlnaGxpZ2h0IGl0cyBjb3JyZXNwb25kaW5nIGJ1dHRvblxyXG4gIHJlbW92ZUFjdGl2ZShidG5DbGlja2VkKVxyXG4gIGJ0bkNsaWNrZWQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJylcclxuICBjb250ZW50LnJlcGxhY2VDaGlsZHJlbih0YWJGdW5jdGlvbigpKVxyXG59XHJcblxyXG5mdW5jdGlvbiByZW1vdmVBY3RpdmUoYWN0aXZlQnRuKSB7XHJcbiAgbmF2SXRlbXMuZm9yRWFjaCgoYnRuKSA9PiB7XHJcbiAgICBpZihidG4gIT09IGFjdGl2ZUJ0bikge1xyXG4gICAgICBidG4ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=