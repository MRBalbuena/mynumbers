/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

module.exports = React;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var AccountsComponent = (function (_super) {
    __extends(AccountsComponent, _super);
    function AccountsComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AccountsComponent.prototype.render = function () {
        return (React.createElement("div", { className: "container" },
            React.createElement("div", { className: "menuBlock" }, "Accounts"),
            React.createElement("div", { className: "menuBlock" }, "Search")));
    };
    return AccountsComponent;
}(React.Component));
exports.AccountsComponent = AccountsComponent;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var MainMenuContainer_1 = __webpack_require__(4);
var MyNumbers = (function (_super) {
    __extends(MyNumbers, _super);
    function MyNumbers() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MyNumbers.prototype.render = function () {
        return (React.createElement("div", { className: "mainContainer" },
            React.createElement("div", { className: "titleBlock" },
                React.createElement("h1", null, this.props.title)),
            React.createElement(MainMenuContainer_1.MainMenuContainer, { menus: this.props.menus, currentModule: "" })));
    };
    return MyNumbers;
}(React.Component));
exports.MyNumbers = MyNumbers;


/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = ReactDOM;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var MenuContainer_1 = __webpack_require__(6);
var AccountsComponent_1 = __webpack_require__(1);
var MainMenuContainer = (function (_super) {
    __extends(MainMenuContainer, _super);
    function MainMenuContainer(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { currentModule: '' };
        return _this;
    }
    MainMenuContainer.prototype.render = function () {
        if (this.state.currentModule == '')
            return React.createElement("div", null,
                React.createElement(MenuContainer_1.MenuContainer, { menus: this.props.menus }));
        if (this.state.currentModule == 'accounts')
            return (React.createElement("div", null,
                React.createElement(AccountsComponent_1.AccountsComponent, null)));
    };
    return MainMenuContainer;
}(React.Component));
exports.MainMenuContainer = MainMenuContainer;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var MenuBlock = (function (_super) {
    __extends(MenuBlock, _super);
    function MenuBlock() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.navigateTo = function (selectedBlock) {
            console.log(selectedBlock);
            _this.setState({ currentModule: selectedBlock });
        };
        return _this;
    }
    MenuBlock.prototype.render = function () {
        var backgroundColor = { backgroundColor: this.props.menu.backgroundColor };
        return React.createElement("div", { className: "menuBlock", style: backgroundColor, onClick: this.navigateTo.bind(this, this.props.menu.id) }, this.props.menu.title);
    };
    return MenuBlock;
}(React.Component));
exports.MenuBlock = MenuBlock;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = __webpack_require__(0);
var AccountsComponent_1 = __webpack_require__(1);
var MenuBlock_1 = __webpack_require__(5);
var MenuContainer = (function (_super) {
    __extends(MenuContainer, _super);
    function MenuContainer(props) {
        var _this = _super.call(this, props) || this;
        console.log(props);
        _this.state = { currentModule: '' };
        return _this;
    }
    MenuContainer.prototype.render = function () {
        if (!this.state.currentModule)
            return React.createElement("div", null,
                React.createElement("div", { className: "container" },
                    React.createElement(MenuBlock_1.MenuBlock, { menu: this.props.menus[0] }),
                    React.createElement(MenuBlock_1.MenuBlock, { menu: this.props.menus[1] })),
                React.createElement("div", { className: "container" },
                    React.createElement(MenuBlock_1.MenuBlock, { menu: this.props.menus[2] }),
                    React.createElement(MenuBlock_1.MenuBlock, { menu: this.props.menus[3] })));
        if (this.state.currentModule == 'accounts')
            return React.createElement(AccountsComponent_1.AccountsComponent, null);
    };
    return MenuContainer;
}(React.Component));
exports.MenuContainer = MenuContainer;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
"use strict";
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(3);
var MyNumbers_1 = __webpack_require__(2);
var mainMenu = [
    {
        "id": "accounts",
        "title": "Accounts",
        "position": 0,
        "backgroundColor": "blue",
    }, {
        "id": "groups",
        "title": "Groups",
        "position": 1,
        "backgroundColor": "red",
    }, {
        "id": "movements",
        "title": "Movements",
        "position": 2,
        "backgroundColor": "green",
    }, {
        "id": "stats",
        "title": "Stats",
        "position": 3,
        "backgroundColor": "yellow",
    }
];
ReactDOM.render(React.createElement(MyNumbers_1.MyNumbers, { title: "My Numbers", menus: mainMenu }), document.getElementById("root"));


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map