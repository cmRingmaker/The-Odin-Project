/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/reset.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* Base clean slate */
* {
	margin: 0;
	padding: 0;
	border: 0;
	box-sizing: border-box;
	font: inherit;
	vertical-align: baseline;
  list-style: none;
}

/* Make images easier to work with */
img,
picture {
	font-style: italic; /* Visually offset alt text to differentiate from surrounding text  */
  max-width: 100%;
	height: auto;
	vertical-align: middle; /* Remove phantom whitespace */

}

/* Some reset rules based on piccalil css reset */
/* https://piccalil.li/blog/a-more-modern-css-reset/ */
/* https://web.archive.org/web/20240429233755/https://piccalil.li/blog/a-more-modern-css-reset/ */

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* Set shorter line heights on headings and interactive elements */
/* Worth it to change if fonts have large ascenders and descenders */
h1, h2, h3, h4,
button, input, label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font-family: inherit;
  font-size: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}`, "",{"version":3,"sources":["webpack://./src/css/reset.css"],"names":[],"mappings":"AAAA,qBAAqB;AACrB;CACC,SAAS;CACT,UAAU;CACV,SAAS;CACT,sBAAsB;CACtB,aAAa;CACb,wBAAwB;EACvB,gBAAgB;AAClB;;AAEA,oCAAoC;AACpC;;CAEC,kBAAkB,EAAE,qEAAqE;EACxF,eAAe;CAChB,YAAY;CACZ,sBAAsB,EAAE,8BAA8B;;AAEvD;;AAEA,iDAAiD;AACjD,sDAAsD;AACtD,iGAAiG;;AAEjG,gCAAgC;AAChC;EACE,2BAA2B;EAC3B,8BAA8B;EAC9B,sBAAsB;AACxB;;AAEA,2BAA2B;AAC3B;EACE,iBAAiB;EACjB,gBAAgB;AAClB;;AAEA,kEAAkE;AAClE,oEAAoE;AACpE;;EAEE,gBAAgB;AAClB;;AAEA,sCAAsC;AACtC;;EAEE,kBAAkB;AACpB;;AAEA,0DAA0D;AAC1D;EACE,8BAA8B;EAC9B,mBAAmB;AACrB;;AAEA,yCAAyC;AACzC;;EAEE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA,8DAA8D;AAC9D;EACE,gBAAgB;AAClB","sourcesContent":["/* Base clean slate */\r\n* {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tbox-sizing: border-box;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n  list-style: none;\r\n}\r\n\r\n/* Make images easier to work with */\r\nimg,\r\npicture {\r\n\tfont-style: italic; /* Visually offset alt text to differentiate from surrounding text  */\r\n  max-width: 100%;\r\n\theight: auto;\r\n\tvertical-align: middle; /* Remove phantom whitespace */\r\n\r\n}\r\n\r\n/* Some reset rules based on piccalil css reset */\r\n/* https://piccalil.li/blog/a-more-modern-css-reset/ */\r\n/* https://web.archive.org/web/20240429233755/https://piccalil.li/blog/a-more-modern-css-reset/ */\r\n\r\n/* Prevent font size inflation */\r\nhtml {\r\n  -moz-text-size-adjust: none;\r\n  -webkit-text-size-adjust: none;\r\n  text-size-adjust: none;\r\n}\r\n\r\n/* Set core body defaults */\r\nbody {\r\n  min-height: 100vh;\r\n  line-height: 1.5;\r\n}\r\n\r\n/* Set shorter line heights on headings and interactive elements */\r\n/* Worth it to change if fonts have large ascenders and descenders */\r\nh1, h2, h3, h4,\r\nbutton, input, label {\r\n  line-height: 1.1;\r\n}\r\n\r\n/* Balance text wrapping on headings */\r\nh1, h2,\r\nh3, h4 {\r\n  text-wrap: balance;\r\n}\r\n\r\n/* A elements that don't have a class get default styles */\r\na:not([class]) {\r\n  text-decoration-skip-ink: auto;\r\n  color: currentColor;\r\n}\r\n\r\n/* Inherit fonts for inputs and buttons */\r\ninput, button,\r\ntextarea, select {\r\n  font-family: inherit;\r\n  font-size: inherit;\r\n}\r\n\r\n/* Make sure textareas without a rows attribute are not tiny */\r\ntextarea:not([rows]) {\r\n  min-height: 10em;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/style.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/noise-light.png */ "./src/img/noise-light.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* ==================================================================
    - - - - - - - - - - [ GLOBALS ]
   ==================================================================
    [1] Size hack to set default font size to "10px" to make 1rem
        the equivelent of 10px. (2.4rem = 24px, 0.8rem = 8px, etc)
   ================================================================== */

:root {
  font-size: 62.5%; /* [1] */

  /* ------------> DEFAULT DARK MODE COLORS!!!, CHANGE COLORS & DELETE THIS COMMENT LINE!!! <------------ */
  /* Main colors */
  --COLOR_BG: hsl(0, 0%, 0%);
  --COLOR_PRIMARY: hsl(155, 30%, 38%);
  --COLOR_SECONDARY: hsl(303, 71%, 73%);

  --PRIO_GREEN: hsl(120, 77%, 46%);
  --PRIO_PURPLE: hsl(278, 72%, 50%);
  --PRIO_RED: hsl(0, 79%, 50%);

  /* Text */
  --FONT_COLOR: hsl(30, 100%, 98%);

  /* Misc Layout */
  --RADIUS: 6px;
}


/* ==================================================================
    - - - - - - - - - - [ BASE STYLES ]
   ==================================================================
    - - [ body, fonts, text elements, media elements ]
    * Styles that are shared across the entire site
   ================================================================== */
  
body {
  font-size: 2rem;
  font-family: 'Fira Code', sans-serif;
  background-color: var(--COLOR_BG);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-attachment: fixed;
  color: var(--FONT_COLOR);
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr [content-start] minmax(300px, 700px) [content-end] 1fr;
  grid-template-rows: min-content 1fr;
  gap: 20px;

  & > * {
    grid-column: content;
  }

  @media screen and (max-width: 400px) {
    grid-template-columns: 1fr;
    & > * { grid-column: 1 / 2; }
  }
}

::selection {
  background-color: var(--COLOR_SECONDARY);
  color: var(--COLOR_BG);
}

hr {
  border-top: 1px dashed var(--COLOR_SECONDARY);
}


/* ==================================================================
    - - - - - - - - - - [ HEADER ]
   ==================================================================
    * Extremely simple header, updates on which task group selected
   ================================================================== */
  
header {
  padding: 20px 0 0 20px;
  font-size: 4rem;
  display: flex;

  & :last-child {
    margin-left: auto;
  }

  @media screen and (max-width: 850px) {
    & :first-child { /* Make room for hamburger menu at smaller resolution */
      padding-left: 80px;
    }
  }  
}

/* ==================================================================
    - - - - - - - - - - [ SIDEBAR ]
   ==================================================================
    * A sidebar that toggles on and off when in mobile, popping
      it out from the left side. Otherwise permanently on while
      on desktop.
   ================================================================== */

#sidebar-toggle {
  width: 80px;
  height: 70px;
  top: 20px;
  left: calc((100vw - 940px) / 2);
  position: fixed;
  z-index: 10;

  & input {
    width: 100%;
    height: 100%;
    opacity: 0;
    position: absolute;
    z-index: 1;
    cursor: pointer;
  }

  & span {
    left: 20%;
    top: 30%;
    display: block;
    width: 50px;
    height: 6px;
    margin-bottom: 5px;
    position: relative;
    background-color: var(--COLOR_SECONDARY);
    border-radius: var(--RADIUS);
    transform-origin: 4px 0px;
    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),
                opacity 0.55s ease;
  }

  & span:first-child {
    transform-origin: 0% 0%;
  }

  & span:nth-last-child(2) {
    transform-origin: 0% 100%;
  }

  & input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
    background: red;
  }

  & input:checked ~ span:first-child {
    transform: rotate(45deg) translateX(-0px) translateY(-3px);
  }

  & input:checked ~ span:nth-last-child(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }

  & input:checked ~ span:last-child {
    transform: rotate(-45deg) translateX(-6px) translateY(0px);
  }

  @media screen and (max-width: 1290px) { left: 20px; }
  /* @media screen and (max-width: 1000px) { left: 20px; } */
}

#sidebar {
  width: 275px;
  padding-left: 10px;
  position: fixed;
  top: 120px;
  left: calc((100vw - 1300px) / 2); /* force responsiveness when resizing.. mother of god it works */
  height: 100vh;
  overflow-y: auto;
  z-index: 1;
  transition: transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out;

  & .active {
    color: red;
    margin-right: 8px;
    transition: margin-right 0.3s ease-in-out;
    text-shadow: -2px 2px 2px var(--COLOR_BG);

    &::before {
      content: '>';
      margin-right: 10px;
    }
  }
  
  & > * {
    margin: 0 20px 20px 0;
    text-align: right;
    cursor: pointer;
  }
  
  & > * > * {
    padding-top: 14px;
  }

  & .low  { color: var(--PRIO_GREEN); }
  & .medium  { color: var(--PRIO_PURPLE); }
  & .high { color: var(--PRIO_RED); }

  & .project-btn {
    width: 100%;
    margin-top: 20px;
    padding: 8px 0;
    font-size: 2.2rem;
    background-color: var(--COLOR_PRIMARY);
    color: var(--FONT_COLOR);
    border-radius: var(--RADIUS);
    opacity: 0.8;
  }

  & .project-btn:hover {
    background-color: var(--COLOR_PRIMARY);
    color: var(--FONT_COLOR);
    opacity: 1;
    cursor: pointer;
  }


  @media screen and (max-width: 1290px) {
    top: 0;
    left: 0;
    background-color: hsla(0, 0%, 0%, 0.8);
    border-top-right-radius: var(--RADIUS);
    backdrop-filter: blur(4px);
  } 
}

.hide-sidebar {
  transform: translateX(-500px);
  opacity: 0;
  visibility: hidden;
}

#delete-project {
  /* margin-top: 60px; */
  opacity: 0.5;

  &:hover {
    opacity: 1;
    color: darkred;
  }
}


/* ==================================================================
    - - - - - - - - - - [ MAIN CONTENT ]
   ==================================================================
    - - [ main, section, div, article, aside, form ]
    * replace %CONTENT with one of the above when pasting this
   ================================================================== */

main {
  display: grid;
  grid-auto-rows: min-content;
  gap: 10px;

  & > * {
    background-color: var(--COLOR_PRIMARY);
    border-radius: var(--RADIUS);
    display: flex;
    align-items: center;
    position: relative;
    padding: 12px 10px 12px 28px;
    font-size: 1.6rem;
    justify-content: space-between;

    @media screen and (max-width: 400px) {
      margin: 0 10px;
    }
  }

  & .priority { /* TASK COLOR BAR OF IMPORTANCE! */
    content: "";
    position: absolute;
    left: 0;
    width: 12px;
    height: 100%;
    border-top-left-radius: var(--RADIUS);
    border-bottom-left-radius: var(--RADIUS);
    transition: width 0.2s ease-in-out;
  }

  /* Task color bar color select */
  & .low  { background-color: var(--PRIO_GREEN); }
  & .medium  { background-color: var(--PRIO_PURPLE); }
  & .high { background-color: var(--PRIO_RED); }

  & :hover .priority { /* Expand priority color slightly */
    width: 24px;
    border-right: 1px solid var(--COLOR_BG);
  }

  & .project { /* Project tab on the todo item */
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: var(--COLOR_BG); /* CHANGE COLOR IN JS TO THE TASK PROJECT THAT IS GIVEN */
    height: 14px;
    width: max-content;
    padding: 0 10px;
    text-align: center;
    font-size: 1rem;
    line-height: 1.2;
    border-bottom-left-radius: var(--RADIUS);
    border-bottom-right-radius: var(--RADIUS);
    opacity: 0.5;
  }

  & .taskTime {
    font-size: 1.4rem;
    position: absolute;
    right: 10px;
    bottom: 0;
  }

  & .edit {
    font-size: 1.5rem;
    color: black;
    position: absolute;
    transform: rotate(-90deg);
    left: -5px;
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
    user-select: none;
    cursor: pointer;
  }

  & > *:hover .edit {
    opacity: 1;
  }

  & .delete {
    position: absolute;
    right: 0;
    top: 0;
    background-color: rgba(255, 0, 0, 0.397);
    border-top-right-radius: var(--RADIUS);
    border-bottom-left-radius: var(--RADIUS);
    opacity: 0;
    transition: opacity 0.1s ease-in-out;
    user-select: none;
    cursor: pointer;
  }

  & > *:hover .delete {
    opacity: 1;
  }

}

/* ==================================================================
    - - - - - - - - - - [ TASK MODAL & FORM ]
   ==================================================================
    - - [ main, section, div, article, aside, form ]
    * replace %CONTENT with one of the above when pasting this
   ================================================================== */

dialog {
  background-color: var(--COLOR_BG);
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  height: min-content;
  max-height: 460px;
  width: 500px;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 30%;
  border-radius: var(--RADIUS);
  z-index: 12;
  border: 2px dotted var(--COLOR_SECONDARY);

  &::backdrop {
    backdrop-filter: blur(4px);
  }
}

form {
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  label {
    color: red;
  }

  & input[type="text"] {
    outline: none;
    background: var(--COLOR_PRIMARY);
    color: var(--FONT_COLOR);
    border-radius: var(--RADIUS);
    padding: 2px 10px;

    &:focus {
      box-shadow: 0 2px 0 0 var(--COLOR_SECONDARY);
    }
  }

  & .form-time {
    display: flex;
    flex-direction: column;
    align-self: center;
    
     & input {
      width: 480px;
      border-radius: var(--RADIUS);
      background-color: var(--COLOR_PRIMARY);
      color: var(--FONT_COLOR);
      padding: 8px 20px;
      margin-top: 12px;
     }
  }

  & .form-prio {
    color: red;
    display: flex;
    gap: 20px;
    height: 40px;
    justify-content: center;
    align-items: center;

    & label {
      height: 100%;
      width: 33%;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: var(--RADIUS);
      user-select: none;
      cursor: pointer;
      color: var(--FONT_COLOR);
      text-shadow: var(--COLOR_BG) -2px 1px;
    }

    & input[type="radio"] {
      appearance: none;
      opacity: 0; /* Hacky fix for initial page load to force no radios */
    }

    & input[id="low"]:checked ~ label[for="low"] {
      background-color: var(--PRIO_GREEN);
    }
  
    & input[id="medium"]:checked ~ label[for="medium"] {
      background-color: var(--PRIO_PURPLE);
    }
  
    & input[id="high"]:checked ~ label[for="high"] {
      background-color: var(--PRIO_RED);
    }
  }

  & #taskName {
    width: 100%;
    height: max-content;
    font-size: 2.4rem;
  }

  & .submitTo {
    display: flex;
    gap: 20px;
    padding: 14px;

    & select {
      flex-grow: 1;
    }
  }

  & #dropdown {
    color: var(--FONT_COLOR);
    background-color: var(--COLOR_PRIMARY);
    padding: 4px 10px;
    font-size: 1.4rem;
  }
}

/* New Project Modal */
#projectModal {
  height: 140px;

  & input {
    margin-top: 10px;
    padding: 10px 0;
  }

  & button {
    position: absolute;
  }
}

/* Delete Group Modal */
#deleteProjectModal {
  flex-direction: column;
  height: 200px;

  & select {
    background-color: var(--COLOR_PRIMARY);
    font-size: 2.2rem;
    border-radius: var(--RADIUS);
    padding: 4px 14px;
    color: var(--FONT_COLOR);
  }

  & button {
    margin-top: 20px;
    width: 90%;
    position: absolute;
  }
}

button[type=submit] { /* Submit Button for both modals */
  width: 150px;
  height: 40px;
  right: 25px;
  color: var(--COLOR_BG);
  background-color: var(--COLOR_SECONDARY);
  opacity: 0.8;
  border-radius: var(--RADIUS);

  &:hover {
    background-color: var(--COLOR_PRIMARY);
    color: var(--FONT_COLOR);
    cursor: pointer;
  }
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"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","sourcesContent":["/* ==================================================================\r\n    - - - - - - - - - - [ GLOBALS ]\r\n   ==================================================================\r\n    [1] Size hack to set default font size to \"10px\" to make 1rem\r\n        the equivelent of 10px. (2.4rem = 24px, 0.8rem = 8px, etc)\r\n   ================================================================== */\r\n\r\n:root {\r\n  font-size: 62.5%; /* [1] */\r\n\r\n  /* ------------> DEFAULT DARK MODE COLORS!!!, CHANGE COLORS & DELETE THIS COMMENT LINE!!! <------------ */\r\n  /* Main colors */\r\n  --COLOR_BG: hsl(0, 0%, 0%);\r\n  --COLOR_PRIMARY: hsl(155, 30%, 38%);\r\n  --COLOR_SECONDARY: hsl(303, 71%, 73%);\r\n\r\n  --PRIO_GREEN: hsl(120, 77%, 46%);\r\n  --PRIO_PURPLE: hsl(278, 72%, 50%);\r\n  --PRIO_RED: hsl(0, 79%, 50%);\r\n\r\n  /* Text */\r\n  --FONT_COLOR: hsl(30, 100%, 98%);\r\n\r\n  /* Misc Layout */\r\n  --RADIUS: 6px;\r\n}\r\n\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ BASE STYLES ]\r\n   ==================================================================\r\n    - - [ body, fonts, text elements, media elements ]\r\n    * Styles that are shared across the entire site\r\n   ================================================================== */\r\n  \r\nbody {\r\n  font-size: 2rem;\r\n  font-family: 'Fira Code', sans-serif;\r\n  background-color: var(--COLOR_BG);\r\n  background-image: url('../img/noise-light.png');\r\n  background-attachment: fixed;\r\n  color: var(--FONT_COLOR);\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr [content-start] minmax(300px, 700px) [content-end] 1fr;\r\n  grid-template-rows: min-content 1fr;\r\n  gap: 20px;\r\n\r\n  & > * {\r\n    grid-column: content;\r\n  }\r\n\r\n  @media screen and (max-width: 400px) {\r\n    grid-template-columns: 1fr;\r\n    & > * { grid-column: 1 / 2; }\r\n  }\r\n}\r\n\r\n::selection {\r\n  background-color: var(--COLOR_SECONDARY);\r\n  color: var(--COLOR_BG);\r\n}\r\n\r\nhr {\r\n  border-top: 1px dashed var(--COLOR_SECONDARY);\r\n}\r\n\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ HEADER ]\r\n   ==================================================================\r\n    * Extremely simple header, updates on which task group selected\r\n   ================================================================== */\r\n  \r\nheader {\r\n  padding: 20px 0 0 20px;\r\n  font-size: 4rem;\r\n  display: flex;\r\n\r\n  & :last-child {\r\n    margin-left: auto;\r\n  }\r\n\r\n  @media screen and (max-width: 850px) {\r\n    & :first-child { /* Make room for hamburger menu at smaller resolution */\r\n      padding-left: 80px;\r\n    }\r\n  }  \r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ SIDEBAR ]\r\n   ==================================================================\r\n    * A sidebar that toggles on and off when in mobile, popping\r\n      it out from the left side. Otherwise permanently on while\r\n      on desktop.\r\n   ================================================================== */\r\n\r\n#sidebar-toggle {\r\n  width: 80px;\r\n  height: 70px;\r\n  top: 20px;\r\n  left: calc((100vw - 940px) / 2);\r\n  position: fixed;\r\n  z-index: 10;\r\n\r\n  & input {\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n  }\r\n\r\n  & span {\r\n    left: 20%;\r\n    top: 30%;\r\n    display: block;\r\n    width: 50px;\r\n    height: 6px;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n    background-color: var(--COLOR_SECONDARY);\r\n    border-radius: var(--RADIUS);\r\n    transform-origin: 4px 0px;\r\n    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                opacity 0.55s ease;\r\n  }\r\n\r\n  & span:first-child {\r\n    transform-origin: 0% 0%;\r\n  }\r\n\r\n  & span:nth-last-child(2) {\r\n    transform-origin: 0% 100%;\r\n  }\r\n\r\n  & input:checked ~ span {\r\n    opacity: 1;\r\n    transform: rotate(45deg) translate(-2px, -1px);\r\n    background: red;\r\n  }\r\n\r\n  & input:checked ~ span:first-child {\r\n    transform: rotate(45deg) translateX(-0px) translateY(-3px);\r\n  }\r\n\r\n  & input:checked ~ span:nth-last-child(2) {\r\n    opacity: 0;\r\n    transform: rotate(0deg) scale(0.2, 0.2);\r\n  }\r\n\r\n  & input:checked ~ span:last-child {\r\n    transform: rotate(-45deg) translateX(-6px) translateY(0px);\r\n  }\r\n\r\n  @media screen and (max-width: 1290px) { left: 20px; }\r\n  /* @media screen and (max-width: 1000px) { left: 20px; } */\r\n}\r\n\r\n#sidebar {\r\n  width: 275px;\r\n  padding-left: 10px;\r\n  position: fixed;\r\n  top: 120px;\r\n  left: calc((100vw - 1300px) / 2); /* force responsiveness when resizing.. mother of god it works */\r\n  height: 100vh;\r\n  overflow-y: auto;\r\n  z-index: 1;\r\n  transition: transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out;\r\n\r\n  & .active {\r\n    color: red;\r\n    margin-right: 8px;\r\n    transition: margin-right 0.3s ease-in-out;\r\n    text-shadow: -2px 2px 2px var(--COLOR_BG);\r\n\r\n    &::before {\r\n      content: '>';\r\n      margin-right: 10px;\r\n    }\r\n  }\r\n  \r\n  & > * {\r\n    margin: 0 20px 20px 0;\r\n    text-align: right;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  & > * > * {\r\n    padding-top: 14px;\r\n  }\r\n\r\n  & .low  { color: var(--PRIO_GREEN); }\r\n  & .medium  { color: var(--PRIO_PURPLE); }\r\n  & .high { color: var(--PRIO_RED); }\r\n\r\n  & .project-btn {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    padding: 8px 0;\r\n    font-size: 2.2rem;\r\n    background-color: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    border-radius: var(--RADIUS);\r\n    opacity: 0.8;\r\n  }\r\n\r\n  & .project-btn:hover {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    opacity: 1;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 1290px) {\r\n    top: 0;\r\n    left: 0;\r\n    background-color: hsla(0, 0%, 0%, 0.8);\r\n    border-top-right-radius: var(--RADIUS);\r\n    backdrop-filter: blur(4px);\r\n  } \r\n}\r\n\r\n.hide-sidebar {\r\n  transform: translateX(-500px);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n#delete-project {\r\n  /* margin-top: 60px; */\r\n  opacity: 0.5;\r\n\r\n  &:hover {\r\n    opacity: 1;\r\n    color: darkred;\r\n  }\r\n}\r\n\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ MAIN CONTENT ]\r\n   ==================================================================\r\n    - - [ main, section, div, article, aside, form ]\r\n    * replace %CONTENT with one of the above when pasting this\r\n   ================================================================== */\r\n\r\nmain {\r\n  display: grid;\r\n  grid-auto-rows: min-content;\r\n  gap: 10px;\r\n\r\n  & > * {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    border-radius: var(--RADIUS);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    padding: 12px 10px 12px 28px;\r\n    font-size: 1.6rem;\r\n    justify-content: space-between;\r\n\r\n    @media screen and (max-width: 400px) {\r\n      margin: 0 10px;\r\n    }\r\n  }\r\n\r\n  & .priority { /* TASK COLOR BAR OF IMPORTANCE! */\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    width: 12px;\r\n    height: 100%;\r\n    border-top-left-radius: var(--RADIUS);\r\n    border-bottom-left-radius: var(--RADIUS);\r\n    transition: width 0.2s ease-in-out;\r\n  }\r\n\r\n  /* Task color bar color select */\r\n  & .low  { background-color: var(--PRIO_GREEN); }\r\n  & .medium  { background-color: var(--PRIO_PURPLE); }\r\n  & .high { background-color: var(--PRIO_RED); }\r\n\r\n  & :hover .priority { /* Expand priority color slightly */\r\n    width: 24px;\r\n    border-right: 1px solid var(--COLOR_BG);\r\n  }\r\n\r\n  & .project { /* Project tab on the todo item */\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: var(--COLOR_BG); /* CHANGE COLOR IN JS TO THE TASK PROJECT THAT IS GIVEN */\r\n    height: 14px;\r\n    width: max-content;\r\n    padding: 0 10px;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    line-height: 1.2;\r\n    border-bottom-left-radius: var(--RADIUS);\r\n    border-bottom-right-radius: var(--RADIUS);\r\n    opacity: 0.5;\r\n  }\r\n\r\n  & .taskTime {\r\n    font-size: 1.4rem;\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 0;\r\n  }\r\n\r\n  & .edit {\r\n    font-size: 1.5rem;\r\n    color: black;\r\n    position: absolute;\r\n    transform: rotate(-90deg);\r\n    left: -5px;\r\n    opacity: 0;\r\n    transition: opacity 0.2s ease-in-out;\r\n    user-select: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  & > *:hover .edit {\r\n    opacity: 1;\r\n  }\r\n\r\n  & .delete {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    background-color: rgba(255, 0, 0, 0.397);\r\n    border-top-right-radius: var(--RADIUS);\r\n    border-bottom-left-radius: var(--RADIUS);\r\n    opacity: 0;\r\n    transition: opacity 0.1s ease-in-out;\r\n    user-select: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  & > *:hover .delete {\r\n    opacity: 1;\r\n  }\r\n\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ TASK MODAL & FORM ]\r\n   ==================================================================\r\n    - - [ main, section, div, article, aside, form ]\r\n    * replace %CONTENT with one of the above when pasting this\r\n   ================================================================== */\r\n\r\ndialog {\r\n  background-color: var(--COLOR_BG);\r\n  background-image: url('../img/noise-light.png');\r\n  height: min-content;\r\n  max-height: 460px;\r\n  width: 500px;\r\n  transform: translate(-50%, -50%);\r\n  left: 50%;\r\n  top: 30%;\r\n  border-radius: var(--RADIUS);\r\n  z-index: 12;\r\n  border: 2px dotted var(--COLOR_SECONDARY);\r\n\r\n  &::backdrop {\r\n    backdrop-filter: blur(4px);\r\n  }\r\n}\r\n\r\nform {\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n\r\n  label {\r\n    color: red;\r\n  }\r\n\r\n  & input[type=\"text\"] {\r\n    outline: none;\r\n    background: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    border-radius: var(--RADIUS);\r\n    padding: 2px 10px;\r\n\r\n    &:focus {\r\n      box-shadow: 0 2px 0 0 var(--COLOR_SECONDARY);\r\n    }\r\n  }\r\n\r\n  & .form-time {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-self: center;\r\n    \r\n     & input {\r\n      width: 480px;\r\n      border-radius: var(--RADIUS);\r\n      background-color: var(--COLOR_PRIMARY);\r\n      color: var(--FONT_COLOR);\r\n      padding: 8px 20px;\r\n      margin-top: 12px;\r\n     }\r\n  }\r\n\r\n  & .form-prio {\r\n    color: red;\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 40px;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    & label {\r\n      height: 100%;\r\n      width: 33%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      border-radius: var(--RADIUS);\r\n      user-select: none;\r\n      cursor: pointer;\r\n      color: var(--FONT_COLOR);\r\n      text-shadow: var(--COLOR_BG) -2px 1px;\r\n    }\r\n\r\n    & input[type=\"radio\"] {\r\n      appearance: none;\r\n      opacity: 0; /* Hacky fix for initial page load to force no radios */\r\n    }\r\n\r\n    & input[id=\"low\"]:checked ~ label[for=\"low\"] {\r\n      background-color: var(--PRIO_GREEN);\r\n    }\r\n  \r\n    & input[id=\"medium\"]:checked ~ label[for=\"medium\"] {\r\n      background-color: var(--PRIO_PURPLE);\r\n    }\r\n  \r\n    & input[id=\"high\"]:checked ~ label[for=\"high\"] {\r\n      background-color: var(--PRIO_RED);\r\n    }\r\n  }\r\n\r\n  & #taskName {\r\n    width: 100%;\r\n    height: max-content;\r\n    font-size: 2.4rem;\r\n  }\r\n\r\n  & .submitTo {\r\n    display: flex;\r\n    gap: 20px;\r\n    padding: 14px;\r\n\r\n    & select {\r\n      flex-grow: 1;\r\n    }\r\n  }\r\n\r\n  & #dropdown {\r\n    color: var(--FONT_COLOR);\r\n    background-color: var(--COLOR_PRIMARY);\r\n    padding: 4px 10px;\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n/* New Project Modal */\r\n#projectModal {\r\n  height: 140px;\r\n\r\n  & input {\r\n    margin-top: 10px;\r\n    padding: 10px 0;\r\n  }\r\n\r\n  & button {\r\n    position: absolute;\r\n  }\r\n}\r\n\r\n/* Delete Group Modal */\r\n#deleteProjectModal {\r\n  flex-direction: column;\r\n  height: 200px;\r\n\r\n  & select {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    font-size: 2.2rem;\r\n    border-radius: var(--RADIUS);\r\n    padding: 4px 14px;\r\n    color: var(--FONT_COLOR);\r\n  }\r\n\r\n  & button {\r\n    margin-top: 20px;\r\n    width: 90%;\r\n    position: absolute;\r\n  }\r\n}\r\n\r\nbutton[type=submit] { /* Submit Button for both modals */\r\n  width: 150px;\r\n  height: 40px;\r\n  right: 25px;\r\n  color: var(--COLOR_BG);\r\n  background-color: var(--COLOR_SECONDARY);\r\n  opacity: 0.8;\r\n  border-radius: var(--RADIUS);\r\n\r\n  &:hover {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
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

/***/ "./src/css/reset.css":
/*!***************************!*\
  !*** ./src/css/reset.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./reset.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/reset.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_reset_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/style.css":
/*!***************************!*\
  !*** ./src/css/style.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/style.css");

      
      
      
      
      
      
      
      
      

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

/***/ "./src/js/NAV.js":
/*!***********************!*\
  !*** ./src/js/NAV.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NAV)
/* harmony export */ });
class NAV {
  constructor() {
    this.taskList = document.getElementById('task-list')
    this.sidebar = document.getElementById('sidebar')
    this.menuTask = document.getElementById('menu-tasks').querySelectorAll('li')
    this.menuPrio = document.getElementById('menu-priority').querySelectorAll('li')
    this.menuProject = document.getElementById('menu-project').querySelectorAll('li')
    this.sidebarToggle = document.getElementById('sidebar-toggle')
    this.sidebarButton = document.getElementById('sidebar-button')
    this.initEventListeners()
  }

  initEventListeners() {

    window.matchMedia('(max-width: 1290px').addEventListener('change', () => this.toggleSidebar())

    this.menuTask.forEach((group) => {
      group.addEventListener('click', () => {
        this.activeGroup('tasks', group)
        this.filterTasks('tasks', group.innerText)
      })
    })
  
    this.menuPrio.forEach((group) => {
      group.addEventListener('click', () => {
        this.activeGroup('priority', group)
        this.filterTasks('priority', group.innerText)
      })
    })
  
    this.menuProject.forEach((group) => {
      group.addEventListener('click', () => {
        this.activeGroup('project', group)
        this.filterTasks('project', group.innerText)
      })
    })
    
    this.sidebarToggle.addEventListener('click', () => this.toggleSidebar())

    const menuProjectContainer = document.getElementById('menu-project')
    menuProjectContainer.addEventListener('DOMNodeInserted', (e) => {
      if(e.target.nodeName === 'LI') {
        this.menuProject = document.getElementById('menu-project').querySelectorAll('li')
        e.target.addEventListener('click', () => {
          this.activeGroup('project', e.target)
          this.filterTasks('project', e.target.innerText)
        })
      }
    })
  }

  activeGroup(groupName, targetElement) {
    const groups = {
      'tasks': this.menuTask,
      'priority': this.menuPrio,
      'project': this.menuProject
    }
  
    const groupElements = groups[groupName]
  
    groupElements.forEach(element => {
      element.classList.remove('active')
    })
  
    targetElement.classList.add('active')
  }
  
  toggleSidebar(){
    if(this.sidebar.classList.contains('show-sidebar')) {
      this.sidebar.classList.remove('show-sidebar')
      this.sidebar.classList.add('hide-sidebar')
      this.sidebarButton.checked = true // To force the burger menu to change state
    } else {
      this.sidebar.classList.remove('hide-sidebar')
      this.sidebar.classList.add('show-sidebar')
      this.sidebarButton.checked = false
    }
  }

  filterTasks() {
    const taskElements = this.taskList.querySelectorAll('.task');
    const selectedDateOption = Array.from(this.menuTask).find(li => li.classList.contains('active')).innerText;
    const selectedPriorityOption = Array.from(this.menuPrio).find(li => li.classList.contains('active')).innerText;
    const selectedProjectOption = Array.from(this.menuProject).find(li => li.classList.contains('active')).innerText;
    const userSelectedDate = this.getUserSelectedDate(selectedDateOption)
  
    taskElements.forEach(taskElement => {
      const taskDate = taskElement.querySelector('.taskTime').innerText
      const taskPriority = taskElement.querySelector('span').classList.value
      const taskProject = taskElement.querySelector('.project').innerText
  
      const shouldShowTask =
        (selectedDateOption === 'All Tasks' || (selectedDateOption === 'Daily' && this.isToday(taskDate, userSelectedDate)) || (selectedDateOption === 'Weekly' && this.isThisWeek(taskDate, userSelectedDate))) &&
        (selectedPriorityOption === 'All Priorities' || taskPriority.includes(selectedPriorityOption.toLowerCase())) &&
        (selectedProjectOption === 'All Projects' || taskProject === selectedProjectOption)
  
      taskElement.style.display = shouldShowTask ? 'flex' : 'none'
    })
  }

  getUserSelectedDate(selectedDateOption) {
    if (selectedDateOption === 'Daily') {
      return new Date().toISOString().slice(0, 10)
    } else if (selectedDateOption === 'Weekly') {
      const today = new Date()
      return today.toISOString().slice(0, 10)
    } else {
      return null
    }
  }

  isToday(dateString, userSelectedDate) {
    const today = new Date(userSelectedDate)
    const taskDate = new Date(dateString)
  
    if (isNaN(taskDate.getTime())) {
      return false
    }
  
    return today.toDateString() === taskDate.toDateString()
  }

  isThisWeek(dateString, userSelectedDate) {
    const today = new Date(userSelectedDate)
    const taskDate = new Date(dateString)
    
    if (isNaN(taskDate.getTime())) {
      return false
    }

    // Calculate the end date which is today + 6 days
    const endOfWeek = new Date(today.getTime() + 6 * 24 * 60 * 60 * 1000)
  
    // Check if taskDate is within the adjusted range (today + 6 days)
    return taskDate >= today && taskDate <= endOfWeek
  }

}

/***/ }),

/***/ "./src/js/PROJECT.js":
/*!***************************!*\
  !*** ./src/js/PROJECT.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PROJECT)
/* harmony export */ });
class PROJECT {
  static createProject(projectName) {
    const menuProject = document.getElementById('menu-project')
    // Create new Project
    const li = document.createElement('li')
    li.innerText = projectName

    menuProject.appendChild(li)
    return li
  }
}

/***/ }),

/***/ "./src/js/TODOS.js":
/*!*************************!*\
  !*** ./src/js/TODOS.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TODO)
/* harmony export */ });
class TODO {
  static createTask(taskContent, taskPriority, projectName, taskDate) {
    // Create new Task
    const div = document.createElement('div')
    div.classList.add('task')
    // div.innerText = taskContent

    const taskContentText = document.createElement('span')
    taskContentText.innerText = taskContent
    taskContentText.classList.add('task-content') 

    // Create a fake ::before with a span to change colors to indicate priority
    const priority = document.createElement('span')
    priority.classList.add('priority', taskPriority)

    // Create Project Header inside Task div
    const project = document.createElement('div')
    project.classList.add('project')
    project.innerText = projectName || 'All Projects'

    const editTask = document.createElement('div')
    editTask.classList.add('edit')
    editTask.innerText = 'EDIT'

    editTask.addEventListener('click', () => {
      console.log('EDIT ME!')
      const newContent = prompt('Enter new task content:', taskContent)
      if(newContent !== null) {
        taskContentText.innerText = newContent
        // Update the task in localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const taskIndex = tasks.findIndex(task => task.content === taskContent && task.priority === taskPriority && task.project === projectName && task.time === taskDate)
        if (taskIndex !== -1) {
          tasks[taskIndex].content = newContent
          localStorage.setItem('tasks', JSON.stringify(tasks))
        }
      }
    })

    const delTask = document.createElement('div')
    delTask.classList.add('delete')
    delTask.innerText = 'DELETE'

    delTask.addEventListener('click', () => {
      const confirmed = confirm('Are you sure you want to delete this task?')
      if(confirmed) {
        div.remove()
        // Remove the task from localStorage
        const tasks = JSON.parse(localStorage.getItem('tasks')) || []
        const taskIndex = tasks.findIndex(task => task.content === taskContent && task.priority === taskPriority && task.project === projectName && task.time === taskDate)
        if (taskIndex !== -1) {
          tasks.splice(taskIndex, 1)
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }
      }
    })

    const time = document.createElement('div')
    time.classList.add('taskTime')
    time.innerText = taskDate || ''

    
    div.append(priority, taskContentText, project, time, editTask, delTask)
    return div
  }
}


/***/ }),

/***/ "./src/img/noise-light.png":
/*!*********************************!*\
  !*** ./src/img/noise-light.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/c5e0046e69ce48f05baa.png";

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
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/style.css */ "./src/css/style.css");
/* harmony import */ var _css_reset_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/reset.css */ "./src/css/reset.css");
/* harmony import */ var _TODOS__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TODOS */ "./src/js/TODOS.js");
/* harmony import */ var _NAV__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NAV */ "./src/js/NAV.js");
/* harmony import */ var _PROJECT__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PROJECT */ "./src/js/PROJECT.js");
/* ==================================================================
    - - - - - - - - - - [ GLOBALS ]
   ==================================================================
    - - [ imports, dom elements, event listeners ]
    * description
   ================================================================== */

// -------------------------
// IMPORT






// -------------------------
// DOM ELEMENTS

// Task / Forms
const taskList = document.getElementById('task-list')
const createNew = document.getElementById('createNew')
const modal = document.getElementById('modal')
const form = document.getElementById('form')

// Groups
const projectGroups = document.getElementById('menu-project')
const newProject = document.getElementById('new-project')
const projectModal = document.getElementById('projectModal')
const projectForm = document.getElementById('projectForm')

const deleteProjectDiv = document.getElementById('delete-project')
const deleteProjectModal = document.getElementById('deleteProjectModal')
const deleteForm = document.getElementById('deleteForm')

// -------------------------
// EVENT LISTENERS
createNew.addEventListener('click', () => createTodo())
form.addEventListener('submit', () => formSubmit())
newProject.addEventListener('click', () => createProject())
projectForm.addEventListener('submit', () => projectFormSubmit())

deleteForm.addEventListener('submit', () => deleteSelectedProject())
deleteProjectDiv.addEventListener('click', () => deleteProject())

window.addEventListener('load', () => {
  loadTasks()
  loadGroups()
})

// -------------------------
// GLOBALS
const nav = new _NAV__WEBPACK_IMPORTED_MODULE_3__["default"]()

/* ==================================================================
    - - - - - - - - - - [ %FUNCTIONS ]
   ==================================================================
    - - [ main.js function ]
    * replace %FUNCTIONS with the functions focus and delete this line
    * description
   ================================================================== */

function createTodo() {
  modal.showModal()
}

function createProject() {
  projectModal.showModal()
}

function deleteProject() {
  deleteProjectModal.showModal()
}






// TEST TO FILL 100 TASKS - REMOVE - REMOVE - REMOVE
// const arr = ['low', 'medium', 'high']
// const projArr = ['All Projects', 'cool beansaaaaaa', 'jhsdfg']
// const timeArr = ['2024-30-4', '2011-24-8', '3069-42-11' ]

// for(let i = 0; i < 100; i++) {
//   const words = `Task: ${i}`
//   const prio = arr[Math.floor(Math.random() * arr.length)]
//   const proj = projArr[Math.floor(Math.random() * projArr.length)]
//   const ttime = timeArr[Math.floor(Math.random() * timeArr.length)]

//   const task = TODO.createTask(words, prio, proj, ttime)

//   taskList.appendChild(task)
// }
// TEST TO FILL 100 TASKS - REMOVE - REMOVE - REMOVE





function formSubmit() {
  console.log(form.task.value)
  const taskContent = form.task.value
  const taskPriority = radioCheck()
  const selectedProject = document.getElementById('dropdown').value
  const taskDateInput = form.time.value

  const taskDate = new Date(taskDateInput)
  const formattedTaskDate = taskDate.toISOString().slice(0, 10)
  const task = _TODOS__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(taskContent, taskPriority, selectedProject, formattedTaskDate)

  taskList.appendChild(task)

  const storage = JSON.parse(localStorage.getItem('tasks')) || []
  storage.push({content: taskContent, priority: taskPriority, project: selectedProject, time: formattedTaskDate})
  localStorage.setItem('tasks', JSON.stringify(storage))
}

function radioCheck() {
  const selected = document.querySelector(`input[name='priority']:checked`)
  const selectedValue = selected ? selected.value : ''
  return selectedValue
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem('tasks')) || []
  tasks.forEach(task => {
    const taskElement = _TODOS__WEBPACK_IMPORTED_MODULE_2__["default"].createTask(task.content, task.priority, task.project, task.time)
    taskList.appendChild(taskElement);
  });
}

function loadGroups() {
  const groups = JSON.parse(localStorage.getItem('groups')) || []
  groups.forEach(group => {
    const groupElement = _PROJECT__WEBPACK_IMPORTED_MODULE_4__["default"].createProject(group.content)
    projectGroups.appendChild(groupElement)

    populateDropdown(group.content, 'dropdown')
    populateDropdown(group.content, 'deleteDropdown')
  })
}

function projectFormSubmit() {
  console.log(projectForm.projectName.value)
  const projectContent = projectForm.projectName.value
  const newProjectElement = _PROJECT__WEBPACK_IMPORTED_MODULE_4__["default"].createProject(projectContent)

  newProjectElement.addEventListener('click', () => {
    nav.activeGroup('project', newProjectElement)
    nav.filterTasks('project', projectContent)
  })
  
  const storage = JSON.parse(localStorage.getItem('groups')) || []
  storage.push({content: projectContent})
  localStorage.setItem('groups', JSON.stringify(storage))

  populateDropdown(projectContent, 'dropdown')
  populateDropdown(projectContent, 'deleteDropdown')
  projectForm.reset()
}

function populateDropdown(groupContent, dropdownId) {
  const op = document.createElement('option')
  op.value = groupContent
  op.textContent = groupContent
  const dropdown = document.getElementById(dropdownId)
  dropdown.appendChild(op)
}

function deleteSelectedProject() {
  const selectedProject = deleteForm.deleteDropdown.value

  if(selectedProject !== 'All Projects') {
    const confirmed = confirm(`Are you sure you want to delete the project "${selectedProject}"?`)
    if(confirmed) {
      const projectElement = Array.from(projectGroups.children).find(li => li.innerText === selectedProject)
      if(projectElement) {
        projectElement.remove()
      }

      // Delete Group out of local storage
      const groups = JSON.parse(localStorage.getItem('groups')) || []
      const groupIndex = groups.findIndex(group => group.content === selectedProject)
      if (groupIndex !== -1) {
        groups.splice(groupIndex, 1)
        localStorage.setItem('groups', JSON.stringify(groups))
      }

      // Delete all tasks related to that group
      const tasks = JSON.parse(localStorage.getItem('tasks')) || []
      const updatedTasks = tasks.filter(task => task.project !== selectedProject)
      localStorage.setItem('tasks', JSON.stringify(updatedTasks))
      const taskElements = taskList.querySelectorAll('.task')
      taskElements.forEach(taskElement => {
        const taskProject = taskElement.querySelector('.project').innerText
        if (taskProject === selectedProject) {
          taskElement.remove()
        }
      })
    }
  }

  location.reload()
}
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDO0FBQzFDLDZDQUE2QyxjQUFjO0FBQzNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWixlQUFlO0FBQ2YsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlB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QUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6SWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztVQ2pFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDeUI7QUFDQTtBQUNDO0FBQ0g7QUFDUTs7QUFFL0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLGdCQUFnQiw0Q0FBRzs7QUFFbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQkFBa0IsU0FBUztBQUMzQiw0QkFBNEIsRUFBRTtBQUM5QjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGVBQWUsOENBQUk7O0FBRW5COztBQUVBO0FBQ0EsZ0JBQWdCLGdHQUFnRztBQUNoSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDhDQUFJO0FBQzVCO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixnREFBTztBQUNoQzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnREFBTzs7QUFFbkM7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxnQkFBZ0Isd0JBQXdCO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQSw4RUFBOEUsZ0JBQWdCO0FBQzlGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLEMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3Jlc2V0LmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2Nzcy9yZXNldC5jc3M/MTUyYiIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3N0eWxlLmNzcz85ZmNkIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2pzL05BVi5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvUFJPSkVDVC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvVE9ET1MuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIEJhc2UgY2xlYW4gc2xhdGUgKi9cclxuKiB7XHJcblx0bWFyZ2luOiAwO1xyXG5cdHBhZGRpbmc6IDA7XHJcblx0Ym9yZGVyOiAwO1xyXG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcblx0Zm9udDogaW5oZXJpdDtcclxuXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xyXG5pbWcsXHJcbnBpY3R1cmUge1xyXG5cdGZvbnQtc3R5bGU6IGl0YWxpYzsgLyogVmlzdWFsbHkgb2Zmc2V0IGFsdCB0ZXh0IHRvIGRpZmZlcmVudGlhdGUgZnJvbSBzdXJyb3VuZGluZyB0ZXh0ICAqL1xyXG4gIG1heC13aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IGF1dG87XHJcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogUmVtb3ZlIHBoYW50b20gd2hpdGVzcGFjZSAqL1xyXG5cclxufVxyXG5cclxuLyogU29tZSByZXNldCBydWxlcyBiYXNlZCBvbiBwaWNjYWxpbCBjc3MgcmVzZXQgKi9cclxuLyogaHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL2EtbW9yZS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xyXG4vKiBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAyNDA0MjkyMzM3NTUvaHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL2EtbW9yZS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xyXG5cclxuLyogUHJldmVudCBmb250IHNpemUgaW5mbGF0aW9uICovXHJcbmh0bWwge1xyXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XHJcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxufVxyXG5cclxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xyXG5ib2R5IHtcclxuICBtaW4taGVpZ2h0OiAxMDB2aDtcclxuICBsaW5lLWhlaWdodDogMS41O1xyXG59XHJcblxyXG4vKiBTZXQgc2hvcnRlciBsaW5lIGhlaWdodHMgb24gaGVhZGluZ3MgYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzICovXHJcbi8qIFdvcnRoIGl0IHRvIGNoYW5nZSBpZiBmb250cyBoYXZlIGxhcmdlIGFzY2VuZGVycyBhbmQgZGVzY2VuZGVycyAqL1xyXG5oMSwgaDIsIGgzLCBoNCxcclxuYnV0dG9uLCBpbnB1dCwgbGFiZWwge1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbn1cclxuXHJcbi8qIEJhbGFuY2UgdGV4dCB3cmFwcGluZyBvbiBoZWFkaW5ncyAqL1xyXG5oMSwgaDIsXHJcbmgzLCBoNCB7XHJcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xyXG59XHJcblxyXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xyXG5hOm5vdChbY2xhc3NdKSB7XHJcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xyXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XHJcbn1cclxuXHJcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xyXG5pbnB1dCwgYnV0dG9uLFxyXG50ZXh0YXJlYSwgc2VsZWN0IHtcclxuICBmb250LWZhbWlseTogaW5oZXJpdDtcclxuICBmb250LXNpemU6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi8qIE1ha2Ugc3VyZSB0ZXh0YXJlYXMgd2l0aG91dCBhIHJvd3MgYXR0cmlidXRlIGFyZSBub3QgdGlueSAqL1xyXG50ZXh0YXJlYTpub3QoW3Jvd3NdKSB7XHJcbiAgbWluLWhlaWdodDogMTBlbTtcclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9yZXNldC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEscUJBQXFCO0FBQ3JCO0NBQ0MsU0FBUztDQUNULFVBQVU7Q0FDVixTQUFTO0NBQ1Qsc0JBQXNCO0NBQ3RCLGFBQWE7Q0FDYix3QkFBd0I7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBLG9DQUFvQztBQUNwQzs7Q0FFQyxrQkFBa0IsRUFBRSxxRUFBcUU7RUFDeEYsZUFBZTtDQUNoQixZQUFZO0NBQ1osc0JBQXNCLEVBQUUsOEJBQThCOztBQUV2RDs7QUFFQSxpREFBaUQ7QUFDakQsc0RBQXNEO0FBQ3RELGlHQUFpRzs7QUFFakcsZ0NBQWdDO0FBQ2hDO0VBQ0UsMkJBQTJCO0VBQzNCLDhCQUE4QjtFQUM5QixzQkFBc0I7QUFDeEI7O0FBRUEsMkJBQTJCO0FBQzNCO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjs7QUFFQSxrRUFBa0U7QUFDbEUsb0VBQW9FO0FBQ3BFOztFQUVFLGdCQUFnQjtBQUNsQjs7QUFFQSxzQ0FBc0M7QUFDdEM7O0VBRUUsa0JBQWtCO0FBQ3BCOztBQUVBLDBEQUEwRDtBQUMxRDtFQUNFLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUEseUNBQXlDO0FBQ3pDOztFQUVFLG9CQUFvQjtFQUNwQixrQkFBa0I7QUFDcEI7O0FBRUEsOERBQThEO0FBQzlEO0VBQ0UsZ0JBQWdCO0FBQ2xCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIEJhc2UgY2xlYW4gc2xhdGUgKi9cXHJcXG4qIHtcXHJcXG5cXHRtYXJnaW46IDA7XFxyXFxuXFx0cGFkZGluZzogMDtcXHJcXG5cXHRib3JkZXI6IDA7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG5cXHRmb250OiBpbmhlcml0O1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIE1ha2UgaW1hZ2VzIGVhc2llciB0byB3b3JrIHdpdGggKi9cXHJcXG5pbWcsXFxyXFxucGljdHVyZSB7XFxyXFxuXFx0Zm9udC1zdHlsZTogaXRhbGljOyAvKiBWaXN1YWxseSBvZmZzZXQgYWx0IHRleHQgdG8gZGlmZmVyZW50aWF0ZSBmcm9tIHN1cnJvdW5kaW5nIHRleHQgICovXFxyXFxuICBtYXgtd2lkdGg6IDEwMCU7XFxyXFxuXFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7IC8qIFJlbW92ZSBwaGFudG9tIHdoaXRlc3BhY2UgKi9cXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogU29tZSByZXNldCBydWxlcyBiYXNlZCBvbiBwaWNjYWxpbCBjc3MgcmVzZXQgKi9cXHJcXG4vKiBodHRwczovL3BpY2NhbGlsLmxpL2Jsb2cvYS1tb3JlLW1vZGVybi1jc3MtcmVzZXQvICovXFxyXFxuLyogaHR0cHM6Ly93ZWIuYXJjaGl2ZS5vcmcvd2ViLzIwMjQwNDI5MjMzNzU1L2h0dHBzOi8vcGljY2FsaWwubGkvYmxvZy9hLW1vcmUtbW9kZXJuLWNzcy1yZXNldC8gKi9cXHJcXG5cXHJcXG4vKiBQcmV2ZW50IGZvbnQgc2l6ZSBpbmZsYXRpb24gKi9cXHJcXG5odG1sIHtcXHJcXG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG4gIHRleHQtc2l6ZS1hZGp1c3Q6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIFNldCBjb3JlIGJvZHkgZGVmYXVsdHMgKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IHNob3J0ZXIgbGluZSBoZWlnaHRzIG9uIGhlYWRpbmdzIGFuZCBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcclxcbi8qIFdvcnRoIGl0IHRvIGNoYW5nZSBpZiBmb250cyBoYXZlIGxhcmdlIGFzY2VuZGVycyBhbmQgZGVzY2VuZGVycyAqL1xcclxcbmgxLCBoMiwgaDMsIGg0LFxcclxcbmJ1dHRvbiwgaW5wdXQsIGxhYmVsIHtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XFxyXFxufVxcclxcblxcclxcbi8qIEJhbGFuY2UgdGV4dCB3cmFwcGluZyBvbiBoZWFkaW5ncyAqL1xcclxcbmgxLCBoMixcXHJcXG5oMywgaDQge1xcclxcbiAgdGV4dC13cmFwOiBiYWxhbmNlO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBBIGVsZW1lbnRzIHRoYXQgZG9uJ3QgaGF2ZSBhIGNsYXNzIGdldCBkZWZhdWx0IHN0eWxlcyAqL1xcclxcbmE6bm90KFtjbGFzc10pIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbi1za2lwLWluazogYXV0bztcXHJcXG4gIGNvbG9yOiBjdXJyZW50Q29sb3I7XFxyXFxufVxcclxcblxcclxcbi8qIEluaGVyaXQgZm9udHMgZm9yIGlucHV0cyBhbmQgYnV0dG9ucyAqL1xcclxcbmlucHV0LCBidXR0b24sXFxyXFxudGV4dGFyZWEsIHNlbGVjdCB7XFxyXFxuICBmb250LWZhbWlseTogaW5oZXJpdDtcXHJcXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBzdXJlIHRleHRhcmVhcyB3aXRob3V0IGEgcm93cyBhdHRyaWJ1dGUgYXJlIG5vdCB0aW55ICovXFxyXFxudGV4dGFyZWE6bm90KFtyb3dzXSkge1xcclxcbiAgbWluLWhlaWdodDogMTBlbTtcXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuLi9pbWcvbm9pc2UtbGlnaHQucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGAvKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBHTE9CQUxTIF1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBbMV0gU2l6ZSBoYWNrIHRvIHNldCBkZWZhdWx0IGZvbnQgc2l6ZSB0byBcIjEwcHhcIiB0byBtYWtlIDFyZW1cclxuICAgICAgICB0aGUgZXF1aXZlbGVudCBvZiAxMHB4LiAoMi40cmVtID0gMjRweCwgMC44cmVtID0gOHB4LCBldGMpXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuOnJvb3Qge1xyXG4gIGZvbnQtc2l6ZTogNjIuNSU7IC8qIFsxXSAqL1xyXG5cclxuICAvKiAtLS0tLS0tLS0tLS0+IERFRkFVTFQgREFSSyBNT0RFIENPTE9SUyEhISwgQ0hBTkdFIENPTE9SUyAmIERFTEVURSBUSElTIENPTU1FTlQgTElORSEhISA8LS0tLS0tLS0tLS0tICovXHJcbiAgLyogTWFpbiBjb2xvcnMgKi9cclxuICAtLUNPTE9SX0JHOiBoc2woMCwgMCUsIDAlKTtcclxuICAtLUNPTE9SX1BSSU1BUlk6IGhzbCgxNTUsIDMwJSwgMzglKTtcclxuICAtLUNPTE9SX1NFQ09OREFSWTogaHNsKDMwMywgNzElLCA3MyUpO1xyXG5cclxuICAtLVBSSU9fR1JFRU46IGhzbCgxMjAsIDc3JSwgNDYlKTtcclxuICAtLVBSSU9fUFVSUExFOiBoc2woMjc4LCA3MiUsIDUwJSk7XHJcbiAgLS1QUklPX1JFRDogaHNsKDAsIDc5JSwgNTAlKTtcclxuXHJcbiAgLyogVGV4dCAqL1xyXG4gIC0tRk9OVF9DT0xPUjogaHNsKDMwLCAxMDAlLCA5OCUpO1xyXG5cclxuICAvKiBNaXNjIExheW91dCAqL1xyXG4gIC0tUkFESVVTOiA2cHg7XHJcbn1cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBCQVNFIFNUWUxFUyBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIFsgYm9keSwgZm9udHMsIHRleHQgZWxlbWVudHMsIG1lZGlhIGVsZW1lbnRzIF1cclxuICAgICogU3R5bGVzIHRoYXQgYXJlIHNoYXJlZCBhY3Jvc3MgdGhlIGVudGlyZSBzaXRlXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIFxyXG5ib2R5IHtcclxuICBmb250LXNpemU6IDJyZW07XHJcbiAgZm9udC1mYW1pbHk6ICdGaXJhIENvZGUnLCBzYW5zLXNlcmlmO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX0JHKTtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XHJcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIFtjb250ZW50LXN0YXJ0XSBtaW5tYXgoMzAwcHgsIDcwMHB4KSBbY29udGVudC1lbmRdIDFmcjtcclxuICBncmlkLXRlbXBsYXRlLXJvd3M6IG1pbi1jb250ZW50IDFmcjtcclxuICBnYXA6IDIwcHg7XHJcblxyXG4gICYgPiAqIHtcclxuICAgIGdyaWQtY29sdW1uOiBjb250ZW50O1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xyXG4gICAgJiA+ICogeyBncmlkLWNvbHVtbjogMSAvIDI7IH1cclxuICB9XHJcbn1cclxuXHJcbjo6c2VsZWN0aW9uIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xyXG4gIGNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XHJcbn1cclxuXHJcbmhyIHtcclxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XHJcbn1cclxuXHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBIRUFERVIgXVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICogRXh0cmVtZWx5IHNpbXBsZSBoZWFkZXIsIHVwZGF0ZXMgb24gd2hpY2ggdGFzayBncm91cCBzZWxlY3RlZFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuICBcclxuaGVhZGVyIHtcclxuICBwYWRkaW5nOiAyMHB4IDAgMCAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogNHJlbTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG5cclxuICAmIDpsYXN0LWNoaWxkIHtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODUwcHgpIHtcclxuICAgICYgOmZpcnN0LWNoaWxkIHsgLyogTWFrZSByb29tIGZvciBoYW1idXJnZXIgbWVudSBhdCBzbWFsbGVyIHJlc29sdXRpb24gKi9cclxuICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgfVxyXG4gIH0gIFxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBTSURFQkFSIF1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAqIEEgc2lkZWJhciB0aGF0IHRvZ2dsZXMgb24gYW5kIG9mZiB3aGVuIGluIG1vYmlsZSwgcG9wcGluZ1xyXG4gICAgICBpdCBvdXQgZnJvbSB0aGUgbGVmdCBzaWRlLiBPdGhlcndpc2UgcGVybWFuZW50bHkgb24gd2hpbGVcclxuICAgICAgb24gZGVza3RvcC5cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG4jc2lkZWJhci10b2dnbGUge1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGhlaWdodDogNzBweDtcclxuICB0b3A6IDIwcHg7XHJcbiAgbGVmdDogY2FsYygoMTAwdncgLSA5NDBweCkgLyAyKTtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgei1pbmRleDogMTA7XHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICYgc3BhbiB7XHJcbiAgICBsZWZ0OiAyMCU7XHJcbiAgICB0b3A6IDMwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDZweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHkgMC41NXMgZWFzZTtcclxuICB9XHJcblxyXG4gICYgc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAwJTtcclxuICB9XHJcblxyXG4gICYgc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xyXG4gIH1cclxuXHJcbiAgJiBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZSgtMnB4LCAtMXB4KTtcclxuICAgIGJhY2tncm91bmQ6IHJlZDtcclxuICB9XHJcblxyXG4gICYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46Zmlyc3QtY2hpbGQge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVgoLTBweCkgdHJhbnNsYXRlWSgtM3B4KTtcclxuICB9XHJcblxyXG4gICYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcclxuICB9XHJcblxyXG4gICYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bGFzdC1jaGlsZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVgoLTZweCkgdHJhbnNsYXRlWSgwcHgpO1xyXG4gIH1cclxuXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI5MHB4KSB7IGxlZnQ6IDIwcHg7IH1cclxuICAvKiBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpIHsgbGVmdDogMjBweDsgfSAqL1xyXG59XHJcblxyXG4jc2lkZWJhciB7XHJcbiAgd2lkdGg6IDI3NXB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiAxMjBweDtcclxuICBsZWZ0OiBjYWxjKCgxMDB2dyAtIDEzMDBweCkgLyAyKTsgLyogZm9yY2UgcmVzcG9uc2l2ZW5lc3Mgd2hlbiByZXNpemluZy4uIG1vdGhlciBvZiBnb2QgaXQgd29ya3MgKi9cclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgei1pbmRleDogMTtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4zcyBlYXNlLW91dCwgb3BhY2l0eSAwLjNzIGVhc2Utb3V0LCB2aXNpYmlsaXR5IDAuM3MgZWFzZS1vdXQ7XHJcblxyXG4gICYgLmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tcmlnaHQgMC4zcyBlYXNlLWluLW91dDtcclxuICAgIHRleHQtc2hhZG93OiAtMnB4IDJweCAycHggdmFyKC0tQ09MT1JfQkcpO1xyXG5cclxuICAgICY6OmJlZm9yZSB7XHJcbiAgICAgIGNvbnRlbnQ6ICc+JztcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAmID4gKiB7XHJcbiAgICBtYXJnaW46IDAgMjBweCAyMHB4IDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgJiA+ICogPiAqIHtcclxuICAgIHBhZGRpbmctdG9wOiAxNHB4O1xyXG4gIH1cclxuXHJcbiAgJiAubG93ICB7IGNvbG9yOiB2YXIoLS1QUklPX0dSRUVOKTsgfVxyXG4gICYgLm1lZGl1bSAgeyBjb2xvcjogdmFyKC0tUFJJT19QVVJQTEUpOyB9XHJcbiAgJiAuaGlnaCB7IGNvbG9yOiB2YXIoLS1QUklPX1JFRCk7IH1cclxuXHJcbiAgJiAucHJvamVjdC1idG4ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBmb250LXNpemU6IDIuMnJlbTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcblxyXG4gICYgLnByb2plY3QtYnRuOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjkwcHgpIHtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC44KTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XHJcbiAgfSBcclxufVxyXG5cclxuLmhpZGUtc2lkZWJhciB7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MDBweCk7XHJcbiAgb3BhY2l0eTogMDtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbiNkZWxldGUtcHJvamVjdCB7XHJcbiAgLyogbWFyZ2luLXRvcDogNjBweDsgKi9cclxuICBvcGFjaXR5OiAwLjU7XHJcblxyXG4gICY6aG92ZXIge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIGNvbG9yOiBkYXJrcmVkO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIE1BSU4gQ09OVEVOVCBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIFsgbWFpbiwgc2VjdGlvbiwgZGl2LCBhcnRpY2xlLCBhc2lkZSwgZm9ybSBdXHJcbiAgICAqIHJlcGxhY2UgJUNPTlRFTlQgd2l0aCBvbmUgb2YgdGhlIGFib3ZlIHdoZW4gcGFzdGluZyB0aGlzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxubWFpbiB7XHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XHJcbiAgZ2FwOiAxMHB4O1xyXG5cclxuICAmID4gKiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDI4cHg7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLnByaW9yaXR5IHsgLyogVEFTSyBDT0xPUiBCQVIgT0YgSU1QT1JUQU5DRSEgKi9cclxuICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEycHg7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG5cclxuICAvKiBUYXNrIGNvbG9yIGJhciBjb2xvciBzZWxlY3QgKi9cclxuICAmIC5sb3cgIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19HUkVFTik7IH1cclxuICAmIC5tZWRpdW0gIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19QVVJQTEUpOyB9XHJcbiAgJiAuaGlnaCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9fUkVEKTsgfVxyXG5cclxuICAmIDpob3ZlciAucHJpb3JpdHkgeyAvKiBFeHBhbmQgcHJpb3JpdHkgY29sb3Igc2xpZ2h0bHkgKi9cclxuICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgdmFyKC0tQ09MT1JfQkcpO1xyXG4gIH1cclxuXHJcbiAgJiAucHJvamVjdCB7IC8qIFByb2plY3QgdGFiIG9uIHRoZSB0b2RvIGl0ZW0gKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX0JHKTsgLyogQ0hBTkdFIENPTE9SIElOIEpTIFRPIFRIRSBUQVNLIFBST0pFQ1QgVEhBVCBJUyBHSVZFTiAqL1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcblxyXG4gICYgLnRhc2tUaW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAmIC5lZGl0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmID4gKjpob3ZlciAuZWRpdCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgJiAuZGVsZXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzk3KTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICYgPiAqOmhvdmVyIC5kZWxldGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBUQVNLIE1PREFMICYgRk9STSBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIFsgbWFpbiwgc2VjdGlvbiwgZGl2LCBhcnRpY2xlLCBhc2lkZSwgZm9ybSBdXHJcbiAgICAqIHJlcGxhY2UgJUNPTlRFTlQgd2l0aCBvbmUgb2YgdGhlIGFib3ZlIHdoZW4gcGFzdGluZyB0aGlzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZGlhbG9nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWF4LWhlaWdodDogNDYwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDMwJTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gIHotaW5kZXg6IDEyO1xyXG4gIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xyXG5cclxuICAmOjpiYWNrZHJvcCB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gICYgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmZvcm0tdGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIFxyXG4gICAgICYgaW5wdXQge1xyXG4gICAgICB3aWR0aDogNDgwcHg7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gICYgLmZvcm0tcHJpbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmIGxhYmVsIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogdmFyKC0tQ09MT1JfQkcpIC0ycHggMXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgb3BhY2l0eTogMDsgLyogSGFja3kgZml4IGZvciBpbml0aWFsIHBhZ2UgbG9hZCB0byBmb3JjZSBubyByYWRpb3MgKi9cclxuICAgIH1cclxuXHJcbiAgICAmIGlucHV0W2lkPVwibG93XCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJsb3dcIl0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX0dSRUVOKTtcclxuICAgIH1cclxuICBcclxuICAgICYgaW5wdXRbaWQ9XCJtZWRpdW1cIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cIm1lZGl1bVwiXSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9fUFVSUExFKTtcclxuICAgIH1cclxuICBcclxuICAgICYgaW5wdXRbaWQ9XCJoaWdoXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJoaWdoXCJdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19SRUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAjdGFza05hbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgfVxyXG5cclxuICAmIC5zdWJtaXRUbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuXHJcbiAgICAmIHNlbGVjdCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgI2Ryb3Bkb3duIHtcclxuICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE5ldyBQcm9qZWN0IE1vZGFsICovXHJcbiNwcm9qZWN0TW9kYWwge1xyXG4gIGhlaWdodDogMTQwcHg7XHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcblxyXG4gICYgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBHcm91cCBNb2RhbCAqL1xyXG4jZGVsZXRlUHJvamVjdE1vZGFsIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICYgc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgcGFkZGluZzogNHB4IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcbiAgfVxyXG5cclxuICAmIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF0geyAvKiBTdWJtaXQgQnV0dG9uIGZvciBib3RoIG1vZGFscyAqL1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgY29sb3I6IHZhcigtLUNPTE9SX0JHKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O3VFQUt1RTs7QUFFdkU7RUFDRSxnQkFBZ0IsRUFBRSxRQUFROztFQUUxQix5R0FBeUc7RUFDekcsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMscUNBQXFDOztFQUVyQyxnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDRCQUE0Qjs7RUFFNUIsU0FBUztFQUNULGdDQUFnQzs7RUFFaEMsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7O0FBR0E7Ozs7O3VFQUt1RTs7QUFFdkU7RUFDRSxlQUFlO0VBQ2Ys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LHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7O0VBRWI7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLHNCQUFzQjtFQUN0QixhQUFhOztFQUViO0lBQ0Usc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsc0JBQXNCLGtDQUFrQztFQUN0RCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWiw0QkFBNEI7O0VBRTVCO0lBQ0Usc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBHTE9CQUxTIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgWzFdIFNpemUgaGFjayB0byBzZXQgZGVmYXVsdCBmb250IHNpemUgdG8gXFxcIjEwcHhcXFwiIHRvIG1ha2UgMXJlbVxcclxcbiAgICAgICAgdGhlIGVxdWl2ZWxlbnQgb2YgMTBweC4gKDIuNHJlbSA9IDI0cHgsIDAuOHJlbSA9IDhweCwgZXRjKVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IC8qIFsxXSAqL1xcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS0tPiBERUZBVUxUIERBUksgTU9ERSBDT0xPUlMhISEsIENIQU5HRSBDT0xPUlMgJiBERUxFVEUgVEhJUyBDT01NRU5UIExJTkUhISEgPC0tLS0tLS0tLS0tLSAqL1xcclxcbiAgLyogTWFpbiBjb2xvcnMgKi9cXHJcXG4gIC0tQ09MT1JfQkc6IGhzbCgwLCAwJSwgMCUpO1xcclxcbiAgLS1DT0xPUl9QUklNQVJZOiBoc2woMTU1LCAzMCUsIDM4JSk7XFxyXFxuICAtLUNPTE9SX1NFQ09OREFSWTogaHNsKDMwMywgNzElLCA3MyUpO1xcclxcblxcclxcbiAgLS1QUklPX0dSRUVOOiBoc2woMTIwLCA3NyUsIDQ2JSk7XFxyXFxuICAtLVBSSU9fUFVSUExFOiBoc2woMjc4LCA3MiUsIDUwJSk7XFxyXFxuICAtLVBSSU9fUkVEOiBoc2woMCwgNzklLCA1MCUpO1xcclxcblxcclxcbiAgLyogVGV4dCAqL1xcclxcbiAgLS1GT05UX0NPTE9SOiBoc2woMzAsIDEwMCUsIDk4JSk7XFxyXFxuXFxyXFxuICAvKiBNaXNjIExheW91dCAqL1xcclxcbiAgLS1SQURJVVM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBCQVNFIFNUWUxFUyBdXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSBbIGJvZHksIGZvbnRzLCB0ZXh0IGVsZW1lbnRzLCBtZWRpYSBlbGVtZW50cyBdXFxyXFxuICAgICogU3R5bGVzIHRoYXQgYXJlIHNoYXJlZCBhY3Jvc3MgdGhlIGVudGlyZSBzaXRlXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICBcXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBDb2RlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX0JHKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL25vaXNlLWxpZ2h0LnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgW2NvbnRlbnQtc3RhcnRdIG1pbm1heCgzMDBweCwgNzAwcHgpIFtjb250ZW50LWVuZF0gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAmID4gKiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBjb250ZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICYgPiAqIHsgZ3JpZC1jb2x1bW46IDEgLyAyOyB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XFxyXFxuICBjb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgSEVBREVSIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgKiBFeHRyZW1lbHkgc2ltcGxlIGhlYWRlciwgdXBkYXRlcyBvbiB3aGljaCB0YXNrIGdyb3VwIHNlbGVjdGVkXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICBcXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAmIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcclxcbiAgICAmIDpmaXJzdC1jaGlsZCB7IC8qIE1ha2Ugcm9vbSBmb3IgaGFtYnVyZ2VyIG1lbnUgYXQgc21hbGxlciByZXNvbHV0aW9uICovXFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICB9ICBcXHJcXG59XFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBTSURFQkFSIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgKiBBIHNpZGViYXIgdGhhdCB0b2dnbGVzIG9uIGFuZCBvZmYgd2hlbiBpbiBtb2JpbGUsIHBvcHBpbmdcXHJcXG4gICAgICBpdCBvdXQgZnJvbSB0aGUgbGVmdCBzaWRlLiBPdGhlcndpc2UgcGVybWFuZW50bHkgb24gd2hpbGVcXHJcXG4gICAgICBvbiBkZXNrdG9wLlxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbiNzaWRlYmFyLXRvZ2dsZSB7XFxyXFxuICB3aWR0aDogODBweDtcXHJcXG4gIGhlaWdodDogNzBweDtcXHJcXG4gIHRvcDogMjBweDtcXHJcXG4gIGxlZnQ6IGNhbGMoKDEwMHZ3IC0gOTQwcHgpIC8gMik7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG5cXHJcXG4gICYgaW5wdXQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgc3BhbiB7XFxyXFxuICAgIGxlZnQ6IDIwJTtcXHJcXG4gICAgdG9wOiAzMCU7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB3aWR0aDogNTBweDtcXHJcXG4gICAgaGVpZ2h0OiA2cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC41cyBjdWJpYy1iZXppZXIoMC43NywwLjIsMC4wNSwxLjApLFxcclxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcXHJcXG4gICAgICAgICAgICAgICAgb3BhY2l0eSAwLjU1cyBlYXNlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBzcGFuOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMCU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcclxcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwJSAxMDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBpbnB1dDpjaGVja2VkIH4gc3BhbiB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDQ1ZGVnKSB0cmFuc2xhdGUoLTJweCwgLTFweCk7XFxyXFxuICAgIGJhY2tncm91bmQ6IHJlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46Zmlyc3QtY2hpbGQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWCgtMHB4KSB0cmFuc2xhdGVZKC0zcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpIHNjYWxlKDAuMiwgMC4yKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bGFzdC1jaGlsZCB7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWCgtNnB4KSB0cmFuc2xhdGVZKDBweCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjkwcHgpIHsgbGVmdDogMjBweDsgfVxcclxcbiAgLyogQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAwMHB4KSB7IGxlZnQ6IDIwcHg7IH0gKi9cXHJcXG59XFxyXFxuXFxyXFxuI3NpZGViYXIge1xcclxcbiAgd2lkdGg6IDI3NXB4O1xcclxcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgdG9wOiAxMjBweDtcXHJcXG4gIGxlZnQ6IGNhbGMoKDEwMHZ3IC0gMTMwMHB4KSAvIDIpOyAvKiBmb3JjZSByZXNwb25zaXZlbmVzcyB3aGVuIHJlc2l6aW5nLi4gbW90aGVyIG9mIGdvZCBpdCB3b3JrcyAqL1xcclxcbiAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gIG92ZXJmbG93LXk6IGF1dG87XFxyXFxuICB6LWluZGV4OiAxO1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuM3MgZWFzZS1vdXQsIG9wYWNpdHkgMC4zcyBlYXNlLW91dCwgdmlzaWJpbGl0eSAwLjNzIGVhc2Utb3V0O1xcclxcblxcclxcbiAgJiAuYWN0aXZlIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxyXFxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1yaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB0ZXh0LXNoYWRvdzogLTJweCAycHggMnB4IHZhcigtLUNPTE9SX0JHKTtcXHJcXG5cXHJcXG4gICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICBjb250ZW50OiAnPic7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICYgPiAqIHtcXHJcXG4gICAgbWFyZ2luOiAwIDIwcHggMjBweCAwO1xcclxcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAmID4gKiA+ICoge1xcclxcbiAgICBwYWRkaW5nLXRvcDogMTRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLmxvdyAgeyBjb2xvcjogdmFyKC0tUFJJT19HUkVFTik7IH1cXHJcXG4gICYgLm1lZGl1bSAgeyBjb2xvcjogdmFyKC0tUFJJT19QVVJQTEUpOyB9XFxyXFxuICAmIC5oaWdoIHsgY29sb3I6IHZhcigtLVBSSU9fUkVEKTsgfVxcclxcblxcclxcbiAgJiAucHJvamVjdC1idG4ge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgcGFkZGluZzogOHB4IDA7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgICBvcGFjaXR5OiAwLjg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5wcm9qZWN0LWJ0bjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG5cXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyOTBweCkge1xcclxcbiAgICB0b3A6IDA7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjgpO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICB9IFxcclxcbn1cXHJcXG5cXHJcXG4uaGlkZS1zaWRlYmFyIHtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAwcHgpO1xcclxcbiAgb3BhY2l0eTogMDtcXHJcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuI2RlbGV0ZS1wcm9qZWN0IHtcXHJcXG4gIC8qIG1hcmdpbi10b3A6IDYwcHg7ICovXFxyXFxuICBvcGFjaXR5OiAwLjU7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gICAgY29sb3I6IGRhcmtyZWQ7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgTUFJTiBDT05URU5UIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIFsgbWFpbiwgc2VjdGlvbiwgZGl2LCBhcnRpY2xlLCBhc2lkZSwgZm9ybSBdXFxyXFxuICAgICogcmVwbGFjZSAlQ09OVEVOVCB3aXRoIG9uZSBvZiB0aGUgYWJvdmUgd2hlbiBwYXN0aW5nIHRoaXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLWF1dG8tcm93czogbWluLWNvbnRlbnQ7XFxyXFxuICBnYXA6IDEwcHg7XFxyXFxuXFxyXFxuICAmID4gKiB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHBhZGRpbmc6IDEycHggMTBweCAxMnB4IDI4cHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuXFxyXFxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XFxyXFxuICAgICAgbWFyZ2luOiAwIDEwcHg7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLnByaW9yaXR5IHsgLyogVEFTSyBDT0xPUiBCQVIgT0YgSU1QT1JUQU5DRSEgKi9cXHJcXG4gICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgbGVmdDogMDtcXHJcXG4gICAgd2lkdGg6IDEycHg7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8qIFRhc2sgY29sb3IgYmFyIGNvbG9yIHNlbGVjdCAqL1xcclxcbiAgJiAubG93ICB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9fR1JFRU4pOyB9XFxyXFxuICAmIC5tZWRpdW0gIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19QVVJQTEUpOyB9XFxyXFxuICAmIC5oaWdoIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19SRUQpOyB9XFxyXFxuXFxyXFxuICAmIDpob3ZlciAucHJpb3JpdHkgeyAvKiBFeHBhbmQgcHJpb3JpdHkgY29sb3Igc2xpZ2h0bHkgKi9cXHJcXG4gICAgd2lkdGg6IDI0cHg7XFxyXFxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHZhcigtLUNPTE9SX0JHKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLnByb2plY3QgeyAvKiBQcm9qZWN0IHRhYiBvbiB0aGUgdG9kbyBpdGVtICovXFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiA1MCU7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfQkcpOyAvKiBDSEFOR0UgQ09MT1IgSU4gSlMgVE8gVEhFIFRBU0sgUFJPSkVDVCBUSEFUIElTIEdJVkVOICovXFxyXFxuICAgIGhlaWdodDogMTRweDtcXHJcXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xcclxcbiAgICBwYWRkaW5nOiAwIDEwcHg7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICBsaW5lLWhlaWdodDogMS4yO1xcclxcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgb3BhY2l0eTogMC41O1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAudGFza1RpbWUge1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMTBweDtcXHJcXG4gICAgYm90dG9tOiAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuZWRpdCB7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcclxcbiAgICBjb2xvcjogYmxhY2s7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcXHJcXG4gICAgbGVmdDogLTVweDtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiA+ICo6aG92ZXIgLmVkaXQge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuZGVsZXRlIHtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICByaWdodDogMDtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMCwgMCwgMC4zOTcpO1xcclxcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjFzIGVhc2UtaW4tb3V0O1xcclxcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiA+ICo6aG92ZXIgLmRlbGV0ZSB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICB9XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgVEFTSyBNT0RBTCAmIEZPUk0gXVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gWyBtYWluLCBzZWN0aW9uLCBkaXYsIGFydGljbGUsIGFzaWRlLCBmb3JtIF1cXHJcXG4gICAgKiByZXBsYWNlICVDT05URU5UIHdpdGggb25lIG9mIHRoZSBhYm92ZSB3aGVuIHBhc3RpbmcgdGhpc1xcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbmRpYWxvZyB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XFxyXFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uL2ltZy9ub2lzZS1saWdodC5wbmcnKTtcXHJcXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XFxyXFxuICBtYXgtaGVpZ2h0OiA0NjBweDtcXHJcXG4gIHdpZHRoOiA1MDBweDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcclxcbiAgbGVmdDogNTAlO1xcclxcbiAgdG9wOiAzMCU7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgei1pbmRleDogMTI7XFxyXFxuICBib3JkZXI6IDJweCBkb3R0ZWQgdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcXHJcXG5cXHJcXG4gICY6OmJhY2tkcm9wIHtcXHJcXG4gICAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDRweCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmZvcm0ge1xcclxcbiAgcGFkZGluZzogMTBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgZ2FwOiAyMHB4O1xcclxcblxcclxcbiAgbGFiZWwge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBpbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0ge1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgICBwYWRkaW5nOiAycHggMTBweDtcXHJcXG5cXHJcXG4gICAgJjpmb2N1cyB7XFxyXFxuICAgICAgYm94LXNoYWRvdzogMCAycHggMCAwIHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLmZvcm0tdGltZSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcXHJcXG4gICAgXFxyXFxuICAgICAmIGlucHV0IHtcXHJcXG4gICAgICB3aWR0aDogNDgwcHg7XFxyXFxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XFxyXFxuICAgICAgcGFkZGluZzogOHB4IDIwcHg7XFxyXFxuICAgICAgbWFyZ2luLXRvcDogMTJweDtcXHJcXG4gICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLmZvcm0tcHJpbyB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogMjBweDtcXHJcXG4gICAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG5cXHJcXG4gICAgJiBsYWJlbCB7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHdpZHRoOiAzMyU7XFxyXFxuICAgICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gICAgICB0ZXh0LXNoYWRvdzogdmFyKC0tQ09MT1JfQkcpIC0ycHggMXB4O1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgaW5wdXRbdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxyXFxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBvcGFjaXR5OiAwOyAvKiBIYWNreSBmaXggZm9yIGluaXRpYWwgcGFnZSBsb2FkIHRvIGZvcmNlIG5vIHJhZGlvcyAqL1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgICYgaW5wdXRbaWQ9XFxcImxvd1xcXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XFxcImxvd1xcXCJdIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX0dSRUVOKTtcXHJcXG4gICAgfVxcclxcbiAgXFxyXFxuICAgICYgaW5wdXRbaWQ9XFxcIm1lZGl1bVxcXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XFxcIm1lZGl1bVxcXCJdIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX1BVUlBMRSk7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAmIGlucHV0W2lkPVxcXCJoaWdoXFxcIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cXFwiaGlnaFxcXCJdIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX1JFRCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgI3Rhc2tOYW1lIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi40cmVtO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAuc3VibWl0VG8ge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDE0cHg7XFxyXFxuXFxyXFxuICAgICYgc2VsZWN0IHtcXHJcXG4gICAgICBmbGV4LWdyb3c6IDE7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgI2Ryb3Bkb3duIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XFxyXFxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vKiBOZXcgUHJvamVjdCBNb2RhbCAqL1xcclxcbiNwcm9qZWN0TW9kYWwge1xcclxcbiAgaGVpZ2h0OiAxNDBweDtcXHJcXG5cXHJcXG4gICYgaW5wdXQge1xcclxcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4IDA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGJ1dHRvbiB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogRGVsZXRlIEdyb3VwIE1vZGFsICovXFxyXFxuI2RlbGV0ZVByb2plY3RNb2RhbCB7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG5cXHJcXG4gICYgc2VsZWN0IHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgICBwYWRkaW5nOiA0cHggMTRweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBidXR0b24ge1xcclxcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgICB3aWR0aDogOTAlO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbmJ1dHRvblt0eXBlPXN1Ym1pdF0geyAvKiBTdWJtaXQgQnV0dG9uIGZvciBib3RoIG1vZGFscyAqL1xcclxcbiAgd2lkdGg6IDE1MHB4O1xcclxcbiAgaGVpZ2h0OiA0MHB4O1xcclxcbiAgcmlnaHQ6IDI1cHg7XFxyXFxuICBjb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcXHJcXG4gIG9wYWNpdHk6IDAuODtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuXFxyXFxuICAmOmhvdmVyIHtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgfVxcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcmVzZXQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgTkFWIHtcclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIHRoaXMudGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JylcclxuICAgIHRoaXMuc2lkZWJhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyJylcclxuICAgIHRoaXMubWVudVRhc2sgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS10YXNrcycpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcclxuICAgIHRoaXMubWVudVByaW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1wcmlvcml0eScpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcclxuICAgIHRoaXMubWVudVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1wcm9qZWN0JykucXVlcnlTZWxlY3RvckFsbCgnbGknKVxyXG4gICAgdGhpcy5zaWRlYmFyVG9nZ2xlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NpZGViYXItdG9nZ2xlJylcclxuICAgIHRoaXMuc2lkZWJhckJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyLWJ1dHRvbicpXHJcbiAgICB0aGlzLmluaXRFdmVudExpc3RlbmVycygpXHJcbiAgfVxyXG5cclxuICBpbml0RXZlbnRMaXN0ZW5lcnMoKSB7XHJcblxyXG4gICAgd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEyOTBweCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHRoaXMudG9nZ2xlU2lkZWJhcigpKVxyXG5cclxuICAgIHRoaXMubWVudVRhc2suZm9yRWFjaCgoZ3JvdXApID0+IHtcclxuICAgICAgZ3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVHcm91cCgndGFza3MnLCBncm91cClcclxuICAgICAgICB0aGlzLmZpbHRlclRhc2tzKCd0YXNrcycsIGdyb3VwLmlubmVyVGV4dClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgXHJcbiAgICB0aGlzLm1lbnVQcmlvLmZvckVhY2goKGdyb3VwKSA9PiB7XHJcbiAgICAgIGdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlR3JvdXAoJ3ByaW9yaXR5JywgZ3JvdXApXHJcbiAgICAgICAgdGhpcy5maWx0ZXJUYXNrcygncHJpb3JpdHknLCBncm91cC5pbm5lclRleHQpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgdGhpcy5tZW51UHJvamVjdC5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICBncm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUdyb3VwKCdwcm9qZWN0JywgZ3JvdXApXHJcbiAgICAgICAgdGhpcy5maWx0ZXJUYXNrcygncHJvamVjdCcsIGdyb3VwLmlubmVyVGV4dClcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBcclxuICAgIHRoaXMuc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHRoaXMudG9nZ2xlU2lkZWJhcigpKVxyXG5cclxuICAgIGNvbnN0IG1lbnVQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcHJvamVjdCcpXHJcbiAgICBtZW51UHJvamVjdENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdET01Ob2RlSW5zZXJ0ZWQnLCAoZSkgPT4ge1xyXG4gICAgICBpZihlLnRhcmdldC5ub2RlTmFtZSA9PT0gJ0xJJykge1xyXG4gICAgICAgIHRoaXMubWVudVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1wcm9qZWN0JykucXVlcnlTZWxlY3RvckFsbCgnbGknKVxyXG4gICAgICAgIGUudGFyZ2V0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgICAgdGhpcy5hY3RpdmVHcm91cCgncHJvamVjdCcsIGUudGFyZ2V0KVxyXG4gICAgICAgICAgdGhpcy5maWx0ZXJUYXNrcygncHJvamVjdCcsIGUudGFyZ2V0LmlubmVyVGV4dClcclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgYWN0aXZlR3JvdXAoZ3JvdXBOYW1lLCB0YXJnZXRFbGVtZW50KSB7XHJcbiAgICBjb25zdCBncm91cHMgPSB7XHJcbiAgICAgICd0YXNrcyc6IHRoaXMubWVudVRhc2ssXHJcbiAgICAgICdwcmlvcml0eSc6IHRoaXMubWVudVByaW8sXHJcbiAgICAgICdwcm9qZWN0JzogdGhpcy5tZW51UHJvamVjdFxyXG4gICAgfVxyXG4gIFxyXG4gICAgY29uc3QgZ3JvdXBFbGVtZW50cyA9IGdyb3Vwc1tncm91cE5hbWVdXHJcbiAgXHJcbiAgICBncm91cEVsZW1lbnRzLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJylcclxuICAgIH0pXHJcbiAgXHJcbiAgICB0YXJnZXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpXHJcbiAgfVxyXG4gIFxyXG4gIHRvZ2dsZVNpZGViYXIoKXtcclxuICAgIGlmKHRoaXMuc2lkZWJhci5jbGFzc0xpc3QuY29udGFpbnMoJ3Nob3ctc2lkZWJhcicpKSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdzaG93LXNpZGViYXInKVxyXG4gICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LmFkZCgnaGlkZS1zaWRlYmFyJylcclxuICAgICAgdGhpcy5zaWRlYmFyQnV0dG9uLmNoZWNrZWQgPSB0cnVlIC8vIFRvIGZvcmNlIHRoZSBidXJnZXIgbWVudSB0byBjaGFuZ2Ugc3RhdGVcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuc2lkZWJhci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlLXNpZGViYXInKVxyXG4gICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LmFkZCgnc2hvdy1zaWRlYmFyJylcclxuICAgICAgdGhpcy5zaWRlYmFyQnV0dG9uLmNoZWNrZWQgPSBmYWxzZVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZmlsdGVyVGFza3MoKSB7XHJcbiAgICBjb25zdCB0YXNrRWxlbWVudHMgPSB0aGlzLnRhc2tMaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy50YXNrJyk7XHJcbiAgICBjb25zdCBzZWxlY3RlZERhdGVPcHRpb24gPSBBcnJheS5mcm9tKHRoaXMubWVudVRhc2spLmZpbmQobGkgPT4gbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkuaW5uZXJUZXh0O1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcmlvcml0eU9wdGlvbiA9IEFycmF5LmZyb20odGhpcy5tZW51UHJpbykuZmluZChsaSA9PiBsaS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKS5pbm5lclRleHQ7XHJcbiAgICBjb25zdCBzZWxlY3RlZFByb2plY3RPcHRpb24gPSBBcnJheS5mcm9tKHRoaXMubWVudVByb2plY3QpLmZpbmQobGkgPT4gbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkuaW5uZXJUZXh0O1xyXG4gICAgY29uc3QgdXNlclNlbGVjdGVkRGF0ZSA9IHRoaXMuZ2V0VXNlclNlbGVjdGVkRGF0ZShzZWxlY3RlZERhdGVPcHRpb24pXHJcbiAgXHJcbiAgICB0YXNrRWxlbWVudHMuZm9yRWFjaCh0YXNrRWxlbWVudCA9PiB7XHJcbiAgICAgIGNvbnN0IHRhc2tEYXRlID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tUaW1lJykuaW5uZXJUZXh0XHJcbiAgICAgIGNvbnN0IHRhc2tQcmlvcml0eSA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ3NwYW4nKS5jbGFzc0xpc3QudmFsdWVcclxuICAgICAgY29uc3QgdGFza1Byb2plY3QgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvamVjdCcpLmlubmVyVGV4dFxyXG4gIFxyXG4gICAgICBjb25zdCBzaG91bGRTaG93VGFzayA9XHJcbiAgICAgICAgKHNlbGVjdGVkRGF0ZU9wdGlvbiA9PT0gJ0FsbCBUYXNrcycgfHwgKHNlbGVjdGVkRGF0ZU9wdGlvbiA9PT0gJ0RhaWx5JyAmJiB0aGlzLmlzVG9kYXkodGFza0RhdGUsIHVzZXJTZWxlY3RlZERhdGUpKSB8fCAoc2VsZWN0ZWREYXRlT3B0aW9uID09PSAnV2Vla2x5JyAmJiB0aGlzLmlzVGhpc1dlZWsodGFza0RhdGUsIHVzZXJTZWxlY3RlZERhdGUpKSkgJiZcclxuICAgICAgICAoc2VsZWN0ZWRQcmlvcml0eU9wdGlvbiA9PT0gJ0FsbCBQcmlvcml0aWVzJyB8fCB0YXNrUHJpb3JpdHkuaW5jbHVkZXMoc2VsZWN0ZWRQcmlvcml0eU9wdGlvbi50b0xvd2VyQ2FzZSgpKSkgJiZcclxuICAgICAgICAoc2VsZWN0ZWRQcm9qZWN0T3B0aW9uID09PSAnQWxsIFByb2plY3RzJyB8fCB0YXNrUHJvamVjdCA9PT0gc2VsZWN0ZWRQcm9qZWN0T3B0aW9uKVxyXG4gIFxyXG4gICAgICB0YXNrRWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gc2hvdWxkU2hvd1Rhc2sgPyAnZmxleCcgOiAnbm9uZSdcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBnZXRVc2VyU2VsZWN0ZWREYXRlKHNlbGVjdGVkRGF0ZU9wdGlvbikge1xyXG4gICAgaWYgKHNlbGVjdGVkRGF0ZU9wdGlvbiA9PT0gJ0RhaWx5Jykge1xyXG4gICAgICByZXR1cm4gbmV3IERhdGUoKS50b0lTT1N0cmluZygpLnNsaWNlKDAsIDEwKVxyXG4gICAgfSBlbHNlIGlmIChzZWxlY3RlZERhdGVPcHRpb24gPT09ICdXZWVrbHknKSB7XHJcbiAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKVxyXG4gICAgICByZXR1cm4gdG9kYXkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBudWxsXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBpc1RvZGF5KGRhdGVTdHJpbmcsIHVzZXJTZWxlY3RlZERhdGUpIHtcclxuICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUodXNlclNlbGVjdGVkRGF0ZSlcclxuICAgIGNvbnN0IHRhc2tEYXRlID0gbmV3IERhdGUoZGF0ZVN0cmluZylcclxuICBcclxuICAgIGlmIChpc05hTih0YXNrRGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG4gIFxyXG4gICAgcmV0dXJuIHRvZGF5LnRvRGF0ZVN0cmluZygpID09PSB0YXNrRGF0ZS50b0RhdGVTdHJpbmcoKVxyXG4gIH1cclxuXHJcbiAgaXNUaGlzV2VlayhkYXRlU3RyaW5nLCB1c2VyU2VsZWN0ZWREYXRlKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHVzZXJTZWxlY3RlZERhdGUpXHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXHJcbiAgICBcclxuICAgIGlmIChpc05hTih0YXNrRGF0ZS5nZXRUaW1lKCkpKSB7XHJcbiAgICAgIHJldHVybiBmYWxzZVxyXG4gICAgfVxyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB0aGUgZW5kIGRhdGUgd2hpY2ggaXMgdG9kYXkgKyA2IGRheXNcclxuICAgIGNvbnN0IGVuZE9mV2VlayA9IG5ldyBEYXRlKHRvZGF5LmdldFRpbWUoKSArIDYgKiAyNCAqIDYwICogNjAgKiAxMDAwKVxyXG4gIFxyXG4gICAgLy8gQ2hlY2sgaWYgdGFza0RhdGUgaXMgd2l0aGluIHRoZSBhZGp1c3RlZCByYW5nZSAodG9kYXkgKyA2IGRheXMpXHJcbiAgICByZXR1cm4gdGFza0RhdGUgPj0gdG9kYXkgJiYgdGFza0RhdGUgPD0gZW5kT2ZXZWVrXHJcbiAgfVxyXG5cclxufSIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFBST0pFQ1Qge1xyXG4gIHN0YXRpYyBjcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XHJcbiAgICBjb25zdCBtZW51UHJvamVjdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXByb2plY3QnKVxyXG4gICAgLy8gQ3JlYXRlIG5ldyBQcm9qZWN0XHJcbiAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJylcclxuICAgIGxpLmlubmVyVGV4dCA9IHByb2plY3ROYW1lXHJcblxyXG4gICAgbWVudVByb2plY3QuYXBwZW5kQ2hpbGQobGkpXHJcbiAgICByZXR1cm4gbGlcclxuICB9XHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBUT0RPIHtcclxuICBzdGF0aWMgY3JlYXRlVGFzayh0YXNrQ29udGVudCwgdGFza1ByaW9yaXR5LCBwcm9qZWN0TmFtZSwgdGFza0RhdGUpIHtcclxuICAgIC8vIENyZWF0ZSBuZXcgVGFza1xyXG4gICAgY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGRpdi5jbGFzc0xpc3QuYWRkKCd0YXNrJylcclxuICAgIC8vIGRpdi5pbm5lclRleHQgPSB0YXNrQ29udGVudFxyXG5cclxuICAgIGNvbnN0IHRhc2tDb250ZW50VGV4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgdGFza0NvbnRlbnRUZXh0LmlubmVyVGV4dCA9IHRhc2tDb250ZW50XHJcbiAgICB0YXNrQ29udGVudFRleHQuY2xhc3NMaXN0LmFkZCgndGFzay1jb250ZW50JykgXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZmFrZSA6OmJlZm9yZSB3aXRoIGEgc3BhbiB0byBjaGFuZ2UgY29sb3JzIHRvIGluZGljYXRlIHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknLCB0YXNrUHJpb3JpdHkpXHJcblxyXG4gICAgLy8gQ3JlYXRlIFByb2plY3QgSGVhZGVyIGluc2lkZSBUYXNrIGRpdlxyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxyXG4gICAgcHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0TmFtZSB8fCAnQWxsIFByb2plY3RzJ1xyXG5cclxuICAgIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxyXG4gICAgZWRpdFRhc2suaW5uZXJUZXh0ID0gJ0VESVQnXHJcblxyXG4gICAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFRElUIE1FIScpXHJcbiAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBwcm9tcHQoJ0VudGVyIG5ldyB0YXNrIGNvbnRlbnQ6JywgdGFza0NvbnRlbnQpXHJcbiAgICAgIGlmKG5ld0NvbnRlbnQgIT09IG51bGwpIHtcclxuICAgICAgICB0YXNrQ29udGVudFRleHQuaW5uZXJUZXh0ID0gbmV3Q29udGVudFxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFzayBpbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdXHJcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5jb250ZW50ID09PSB0YXNrQ29udGVudCAmJiB0YXNrLnByaW9yaXR5ID09PSB0YXNrUHJpb3JpdHkgJiYgdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSAmJiB0YXNrLnRpbWUgPT09IHRhc2tEYXRlKVxyXG4gICAgICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICB0YXNrc1t0YXNrSW5kZXhdLmNvbnRlbnQgPSBuZXdDb250ZW50XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGVsVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxyXG4gICAgZGVsVGFzay5pbm5lclRleHQgPSAnREVMRVRFJ1xyXG5cclxuICAgIGRlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrPycpXHJcbiAgICAgIGlmKGNvbmZpcm1lZCkge1xyXG4gICAgICAgIGRpdi5yZW1vdmUoKVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdGFzayBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW11cclxuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmNvbnRlbnQgPT09IHRhc2tDb250ZW50ICYmIHRhc2sucHJpb3JpdHkgPT09IHRhc2tQcmlvcml0eSAmJiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lICYmIHRhc2sudGltZSA9PT0gdGFza0RhdGUpXHJcbiAgICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCB0aW1lID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIHRpbWUuY2xhc3NMaXN0LmFkZCgndGFza1RpbWUnKVxyXG4gICAgdGltZS5pbm5lclRleHQgPSB0YXNrRGF0ZSB8fCAnJ1xyXG5cclxuICAgIFxyXG4gICAgZGl2LmFwcGVuZChwcmlvcml0eSwgdGFza0NvbnRlbnRUZXh0LCBwcm9qZWN0LCB0aW1lLCBlZGl0VGFzaywgZGVsVGFzaylcclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBHTE9CQUxTIF1cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSBbIGltcG9ydHMsIGRvbSBlbGVtZW50cywgZXZlbnQgbGlzdGVuZXJzIF1cbiAgICAqIGRlc2NyaXB0aW9uXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1QT1JUXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgVE9ETyBmcm9tICcuL1RPRE9TJ1xuaW1wb3J0IE5BViBmcm9tICcuL05BVidcbmltcG9ydCBQUk9KRUNUIGZyb20gJy4vUFJPSkVDVCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRE9NIEVMRU1FTlRTXG5cbi8vIFRhc2sgLyBGb3Jtc1xuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JylcbmNvbnN0IGNyZWF0ZU5ldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVOZXcnKVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcblxuLy8gR3JvdXBzXG5jb25zdCBwcm9qZWN0R3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcHJvamVjdCcpXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JylcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TW9kYWwnKVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKVxuXG5jb25zdCBkZWxldGVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0JylcbmNvbnN0IGRlbGV0ZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVQcm9qZWN0TW9kYWwnKVxuY29uc3QgZGVsZXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVGb3JtJylcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVZFTlQgTElTVEVORVJTXG5jcmVhdGVOZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVUb2RvKCkpXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IGZvcm1TdWJtaXQoKSlcbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVQcm9qZWN0KCkpXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiBwcm9qZWN0Rm9ybVN1Ym1pdCgpKVxuXG5kZWxldGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IGRlbGV0ZVNlbGVjdGVkUHJvamVjdCgpKVxuZGVsZXRlUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRlbGV0ZVByb2plY3QoKSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGxvYWRUYXNrcygpXG4gIGxvYWRHcm91cHMoKVxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR0xPQkFMU1xuY29uc3QgbmF2ID0gbmV3IE5BVigpXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyAlRlVOQ1RJT05TIF1cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSBbIG1haW4uanMgZnVuY3Rpb24gXVxuICAgICogcmVwbGFjZSAlRlVOQ1RJT05TIHdpdGggdGhlIGZ1bmN0aW9ucyBmb2N1cyBhbmQgZGVsZXRlIHRoaXMgbGluZVxuICAgICogZGVzY3JpcHRpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKCkge1xuICBtb2RhbC5zaG93TW9kYWwoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKClcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgZGVsZXRlUHJvamVjdE1vZGFsLnNob3dNb2RhbCgpXG59XG5cblxuXG5cblxuXG4vLyBURVNUIFRPIEZJTEwgMTAwIFRBU0tTIC0gUkVNT1ZFIC0gUkVNT1ZFIC0gUkVNT1ZFXG4vLyBjb25zdCBhcnIgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddXG4vLyBjb25zdCBwcm9qQXJyID0gWydBbGwgUHJvamVjdHMnLCAnY29vbCBiZWFuc2FhYWFhYScsICdqaHNkZmcnXVxuLy8gY29uc3QgdGltZUFyciA9IFsnMjAyNC0zMC00JywgJzIwMTEtMjQtOCcsICczMDY5LTQyLTExJyBdXG5cbi8vIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuLy8gICBjb25zdCB3b3JkcyA9IGBUYXNrOiAke2l9YFxuLy8gICBjb25zdCBwcmlvID0gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXVxuLy8gICBjb25zdCBwcm9qID0gcHJvakFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcm9qQXJyLmxlbmd0aCldXG4vLyAgIGNvbnN0IHR0aW1lID0gdGltZUFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aW1lQXJyLmxlbmd0aCldXG5cbi8vICAgY29uc3QgdGFzayA9IFRPRE8uY3JlYXRlVGFzayh3b3JkcywgcHJpbywgcHJvaiwgdHRpbWUpXG5cbi8vICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFzaylcbi8vIH1cbi8vIFRFU1QgVE8gRklMTCAxMDAgVEFTS1MgLSBSRU1PVkUgLSBSRU1PVkUgLSBSRU1PVkVcblxuXG5cblxuXG5mdW5jdGlvbiBmb3JtU3VibWl0KCkge1xuICBjb25zb2xlLmxvZyhmb3JtLnRhc2sudmFsdWUpXG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZm9ybS50YXNrLnZhbHVlXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IHJhZGlvQ2hlY2soKVxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS52YWx1ZVxuICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZm9ybS50aW1lLnZhbHVlXG5cbiAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrRGF0ZUlucHV0KVxuICBjb25zdCBmb3JtYXR0ZWRUYXNrRGF0ZSA9IHRhc2tEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gIGNvbnN0IHRhc2sgPSBUT0RPLmNyZWF0ZVRhc2sodGFza0NvbnRlbnQsIHRhc2tQcmlvcml0eSwgc2VsZWN0ZWRQcm9qZWN0LCBmb3JtYXR0ZWRUYXNrRGF0ZSlcblxuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKVxuXG4gIGNvbnN0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXVxuICBzdG9yYWdlLnB1c2goe2NvbnRlbnQ6IHRhc2tDb250ZW50LCBwcmlvcml0eTogdGFza1ByaW9yaXR5LCBwcm9qZWN0OiBzZWxlY3RlZFByb2plY3QsIHRpbWU6IGZvcm1hdHRlZFRhc2tEYXRlfSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpXG59XG5cbmZ1bmN0aW9uIHJhZGlvQ2hlY2soKSB7XG4gIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkYClcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiAnJ1xuICByZXR1cm4gc2VsZWN0ZWRWYWx1ZVxufVxuXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW11cbiAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IFRPRE8uY3JlYXRlVGFzayh0YXNrLmNvbnRlbnQsIHRhc2sucHJpb3JpdHksIHRhc2sucHJvamVjdCwgdGFzay50aW1lKVxuICAgIHRhc2tMaXN0LmFwcGVuZENoaWxkKHRhc2tFbGVtZW50KTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRHcm91cHMoKSB7XG4gIGNvbnN0IGdyb3VwcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dyb3VwcycpKSB8fCBbXVxuICBncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgY29uc3QgZ3JvdXBFbGVtZW50ID0gUFJPSkVDVC5jcmVhdGVQcm9qZWN0KGdyb3VwLmNvbnRlbnQpXG4gICAgcHJvamVjdEdyb3Vwcy5hcHBlbmRDaGlsZChncm91cEVsZW1lbnQpXG5cbiAgICBwb3B1bGF0ZURyb3Bkb3duKGdyb3VwLmNvbnRlbnQsICdkcm9wZG93bicpXG4gICAgcG9wdWxhdGVEcm9wZG93bihncm91cC5jb250ZW50LCAnZGVsZXRlRHJvcGRvd24nKVxuICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybVN1Ym1pdCgpIHtcbiAgY29uc29sZS5sb2cocHJvamVjdEZvcm0ucHJvamVjdE5hbWUudmFsdWUpXG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gcHJvamVjdEZvcm0ucHJvamVjdE5hbWUudmFsdWVcbiAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBQUk9KRUNULmNyZWF0ZVByb2plY3QocHJvamVjdENvbnRlbnQpXG5cbiAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2LmFjdGl2ZUdyb3VwKCdwcm9qZWN0JywgbmV3UHJvamVjdEVsZW1lbnQpXG4gICAgbmF2LmZpbHRlclRhc2tzKCdwcm9qZWN0JywgcHJvamVjdENvbnRlbnQpXG4gIH0pXG4gIFxuICBjb25zdCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JvdXBzJykpIHx8IFtdXG4gIHN0b3JhZ2UucHVzaCh7Y29udGVudDogcHJvamVjdENvbnRlbnR9KVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ3JvdXBzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpXG5cbiAgcG9wdWxhdGVEcm9wZG93bihwcm9qZWN0Q29udGVudCwgJ2Ryb3Bkb3duJylcbiAgcG9wdWxhdGVEcm9wZG93bihwcm9qZWN0Q29udGVudCwgJ2RlbGV0ZURyb3Bkb3duJylcbiAgcHJvamVjdEZvcm0ucmVzZXQoKVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURyb3Bkb3duKGdyb3VwQ29udGVudCwgZHJvcGRvd25JZCkge1xuICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIG9wLnZhbHVlID0gZ3JvdXBDb250ZW50XG4gIG9wLnRleHRDb250ZW50ID0gZ3JvdXBDb250ZW50XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJvcGRvd25JZClcbiAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3ApXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZGVsZXRlRm9ybS5kZWxldGVEcm9wZG93bi52YWx1ZVxuXG4gIGlmKHNlbGVjdGVkUHJvamVjdCAhPT0gJ0FsbCBQcm9qZWN0cycpIHtcbiAgICBjb25zdCBjb25maXJtZWQgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0IFwiJHtzZWxlY3RlZFByb2plY3R9XCI/YClcbiAgICBpZihjb25maXJtZWQpIHtcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gQXJyYXkuZnJvbShwcm9qZWN0R3JvdXBzLmNoaWxkcmVuKS5maW5kKGxpID0+IGxpLmlubmVyVGV4dCA9PT0gc2VsZWN0ZWRQcm9qZWN0KVxuICAgICAgaWYocHJvamVjdEVsZW1lbnQpIHtcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlKClcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIEdyb3VwIG91dCBvZiBsb2NhbCBzdG9yYWdlXG4gICAgICBjb25zdCBncm91cHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncm91cHMnKSkgfHwgW11cbiAgICAgIGNvbnN0IGdyb3VwSW5kZXggPSBncm91cHMuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLmNvbnRlbnQgPT09IHNlbGVjdGVkUHJvamVjdClcbiAgICAgIGlmIChncm91cEluZGV4ICE9PSAtMSkge1xuICAgICAgICBncm91cHMuc3BsaWNlKGdyb3VwSW5kZXgsIDEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdncm91cHMnLCBKU09OLnN0cmluZ2lmeShncm91cHMpKVxuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGUgYWxsIHRhc2tzIHJlbGF0ZWQgdG8gdGhhdCBncm91cFxuICAgICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXVxuICAgICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ICE9PSBzZWxlY3RlZFByb2plY3QpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFza3MpKVxuICAgICAgY29uc3QgdGFza0VsZW1lbnRzID0gdGFza0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgdGFza0VsZW1lbnRzLmZvckVhY2godGFza0VsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JykuaW5uZXJUZXh0XG4gICAgICAgIGlmICh0YXNrUHJvamVjdCA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBsb2NhdGlvbi5yZWxvYWQoKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==