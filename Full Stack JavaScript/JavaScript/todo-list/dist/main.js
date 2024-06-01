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

  @media screen and (max-width: 500px) {
    & h1 { display: none; }
    & #createNew { padding-right: 10px; }
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

  
  & input[type="checkbox"] {
    display: none;
  }
  
  & input[type="checkbox"] + span::before { /* Target the task-content for strikethroughs */
    content: '';
    position: absolute;
    background-image: linear-gradient(transparent 0 48%, black 50% calc(50% + 2px), transparent calc(50% + 2px) 100%);
    width: 0;
    height: 100%;
    transition: width 0.1s linear;
  }
  
  & input[type="checkbox"]:checked + span::before { /* Target the task-content for strikethroughs */
    width: 100%;
  }
  
  & .task-content {
    width: 100%;
    position: relative;
  }



  /* & .task-content {
    display: inline-block;
    width: 80%;
    background-color: red;
  } */

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
  top: 50%;
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
    width: 100%;
    
     & input {
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
}`, "",{"version":3,"sources":["webpack://./src/css/style.css"],"names":[],"mappings":"AAAA;;;;;uEAKuE;;AAEvE;EACE,gBAAgB,EAAE,QAAQ;;EAE1B,yGAAyG;EACzG,gBAAgB;EAChB,0BAA0B;EAC1B,mCAAmC;EACnC,qCAAqC;;EAErC,gCAAgC;EAChC,iCAAiC;EACjC,4BAA4B;;EAE5B,SAAS;EACT,gCAAgC;;EAEhC,gBAAgB;EAChB,aAAa;AACf;;;AAGA;;;;;uEAKuE;;AAEvE;EACE,eAAe;EACf,oCAAoC;EACpC,iCAAiC;EACjC,yDAA+C;EAC/C,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,aAAa;EACb,iFAAiF;EACjF,mCAAmC;EACnC,SAAS;;EAET;IACE,oBAAoB;EACtB;;EAEA;IACE,0BAA0B;IAC1B,QAAQ,kBAAkB,EAAE;EAC9B;AACF;;AAEA;EACE,wCAAwC;EACxC,sBAAsB;AACxB;;AAEA;EACE,6CAA6C;AAC/C;;;AAGA;;;;uEAIuE;;AAEvE;EACE,sBAAsB;EACtB,eAAe;EACf,aAAa;;EAEb;IACE,iBAAiB;EACnB;;EAEA;IACE,iBAAiB,uDAAuD;MACtE,kBAAkB;IACpB;EACF;;EAEA;IACE,OAAO,aAAa,EAAE;IACtB,eAAe,mBAAmB,EAAE;EACtC;AACF;;AAEA;;;;;;uEAMuE;;AAEvE;EACE,WAAW;EACX,YAAY;EACZ,SAAS;EACT,+BAA+B;EAC/B,eAAe;EACf,WAAW;;EAEX;IACE,WAAW;IACX,YAAY;IACZ,UAAU;IACV,kBAAkB;IAClB,UAAU;IACV,eAAe;EACjB;;EAEA;IACE,SAAS;IACT,QAAQ;IACR,cAAc;IACd,WAAW;IACX,WAAW;IACX,kBAAkB;IAClB,kBAAkB;IAClB,wCAAwC;IACxC,4BAA4B;IAC5B,yBAAyB;IACzB;;kCAE8B;EAChC;;EAEA;IACE,uBAAuB;EACzB;;EAEA;IACE,yBAAyB;EAC3B;;EAEA;IACE,UAAU;IACV,8CAA8C;IAC9C,eAAe;EACjB;;EAEA;IACE,0DAA0D;EAC5D;;EAEA;IACE,UAAU;IACV,uCAAuC;EACzC;;EAEA;IACE,0DAA0D;EAC5D;;EAEA,wCAAwC,UAAU,EAAE;EACpD,0DAA0D;AAC5D;;AAEA;EACE,YAAY;EACZ,kBAAkB;EAClB,eAAe;EACf,UAAU;EACV,gCAAgC,EAAE,gEAAgE;EAClG,aAAa;EACb,gBAAgB;EAChB,UAAU;EACV,oFAAoF;;EAEpF;IACE,UAAU;IACV,iBAAiB;IACjB,yCAAyC;IACzC,yCAAyC;;IAEzC;MACE,YAAY;MACZ,kBAAkB;IACpB;EACF;;EAEA;IACE,qBAAqB;IACrB,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,iBAAiB;EACnB;;EAEA,UAAU,wBAAwB,EAAE;EACpC,aAAa,yBAAyB,EAAE;EACxC,UAAU,sBAAsB,EAAE;;EAElC;IACE,WAAW;IACX,gBAAgB;IAChB,cAAc;IACd,iBAAiB;IACjB,sCAAsC;IACtC,wBAAwB;IACxB,4BAA4B;IAC5B,YAAY;EACd;;EAEA;IACE,sCAAsC;IACtC,wBAAwB;IACxB,UAAU;IACV,eAAe;EACjB;;;EAGA;IACE,MAAM;IACN,OAAO;IACP,sCAAsC;IACtC,sCAAsC;IACtC,0BAA0B;EAC5B;AACF;;AAEA;EACE,6BAA6B;EAC7B,UAAU;EACV,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,YAAY;;EAEZ;IACE,UAAU;IACV,cAAc;EAChB;AACF;;;AAGA;;;;;uEAKuE;;AAEvE;EACE,aAAa;EACb,2BAA2B;EAC3B,SAAS;;EAET;IACE,sCAAsC;IACtC,4BAA4B;IAC5B,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,4BAA4B;IAC5B,iBAAiB;IACjB,8BAA8B;;IAE9B;MACE,cAAc;IAChB;EACF;;EAEA,cAAc,kCAAkC;IAC9C,WAAW;IACX,kBAAkB;IAClB,OAAO;IACP,WAAW;IACX,YAAY;IACZ,qCAAqC;IACrC,wCAAwC;IACxC,kCAAkC;EACpC;;EAEA,gCAAgC;EAChC,UAAU,mCAAmC,EAAE;EAC/C,aAAa,oCAAoC,EAAE;EACnD,UAAU,iCAAiC,EAAE;;EAE7C,qBAAqB,mCAAmC;IACtD,WAAW;IACX,uCAAuC;EACzC;;;EAGA;IACE,aAAa;EACf;;EAEA,0CAA0C,+CAA+C;IACvF,WAAW;IACX,kBAAkB;IAClB,iHAAiH;IACjH,QAAQ;IACR,YAAY;IACZ,6BAA6B;EAC/B;;EAEA,kDAAkD,+CAA+C;IAC/F,WAAW;EACb;;EAEA;IACE,WAAW;IACX,kBAAkB;EACpB;;;;EAIA;;;;KAIG;;EAEH,aAAa,iCAAiC;IAC5C,kBAAkB;IAClB,MAAM;IACN,SAAS;IACT,2BAA2B;IAC3B,iCAAiC,EAAE,yDAAyD;IAC5F,YAAY;IACZ,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,eAAe;IACf,gBAAgB;IAChB,wCAAwC;IACxC,yCAAyC;IACzC,YAAY;EACd;;EAEA;IACE,iBAAiB;IACjB,kBAAkB;IAClB,WAAW;IACX,SAAS;EACX;;EAEA;IACE,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;IAClB,yBAAyB;IACzB,UAAU;IACV,UAAU;IACV,oCAAoC;IACpC,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;EAEA;IACE,kBAAkB;IAClB,QAAQ;IACR,MAAM;IACN,wCAAwC;IACxC,sCAAsC;IACtC,wCAAwC;IACxC,UAAU;IACV,oCAAoC;IACpC,iBAAiB;IACjB,eAAe;EACjB;;EAEA;IACE,UAAU;EACZ;;AAEF;;AAEA;;;;;uEAKuE;;AAEvE;EACE,iCAAiC;EACjC,yDAA+C;EAC/C,mBAAmB;EACnB,iBAAiB;EACjB,YAAY;EACZ,gCAAgC;EAChC,SAAS;EACT,QAAQ;EACR,4BAA4B;EAC5B,WAAW;EACX,yCAAyC;;EAEzC;IACE,0BAA0B;EAC5B;AACF;;AAEA;EACE,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,SAAS;;EAET;IACE,UAAU;EACZ;;EAEA;IACE,aAAa;IACb,gCAAgC;IAChC,wBAAwB;IACxB,4BAA4B;IAC5B,iBAAiB;;IAEjB;MACE,4CAA4C;IAC9C;EACF;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,WAAW;;KAEV;MACC,4BAA4B;MAC5B,sCAAsC;MACtC,wBAAwB;MACxB,iBAAiB;MACjB,gBAAgB;KACjB;EACH;;EAEA;IACE,UAAU;IACV,aAAa;IACb,SAAS;IACT,YAAY;IACZ,uBAAuB;IACvB,mBAAmB;;IAEnB;MACE,YAAY;MACZ,UAAU;MACV,aAAa;MACb,mBAAmB;MACnB,uBAAuB;MACvB,4BAA4B;MAC5B,iBAAiB;MACjB,eAAe;MACf,wBAAwB;MACxB,qCAAqC;IACvC;;IAEA;MACE,gBAAgB;MAChB,UAAU,EAAE,uDAAuD;IACrE;;IAEA;MACE,mCAAmC;IACrC;;IAEA;MACE,oCAAoC;IACtC;;IAEA;MACE,iCAAiC;IACnC;EACF;;EAEA;IACE,WAAW;IACX,mBAAmB;IACnB,iBAAiB;EACnB;;EAEA;IACE,aAAa;IACb,SAAS;IACT,aAAa;;IAEb;MACE,YAAY;IACd;EACF;;EAEA;IACE,wBAAwB;IACxB,sCAAsC;IACtC,iBAAiB;IACjB,iBAAiB;EACnB;AACF;;AAEA,sBAAsB;AACtB;EACE,aAAa;;EAEb;IACE,gBAAgB;IAChB,eAAe;EACjB;;EAEA;IACE,kBAAkB;EACpB;AACF;;AAEA,uBAAuB;AACvB;EACE,sBAAsB;EACtB,aAAa;;EAEb;IACE,sCAAsC;IACtC,iBAAiB;IACjB,4BAA4B;IAC5B,iBAAiB;IACjB,wBAAwB;EAC1B;;EAEA;IACE,gBAAgB;IAChB,UAAU;IACV,kBAAkB;EACpB;AACF;;AAEA,sBAAsB,kCAAkC;EACtD,YAAY;EACZ,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,wCAAwC;EACxC,YAAY;EACZ,4BAA4B;;EAE5B;IACE,sCAAsC;IACtC,wBAAwB;IACxB,eAAe;EACjB;AACF","sourcesContent":["/* ==================================================================\r\n    - - - - - - - - - - [ GLOBALS ]\r\n   ==================================================================\r\n    [1] Size hack to set default font size to \"10px\" to make 1rem\r\n        the equivelent of 10px. (2.4rem = 24px, 0.8rem = 8px, etc)\r\n   ================================================================== */\r\n\r\n:root {\r\n  font-size: 62.5%; /* [1] */\r\n\r\n  /* ------------> DEFAULT DARK MODE COLORS!!!, CHANGE COLORS & DELETE THIS COMMENT LINE!!! <------------ */\r\n  /* Main colors */\r\n  --COLOR_BG: hsl(0, 0%, 0%);\r\n  --COLOR_PRIMARY: hsl(155, 30%, 38%);\r\n  --COLOR_SECONDARY: hsl(303, 71%, 73%);\r\n\r\n  --PRIO_GREEN: hsl(120, 77%, 46%);\r\n  --PRIO_PURPLE: hsl(278, 72%, 50%);\r\n  --PRIO_RED: hsl(0, 79%, 50%);\r\n\r\n  /* Text */\r\n  --FONT_COLOR: hsl(30, 100%, 98%);\r\n\r\n  /* Misc Layout */\r\n  --RADIUS: 6px;\r\n}\r\n\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ BASE STYLES ]\r\n   ==================================================================\r\n    - - [ body, fonts, text elements, media elements ]\r\n    * Styles that are shared across the entire site\r\n   ================================================================== */\r\n  \r\nbody {\r\n  font-size: 2rem;\r\n  font-family: 'Fira Code', sans-serif;\r\n  background-color: var(--COLOR_BG);\r\n  background-image: url('../img/noise-light.png');\r\n  background-attachment: fixed;\r\n  color: var(--FONT_COLOR);\r\n  height: 100vh;\r\n  display: grid;\r\n  grid-template-columns: 1fr [content-start] minmax(300px, 700px) [content-end] 1fr;\r\n  grid-template-rows: min-content 1fr;\r\n  gap: 20px;\r\n\r\n  & > * {\r\n    grid-column: content;\r\n  }\r\n\r\n  @media screen and (max-width: 400px) {\r\n    grid-template-columns: 1fr;\r\n    & > * { grid-column: 1 / 2; }\r\n  }\r\n}\r\n\r\n::selection {\r\n  background-color: var(--COLOR_SECONDARY);\r\n  color: var(--COLOR_BG);\r\n}\r\n\r\nhr {\r\n  border-top: 1px dashed var(--COLOR_SECONDARY);\r\n}\r\n\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ HEADER ]\r\n   ==================================================================\r\n    * Extremely simple header, updates on which task group selected\r\n   ================================================================== */\r\n  \r\nheader {\r\n  padding: 20px 0 0 20px;\r\n  font-size: 4rem;\r\n  display: flex;\r\n\r\n  & :last-child {\r\n    margin-left: auto;\r\n  }\r\n\r\n  @media screen and (max-width: 850px) {\r\n    & :first-child { /* Make room for hamburger menu at smaller resolution */\r\n      padding-left: 80px;\r\n    }\r\n  }\r\n\r\n  @media screen and (max-width: 500px) {\r\n    & h1 { display: none; }\r\n    & #createNew { padding-right: 10px; }\r\n  }\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ SIDEBAR ]\r\n   ==================================================================\r\n    * A sidebar that toggles on and off when in mobile, popping\r\n      it out from the left side. Otherwise permanently on while\r\n      on desktop.\r\n   ================================================================== */\r\n\r\n#sidebar-toggle {\r\n  width: 80px;\r\n  height: 70px;\r\n  top: 20px;\r\n  left: calc((100vw - 940px) / 2);\r\n  position: fixed;\r\n  z-index: 10;\r\n\r\n  & input {\r\n    width: 100%;\r\n    height: 100%;\r\n    opacity: 0;\r\n    position: absolute;\r\n    z-index: 1;\r\n    cursor: pointer;\r\n  }\r\n\r\n  & span {\r\n    left: 20%;\r\n    top: 30%;\r\n    display: block;\r\n    width: 50px;\r\n    height: 6px;\r\n    margin-bottom: 5px;\r\n    position: relative;\r\n    background-color: var(--COLOR_SECONDARY);\r\n    border-radius: var(--RADIUS);\r\n    transform-origin: 4px 0px;\r\n    transition: transform 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                background 0.5s cubic-bezier(0.77,0.2,0.05,1.0),\r\n                opacity 0.55s ease;\r\n  }\r\n\r\n  & span:first-child {\r\n    transform-origin: 0% 0%;\r\n  }\r\n\r\n  & span:nth-last-child(2) {\r\n    transform-origin: 0% 100%;\r\n  }\r\n\r\n  & input:checked ~ span {\r\n    opacity: 1;\r\n    transform: rotate(45deg) translate(-2px, -1px);\r\n    background: red;\r\n  }\r\n\r\n  & input:checked ~ span:first-child {\r\n    transform: rotate(45deg) translateX(-0px) translateY(-3px);\r\n  }\r\n\r\n  & input:checked ~ span:nth-last-child(2) {\r\n    opacity: 0;\r\n    transform: rotate(0deg) scale(0.2, 0.2);\r\n  }\r\n\r\n  & input:checked ~ span:last-child {\r\n    transform: rotate(-45deg) translateX(-6px) translateY(0px);\r\n  }\r\n\r\n  @media screen and (max-width: 1290px) { left: 20px; }\r\n  /* @media screen and (max-width: 1000px) { left: 20px; } */\r\n}\r\n\r\n#sidebar {\r\n  width: 275px;\r\n  padding-left: 10px;\r\n  position: fixed;\r\n  top: 120px;\r\n  left: calc((100vw - 1300px) / 2); /* force responsiveness when resizing.. mother of god it works */\r\n  height: 100vh;\r\n  overflow-y: auto;\r\n  z-index: 1;\r\n  transition: transform 0.3s ease-out, opacity 0.3s ease-out, visibility 0.3s ease-out;\r\n\r\n  & .active {\r\n    color: red;\r\n    margin-right: 8px;\r\n    transition: margin-right 0.3s ease-in-out;\r\n    text-shadow: -2px 2px 2px var(--COLOR_BG);\r\n\r\n    &::before {\r\n      content: '>';\r\n      margin-right: 10px;\r\n    }\r\n  }\r\n  \r\n  & > * {\r\n    margin: 0 20px 20px 0;\r\n    text-align: right;\r\n    cursor: pointer;\r\n  }\r\n  \r\n  & > * > * {\r\n    padding-top: 14px;\r\n  }\r\n\r\n  & .low  { color: var(--PRIO_GREEN); }\r\n  & .medium  { color: var(--PRIO_PURPLE); }\r\n  & .high { color: var(--PRIO_RED); }\r\n\r\n  & .project-btn {\r\n    width: 100%;\r\n    margin-top: 20px;\r\n    padding: 8px 0;\r\n    font-size: 2.2rem;\r\n    background-color: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    border-radius: var(--RADIUS);\r\n    opacity: 0.8;\r\n  }\r\n\r\n  & .project-btn:hover {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    opacity: 1;\r\n    cursor: pointer;\r\n  }\r\n\r\n\r\n  @media screen and (max-width: 1290px) {\r\n    top: 0;\r\n    left: 0;\r\n    background-color: hsla(0, 0%, 0%, 0.8);\r\n    border-top-right-radius: var(--RADIUS);\r\n    backdrop-filter: blur(4px);\r\n  } \r\n}\r\n\r\n.hide-sidebar {\r\n  transform: translateX(-500px);\r\n  opacity: 0;\r\n  visibility: hidden;\r\n}\r\n\r\n#delete-project {\r\n  /* margin-top: 60px; */\r\n  opacity: 0.5;\r\n\r\n  &:hover {\r\n    opacity: 1;\r\n    color: darkred;\r\n  }\r\n}\r\n\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ MAIN CONTENT ]\r\n   ==================================================================\r\n    - - [ main, section, div, article, aside, form ]\r\n    * replace %CONTENT with one of the above when pasting this\r\n   ================================================================== */\r\n\r\nmain {\r\n  display: grid;\r\n  grid-auto-rows: min-content;\r\n  gap: 10px;\r\n\r\n  & > * {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    border-radius: var(--RADIUS);\r\n    display: flex;\r\n    align-items: center;\r\n    position: relative;\r\n    padding: 12px 10px 12px 28px;\r\n    font-size: 1.6rem;\r\n    justify-content: space-between;\r\n\r\n    @media screen and (max-width: 400px) {\r\n      margin: 0 10px;\r\n    }\r\n  }\r\n\r\n  & .priority { /* TASK COLOR BAR OF IMPORTANCE! */\r\n    content: \"\";\r\n    position: absolute;\r\n    left: 0;\r\n    width: 12px;\r\n    height: 100%;\r\n    border-top-left-radius: var(--RADIUS);\r\n    border-bottom-left-radius: var(--RADIUS);\r\n    transition: width 0.2s ease-in-out;\r\n  }\r\n\r\n  /* Task color bar color select */\r\n  & .low  { background-color: var(--PRIO_GREEN); }\r\n  & .medium  { background-color: var(--PRIO_PURPLE); }\r\n  & .high { background-color: var(--PRIO_RED); }\r\n\r\n  & :hover .priority { /* Expand priority color slightly */\r\n    width: 24px;\r\n    border-right: 1px solid var(--COLOR_BG);\r\n  }\r\n\r\n  \r\n  & input[type=\"checkbox\"] {\r\n    display: none;\r\n  }\r\n  \r\n  & input[type=\"checkbox\"] + span::before { /* Target the task-content for strikethroughs */\r\n    content: '';\r\n    position: absolute;\r\n    background-image: linear-gradient(transparent 0 48%, black 50% calc(50% + 2px), transparent calc(50% + 2px) 100%);\r\n    width: 0;\r\n    height: 100%;\r\n    transition: width 0.1s linear;\r\n  }\r\n  \r\n  & input[type=\"checkbox\"]:checked + span::before { /* Target the task-content for strikethroughs */\r\n    width: 100%;\r\n  }\r\n  \r\n  & .task-content {\r\n    width: 100%;\r\n    position: relative;\r\n  }\r\n\r\n\r\n\r\n  /* & .task-content {\r\n    display: inline-block;\r\n    width: 80%;\r\n    background-color: red;\r\n  } */\r\n\r\n  & .project { /* Project tab on the todo item */\r\n    position: absolute;\r\n    top: 0;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    background-color: var(--COLOR_BG); /* CHANGE COLOR IN JS TO THE TASK PROJECT THAT IS GIVEN */\r\n    height: 14px;\r\n    width: max-content;\r\n    padding: 0 10px;\r\n    text-align: center;\r\n    font-size: 1rem;\r\n    line-height: 1.2;\r\n    border-bottom-left-radius: var(--RADIUS);\r\n    border-bottom-right-radius: var(--RADIUS);\r\n    opacity: 0.5;\r\n  }\r\n\r\n  & .taskTime {\r\n    font-size: 1.4rem;\r\n    position: absolute;\r\n    right: 10px;\r\n    bottom: 0;\r\n  }\r\n\r\n  & .edit {\r\n    font-size: 1.5rem;\r\n    color: black;\r\n    position: absolute;\r\n    transform: rotate(-90deg);\r\n    left: -5px;\r\n    opacity: 0;\r\n    transition: opacity 0.2s ease-in-out;\r\n    user-select: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  & > *:hover .edit {\r\n    opacity: 1;\r\n  }\r\n\r\n  & .delete {\r\n    position: absolute;\r\n    right: 0;\r\n    top: 0;\r\n    background-color: rgba(255, 0, 0, 0.397);\r\n    border-top-right-radius: var(--RADIUS);\r\n    border-bottom-left-radius: var(--RADIUS);\r\n    opacity: 0;\r\n    transition: opacity 0.1s ease-in-out;\r\n    user-select: none;\r\n    cursor: pointer;\r\n  }\r\n\r\n  & > *:hover .delete {\r\n    opacity: 1;\r\n  }\r\n\r\n}\r\n\r\n/* ==================================================================\r\n    - - - - - - - - - - [ TASK MODAL & FORM ]\r\n   ==================================================================\r\n    - - [ main, section, div, article, aside, form ]\r\n    * replace %CONTENT with one of the above when pasting this\r\n   ================================================================== */\r\n\r\ndialog {\r\n  background-color: var(--COLOR_BG);\r\n  background-image: url('../img/noise-light.png');\r\n  height: min-content;\r\n  max-height: 460px;\r\n  width: 500px;\r\n  transform: translate(-50%, -50%);\r\n  left: 50%;\r\n  top: 50%;\r\n  border-radius: var(--RADIUS);\r\n  z-index: 12;\r\n  border: 2px dotted var(--COLOR_SECONDARY);\r\n\r\n  &::backdrop {\r\n    backdrop-filter: blur(4px);\r\n  }\r\n}\r\n\r\nform {\r\n  padding: 10px;\r\n  display: flex;\r\n  flex-direction: column;\r\n  gap: 20px;\r\n\r\n  label {\r\n    color: red;\r\n  }\r\n\r\n  & input[type=\"text\"] {\r\n    outline: none;\r\n    background: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    border-radius: var(--RADIUS);\r\n    padding: 2px 10px;\r\n\r\n    &:focus {\r\n      box-shadow: 0 2px 0 0 var(--COLOR_SECONDARY);\r\n    }\r\n  }\r\n\r\n  & .form-time {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-self: center;\r\n    width: 100%;\r\n    \r\n     & input {\r\n      border-radius: var(--RADIUS);\r\n      background-color: var(--COLOR_PRIMARY);\r\n      color: var(--FONT_COLOR);\r\n      padding: 8px 20px;\r\n      margin-top: 12px;\r\n     }\r\n  }\r\n\r\n  & .form-prio {\r\n    color: red;\r\n    display: flex;\r\n    gap: 20px;\r\n    height: 40px;\r\n    justify-content: center;\r\n    align-items: center;\r\n\r\n    & label {\r\n      height: 100%;\r\n      width: 33%;\r\n      display: flex;\r\n      align-items: center;\r\n      justify-content: center;\r\n      border-radius: var(--RADIUS);\r\n      user-select: none;\r\n      cursor: pointer;\r\n      color: var(--FONT_COLOR);\r\n      text-shadow: var(--COLOR_BG) -2px 1px;\r\n    }\r\n\r\n    & input[type=\"radio\"] {\r\n      appearance: none;\r\n      opacity: 0; /* Hacky fix for initial page load to force no radios */\r\n    }\r\n\r\n    & input[id=\"low\"]:checked ~ label[for=\"low\"] {\r\n      background-color: var(--PRIO_GREEN);\r\n    }\r\n  \r\n    & input[id=\"medium\"]:checked ~ label[for=\"medium\"] {\r\n      background-color: var(--PRIO_PURPLE);\r\n    }\r\n  \r\n    & input[id=\"high\"]:checked ~ label[for=\"high\"] {\r\n      background-color: var(--PRIO_RED);\r\n    }\r\n  }\r\n\r\n  & #taskName {\r\n    width: 100%;\r\n    height: max-content;\r\n    font-size: 2.4rem;\r\n  }\r\n\r\n  & .submitTo {\r\n    display: flex;\r\n    gap: 20px;\r\n    padding: 14px;\r\n\r\n    & select {\r\n      flex-grow: 1;\r\n    }\r\n  }\r\n\r\n  & #dropdown {\r\n    color: var(--FONT_COLOR);\r\n    background-color: var(--COLOR_PRIMARY);\r\n    padding: 4px 10px;\r\n    font-size: 1.4rem;\r\n  }\r\n}\r\n\r\n/* New Project Modal */\r\n#projectModal {\r\n  height: 140px;\r\n\r\n  & input {\r\n    margin-top: 10px;\r\n    padding: 10px 0;\r\n  }\r\n\r\n  & button {\r\n    position: absolute;\r\n  }\r\n}\r\n\r\n/* Delete Group Modal */\r\n#deleteProjectModal {\r\n  flex-direction: column;\r\n  height: 200px;\r\n\r\n  & select {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    font-size: 2.2rem;\r\n    border-radius: var(--RADIUS);\r\n    padding: 4px 14px;\r\n    color: var(--FONT_COLOR);\r\n  }\r\n\r\n  & button {\r\n    margin-top: 20px;\r\n    width: 90%;\r\n    position: absolute;\r\n  }\r\n}\r\n\r\nbutton[type=submit] { /* Submit Button for both modals */\r\n  width: 150px;\r\n  height: 40px;\r\n  right: 25px;\r\n  color: var(--COLOR_BG);\r\n  background-color: var(--COLOR_SECONDARY);\r\n  opacity: 0.8;\r\n  border-radius: var(--RADIUS);\r\n\r\n  &:hover {\r\n    background-color: var(--COLOR_PRIMARY);\r\n    color: var(--FONT_COLOR);\r\n    cursor: pointer;\r\n  }\r\n}"],"sourceRoot":""}]);
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

    const taskCheckbox = document.createElement('input')
    taskCheckbox.type = 'checkbox'

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

    div.addEventListener('click', (e) => {
      if (!e.target.matches('.edit, .delete')) {
        taskCheckbox.checked = !taskCheckbox.checked

        console.log('CHECK MEEEEEEEEEEE')
         // Save the checkbox state to localStorage
         const tasks = JSON.parse(localStorage.getItem('tasks')) || []
         const taskIndex = tasks.findIndex(
           (task) =>
             task.content === taskContent &&
             task.priority === taskPriority &&
             task.project === projectName &&
             task.time === taskDate
         );

         if (taskIndex !== -1) {
          tasks[taskIndex].checked = taskCheckbox.checked
          localStorage.setItem('tasks', JSON.stringify(tasks))
        }
      }
    })

    const time = document.createElement('div')
    time.classList.add('taskTime')
    time.innerText = taskDate || ''

    
    div.append(priority, taskCheckbox, taskContentText, project, time, editTask, delTask)
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
    const checkboxElement = taskElement.querySelector(`input[type='checkbox']`)
    checkboxElement.checked = task.checked || false
    taskList.appendChild(taskElement)
  })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEM7QUFDMUMsNkNBQTZDLGNBQWM7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaLGVBQWU7QUFDZixZQUFZO0FBQ1o7QUFDQSx1QkFBdUI7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNENBQTRDO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Q7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLGVBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLG1DQUFtQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sd0ZBQXdGLFFBQVEsTUFBTSx1QkFBdUIsYUFBYSxhQUFhLGFBQWEsYUFBYSxjQUFjLGFBQWEsYUFBYSxjQUFjLFdBQVcsYUFBYSxhQUFhLFdBQVcsT0FBTyxTQUFTLFFBQVEsTUFBTSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFlBQVksS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLHVCQUF1QixNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksUUFBUSxRQUFRLFFBQVEsTUFBTSxZQUFZLFdBQVcsV0FBVyxLQUFLLFlBQVksT0FBTyxLQUFLLG1CQUFtQixhQUFhLE1BQU0sTUFBTSxLQUFLLG9CQUFvQix1QkFBdUIsTUFBTSxNQUFNLFVBQVUsUUFBUSxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxXQUFXLEtBQUssVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLGFBQWEsT0FBTyxPQUFPLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sc0JBQXNCLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsd0JBQXdCLFdBQVcsWUFBWSxXQUFXLGFBQWEsTUFBTSxVQUFVLFlBQVksYUFBYSxjQUFjLE1BQU0sVUFBVSxZQUFZLE1BQU0sTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLE9BQU8sS0FBSyxZQUFZLE9BQU8sc0JBQXNCLHVCQUF1Qix3QkFBd0IsTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsUUFBUSxLQUFLLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxZQUFZLEtBQUssVUFBVSxVQUFVLE1BQU0sT0FBTyxTQUFTLFFBQVEsTUFBTSxVQUFVLFlBQVksWUFBWSxLQUFLLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsY0FBYyxNQUFNLFVBQVUsTUFBTSxNQUFNLGlCQUFpQixXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxZQUFZLHVCQUF1Qix1QkFBdUIsd0JBQXdCLG9CQUFvQixXQUFXLFlBQVksUUFBUSxLQUFLLFVBQVUsTUFBTSxtQkFBbUIsV0FBVyxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksT0FBTyxtQkFBbUIsV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLFNBQVMsUUFBUSxNQUFNLGlCQUFpQixhQUFhLFdBQVcsVUFBVSxZQUFZLHlCQUF5QixXQUFXLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFVBQVUsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsWUFBWSxhQUFhLFdBQVcsT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLFNBQVMsUUFBUSxNQUFNLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsVUFBVSxZQUFZLFdBQVcsYUFBYSxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxVQUFVLFlBQVksWUFBWSxLQUFLLFVBQVUsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsY0FBYyxNQUFNLFlBQVksTUFBTSxNQUFNLEtBQUssVUFBVSxZQUFZLGFBQWEsWUFBWSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksY0FBYyxNQUFNLFVBQVUsVUFBVSxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksdUJBQXVCLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE1BQU0sTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsV0FBVyxLQUFLLFVBQVUsS0FBSyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxNQUFNLE1BQU0sWUFBWSxNQUFNLFdBQVcsS0FBSyxZQUFZLFdBQVcsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLFlBQVksTUFBTSxZQUFZ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QUNBLGlGQUFpRjtBQUNqRjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RDtBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQzVEYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNiZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUN6SWU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7VUMxRkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0NsQkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7OztXQ3JCQTs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ3lCO0FBQ0E7QUFDQztBQUNIO0FBQ1E7O0FBRS9CO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQSxnQkFBZ0IsNENBQUc7O0FBRW5CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0JBQWtCLFNBQVM7QUFDM0IsNEJBQTRCLEVBQUU7QUFDOUI7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxlQUFlLDhDQUFJOztBQUVuQjs7QUFFQTtBQUNBLGdCQUFnQixnR0FBZ0c7QUFDaEg7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qiw4Q0FBSTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGdEQUFPO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdEQUFPOztBQUVuQztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLGdCQUFnQix3QkFBd0I7QUFDeEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhFQUE4RSxnQkFBZ0I7QUFDOUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBOztBQUVBO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3MvcmVzZXQuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvY3NzL3Jlc2V0LmNzcz8xNTJiIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9jc3Mvc3R5bGUuY3NzPzlmY2QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3QvLi9zcmMvanMvTkFWLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9QUk9KRUNULmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9UT0RPUy5qcyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly90b2RvLWxpc3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgLyogQmFzZSBjbGVhbiBzbGF0ZSAqL1xyXG4qIHtcclxuXHRtYXJnaW46IDA7XHJcblx0cGFkZGluZzogMDtcclxuXHRib3JkZXI6IDA7XHJcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcclxuXHRmb250OiBpbmhlcml0O1xyXG5cdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcblxyXG4vKiBNYWtlIGltYWdlcyBlYXNpZXIgdG8gd29yayB3aXRoICovXHJcbmltZyxcclxucGljdHVyZSB7XHJcblx0Zm9udC1zdHlsZTogaXRhbGljOyAvKiBWaXN1YWxseSBvZmZzZXQgYWx0IHRleHQgdG8gZGlmZmVyZW50aWF0ZSBmcm9tIHN1cnJvdW5kaW5nIHRleHQgICovXHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG5cdGhlaWdodDogYXV0bztcclxuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlOyAvKiBSZW1vdmUgcGhhbnRvbSB3aGl0ZXNwYWNlICovXHJcblxyXG59XHJcblxyXG4vKiBTb21lIHJlc2V0IHJ1bGVzIGJhc2VkIG9uIHBpY2NhbGlsIGNzcyByZXNldCAqL1xyXG4vKiBodHRwczovL3BpY2NhbGlsLmxpL2Jsb2cvYS1tb3JlLW1vZGVybi1jc3MtcmVzZXQvICovXHJcbi8qIGh0dHBzOi8vd2ViLmFyY2hpdmUub3JnL3dlYi8yMDI0MDQyOTIzMzc1NS9odHRwczovL3BpY2NhbGlsLmxpL2Jsb2cvYS1tb3JlLW1vZGVybi1jc3MtcmVzZXQvICovXHJcblxyXG4vKiBQcmV2ZW50IGZvbnQgc2l6ZSBpbmZsYXRpb24gKi9cclxuaHRtbCB7XHJcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogbm9uZTtcclxuICB0ZXh0LXNpemUtYWRqdXN0OiBub25lO1xyXG59XHJcblxyXG4vKiBTZXQgY29yZSBib2R5IGRlZmF1bHRzICovXHJcbmJvZHkge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjU7XHJcbn1cclxuXHJcbi8qIFNldCBzaG9ydGVyIGxpbmUgaGVpZ2h0cyBvbiBoZWFkaW5ncyBhbmQgaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cclxuLyogV29ydGggaXQgdG8gY2hhbmdlIGlmIGZvbnRzIGhhdmUgbGFyZ2UgYXNjZW5kZXJzIGFuZCBkZXNjZW5kZXJzICovXHJcbmgxLCBoMiwgaDMsIGg0LFxyXG5idXR0b24sIGlucHV0LCBsYWJlbCB7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxufVxyXG5cclxuLyogQmFsYW5jZSB0ZXh0IHdyYXBwaW5nIG9uIGhlYWRpbmdzICovXHJcbmgxLCBoMixcclxuaDMsIGg0IHtcclxuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XHJcbn1cclxuXHJcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXHJcbmE6bm90KFtjbGFzc10pIHtcclxuICB0ZXh0LWRlY29yYXRpb24tc2tpcC1pbms6IGF1dG87XHJcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcclxufVxyXG5cclxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXHJcbmlucHV0LCBidXR0b24sXHJcbnRleHRhcmVhLCBzZWxlY3Qge1xyXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG5cclxuLyogTWFrZSBzdXJlIHRleHRhcmVhcyB3aXRob3V0IGEgcm93cyBhdHRyaWJ1dGUgYXJlIG5vdCB0aW55ICovXHJcbnRleHRhcmVhOm5vdChbcm93c10pIHtcclxuICBtaW4taGVpZ2h0OiAxMGVtO1xyXG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3Jlc2V0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxxQkFBcUI7QUFDckI7Q0FDQyxTQUFTO0NBQ1QsVUFBVTtDQUNWLFNBQVM7Q0FDVCxzQkFBc0I7Q0FDdEIsYUFBYTtDQUNiLHdCQUF3QjtFQUN2QixnQkFBZ0I7QUFDbEI7O0FBRUEsb0NBQW9DO0FBQ3BDOztDQUVDLGtCQUFrQixFQUFFLHFFQUFxRTtFQUN4RixlQUFlO0NBQ2hCLFlBQVk7Q0FDWixzQkFBc0IsRUFBRSw4QkFBOEI7O0FBRXZEOztBQUVBLGlEQUFpRDtBQUNqRCxzREFBc0Q7QUFDdEQsaUdBQWlHOztBQUVqRyxnQ0FBZ0M7QUFDaEM7RUFDRSwyQkFBMkI7RUFDM0IsOEJBQThCO0VBQzlCLHNCQUFzQjtBQUN4Qjs7QUFFQSwyQkFBMkI7QUFDM0I7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUVBLGtFQUFrRTtBQUNsRSxvRUFBb0U7QUFDcEU7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBLHNDQUFzQztBQUN0Qzs7RUFFRSxrQkFBa0I7QUFDcEI7O0FBRUEsMERBQTBEO0FBQzFEO0VBQ0UsOEJBQThCO0VBQzlCLG1CQUFtQjtBQUNyQjs7QUFFQSx5Q0FBeUM7QUFDekM7O0VBRUUsb0JBQW9CO0VBQ3BCLGtCQUFrQjtBQUNwQjs7QUFFQSw4REFBOEQ7QUFDOUQ7RUFDRSxnQkFBZ0I7QUFDbEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQmFzZSBjbGVhbiBzbGF0ZSAqL1xcclxcbioge1xcclxcblxcdG1hcmdpbjogMDtcXHJcXG5cXHRwYWRkaW5nOiAwO1xcclxcblxcdGJvcmRlcjogMDtcXHJcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcblxcdGZvbnQ6IGluaGVyaXQ7XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IGJhc2VsaW5lO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogTWFrZSBpbWFnZXMgZWFzaWVyIHRvIHdvcmsgd2l0aCAqL1xcclxcbmltZyxcXHJcXG5waWN0dXJlIHtcXHJcXG5cXHRmb250LXN0eWxlOiBpdGFsaWM7IC8qIFZpc3VhbGx5IG9mZnNldCBhbHQgdGV4dCB0byBkaWZmZXJlbnRpYXRlIGZyb20gc3Vycm91bmRpbmcgdGV4dCAgKi9cXHJcXG4gIG1heC13aWR0aDogMTAwJTtcXHJcXG5cXHRoZWlnaHQ6IGF1dG87XFxyXFxuXFx0dmVydGljYWwtYWxpZ246IG1pZGRsZTsgLyogUmVtb3ZlIHBoYW50b20gd2hpdGVzcGFjZSAqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBTb21lIHJlc2V0IHJ1bGVzIGJhc2VkIG9uIHBpY2NhbGlsIGNzcyByZXNldCAqL1xcclxcbi8qIGh0dHBzOi8vcGljY2FsaWwubGkvYmxvZy9hLW1vcmUtbW9kZXJuLWNzcy1yZXNldC8gKi9cXHJcXG4vKiBodHRwczovL3dlYi5hcmNoaXZlLm9yZy93ZWIvMjAyNDA0MjkyMzM3NTUvaHR0cHM6Ly9waWNjYWxpbC5saS9ibG9nL2EtbW9yZS1tb2Rlcm4tY3NzLXJlc2V0LyAqL1xcclxcblxcclxcbi8qIFByZXZlbnQgZm9udCBzaXplIGluZmxhdGlvbiAqL1xcclxcbmh0bWwge1xcclxcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcclxcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiBub25lO1xcclxcbiAgdGV4dC1zaXplLWFkanVzdDogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLyogU2V0IGNvcmUgYm9keSBkZWZhdWx0cyAqL1xcclxcbmJvZHkge1xcclxcbiAgbWluLWhlaWdodDogMTAwdmg7XFxyXFxuICBsaW5lLWhlaWdodDogMS41O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBTZXQgc2hvcnRlciBsaW5lIGhlaWdodHMgb24gaGVhZGluZ3MgYW5kIGludGVyYWN0aXZlIGVsZW1lbnRzICovXFxyXFxuLyogV29ydGggaXQgdG8gY2hhbmdlIGlmIGZvbnRzIGhhdmUgbGFyZ2UgYXNjZW5kZXJzIGFuZCBkZXNjZW5kZXJzICovXFxyXFxuaDEsIGgyLCBoMywgaDQsXFxyXFxuYnV0dG9uLCBpbnB1dCwgbGFiZWwge1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuMTtcXHJcXG59XFxyXFxuXFxyXFxuLyogQmFsYW5jZSB0ZXh0IHdyYXBwaW5nIG9uIGhlYWRpbmdzICovXFxyXFxuaDEsIGgyLFxcclxcbmgzLCBoNCB7XFxyXFxuICB0ZXh0LXdyYXA6IGJhbGFuY2U7XFxyXFxufVxcclxcblxcclxcbi8qIEEgZWxlbWVudHMgdGhhdCBkb24ndCBoYXZlIGEgY2xhc3MgZ2V0IGRlZmF1bHQgc3R5bGVzICovXFxyXFxuYTpub3QoW2NsYXNzXSkge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uLXNraXAtaW5rOiBhdXRvO1xcclxcbiAgY29sb3I6IGN1cnJlbnRDb2xvcjtcXHJcXG59XFxyXFxuXFxyXFxuLyogSW5oZXJpdCBmb250cyBmb3IgaW5wdXRzIGFuZCBidXR0b25zICovXFxyXFxuaW5wdXQsIGJ1dHRvbixcXHJcXG50ZXh0YXJlYSwgc2VsZWN0IHtcXHJcXG4gIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xcclxcbiAgZm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBNYWtlIHN1cmUgdGV4dGFyZWFzIHdpdGhvdXQgYSByb3dzIGF0dHJpYnV0ZSBhcmUgbm90IHRpbnkgKi9cXHJcXG50ZXh0YXJlYTpub3QoW3Jvd3NdKSB7XFxyXFxuICBtaW4taGVpZ2h0OiAxMGVtO1xcclxcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ltZy9ub2lzZS1saWdodC5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIEdMT0JBTFMgXVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIFsxXSBTaXplIGhhY2sgdG8gc2V0IGRlZmF1bHQgZm9udCBzaXplIHRvIFwiMTBweFwiIHRvIG1ha2UgMXJlbVxyXG4gICAgICAgIHRoZSBlcXVpdmVsZW50IG9mIDEwcHguICgyLjRyZW0gPSAyNHB4LCAwLjhyZW0gPSA4cHgsIGV0YylcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG46cm9vdCB7XHJcbiAgZm9udC1zaXplOiA2Mi41JTsgLyogWzFdICovXHJcblxyXG4gIC8qIC0tLS0tLS0tLS0tLT4gREVGQVVMVCBEQVJLIE1PREUgQ09MT1JTISEhLCBDSEFOR0UgQ09MT1JTICYgREVMRVRFIFRISVMgQ09NTUVOVCBMSU5FISEhIDwtLS0tLS0tLS0tLS0gKi9cclxuICAvKiBNYWluIGNvbG9ycyAqL1xyXG4gIC0tQ09MT1JfQkc6IGhzbCgwLCAwJSwgMCUpO1xyXG4gIC0tQ09MT1JfUFJJTUFSWTogaHNsKDE1NSwgMzAlLCAzOCUpO1xyXG4gIC0tQ09MT1JfU0VDT05EQVJZOiBoc2woMzAzLCA3MSUsIDczJSk7XHJcblxyXG4gIC0tUFJJT19HUkVFTjogaHNsKDEyMCwgNzclLCA0NiUpO1xyXG4gIC0tUFJJT19QVVJQTEU6IGhzbCgyNzgsIDcyJSwgNTAlKTtcclxuICAtLVBSSU9fUkVEOiBoc2woMCwgNzklLCA1MCUpO1xyXG5cclxuICAvKiBUZXh0ICovXHJcbiAgLS1GT05UX0NPTE9SOiBoc2woMzAsIDEwMCUsIDk4JSk7XHJcblxyXG4gIC8qIE1pc2MgTGF5b3V0ICovXHJcbiAgLS1SQURJVVM6IDZweDtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIEJBU0UgU1RZTEVTIF1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAtIC0gWyBib2R5LCBmb250cywgdGV4dCBlbGVtZW50cywgbWVkaWEgZWxlbWVudHMgXVxyXG4gICAgKiBTdHlsZXMgdGhhdCBhcmUgc2hhcmVkIGFjcm9zcyB0aGUgZW50aXJlIHNpdGVcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcbiAgXHJcbmJvZHkge1xyXG4gIGZvbnQtc2l6ZTogMnJlbTtcclxuICBmb250LWZhbWlseTogJ0ZpcmEgQ29kZScsIHNhbnMtc2VyaWY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcclxuICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xyXG4gIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcclxuICBoZWlnaHQ6IDEwMHZoO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgW2NvbnRlbnQtc3RhcnRdIG1pbm1heCgzMDBweCwgNzAwcHgpIFtjb250ZW50LWVuZF0gMWZyO1xyXG4gIGdyaWQtdGVtcGxhdGUtcm93czogbWluLWNvbnRlbnQgMWZyO1xyXG4gIGdhcDogMjBweDtcclxuXHJcbiAgJiA+ICoge1xyXG4gICAgZ3JpZC1jb2x1bW46IGNvbnRlbnQ7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XHJcbiAgICAmID4gKiB7IGdyaWQtY29sdW1uOiAxIC8gMjsgfVxyXG4gIH1cclxufVxyXG5cclxuOjpzZWxlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XHJcbiAgY29sb3I6IHZhcigtLUNPTE9SX0JHKTtcclxufVxyXG5cclxuaHIge1xyXG4gIGJvcmRlci10b3A6IDFweCBkYXNoZWQgdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcclxufVxyXG5cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIEhFQURFUiBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgKiBFeHRyZW1lbHkgc2ltcGxlIGhlYWRlciwgdXBkYXRlcyBvbiB3aGljaCB0YXNrIGdyb3VwIHNlbGVjdGVkXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG4gIFxyXG5oZWFkZXIge1xyXG4gIHBhZGRpbmc6IDIwcHggMCAwIDIwcHg7XHJcbiAgZm9udC1zaXplOiA0cmVtO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcblxyXG4gICYgOmxhc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xyXG4gICAgJiA6Zmlyc3QtY2hpbGQgeyAvKiBNYWtlIHJvb20gZm9yIGhhbWJ1cmdlciBtZW51IGF0IHNtYWxsZXIgcmVzb2x1dGlvbiAqL1xyXG4gICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xyXG4gICAgJiBoMSB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgICYgI2NyZWF0ZU5ldyB7IHBhZGRpbmctcmlnaHQ6IDEwcHg7IH1cclxuICB9XHJcbn1cclxuXHJcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIFNJREVCQVIgXVxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICogQSBzaWRlYmFyIHRoYXQgdG9nZ2xlcyBvbiBhbmQgb2ZmIHdoZW4gaW4gbW9iaWxlLCBwb3BwaW5nXHJcbiAgICAgIGl0IG91dCBmcm9tIHRoZSBsZWZ0IHNpZGUuIE90aGVyd2lzZSBwZXJtYW5lbnRseSBvbiB3aGlsZVxyXG4gICAgICBvbiBkZXNrdG9wLlxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cclxuXHJcbiNzaWRlYmFyLXRvZ2dsZSB7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgaGVpZ2h0OiA3MHB4O1xyXG4gIHRvcDogMjBweDtcclxuICBsZWZ0OiBjYWxjKCgxMDB2dyAtIDk0MHB4KSAvIDIpO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiAxMDtcclxuXHJcbiAgJiBpbnB1dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgJiBzcGFuIHtcclxuICAgIGxlZnQ6IDIwJTtcclxuICAgIHRvcDogMzAlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNnB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA0cHggMHB4O1xyXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQgMC41cyBjdWJpYy1iZXppZXIoMC43NywwLjIsMC4wNSwxLjApLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eSAwLjU1cyBlYXNlO1xyXG4gIH1cclxuXHJcbiAgJiBzcGFuOmZpcnN0LWNoaWxkIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xyXG4gIH1cclxuXHJcbiAgJiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcclxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDEwMCU7XHJcbiAgfVxyXG5cclxuICAmIGlucHV0OmNoZWNrZWQgfiBzcGFuIHtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xyXG4gICAgYmFja2dyb3VuZDogcmVkO1xyXG4gIH1cclxuXHJcbiAgJiBpbnB1dDpjaGVja2VkIH4gc3BhbjpmaXJzdC1jaGlsZCB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlWCgtMHB4KSB0cmFuc2xhdGVZKC0zcHgpO1xyXG4gIH1cclxuXHJcbiAgJiBpbnB1dDpjaGVja2VkIH4gc3BhbjpudGgtbGFzdC1jaGlsZCgyKSB7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZykgc2NhbGUoMC4yLCAwLjIpO1xyXG4gIH1cclxuXHJcbiAgJiBpbnB1dDpjaGVja2VkIH4gc3BhbjpsYXN0LWNoaWxkIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgdHJhbnNsYXRlWCgtNnB4KSB0cmFuc2xhdGVZKDBweCk7XHJcbiAgfVxyXG5cclxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjkwcHgpIHsgbGVmdDogMjBweDsgfVxyXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkgeyBsZWZ0OiAyMHB4OyB9ICovXHJcbn1cclxuXHJcbiNzaWRlYmFyIHtcclxuICB3aWR0aDogMjc1cHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDEyMHB4O1xyXG4gIGxlZnQ6IGNhbGMoKDEwMHZ3IC0gMTMwMHB4KSAvIDIpOyAvKiBmb3JjZSByZXNwb25zaXZlbmVzcyB3aGVuIHJlc2l6aW5nLi4gbW90aGVyIG9mIGdvZCBpdCB3b3JrcyAqL1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICB6LWluZGV4OiAxO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuM3MgZWFzZS1vdXQsIHZpc2liaWxpdHkgMC4zcyBlYXNlLW91dDtcclxuXHJcbiAgJiAuYWN0aXZlIHtcclxuICAgIGNvbG9yOiByZWQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDhweDtcclxuICAgIHRyYW5zaXRpb246IG1hcmdpbi1yaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xyXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDJweCB2YXIoLS1DT0xPUl9CRyk7XHJcblxyXG4gICAgJjo6YmVmb3JlIHtcclxuICAgICAgY29udGVudDogJz4nO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gICYgPiAqIHtcclxuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICBcclxuICAmID4gKiA+ICoge1xyXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XHJcbiAgfVxyXG5cclxuICAmIC5sb3cgIHsgY29sb3I6IHZhcigtLVBSSU9fR1JFRU4pOyB9XHJcbiAgJiAubWVkaXVtICB7IGNvbG9yOiB2YXIoLS1QUklPX1BVUlBMRSk7IH1cclxuICAmIC5oaWdoIHsgY29sb3I6IHZhcigtLVBSSU9fUkVEKTsgfVxyXG5cclxuICAmIC5wcm9qZWN0LWJ0biB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nOiA4cHggMDtcclxuICAgIGZvbnQtc2l6ZTogMi4ycmVtO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XHJcbiAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxuXHJcbiAgJiAucHJvamVjdC1idG46aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XHJcbiAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcblxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyOTBweCkge1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGhzbGEoMCwgMCUsIDAlLCAwLjgpO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICB9IFxyXG59XHJcblxyXG4uaGlkZS1zaWRlYmFyIHtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuI2RlbGV0ZS1wcm9qZWN0IHtcclxuICAvKiBtYXJnaW4tdG9wOiA2MHB4OyAqL1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuXHJcbiAgJjpob3ZlciB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gICAgY29sb3I6IGRhcmtyZWQ7XHJcbiAgfVxyXG59XHJcblxyXG5cclxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgTUFJTiBDT05URU5UIF1cclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAtIC0gWyBtYWluLCBzZWN0aW9uLCBkaXYsIGFydGljbGUsIGFzaWRlLCBmb3JtIF1cclxuICAgICogcmVwbGFjZSAlQ09OVEVOVCB3aXRoIG9uZSBvZiB0aGUgYWJvdmUgd2hlbiBwYXN0aW5nIHRoaXNcclxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXHJcblxyXG5tYWluIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtYXV0by1yb3dzOiBtaW4tY29udGVudDtcclxuICBnYXA6IDEwcHg7XHJcblxyXG4gICYgPiAqIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgcGFkZGluZzogMTJweCAxMHB4IDEycHggMjhweDtcclxuICAgIGZvbnQtc2l6ZTogMS42cmVtO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XHJcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAucHJpb3JpdHkgeyAvKiBUQVNLIENPTE9SIEJBUiBPRiBJTVBPUlRBTkNFISAqL1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTJweDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcblxyXG4gIC8qIFRhc2sgY29sb3IgYmFyIGNvbG9yIHNlbGVjdCAqL1xyXG4gICYgLmxvdyAgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX0dSRUVOKTsgfVxyXG4gICYgLm1lZGl1bSAgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX1BVUlBMRSk7IH1cclxuICAmIC5oaWdoIHsgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19SRUQpOyB9XHJcblxyXG4gICYgOmhvdmVyIC5wcmlvcml0eSB7IC8qIEV4cGFuZCBwcmlvcml0eSBjb2xvciBzbGlnaHRseSAqL1xyXG4gICAgd2lkdGg6IDI0cHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1DT0xPUl9CRyk7XHJcbiAgfVxyXG5cclxuICBcclxuICAmIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSB7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gIH1cclxuICBcclxuICAmIGlucHV0W3R5cGU9XCJjaGVja2JveFwiXSArIHNwYW46OmJlZm9yZSB7IC8qIFRhcmdldCB0aGUgdGFzay1jb250ZW50IGZvciBzdHJpa2V0aHJvdWdocyAqL1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCA0OCUsIGJsYWNrIDUwJSBjYWxjKDUwJSArIDJweCksIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMnB4KSAxMDAlKTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBsaW5lYXI7XHJcbiAgfVxyXG4gIFxyXG4gICYgaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdOmNoZWNrZWQgKyBzcGFuOjpiZWZvcmUgeyAvKiBUYXJnZXQgdGhlIHRhc2stY29udGVudCBmb3Igc3RyaWtldGhyb3VnaHMgKi9cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICBcclxuICAmIC50YXNrLWNvbnRlbnQge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgfVxyXG5cclxuXHJcblxyXG4gIC8qICYgLnRhc2stY29udGVudCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gIH0gKi9cclxuXHJcbiAgJiAucHJvamVjdCB7IC8qIFByb2plY3QgdGFiIG9uIHRoZSB0b2RvIGl0ZW0gKi9cclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX0JHKTsgLyogQ0hBTkdFIENPTE9SIElOIEpTIFRPIFRIRSBUQVNLIFBST0pFQ1QgVEhBVCBJUyBHSVZFTiAqL1xyXG4gICAgaGVpZ2h0OiAxNHB4O1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIG9wYWNpdHk6IDAuNTtcclxuICB9XHJcblxyXG4gICYgLnRhc2tUaW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMS40cmVtO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDEwcHg7XHJcbiAgICBib3R0b206IDA7XHJcbiAgfVxyXG5cclxuICAmIC5lZGl0IHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTkwZGVnKTtcclxuICAgIGxlZnQ6IC01cHg7XHJcbiAgICBvcGFjaXR5OiAwO1xyXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG5cclxuICAmID4gKjpob3ZlciAuZWRpdCB7XHJcbiAgICBvcGFjaXR5OiAxO1xyXG4gIH1cclxuXHJcbiAgJiAuZGVsZXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzk3KTtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMXMgZWFzZS1pbi1vdXQ7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcblxyXG4gICYgPiAqOmhvdmVyIC5kZWxldGUge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG59XHJcblxyXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBUQVNLIE1PREFMICYgRk9STSBdXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLSAtIFsgbWFpbiwgc2VjdGlvbiwgZGl2LCBhcnRpY2xlLCBhc2lkZSwgZm9ybSBdXHJcbiAgICAqIHJlcGxhY2UgJUNPTlRFTlQgd2l0aCBvbmUgb2YgdGhlIGFib3ZlIHdoZW4gcGFzdGluZyB0aGlzXHJcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuZGlhbG9nIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9CRyk7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xyXG4gIGhlaWdodDogbWluLWNvbnRlbnQ7XHJcbiAgbWF4LWhlaWdodDogNDYwcHg7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB0b3A6IDUwJTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gIHotaW5kZXg6IDEyO1xyXG4gIGJvcmRlcjogMnB4IGRvdHRlZCB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xyXG5cclxuICAmOjpiYWNrZHJvcCB7XHJcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNHB4KTtcclxuICB9XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGdhcDogMjBweDtcclxuXHJcbiAgbGFiZWwge1xyXG4gICAgY29sb3I6IHJlZDtcclxuICB9XHJcblxyXG4gICYgaW5wdXRbdHlwZT1cInRleHRcIl0ge1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgIHBhZGRpbmc6IDJweCAxMHB4O1xyXG5cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBib3gtc2hhZG93OiAwIDJweCAwIDAgdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgLmZvcm0tdGltZSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgXHJcbiAgICAgJiBpbnB1dCB7XHJcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLVJBRElVUyk7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcbiAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xyXG4gICAgICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gICAgIH1cclxuICB9XHJcblxyXG4gICYgLmZvcm0tcHJpbyB7XHJcbiAgICBjb2xvcjogcmVkO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGdhcDogMjBweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbiAgICAmIGxhYmVsIHtcclxuICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB3aWR0aDogMzMlO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcclxuICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgICB0ZXh0LXNoYWRvdzogdmFyKC0tQ09MT1JfQkcpIC0ycHggMXB4O1xyXG4gICAgfVxyXG5cclxuICAgICYgaW5wdXRbdHlwZT1cInJhZGlvXCJdIHtcclxuICAgICAgYXBwZWFyYW5jZTogbm9uZTtcclxuICAgICAgb3BhY2l0eTogMDsgLyogSGFja3kgZml4IGZvciBpbml0aWFsIHBhZ2UgbG9hZCB0byBmb3JjZSBubyByYWRpb3MgKi9cclxuICAgIH1cclxuXHJcbiAgICAmIGlucHV0W2lkPVwibG93XCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJsb3dcIl0ge1xyXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX0dSRUVOKTtcclxuICAgIH1cclxuICBcclxuICAgICYgaW5wdXRbaWQ9XCJtZWRpdW1cIl06Y2hlY2tlZCB+IGxhYmVsW2Zvcj1cIm1lZGl1bVwiXSB7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9fUFVSUExFKTtcclxuICAgIH1cclxuICBcclxuICAgICYgaW5wdXRbaWQ9XCJoaWdoXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XCJoaWdoXCJdIHtcclxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19SRUQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJiAjdGFza05hbWUge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyLjRyZW07XHJcbiAgfVxyXG5cclxuICAmIC5zdWJtaXRUbyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZ2FwOiAyMHB4O1xyXG4gICAgcGFkZGluZzogMTRweDtcclxuXHJcbiAgICAmIHNlbGVjdCB7XHJcbiAgICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYgI2Ryb3Bkb3duIHtcclxuICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgcGFkZGluZzogNHB4IDEwcHg7XHJcbiAgICBmb250LXNpemU6IDEuNHJlbTtcclxuICB9XHJcbn1cclxuXHJcbi8qIE5ldyBQcm9qZWN0IE1vZGFsICovXHJcbiNwcm9qZWN0TW9kYWwge1xyXG4gIGhlaWdodDogMTQwcHg7XHJcblxyXG4gICYgaW5wdXQge1xyXG4gICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICB9XHJcblxyXG4gICYgYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbi8qIERlbGV0ZSBHcm91cCBNb2RhbCAqL1xyXG4jZGVsZXRlUHJvamVjdE1vZGFsIHtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMjAwcHg7XHJcblxyXG4gICYgc2VsZWN0IHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgZm9udC1zaXplOiAyLjJyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG4gICAgcGFkZGluZzogNHB4IDE0cHg7XHJcbiAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XHJcbiAgfVxyXG5cclxuICAmIGJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB9XHJcbn1cclxuXHJcbmJ1dHRvblt0eXBlPXN1Ym1pdF0geyAvKiBTdWJtaXQgQnV0dG9uIGZvciBib3RoIG1vZGFscyAqL1xyXG4gIHdpZHRoOiAxNTBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgcmlnaHQ6IDI1cHg7XHJcbiAgY29sb3I6IHZhcigtLUNPTE9SX0JHKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xyXG4gIG9wYWNpdHk6IDAuODtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xyXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7Ozs7O3VFQUt1RTs7QUFFdkU7RUFDRSxnQkFBZ0IsRUFBRSxRQUFROztFQUUxQix5R0FBeUc7RUFDekcsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQixtQ0FBbUM7RUFDbkMscUNBQXFDOztFQUVyQyxnQ0FBZ0M7RUFDaEMsaUNBQWlDO0VBQ2pDLDRCQUE0Qjs7RUFFNUIsU0FBUztFQUNULGdDQUFnQzs7RUFFaEMsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7O0FBR0E7Ozs7O3VFQUt1RTs7QUFFdkU7RUFDRSxlQUFlO0VBQ2Ysb0NBQW9DO0VBQ3BDLGlDQUFpQztFQUNqQyx5REFBK0M7RUFDL0MsNEJBQTRCO0VBQzVCLHdCQUF3QjtFQUN4QixhQUFhO0VBQ2IsYUFBYTtFQUNiLGlGQUFpRjtFQUNqRixtQ0FBbUM7RUFDbkMsU0FBUzs7RUFFVDtJQUNFLG9CQUFvQjtFQUN0Qjs7RUFFQTtJQUNFLDBCQUEwQjtJQUMxQixRQUFRLGtCQUFrQixFQUFFO0VBQzlCO0FBQ0Y7O0FBRUE7RUFDRSx3Q0FBd0M7RUFDeEMsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsNkNBQTZDO0FBQy9DOzs7QUFHQTs7Ozt1RUFJdUU7O0FBRXZFO0VBQ0Usc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixhQUFhOztFQUViO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBO0lBQ0UsaUJBQWlCLHVEQUF1RDtNQUN0RSxrQkFBa0I7SUFDcEI7RUFDRjs7RUFFQTtJQUNFLE9BQU8sYUFBYSxFQUFFO0lBQ3RCLGVBQWUsbUJBQW1CLEVBQUU7RUFDdEM7QUFDRjs7QUFFQTs7Ozs7O3VFQU11RTs7QUFFdkU7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLFNBQVM7RUFDVCwrQkFBK0I7RUFDL0IsZUFBZTtFQUNmLFdBQVc7O0VBRVg7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGVBQWU7RUFDakI7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsUUFBUTtJQUNSLGNBQWM7SUFDZCxXQUFXO0lBQ1gsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLDRCQUE0QjtJQUM1Qix5QkFBeUI7SUFDekI7O2tDQUU4QjtFQUNoQzs7RUFFQTtJQUNFLHVCQUF1QjtFQUN6Qjs7RUFFQTtJQUNFLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFLFVBQVU7SUFDViw4Q0FBOEM7SUFDOUMsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLDBEQUEwRDtFQUM1RDs7RUFFQTtJQUNFLFVBQVU7SUFDVix1Q0FBdUM7RUFDekM7O0VBRUE7SUFDRSwwREFBMEQ7RUFDNUQ7O0VBRUEsd0NBQXdDLFVBQVUsRUFBRTtFQUNwRCwwREFBMEQ7QUFDNUQ7O0FBRUE7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZixVQUFVO0VBQ1YsZ0NBQWdDLEVBQUUsZ0VBQWdFO0VBQ2xHLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLG9GQUFvRjs7RUFFcEY7SUFDRSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHlDQUF5QztJQUN6Qyx5Q0FBeUM7O0lBRXpDO01BQ0UsWUFBWTtNQUNaLGtCQUFrQjtJQUNwQjtFQUNGOztFQUVBO0lBQ0UscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsaUJBQWlCO0VBQ25COztFQUVBLFVBQVUsd0JBQXdCLEVBQUU7RUFDcEMsYUFBYSx5QkFBeUIsRUFBRTtFQUN4QyxVQUFVLHNCQUFzQixFQUFFOztFQUVsQztJQUNFLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLDRCQUE0QjtJQUM1QixZQUFZO0VBQ2Q7O0VBRUE7SUFDRSxzQ0FBc0M7SUFDdEMsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixlQUFlO0VBQ2pCOzs7RUFHQTtJQUNFLE1BQU07SUFDTixPQUFPO0lBQ1Asc0NBQXNDO0lBQ3RDLHNDQUFzQztJQUN0QywwQkFBMEI7RUFDNUI7QUFDRjs7QUFFQTtFQUNFLDZCQUE2QjtFQUM3QixVQUFVO0VBQ1Ysa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFlBQVk7O0VBRVo7SUFDRSxVQUFVO0lBQ1YsY0FBYztFQUNoQjtBQUNGOzs7QUFHQTs7Ozs7dUVBS3VFOztBQUV2RTtFQUNFLGFBQWE7RUFDYiwyQkFBMkI7RUFDM0IsU0FBUzs7RUFFVDtJQUNFLHNDQUFzQztJQUN0Qyw0QkFBNEI7SUFDNUIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsNEJBQTRCO0lBQzVCLGlCQUFpQjtJQUNqQiw4QkFBOEI7O0lBRTlCO01BQ0UsY0FBYztJQUNoQjtFQUNGOztFQUVBLGNBQWMsa0NBQWtDO0lBQzlDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsT0FBTztJQUNQLFdBQVc7SUFDWCxZQUFZO0lBQ1oscUNBQXFDO0lBQ3JDLHdDQUF3QztJQUN4QyxrQ0FBa0M7RUFDcEM7O0VBRUEsZ0NBQWdDO0VBQ2hDLFVBQVUsbUNBQW1DLEVBQUU7RUFDL0MsYUFBYSxvQ0FBb0MsRUFBRTtFQUNuRCxVQUFVLGlDQUFpQyxFQUFFOztFQUU3QyxxQkFBcUIsbUNBQW1DO0lBQ3RELFdBQVc7SUFDWCx1Q0FBdUM7RUFDekM7OztFQUdBO0lBQ0UsYUFBYTtFQUNmOztFQUVBLDBDQUEwQywrQ0FBK0M7SUFDdkYsV0FBVztJQUNYLGtCQUFrQjtJQUNsQixpSEFBaUg7SUFDakgsUUFBUTtJQUNSLFlBQVk7SUFDWiw2QkFBNkI7RUFDL0I7O0VBRUEsa0RBQWtELCtDQUErQztJQUMvRixXQUFXO0VBQ2I7O0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCOzs7O0VBSUE7Ozs7S0FJRzs7RUFFSCxhQUFhLGlDQUFpQztJQUM1QyxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLFNBQVM7SUFDVCwyQkFBMkI7SUFDM0IsaUNBQWlDLEVBQUUseURBQXlEO0lBQzVGLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLHdDQUF3QztJQUN4Qyx5Q0FBeUM7SUFDekMsWUFBWTtFQUNkOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsU0FBUztFQUNYOztFQUVBO0lBQ0UsaUJBQWlCO0lBQ2pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIseUJBQXlCO0lBQ3pCLFVBQVU7SUFDVixVQUFVO0lBQ1Ysb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixlQUFlO0VBQ2pCOztFQUVBO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0Usa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixNQUFNO0lBQ04sd0NBQXdDO0lBQ3hDLHNDQUFzQztJQUN0Qyx3Q0FBd0M7SUFDeEMsVUFBVTtJQUNWLG9DQUFvQztJQUNwQyxpQkFBaUI7SUFDakIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLFVBQVU7RUFDWjs7QUFFRjs7QUFFQTs7Ozs7dUVBS3VFOztBQUV2RTtFQUNFLGlDQUFpQztFQUNqQyx5REFBK0M7RUFDL0MsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osZ0NBQWdDO0VBQ2hDLFNBQVM7RUFDVCxRQUFRO0VBQ1IsNEJBQTRCO0VBQzVCLFdBQVc7RUFDWCx5Q0FBeUM7O0VBRXpDO0lBQ0UsMEJBQTBCO0VBQzVCO0FBQ0Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixTQUFTOztFQUVUO0lBQ0UsVUFBVTtFQUNaOztFQUVBO0lBQ0UsYUFBYTtJQUNiLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsNEJBQTRCO0lBQzVCLGlCQUFpQjs7SUFFakI7TUFDRSw0Q0FBNEM7SUFDOUM7RUFDRjs7RUFFQTtJQUNFLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsa0JBQWtCO0lBQ2xCLFdBQVc7O0tBRVY7TUFDQyw0QkFBNEI7TUFDNUIsc0NBQXNDO01BQ3RDLHdCQUF3QjtNQUN4QixpQkFBaUI7TUFDakIsZ0JBQWdCO0tBQ2pCO0VBQ0g7O0VBRUE7SUFDRSxVQUFVO0lBQ1YsYUFBYTtJQUNiLFNBQVM7SUFDVCxZQUFZO0lBQ1osdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkI7TUFDRSxZQUFZO01BQ1osVUFBVTtNQUNWLGFBQWE7TUFDYixtQkFBbUI7TUFDbkIsdUJBQXVCO01BQ3ZCLDRCQUE0QjtNQUM1QixpQkFBaUI7TUFDakIsZUFBZTtNQUNmLHdCQUF3QjtNQUN4QixxQ0FBcUM7SUFDdkM7O0lBRUE7TUFDRSxnQkFBZ0I7TUFDaEIsVUFBVSxFQUFFLHVEQUF1RDtJQUNyRTs7SUFFQTtNQUNFLG1DQUFtQztJQUNyQzs7SUFFQTtNQUNFLG9DQUFvQztJQUN0Qzs7SUFFQTtNQUNFLGlDQUFpQztJQUNuQztFQUNGOztFQUVBO0lBQ0UsV0FBVztJQUNYLG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0VBRUE7SUFDRSxhQUFhO0lBQ2IsU0FBUztJQUNULGFBQWE7O0lBRWI7TUFDRSxZQUFZO0lBQ2Q7RUFDRjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixzQ0FBc0M7SUFDdEMsaUJBQWlCO0lBQ2pCLGlCQUFpQjtFQUNuQjtBQUNGOztBQUVBLHNCQUFzQjtBQUN0QjtFQUNFLGFBQWE7O0VBRWI7SUFDRSxnQkFBZ0I7SUFDaEIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFLGtCQUFrQjtFQUNwQjtBQUNGOztBQUVBLHVCQUF1QjtBQUN2QjtFQUNFLHNCQUFzQjtFQUN0QixhQUFhOztFQUViO0lBQ0Usc0NBQXNDO0lBQ3RDLGlCQUFpQjtJQUNqQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0lBQ2pCLHdCQUF3QjtFQUMxQjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUEsc0JBQXNCLGtDQUFrQztFQUN0RCxZQUFZO0VBQ1osWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsd0NBQXdDO0VBQ3hDLFlBQVk7RUFDWiw0QkFBNEI7O0VBRTVCO0lBQ0Usc0NBQXNDO0lBQ3RDLHdCQUF3QjtJQUN4QixlQUFlO0VBQ2pCO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBHTE9CQUxTIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgWzFdIFNpemUgaGFjayB0byBzZXQgZGVmYXVsdCBmb250IHNpemUgdG8gXFxcIjEwcHhcXFwiIHRvIG1ha2UgMXJlbVxcclxcbiAgICAgICAgdGhlIGVxdWl2ZWxlbnQgb2YgMTBweC4gKDIuNHJlbSA9IDI0cHgsIDAuOHJlbSA9IDhweCwgZXRjKVxcclxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcclxcblxcclxcbjpyb290IHtcXHJcXG4gIGZvbnQtc2l6ZTogNjIuNSU7IC8qIFsxXSAqL1xcclxcblxcclxcbiAgLyogLS0tLS0tLS0tLS0tPiBERUZBVUxUIERBUksgTU9ERSBDT0xPUlMhISEsIENIQU5HRSBDT0xPUlMgJiBERUxFVEUgVEhJUyBDT01NRU5UIExJTkUhISEgPC0tLS0tLS0tLS0tLSAqL1xcclxcbiAgLyogTWFpbiBjb2xvcnMgKi9cXHJcXG4gIC0tQ09MT1JfQkc6IGhzbCgwLCAwJSwgMCUpO1xcclxcbiAgLS1DT0xPUl9QUklNQVJZOiBoc2woMTU1LCAzMCUsIDM4JSk7XFxyXFxuICAtLUNPTE9SX1NFQ09OREFSWTogaHNsKDMwMywgNzElLCA3MyUpO1xcclxcblxcclxcbiAgLS1QUklPX0dSRUVOOiBoc2woMTIwLCA3NyUsIDQ2JSk7XFxyXFxuICAtLVBSSU9fUFVSUExFOiBoc2woMjc4LCA3MiUsIDUwJSk7XFxyXFxuICAtLVBSSU9fUkVEOiBoc2woMCwgNzklLCA1MCUpO1xcclxcblxcclxcbiAgLyogVGV4dCAqL1xcclxcbiAgLS1GT05UX0NPTE9SOiBoc2woMzAsIDEwMCUsIDk4JSk7XFxyXFxuXFxyXFxuICAvKiBNaXNjIExheW91dCAqL1xcclxcbiAgLS1SQURJVVM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBCQVNFIFNUWUxFUyBdXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSBbIGJvZHksIGZvbnRzLCB0ZXh0IGVsZW1lbnRzLCBtZWRpYSBlbGVtZW50cyBdXFxyXFxuICAgICogU3R5bGVzIHRoYXQgYXJlIHNoYXJlZCBhY3Jvc3MgdGhlIGVudGlyZSBzaXRlXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICBcXHJcXG5ib2R5IHtcXHJcXG4gIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnRmlyYSBDb2RlJywgc2Fucy1zZXJpZjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX0JHKTtcXHJcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vaW1nL25vaXNlLWxpZ2h0LnBuZycpO1xcclxcbiAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcXHJcXG4gIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgW2NvbnRlbnQtc3RhcnRdIG1pbm1heCgzMDBweCwgNzAwcHgpIFtjb250ZW50LWVuZF0gMWZyO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiBtaW4tY29udGVudCAxZnI7XFxyXFxuICBnYXA6IDIwcHg7XFxyXFxuXFxyXFxuICAmID4gKiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiBjb250ZW50O1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICAgICYgPiAqIHsgZ3JpZC1jb2x1bW46IDEgLyAyOyB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbjo6c2VsZWN0aW9uIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XFxyXFxuICBjb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xcclxcbn1cXHJcXG5cXHJcXG5ociB7XFxyXFxuICBib3JkZXItdG9wOiAxcHggZGFzaGVkIHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XFxyXFxufVxcclxcblxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgSEVBREVSIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgKiBFeHRyZW1lbHkgc2ltcGxlIGhlYWRlciwgdXBkYXRlcyBvbiB3aGljaCB0YXNrIGdyb3VwIHNlbGVjdGVkXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuICBcXHJcXG5oZWFkZXIge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDAgMjBweDtcXHJcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuXFxyXFxuICAmIDpsYXN0LWNoaWxkIHtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NTBweCkge1xcclxcbiAgICAmIDpmaXJzdC1jaGlsZCB7IC8qIE1ha2Ugcm9vbSBmb3IgaGFtYnVyZ2VyIG1lbnUgYXQgc21hbGxlciByZXNvbHV0aW9uICovXFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MDBweCkge1xcclxcbiAgICAmIGgxIHsgZGlzcGxheTogbm9uZTsgfVxcclxcbiAgICAmICNjcmVhdGVOZXcgeyBwYWRkaW5nLXJpZ2h0OiAxMHB4OyB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiAgICAtIC0gLSAtIC0gLSAtIC0gLSAtIFsgU0lERUJBUiBdXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgICogQSBzaWRlYmFyIHRoYXQgdG9nZ2xlcyBvbiBhbmQgb2ZmIHdoZW4gaW4gbW9iaWxlLCBwb3BwaW5nXFxyXFxuICAgICAgaXQgb3V0IGZyb20gdGhlIGxlZnQgc2lkZS4gT3RoZXJ3aXNlIHBlcm1hbmVudGx5IG9uIHdoaWxlXFxyXFxuICAgICAgb24gZGVza3RvcC5cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG4jc2lkZWJhci10b2dnbGUge1xcclxcbiAgd2lkdGg6IDgwcHg7XFxyXFxuICBoZWlnaHQ6IDcwcHg7XFxyXFxuICB0b3A6IDIwcHg7XFxyXFxuICBsZWZ0OiBjYWxjKCgxMDB2dyAtIDk0MHB4KSAvIDIpO1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgei1pbmRleDogMTA7XFxyXFxuXFxyXFxuICAmIGlucHV0IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIHNwYW4ge1xcclxcbiAgICBsZWZ0OiAyMCU7XFxyXFxuICAgIHRvcDogMzAlO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgd2lkdGg6IDUwcHg7XFxyXFxuICAgIGhlaWdodDogNnB4O1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfU0VDT05EQVJZKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogNHB4IDBweDtcXHJcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNXMgY3ViaWMtYmV6aWVyKDAuNzcsMC4yLDAuMDUsMS4wKSxcXHJcXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZCAwLjVzIGN1YmljLWJlemllcigwLjc3LDAuMiwwLjA1LDEuMCksXFxyXFxuICAgICAgICAgICAgICAgIG9wYWNpdHkgMC41NXMgZWFzZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgc3BhbjpmaXJzdC1jaGlsZCB7XFxyXFxuICAgIHRyYW5zZm9ybS1vcmlnaW46IDAlIDAlO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBzcGFuOm50aC1sYXN0LWNoaWxkKDIpIHtcXHJcXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCUgMTAwJTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW4ge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg0NWRlZykgdHJhbnNsYXRlKC0ycHgsIC0xcHgpO1xcclxcbiAgICBiYWNrZ3JvdW5kOiByZWQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGlucHV0OmNoZWNrZWQgfiBzcGFuOmZpcnN0LWNoaWxkIHtcXHJcXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpIHRyYW5zbGF0ZVgoLTBweCkgdHJhbnNsYXRlWSgtM3B4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgaW5wdXQ6Y2hlY2tlZCB+IHNwYW46bnRoLWxhc3QtY2hpbGQoMikge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKSBzY2FsZSgwLjIsIDAuMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIGlucHV0OmNoZWNrZWQgfiBzcGFuOmxhc3QtY2hpbGQge1xcclxcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVgoLTZweCkgdHJhbnNsYXRlWSgwcHgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTI5MHB4KSB7IGxlZnQ6IDIwcHg7IH1cXHJcXG4gIC8qIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMDBweCkgeyBsZWZ0OiAyMHB4OyB9ICovXFxyXFxufVxcclxcblxcclxcbiNzaWRlYmFyIHtcXHJcXG4gIHdpZHRoOiAyNzVweDtcXHJcXG4gIHBhZGRpbmctbGVmdDogMTBweDtcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMTIwcHg7XFxyXFxuICBsZWZ0OiBjYWxjKCgxMDB2dyAtIDEzMDBweCkgLyAyKTsgLyogZm9yY2UgcmVzcG9uc2l2ZW5lc3Mgd2hlbiByZXNpemluZy4uIG1vdGhlciBvZiBnb2QgaXQgd29ya3MgKi9cXHJcXG4gIGhlaWdodDogMTAwdmg7XFxyXFxuICBvdmVyZmxvdy15OiBhdXRvO1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzIGVhc2Utb3V0LCBvcGFjaXR5IDAuM3MgZWFzZS1vdXQsIHZpc2liaWxpdHkgMC4zcyBlYXNlLW91dDtcXHJcXG5cXHJcXG4gICYgLmFjdGl2ZSB7XFxyXFxuICAgIGNvbG9yOiByZWQ7XFxyXFxuICAgIG1hcmdpbi1yaWdodDogOHB4O1xcclxcbiAgICB0cmFuc2l0aW9uOiBtYXJnaW4tcmlnaHQgMC4zcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IC0ycHggMnB4IDJweCB2YXIoLS1DT0xPUl9CRyk7XFxyXFxuXFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgY29udGVudDogJz4nO1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgXFxyXFxuICAmID4gKiB7XFxyXFxuICAgIG1hcmdpbjogMCAyMHB4IDIwcHggMDtcXHJcXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG4gIFxcclxcbiAgJiA+ICogPiAqIHtcXHJcXG4gICAgcGFkZGluZy10b3A6IDE0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5sb3cgIHsgY29sb3I6IHZhcigtLVBSSU9fR1JFRU4pOyB9XFxyXFxuICAmIC5tZWRpdW0gIHsgY29sb3I6IHZhcigtLVBSSU9fUFVSUExFKTsgfVxcclxcbiAgJiAuaGlnaCB7IGNvbG9yOiB2YXIoLS1QUklPX1JFRCk7IH1cXHJcXG5cXHJcXG4gICYgLnByb2plY3QtYnRuIHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDhweCAwO1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgb3BhY2l0eTogMC44O1xcclxcbiAgfVxcclxcblxcclxcbiAgJiAucHJvamVjdC1idG46aG92ZXIge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuXFxyXFxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjkwcHgpIHtcXHJcXG4gICAgdG9wOiAwO1xcclxcbiAgICBsZWZ0OiAwO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBoc2xhKDAsIDAlLCAwJSwgMC44KTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgfSBcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGUtc2lkZWJhciB7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwMHB4KTtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbiNkZWxldGUtcHJvamVjdCB7XFxyXFxuICAvKiBtYXJnaW4tdG9wOiA2MHB4OyAqL1xcclxcbiAgb3BhY2l0eTogMC41O1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIG9wYWNpdHk6IDE7XFxyXFxuICAgIGNvbG9yOiBkYXJrcmVkO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIE1BSU4gQ09OVEVOVCBdXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuICAgIC0gLSBbIG1haW4sIHNlY3Rpb24sIGRpdiwgYXJ0aWNsZSwgYXNpZGUsIGZvcm0gXVxcclxcbiAgICAqIHJlcGxhY2UgJUNPTlRFTlQgd2l0aCBvbmUgb2YgdGhlIGFib3ZlIHdoZW4gcGFzdGluZyB0aGlzXFxyXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC1hdXRvLXJvd3M6IG1pbi1jb250ZW50O1xcclxcbiAgZ2FwOiAxMHB4O1xcclxcblxcclxcbiAgJiA+ICoge1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1DT0xPUl9QUklNQVJZKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxMnB4IDEwcHggMTJweCAyOHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcblxcclxcbiAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xcclxcbiAgICAgIG1hcmdpbjogMCAxMHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5wcmlvcml0eSB7IC8qIFRBU0sgQ09MT1IgQkFSIE9GIElNUE9SVEFOQ0UhICovXFxyXFxuICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIGxlZnQ6IDA7XFxyXFxuICAgIHdpZHRoOiAxMnB4O1xcclxcbiAgICBoZWlnaHQ6IDEwMCU7XFxyXFxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgIHRyYW5zaXRpb246IHdpZHRoIDAuMnMgZWFzZS1pbi1vdXQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvKiBUYXNrIGNvbG9yIGJhciBjb2xvciBzZWxlY3QgKi9cXHJcXG4gICYgLmxvdyAgeyBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1QUklPX0dSRUVOKTsgfVxcclxcbiAgJiAubWVkaXVtICB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9fUFVSUExFKTsgfVxcclxcbiAgJiAuaGlnaCB7IGJhY2tncm91bmQtY29sb3I6IHZhcigtLVBSSU9fUkVEKTsgfVxcclxcblxcclxcbiAgJiA6aG92ZXIgLnByaW9yaXR5IHsgLyogRXhwYW5kIHByaW9yaXR5IGNvbG9yIHNsaWdodGx5ICovXFxyXFxuICAgIHdpZHRoOiAyNHB4O1xcclxcbiAgICBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCB2YXIoLS1DT0xPUl9CRyk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICBcXHJcXG4gICYgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICYgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSArIHNwYW46OmJlZm9yZSB7IC8qIFRhcmdldCB0aGUgdGFzay1jb250ZW50IGZvciBzdHJpa2V0aHJvdWdocyAqL1xcclxcbiAgICBjb250ZW50OiAnJztcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQgMCA0OCUsIGJsYWNrIDUwJSBjYWxjKDUwJSArIDJweCksIHRyYW5zcGFyZW50IGNhbGMoNTAlICsgMnB4KSAxMDAlKTtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgdHJhbnNpdGlvbjogd2lkdGggMC4xcyBsaW5lYXI7XFxyXFxuICB9XFxyXFxuICBcXHJcXG4gICYgaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXTpjaGVja2VkICsgc3Bhbjo6YmVmb3JlIHsgLyogVGFyZ2V0IHRoZSB0YXNrLWNvbnRlbnQgZm9yIHN0cmlrZXRocm91Z2hzICovXFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgXFxyXFxuICAmIC50YXNrLWNvbnRlbnQge1xcclxcbiAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgfVxcclxcblxcclxcblxcclxcblxcclxcbiAgLyogJiAudGFzay1jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgICB3aWR0aDogODAlO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxyXFxuICB9ICovXFxyXFxuXFxyXFxuICAmIC5wcm9qZWN0IHsgLyogUHJvamVjdCB0YWIgb24gdGhlIHRvZG8gaXRlbSAqL1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgbGVmdDogNTAlO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX0JHKTsgLyogQ0hBTkdFIENPTE9SIElOIEpTIFRPIFRIRSBUQVNLIFBST0pFQ1QgVEhBVCBJUyBHSVZFTiAqL1xcclxcbiAgICBoZWlnaHQ6IDE0cHg7XFxyXFxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcXHJcXG4gICAgcGFkZGluZzogMCAxMHB4O1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGZvbnQtc2l6ZTogMXJlbTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDEuMjtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgIG9wYWNpdHk6IDAuNTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLnRhc2tUaW1lIHtcXHJcXG4gICAgZm9udC1zaXplOiAxLjRyZW07XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDEwcHg7XFxyXFxuICAgIGJvdHRvbTogMDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLmVkaXQge1xcclxcbiAgICBmb250LXNpemU6IDEuNXJlbTtcXHJcXG4gICAgY29sb3I6IGJsYWNrO1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgIHRyYW5zZm9ybTogcm90YXRlKC05MGRlZyk7XFxyXFxuICAgIGxlZnQ6IC01cHg7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4ycyBlYXNlLWluLW91dDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgPiAqOmhvdmVyIC5lZGl0IHtcXHJcXG4gICAgb3BhY2l0eTogMTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLmRlbGV0ZSB7XFxyXFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgcmlnaHQ6IDA7XFxyXFxuICAgIHRvcDogMDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuMzk3KTtcXHJcXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xcyBlYXNlLWluLW91dDtcXHJcXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgPiAqOmhvdmVyIC5kZWxldGUge1xcclxcbiAgICBvcGFjaXR5OiAxO1xcclxcbiAgfVxcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIC0gLSAtIC0gLSAtIC0gLSBbIFRBU0sgTU9EQUwgJiBGT1JNIF1cXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4gICAgLSAtIFsgbWFpbiwgc2VjdGlvbiwgZGl2LCBhcnRpY2xlLCBhc2lkZSwgZm9ybSBdXFxyXFxuICAgICogcmVwbGFjZSAlQ09OVEVOVCB3aXRoIG9uZSBvZiB0aGUgYWJvdmUgd2hlbiBwYXN0aW5nIHRoaXNcXHJcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXHJcXG5cXHJcXG5kaWFsb2cge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfQkcpO1xcclxcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi9pbWcvbm9pc2UtbGlnaHQucG5nJyk7XFxyXFxuICBoZWlnaHQ6IG1pbi1jb250ZW50O1xcclxcbiAgbWF4LWhlaWdodDogNDYwcHg7XFxyXFxuICB3aWR0aDogNTAwcHg7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcXHJcXG4gIGxlZnQ6IDUwJTtcXHJcXG4gIHRvcDogNTAlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gIHotaW5kZXg6IDEyO1xcclxcbiAgYm9yZGVyOiAycHggZG90dGVkIHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XFxyXFxuXFxyXFxuICAmOjpiYWNrZHJvcCB7XFxyXFxuICAgIGJhY2tkcm9wLWZpbHRlcjogYmx1cig0cHgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5mb3JtIHtcXHJcXG4gIHBhZGRpbmc6IDEwcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGdhcDogMjBweDtcXHJcXG5cXHJcXG4gIGxhYmVsIHtcXHJcXG4gICAgY29sb3I6IHJlZDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdIHtcXHJcXG4gICAgb3V0bGluZTogbm9uZTtcXHJcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgcGFkZGluZzogMnB4IDEwcHg7XFxyXFxuXFxyXFxuICAgICY6Zm9jdXMge1xcclxcbiAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDAgMCB2YXIoLS1DT0xPUl9TRUNPTkRBUlkpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5mb3JtLXRpbWUge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBcXHJcXG4gICAgICYgaW5wdXQge1xcclxcbiAgICAgIGJvcmRlci1yYWRpdXM6IHZhcigtLVJBRElVUyk7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxuICAgICAgY29sb3I6IHZhcigtLUZPTlRfQ09MT1IpO1xcclxcbiAgICAgIHBhZGRpbmc6IDhweCAyMHB4O1xcclxcbiAgICAgIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmIC5mb3JtLXByaW8ge1xcclxcbiAgICBjb2xvcjogcmVkO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBnYXA6IDIwcHg7XFxyXFxuICAgIGhlaWdodDogNDBweDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAgICYgbGFiZWwge1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB3aWR0aDogMzMlO1xcclxcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xcclxcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XFxyXFxuICAgICAgdGV4dC1zaGFkb3c6IHZhcigtLUNPTE9SX0JHKSAtMnB4IDFweDtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIGlucHV0W3R5cGU9XFxcInJhZGlvXFxcIl0ge1xcclxcbiAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgb3BhY2l0eTogMDsgLyogSGFja3kgZml4IGZvciBpbml0aWFsIHBhZ2UgbG9hZCB0byBmb3JjZSBubyByYWRpb3MgKi9cXHJcXG4gICAgfVxcclxcblxcclxcbiAgICAmIGlucHV0W2lkPVxcXCJsb3dcXFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVxcXCJsb3dcXFwiXSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19HUkVFTik7XFxyXFxuICAgIH1cXHJcXG4gIFxcclxcbiAgICAmIGlucHV0W2lkPVxcXCJtZWRpdW1cXFwiXTpjaGVja2VkIH4gbGFiZWxbZm9yPVxcXCJtZWRpdW1cXFwiXSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19QVVJQTEUpO1xcclxcbiAgICB9XFxyXFxuICBcXHJcXG4gICAgJiBpbnB1dFtpZD1cXFwiaGlnaFxcXCJdOmNoZWNrZWQgfiBsYWJlbFtmb3I9XFxcImhpZ2hcXFwiXSB7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tUFJJT19SRUQpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmICN0YXNrTmFtZSB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICBoZWlnaHQ6IG1heC1jb250ZW50O1xcclxcbiAgICBmb250LXNpemU6IDIuNHJlbTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgLnN1Ym1pdFRvIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiAyMHB4O1xcclxcbiAgICBwYWRkaW5nOiAxNHB4O1xcclxcblxcclxcbiAgICAmIHNlbGVjdCB7XFxyXFxuICAgICAgZmxleC1ncm93OiAxO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmICNkcm9wZG93biB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tQ09MT1JfUFJJTUFSWSk7XFxyXFxuICAgIHBhZGRpbmc6IDRweCAxMHB4O1xcclxcbiAgICBmb250LXNpemU6IDEuNHJlbTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLyogTmV3IFByb2plY3QgTW9kYWwgKi9cXHJcXG4jcHJvamVjdE1vZGFsIHtcXHJcXG4gIGhlaWdodDogMTQwcHg7XFxyXFxuXFxyXFxuICAmIGlucHV0IHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXHJcXG4gICAgcGFkZGluZzogMTBweCAwO1xcclxcbiAgfVxcclxcblxcclxcbiAgJiBidXR0b24ge1xcclxcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8qIERlbGV0ZSBHcm91cCBNb2RhbCAqL1xcclxcbiNkZWxldGVQcm9qZWN0TW9kYWwge1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuXFxyXFxuICAmIHNlbGVjdCB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xcclxcbiAgICBmb250LXNpemU6IDIuMnJlbTtcXHJcXG4gICAgYm9yZGVyLXJhZGl1czogdmFyKC0tUkFESVVTKTtcXHJcXG4gICAgcGFkZGluZzogNHB4IDE0cHg7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1GT05UX0NPTE9SKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICYgYnV0dG9uIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMjBweDtcXHJcXG4gICAgd2lkdGg6IDkwJTtcXHJcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5idXR0b25bdHlwZT1zdWJtaXRdIHsgLyogU3VibWl0IEJ1dHRvbiBmb3IgYm90aCBtb2RhbHMgKi9cXHJcXG4gIHdpZHRoOiAxNTBweDtcXHJcXG4gIGhlaWdodDogNDBweDtcXHJcXG4gIHJpZ2h0OiAyNXB4O1xcclxcbiAgY29sb3I6IHZhcigtLUNPTE9SX0JHKTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1NFQ09OREFSWSk7XFxyXFxuICBvcGFjaXR5OiAwLjg7XFxyXFxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1SQURJVVMpO1xcclxcblxcclxcbiAgJjpob3ZlciB7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLUNPTE9SX1BSSU1BUlkpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tRk9OVF9DT0xPUik7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3Jlc2V0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIE5BViB7XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICB0aGlzLnRhc2tMaXN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2stbGlzdCcpXHJcbiAgICB0aGlzLnNpZGViYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhcicpXHJcbiAgICB0aGlzLm1lbnVUYXNrID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtdGFza3MnKS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXHJcbiAgICB0aGlzLm1lbnVQcmlvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcHJpb3JpdHknKS5xdWVyeVNlbGVjdG9yQWxsKCdsaScpXHJcbiAgICB0aGlzLm1lbnVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcHJvamVjdCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcclxuICAgIHRoaXMuc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzaWRlYmFyLXRvZ2dsZScpXHJcbiAgICB0aGlzLnNpZGViYXJCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc2lkZWJhci1idXR0b24nKVxyXG4gICAgdGhpcy5pbml0RXZlbnRMaXN0ZW5lcnMoKVxyXG4gIH1cclxuXHJcbiAgaW5pdEV2ZW50TGlzdGVuZXJzKCkge1xyXG5cclxuICAgIHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMjkwcHgnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB0aGlzLnRvZ2dsZVNpZGViYXIoKSlcclxuXHJcbiAgICB0aGlzLm1lbnVUYXNrLmZvckVhY2goKGdyb3VwKSA9PiB7XHJcbiAgICAgIGdyb3VwLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuYWN0aXZlR3JvdXAoJ3Rhc2tzJywgZ3JvdXApXHJcbiAgICAgICAgdGhpcy5maWx0ZXJUYXNrcygndGFza3MnLCBncm91cC5pbm5lclRleHQpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgdGhpcy5tZW51UHJpby5mb3JFYWNoKChncm91cCkgPT4ge1xyXG4gICAgICBncm91cC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICB0aGlzLmFjdGl2ZUdyb3VwKCdwcmlvcml0eScsIGdyb3VwKVxyXG4gICAgICAgIHRoaXMuZmlsdGVyVGFza3MoJ3ByaW9yaXR5JywgZ3JvdXAuaW5uZXJUZXh0KVxyXG4gICAgICB9KVxyXG4gICAgfSlcclxuICBcclxuICAgIHRoaXMubWVudVByb2plY3QuZm9yRWFjaCgoZ3JvdXApID0+IHtcclxuICAgICAgZ3JvdXAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgdGhpcy5hY3RpdmVHcm91cCgncHJvamVjdCcsIGdyb3VwKVxyXG4gICAgICAgIHRoaXMuZmlsdGVyVGFza3MoJ3Byb2plY3QnLCBncm91cC5pbm5lclRleHQpXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgXHJcbiAgICB0aGlzLnNpZGViYXJUb2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB0aGlzLnRvZ2dsZVNpZGViYXIoKSlcclxuXHJcbiAgICBjb25zdCBtZW51UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtZW51LXByb2plY3QnKVxyXG4gICAgbWVudVByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignRE9NTm9kZUluc2VydGVkJywgKGUpID0+IHtcclxuICAgICAgaWYoZS50YXJnZXQubm9kZU5hbWUgPT09ICdMSScpIHtcclxuICAgICAgICB0aGlzLm1lbnVQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcHJvamVjdCcpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpJylcclxuICAgICAgICBlLnRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuICAgICAgICAgIHRoaXMuYWN0aXZlR3JvdXAoJ3Byb2plY3QnLCBlLnRhcmdldClcclxuICAgICAgICAgIHRoaXMuZmlsdGVyVGFza3MoJ3Byb2plY3QnLCBlLnRhcmdldC5pbm5lclRleHQpXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGFjdGl2ZUdyb3VwKGdyb3VwTmFtZSwgdGFyZ2V0RWxlbWVudCkge1xyXG4gICAgY29uc3QgZ3JvdXBzID0ge1xyXG4gICAgICAndGFza3MnOiB0aGlzLm1lbnVUYXNrLFxyXG4gICAgICAncHJpb3JpdHknOiB0aGlzLm1lbnVQcmlvLFxyXG4gICAgICAncHJvamVjdCc6IHRoaXMubWVudVByb2plY3RcclxuICAgIH1cclxuICBcclxuICAgIGNvbnN0IGdyb3VwRWxlbWVudHMgPSBncm91cHNbZ3JvdXBOYW1lXVxyXG4gIFxyXG4gICAgZ3JvdXBFbGVtZW50cy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpXHJcbiAgICB9KVxyXG4gIFxyXG4gICAgdGFyZ2V0RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKVxyXG4gIH1cclxuICBcclxuICB0b2dnbGVTaWRlYmFyKCl7XHJcbiAgICBpZih0aGlzLnNpZGViYXIuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaG93LXNpZGViYXInKSkge1xyXG4gICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdy1zaWRlYmFyJylcclxuICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ2hpZGUtc2lkZWJhcicpXHJcbiAgICAgIHRoaXMuc2lkZWJhckJ1dHRvbi5jaGVja2VkID0gdHJ1ZSAvLyBUbyBmb3JjZSB0aGUgYnVyZ2VyIG1lbnUgdG8gY2hhbmdlIHN0YXRlXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNpZGViYXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZS1zaWRlYmFyJylcclxuICAgICAgdGhpcy5zaWRlYmFyLmNsYXNzTGlzdC5hZGQoJ3Nob3ctc2lkZWJhcicpXHJcbiAgICAgIHRoaXMuc2lkZWJhckJ1dHRvbi5jaGVja2VkID0gZmFsc2VcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGZpbHRlclRhc2tzKCkge1xyXG4gICAgY29uc3QgdGFza0VsZW1lbnRzID0gdGhpcy50YXNrTGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcudGFzaycpO1xyXG4gICAgY29uc3Qgc2VsZWN0ZWREYXRlT3B0aW9uID0gQXJyYXkuZnJvbSh0aGlzLm1lbnVUYXNrKS5maW5kKGxpID0+IGxpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpLmlubmVyVGV4dDtcclxuICAgIGNvbnN0IHNlbGVjdGVkUHJpb3JpdHlPcHRpb24gPSBBcnJheS5mcm9tKHRoaXMubWVudVByaW8pLmZpbmQobGkgPT4gbGkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkuaW5uZXJUZXh0O1xyXG4gICAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0T3B0aW9uID0gQXJyYXkuZnJvbSh0aGlzLm1lbnVQcm9qZWN0KS5maW5kKGxpID0+IGxpLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpLmlubmVyVGV4dDtcclxuICAgIGNvbnN0IHVzZXJTZWxlY3RlZERhdGUgPSB0aGlzLmdldFVzZXJTZWxlY3RlZERhdGUoc2VsZWN0ZWREYXRlT3B0aW9uKVxyXG4gIFxyXG4gICAgdGFza0VsZW1lbnRzLmZvckVhY2godGFza0VsZW1lbnQgPT4ge1xyXG4gICAgICBjb25zdCB0YXNrRGF0ZSA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YXNrVGltZScpLmlubmVyVGV4dFxyXG4gICAgICBjb25zdCB0YXNrUHJpb3JpdHkgPSB0YXNrRWxlbWVudC5xdWVyeVNlbGVjdG9yKCdzcGFuJykuY2xhc3NMaXN0LnZhbHVlXHJcbiAgICAgIGNvbnN0IHRhc2tQcm9qZWN0ID0gdGFza0VsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QnKS5pbm5lclRleHRcclxuICBcclxuICAgICAgY29uc3Qgc2hvdWxkU2hvd1Rhc2sgPVxyXG4gICAgICAgIChzZWxlY3RlZERhdGVPcHRpb24gPT09ICdBbGwgVGFza3MnIHx8IChzZWxlY3RlZERhdGVPcHRpb24gPT09ICdEYWlseScgJiYgdGhpcy5pc1RvZGF5KHRhc2tEYXRlLCB1c2VyU2VsZWN0ZWREYXRlKSkgfHwgKHNlbGVjdGVkRGF0ZU9wdGlvbiA9PT0gJ1dlZWtseScgJiYgdGhpcy5pc1RoaXNXZWVrKHRhc2tEYXRlLCB1c2VyU2VsZWN0ZWREYXRlKSkpICYmXHJcbiAgICAgICAgKHNlbGVjdGVkUHJpb3JpdHlPcHRpb24gPT09ICdBbGwgUHJpb3JpdGllcycgfHwgdGFza1ByaW9yaXR5LmluY2x1ZGVzKHNlbGVjdGVkUHJpb3JpdHlPcHRpb24udG9Mb3dlckNhc2UoKSkpICYmXHJcbiAgICAgICAgKHNlbGVjdGVkUHJvamVjdE9wdGlvbiA9PT0gJ0FsbCBQcm9qZWN0cycgfHwgdGFza1Byb2plY3QgPT09IHNlbGVjdGVkUHJvamVjdE9wdGlvbilcclxuICBcclxuICAgICAgdGFza0VsZW1lbnQuc3R5bGUuZGlzcGxheSA9IHNob3VsZFNob3dUYXNrID8gJ2ZsZXgnIDogJ25vbmUnXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ2V0VXNlclNlbGVjdGVkRGF0ZShzZWxlY3RlZERhdGVPcHRpb24pIHtcclxuICAgIGlmIChzZWxlY3RlZERhdGVPcHRpb24gPT09ICdEYWlseScpIHtcclxuICAgICAgcmV0dXJuIG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKS5zbGljZSgwLCAxMClcclxuICAgIH0gZWxzZSBpZiAoc2VsZWN0ZWREYXRlT3B0aW9uID09PSAnV2Vla2x5Jykge1xyXG4gICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKClcclxuICAgICAgcmV0dXJuIHRvZGF5LnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gbnVsbFxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgaXNUb2RheShkYXRlU3RyaW5nLCB1c2VyU2VsZWN0ZWREYXRlKSB7XHJcbiAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKHVzZXJTZWxlY3RlZERhdGUpXHJcbiAgICBjb25zdCB0YXNrRGF0ZSA9IG5ldyBEYXRlKGRhdGVTdHJpbmcpXHJcbiAgXHJcbiAgICBpZiAoaXNOYU4odGFza0RhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuICBcclxuICAgIHJldHVybiB0b2RheS50b0RhdGVTdHJpbmcoKSA9PT0gdGFza0RhdGUudG9EYXRlU3RyaW5nKClcclxuICB9XHJcblxyXG4gIGlzVGhpc1dlZWsoZGF0ZVN0cmluZywgdXNlclNlbGVjdGVkRGF0ZSkge1xyXG4gICAgY29uc3QgdG9kYXkgPSBuZXcgRGF0ZSh1c2VyU2VsZWN0ZWREYXRlKVxyXG4gICAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZShkYXRlU3RyaW5nKVxyXG4gICAgXHJcbiAgICBpZiAoaXNOYU4odGFza0RhdGUuZ2V0VGltZSgpKSkge1xyXG4gICAgICByZXR1cm4gZmFsc2VcclxuICAgIH1cclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgdGhlIGVuZCBkYXRlIHdoaWNoIGlzIHRvZGF5ICsgNiBkYXlzXHJcbiAgICBjb25zdCBlbmRPZldlZWsgPSBuZXcgRGF0ZSh0b2RheS5nZXRUaW1lKCkgKyA2ICogMjQgKiA2MCAqIDYwICogMTAwMClcclxuICBcclxuICAgIC8vIENoZWNrIGlmIHRhc2tEYXRlIGlzIHdpdGhpbiB0aGUgYWRqdXN0ZWQgcmFuZ2UgKHRvZGF5ICsgNiBkYXlzKVxyXG4gICAgcmV0dXJuIHRhc2tEYXRlID49IHRvZGF5ICYmIHRhc2tEYXRlIDw9IGVuZE9mV2Vla1xyXG4gIH1cclxuXHJcbn0iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBQUk9KRUNUIHtcclxuICBzdGF0aWMgY3JlYXRlUHJvamVjdChwcm9qZWN0TmFtZSkge1xyXG4gICAgY29uc3QgbWVudVByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWVudS1wcm9qZWN0JylcclxuICAgIC8vIENyZWF0ZSBuZXcgUHJvamVjdFxyXG4gICAgY29uc3QgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpXHJcbiAgICBsaS5pbm5lclRleHQgPSBwcm9qZWN0TmFtZVxyXG5cclxuICAgIG1lbnVQcm9qZWN0LmFwcGVuZENoaWxkKGxpKVxyXG4gICAgcmV0dXJuIGxpXHJcbiAgfVxyXG59IiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgVE9ETyB7XHJcbiAgc3RhdGljIGNyZWF0ZVRhc2sodGFza0NvbnRlbnQsIHRhc2tQcmlvcml0eSwgcHJvamVjdE5hbWUsIHRhc2tEYXRlKSB7XHJcbiAgICAvLyBDcmVhdGUgbmV3IFRhc2tcclxuICAgIGNvbnN0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBkaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpXHJcbiAgICAvLyBkaXYuaW5uZXJUZXh0ID0gdGFza0NvbnRlbnRcclxuXHJcbiAgICBjb25zdCB0YXNrQ2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpXHJcbiAgICB0YXNrQ2hlY2tib3gudHlwZSA9ICdjaGVja2JveCdcclxuXHJcbiAgICBjb25zdCB0YXNrQ29udGVudFRleHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJylcclxuICAgIHRhc2tDb250ZW50VGV4dC5pbm5lclRleHQgPSB0YXNrQ29udGVudFxyXG4gICAgdGFza0NvbnRlbnRUZXh0LmNsYXNzTGlzdC5hZGQoJ3Rhc2stY29udGVudCcpXHJcblxyXG4gICAgLy8gQ3JlYXRlIGEgZmFrZSA6OmJlZm9yZSB3aXRoIGEgc3BhbiB0byBjaGFuZ2UgY29sb3JzIHRvIGluZGljYXRlIHByaW9yaXR5XHJcbiAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKVxyXG4gICAgcHJpb3JpdHkuY2xhc3NMaXN0LmFkZCgncHJpb3JpdHknLCB0YXNrUHJpb3JpdHkpXHJcblxyXG4gICAgLy8gQ3JlYXRlIFByb2plY3QgSGVhZGVyIGluc2lkZSBUYXNrIGRpdlxyXG4gICAgY29uc3QgcHJvamVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICBwcm9qZWN0LmNsYXNzTGlzdC5hZGQoJ3Byb2plY3QnKVxyXG4gICAgcHJvamVjdC5pbm5lclRleHQgPSBwcm9qZWN0TmFtZSB8fCAnQWxsIFByb2plY3RzJ1xyXG5cclxuICAgIGNvbnN0IGVkaXRUYXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2JylcclxuICAgIGVkaXRUYXNrLmNsYXNzTGlzdC5hZGQoJ2VkaXQnKVxyXG4gICAgZWRpdFRhc2suaW5uZXJUZXh0ID0gJ0VESVQnXHJcblxyXG4gICAgZWRpdFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKCdFRElUIE1FIScpXHJcbiAgICAgIGNvbnN0IG5ld0NvbnRlbnQgPSBwcm9tcHQoJ0VudGVyIG5ldyB0YXNrIGNvbnRlbnQ6JywgdGFza0NvbnRlbnQpXHJcbiAgICAgIGlmKG5ld0NvbnRlbnQgIT09IG51bGwpIHtcclxuICAgICAgICB0YXNrQ29udGVudFRleHQuaW5uZXJUZXh0ID0gbmV3Q29udGVudFxyXG4gICAgICAgIC8vIFVwZGF0ZSB0aGUgdGFzayBpbiBsb2NhbFN0b3JhZ2VcclxuICAgICAgICBjb25zdCB0YXNrcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Rhc2tzJykpIHx8IFtdXHJcbiAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KHRhc2sgPT4gdGFzay5jb250ZW50ID09PSB0YXNrQ29udGVudCAmJiB0YXNrLnByaW9yaXR5ID09PSB0YXNrUHJpb3JpdHkgJiYgdGFzay5wcm9qZWN0ID09PSBwcm9qZWN0TmFtZSAmJiB0YXNrLnRpbWUgPT09IHRhc2tEYXRlKVxyXG4gICAgICAgIGlmICh0YXNrSW5kZXggIT09IC0xKSB7XHJcbiAgICAgICAgICB0YXNrc1t0YXNrSW5kZXhdLmNvbnRlbnQgPSBuZXdDb250ZW50XHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGRlbFRhc2sgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKVxyXG4gICAgZGVsVGFzay5jbGFzc0xpc3QuYWRkKCdkZWxldGUnKVxyXG4gICAgZGVsVGFzay5pbm5lclRleHQgPSAnREVMRVRFJ1xyXG5cclxuICAgIGRlbFRhc2suYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNvbmZpcm1lZCA9IGNvbmZpcm0oJ0FyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgdGhpcyB0YXNrPycpXHJcbiAgICAgIGlmKGNvbmZpcm1lZCkge1xyXG4gICAgICAgIGRpdi5yZW1vdmUoKVxyXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgdGFzayBmcm9tIGxvY2FsU3RvcmFnZVxyXG4gICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW11cclxuICAgICAgICBjb25zdCB0YXNrSW5kZXggPSB0YXNrcy5maW5kSW5kZXgodGFzayA9PiB0YXNrLmNvbnRlbnQgPT09IHRhc2tDb250ZW50ICYmIHRhc2sucHJpb3JpdHkgPT09IHRhc2tQcmlvcml0eSAmJiB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lICYmIHRhc2sudGltZSA9PT0gdGFza0RhdGUpXHJcbiAgICAgICAgaWYgKHRhc2tJbmRleCAhPT0gLTEpIHtcclxuICAgICAgICAgIHRhc2tzLnNwbGljZSh0YXNrSW5kZXgsIDEpXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh0YXNrcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBkaXYuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICBpZiAoIWUudGFyZ2V0Lm1hdGNoZXMoJy5lZGl0LCAuZGVsZXRlJykpIHtcclxuICAgICAgICB0YXNrQ2hlY2tib3guY2hlY2tlZCA9ICF0YXNrQ2hlY2tib3guY2hlY2tlZFxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnQ0hFQ0sgTUVFRUVFRUVFRUVFJylcclxuICAgICAgICAgLy8gU2F2ZSB0aGUgY2hlY2tib3ggc3RhdGUgdG8gbG9jYWxTdG9yYWdlXHJcbiAgICAgICAgIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW11cclxuICAgICAgICAgY29uc3QgdGFza0luZGV4ID0gdGFza3MuZmluZEluZGV4KFxyXG4gICAgICAgICAgICh0YXNrKSA9PlxyXG4gICAgICAgICAgICAgdGFzay5jb250ZW50ID09PSB0YXNrQ29udGVudCAmJlxyXG4gICAgICAgICAgICAgdGFzay5wcmlvcml0eSA9PT0gdGFza1ByaW9yaXR5ICYmXHJcbiAgICAgICAgICAgICB0YXNrLnByb2plY3QgPT09IHByb2plY3ROYW1lICYmXHJcbiAgICAgICAgICAgICB0YXNrLnRpbWUgPT09IHRhc2tEYXRlXHJcbiAgICAgICAgICk7XHJcblxyXG4gICAgICAgICBpZiAodGFza0luZGV4ICE9PSAtMSkge1xyXG4gICAgICAgICAgdGFza3NbdGFza0luZGV4XS5jaGVja2VkID0gdGFza0NoZWNrYm94LmNoZWNrZWRcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0YXNrcycsIEpTT04uc3RyaW5naWZ5KHRhc2tzKSlcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgdGltZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpXHJcbiAgICB0aW1lLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUaW1lJylcclxuICAgIHRpbWUuaW5uZXJUZXh0ID0gdGFza0RhdGUgfHwgJydcclxuXHJcbiAgICBcclxuICAgIGRpdi5hcHBlbmQocHJpb3JpdHksIHRhc2tDaGVja2JveCwgdGFza0NvbnRlbnRUZXh0LCBwcm9qZWN0LCB0aW1lLCBlZGl0VGFzaywgZGVsVGFzaylcclxuICAgIHJldHVybiBkaXZcclxuICB9XHJcbn1cclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsIi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyBHTE9CQUxTIF1cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSBbIGltcG9ydHMsIGRvbSBlbGVtZW50cywgZXZlbnQgbGlzdGVuZXJzIF1cbiAgICAqIGRlc2NyaXB0aW9uXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gSU1QT1JUXG5pbXBvcnQgJy4uL2Nzcy9zdHlsZS5jc3MnXG5pbXBvcnQgJy4uL2Nzcy9yZXNldC5jc3MnXG5pbXBvcnQgVE9ETyBmcm9tICcuL1RPRE9TJ1xuaW1wb3J0IE5BViBmcm9tICcuL05BVidcbmltcG9ydCBQUk9KRUNUIGZyb20gJy4vUFJPSkVDVCdcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRE9NIEVMRU1FTlRTXG5cbi8vIFRhc2sgLyBGb3Jtc1xuY29uc3QgdGFza0xpc3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgndGFzay1saXN0JylcbmNvbnN0IGNyZWF0ZU5ldyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjcmVhdGVOZXcnKVxuY29uc3QgbW9kYWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwnKVxuY29uc3QgZm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmb3JtJylcblxuLy8gR3JvdXBzXG5jb25zdCBwcm9qZWN0R3JvdXBzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21lbnUtcHJvamVjdCcpXG5jb25zdCBuZXdQcm9qZWN0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25ldy1wcm9qZWN0JylcbmNvbnN0IHByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0TW9kYWwnKVxuY29uc3QgcHJvamVjdEZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEZvcm0nKVxuXG5jb25zdCBkZWxldGVQcm9qZWN0RGl2ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2RlbGV0ZS1wcm9qZWN0JylcbmNvbnN0IGRlbGV0ZVByb2plY3RNb2RhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVQcm9qZWN0TW9kYWwnKVxuY29uc3QgZGVsZXRlRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkZWxldGVGb3JtJylcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gRVZFTlQgTElTVEVORVJTXG5jcmVhdGVOZXcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVUb2RvKCkpXG5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IGZvcm1TdWJtaXQoKSlcbm5ld1Byb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBjcmVhdGVQcm9qZWN0KCkpXG5wcm9qZWN0Rm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiBwcm9qZWN0Rm9ybVN1Ym1pdCgpKVxuXG5kZWxldGVGb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IGRlbGV0ZVNlbGVjdGVkUHJvamVjdCgpKVxuZGVsZXRlUHJvamVjdERpdi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGRlbGV0ZVByb2plY3QoKSlcblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2xvYWQnLCAoKSA9PiB7XG4gIGxvYWRUYXNrcygpXG4gIGxvYWRHcm91cHMoKVxufSlcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuLy8gR0xPQkFMU1xuY29uc3QgbmF2ID0gbmV3IE5BVigpXG5cbi8qID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSAtIC0gLSAtIC0gLSAtIC0gWyAlRlVOQ1RJT05TIF1cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICAgIC0gLSBbIG1haW4uanMgZnVuY3Rpb24gXVxuICAgICogcmVwbGFjZSAlRlVOQ1RJT05TIHdpdGggdGhlIGZ1bmN0aW9ucyBmb2N1cyBhbmQgZGVsZXRlIHRoaXMgbGluZVxuICAgICogZGVzY3JpcHRpb25cbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xuXG5mdW5jdGlvbiBjcmVhdGVUb2RvKCkge1xuICBtb2RhbC5zaG93TW9kYWwoKVxufVxuXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KCkge1xuICBwcm9qZWN0TW9kYWwuc2hvd01vZGFsKClcbn1cblxuZnVuY3Rpb24gZGVsZXRlUHJvamVjdCgpIHtcbiAgZGVsZXRlUHJvamVjdE1vZGFsLnNob3dNb2RhbCgpXG59XG5cblxuXG5cblxuXG4vLyBURVNUIFRPIEZJTEwgMTAwIFRBU0tTIC0gUkVNT1ZFIC0gUkVNT1ZFIC0gUkVNT1ZFXG4vLyBjb25zdCBhcnIgPSBbJ2xvdycsICdtZWRpdW0nLCAnaGlnaCddXG4vLyBjb25zdCBwcm9qQXJyID0gWydBbGwgUHJvamVjdHMnLCAnY29vbCBiZWFuc2FhYWFhYScsICdqaHNkZmcnXVxuLy8gY29uc3QgdGltZUFyciA9IFsnMjAyNC0zMC00JywgJzIwMTEtMjQtOCcsICczMDY5LTQyLTExJyBdXG5cbi8vIGZvcihsZXQgaSA9IDA7IGkgPCAxMDA7IGkrKykge1xuLy8gICBjb25zdCB3b3JkcyA9IGBUYXNrOiAke2l9YFxuLy8gICBjb25zdCBwcmlvID0gYXJyW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGFyci5sZW5ndGgpXVxuLy8gICBjb25zdCBwcm9qID0gcHJvakFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBwcm9qQXJyLmxlbmd0aCldXG4vLyAgIGNvbnN0IHR0aW1lID0gdGltZUFycltNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiB0aW1lQXJyLmxlbmd0aCldXG5cbi8vICAgY29uc3QgdGFzayA9IFRPRE8uY3JlYXRlVGFzayh3b3JkcywgcHJpbywgcHJvaiwgdHRpbWUpXG5cbi8vICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFzaylcbi8vIH1cbi8vIFRFU1QgVE8gRklMTCAxMDAgVEFTS1MgLSBSRU1PVkUgLSBSRU1PVkUgLSBSRU1PVkVcblxuXG5cblxuXG5mdW5jdGlvbiBmb3JtU3VibWl0KCkge1xuICBjb25zb2xlLmxvZyhmb3JtLnRhc2sudmFsdWUpXG4gIGNvbnN0IHRhc2tDb250ZW50ID0gZm9ybS50YXNrLnZhbHVlXG4gIGNvbnN0IHRhc2tQcmlvcml0eSA9IHJhZGlvQ2hlY2soKVxuICBjb25zdCBzZWxlY3RlZFByb2plY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZHJvcGRvd24nKS52YWx1ZVxuICBjb25zdCB0YXNrRGF0ZUlucHV0ID0gZm9ybS50aW1lLnZhbHVlXG5cbiAgY29uc3QgdGFza0RhdGUgPSBuZXcgRGF0ZSh0YXNrRGF0ZUlucHV0KVxuICBjb25zdCBmb3JtYXR0ZWRUYXNrRGF0ZSA9IHRhc2tEYXRlLnRvSVNPU3RyaW5nKCkuc2xpY2UoMCwgMTApXG4gIGNvbnN0IHRhc2sgPSBUT0RPLmNyZWF0ZVRhc2sodGFza0NvbnRlbnQsIHRhc2tQcmlvcml0eSwgc2VsZWN0ZWRQcm9qZWN0LCBmb3JtYXR0ZWRUYXNrRGF0ZSlcblxuICB0YXNrTGlzdC5hcHBlbmRDaGlsZCh0YXNrKVxuXG4gIGNvbnN0IHN0b3JhZ2UgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXVxuICBzdG9yYWdlLnB1c2goe2NvbnRlbnQ6IHRhc2tDb250ZW50LCBwcmlvcml0eTogdGFza1ByaW9yaXR5LCBwcm9qZWN0OiBzZWxlY3RlZFByb2plY3QsIHRpbWU6IGZvcm1hdHRlZFRhc2tEYXRlfSlcbiAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3Rhc2tzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpXG59XG5cbmZ1bmN0aW9uIHJhZGlvQ2hlY2soKSB7XG4gIGNvbnN0IHNlbGVjdGVkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgaW5wdXRbbmFtZT0ncHJpb3JpdHknXTpjaGVja2VkYClcbiAgY29uc3Qgc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkID8gc2VsZWN0ZWQudmFsdWUgOiAnJ1xuICByZXR1cm4gc2VsZWN0ZWRWYWx1ZVxufVxuXG5mdW5jdGlvbiBsb2FkVGFza3MoKSB7XG4gIGNvbnN0IHRhc2tzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndGFza3MnKSkgfHwgW11cbiAgdGFza3MuZm9yRWFjaCh0YXNrID0+IHtcbiAgICBjb25zdCB0YXNrRWxlbWVudCA9IFRPRE8uY3JlYXRlVGFzayh0YXNrLmNvbnRlbnQsIHRhc2sucHJpb3JpdHksIHRhc2sucHJvamVjdCwgdGFzay50aW1lKVxuICAgIGNvbnN0IGNoZWNrYm94RWxlbWVudCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYGlucHV0W3R5cGU9J2NoZWNrYm94J11gKVxuICAgIGNoZWNrYm94RWxlbWVudC5jaGVja2VkID0gdGFzay5jaGVja2VkIHx8IGZhbHNlXG4gICAgdGFza0xpc3QuYXBwZW5kQ2hpbGQodGFza0VsZW1lbnQpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGxvYWRHcm91cHMoKSB7XG4gIGNvbnN0IGdyb3VwcyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2dyb3VwcycpKSB8fCBbXVxuICBncm91cHMuZm9yRWFjaChncm91cCA9PiB7XG4gICAgY29uc3QgZ3JvdXBFbGVtZW50ID0gUFJPSkVDVC5jcmVhdGVQcm9qZWN0KGdyb3VwLmNvbnRlbnQpXG4gICAgcHJvamVjdEdyb3Vwcy5hcHBlbmRDaGlsZChncm91cEVsZW1lbnQpXG5cbiAgICBwb3B1bGF0ZURyb3Bkb3duKGdyb3VwLmNvbnRlbnQsICdkcm9wZG93bicpXG4gICAgcG9wdWxhdGVEcm9wZG93bihncm91cC5jb250ZW50LCAnZGVsZXRlRHJvcGRvd24nKVxuICB9KVxufVxuXG5mdW5jdGlvbiBwcm9qZWN0Rm9ybVN1Ym1pdCgpIHtcbiAgY29uc29sZS5sb2cocHJvamVjdEZvcm0ucHJvamVjdE5hbWUudmFsdWUpXG4gIGNvbnN0IHByb2plY3RDb250ZW50ID0gcHJvamVjdEZvcm0ucHJvamVjdE5hbWUudmFsdWVcbiAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBQUk9KRUNULmNyZWF0ZVByb2plY3QocHJvamVjdENvbnRlbnQpXG5cbiAgbmV3UHJvamVjdEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgbmF2LmFjdGl2ZUdyb3VwKCdwcm9qZWN0JywgbmV3UHJvamVjdEVsZW1lbnQpXG4gICAgbmF2LmZpbHRlclRhc2tzKCdwcm9qZWN0JywgcHJvamVjdENvbnRlbnQpXG4gIH0pXG4gIFxuICBjb25zdCBzdG9yYWdlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZ3JvdXBzJykpIHx8IFtdXG4gIHN0b3JhZ2UucHVzaCh7Y29udGVudDogcHJvamVjdENvbnRlbnR9KVxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZ3JvdXBzJywgSlNPTi5zdHJpbmdpZnkoc3RvcmFnZSkpXG5cbiAgcG9wdWxhdGVEcm9wZG93bihwcm9qZWN0Q29udGVudCwgJ2Ryb3Bkb3duJylcbiAgcG9wdWxhdGVEcm9wZG93bihwcm9qZWN0Q29udGVudCwgJ2RlbGV0ZURyb3Bkb3duJylcbiAgcHJvamVjdEZvcm0ucmVzZXQoKVxufVxuXG5mdW5jdGlvbiBwb3B1bGF0ZURyb3Bkb3duKGdyb3VwQ29udGVudCwgZHJvcGRvd25JZCkge1xuICBjb25zdCBvcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpXG4gIG9wLnZhbHVlID0gZ3JvdXBDb250ZW50XG4gIG9wLnRleHRDb250ZW50ID0gZ3JvdXBDb250ZW50XG4gIGNvbnN0IGRyb3Bkb3duID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZHJvcGRvd25JZClcbiAgZHJvcGRvd24uYXBwZW5kQ2hpbGQob3ApXG59XG5cbmZ1bmN0aW9uIGRlbGV0ZVNlbGVjdGVkUHJvamVjdCgpIHtcbiAgY29uc3Qgc2VsZWN0ZWRQcm9qZWN0ID0gZGVsZXRlRm9ybS5kZWxldGVEcm9wZG93bi52YWx1ZVxuXG4gIGlmKHNlbGVjdGVkUHJvamVjdCAhPT0gJ0FsbCBQcm9qZWN0cycpIHtcbiAgICBjb25zdCBjb25maXJtZWQgPSBjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIHRoZSBwcm9qZWN0IFwiJHtzZWxlY3RlZFByb2plY3R9XCI/YClcbiAgICBpZihjb25maXJtZWQpIHtcbiAgICAgIGNvbnN0IHByb2plY3RFbGVtZW50ID0gQXJyYXkuZnJvbShwcm9qZWN0R3JvdXBzLmNoaWxkcmVuKS5maW5kKGxpID0+IGxpLmlubmVyVGV4dCA9PT0gc2VsZWN0ZWRQcm9qZWN0KVxuICAgICAgaWYocHJvamVjdEVsZW1lbnQpIHtcbiAgICAgICAgcHJvamVjdEVsZW1lbnQucmVtb3ZlKClcbiAgICAgIH1cblxuICAgICAgLy8gRGVsZXRlIEdyb3VwIG91dCBvZiBsb2NhbCBzdG9yYWdlXG4gICAgICBjb25zdCBncm91cHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdncm91cHMnKSkgfHwgW11cbiAgICAgIGNvbnN0IGdyb3VwSW5kZXggPSBncm91cHMuZmluZEluZGV4KGdyb3VwID0+IGdyb3VwLmNvbnRlbnQgPT09IHNlbGVjdGVkUHJvamVjdClcbiAgICAgIGlmIChncm91cEluZGV4ICE9PSAtMSkge1xuICAgICAgICBncm91cHMuc3BsaWNlKGdyb3VwSW5kZXgsIDEpXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdncm91cHMnLCBKU09OLnN0cmluZ2lmeShncm91cHMpKVxuICAgICAgfVxuXG4gICAgICAvLyBEZWxldGUgYWxsIHRhc2tzIHJlbGF0ZWQgdG8gdGhhdCBncm91cFxuICAgICAgY29uc3QgdGFza3MgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0YXNrcycpKSB8fCBbXVxuICAgICAgY29uc3QgdXBkYXRlZFRhc2tzID0gdGFza3MuZmlsdGVyKHRhc2sgPT4gdGFzay5wcm9qZWN0ICE9PSBzZWxlY3RlZFByb2plY3QpXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndGFza3MnLCBKU09OLnN0cmluZ2lmeSh1cGRhdGVkVGFza3MpKVxuICAgICAgY29uc3QgdGFza0VsZW1lbnRzID0gdGFza0xpc3QucXVlcnlTZWxlY3RvckFsbCgnLnRhc2snKVxuICAgICAgdGFza0VsZW1lbnRzLmZvckVhY2godGFza0VsZW1lbnQgPT4ge1xuICAgICAgICBjb25zdCB0YXNrUHJvamVjdCA9IHRhc2tFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0JykuaW5uZXJUZXh0XG4gICAgICAgIGlmICh0YXNrUHJvamVjdCA9PT0gc2VsZWN0ZWRQcm9qZWN0KSB7XG4gICAgICAgICAgdGFza0VsZW1lbnQucmVtb3ZlKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gIH1cblxuICBsb2NhdGlvbi5yZWxvYWQoKVxufSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==