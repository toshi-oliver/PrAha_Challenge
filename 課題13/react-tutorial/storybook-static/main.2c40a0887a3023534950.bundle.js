(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1305:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(55),_clientLogger=__webpack_require__(35),_configFilename=__webpack_require__(1306);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1306:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1307);var parameters={actions:{argTypesRegex:"^on[A-Z].*"}}},1307:function(module,exports,__webpack_require__){},1308:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(390).configure)([__webpack_require__(1309),__webpack_require__(1310),__webpack_require__(1312)],module,!1)}).call(this,__webpack_require__(85)(module))},1309:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1309},1310:function(module,exports,__webpack_require__){var map={"./components/Board.stories.js":532,"./components/Game.stories.js":534,"./components/Square.stories.js":533};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1310},1312:function(module,exports,__webpack_require__){var map={"./Board.stories.js":532,"./Game.stories.js":534,"./Square.stories.js":533};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1312},167:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Board}));var _Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(229),_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(230),_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(232),_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(231),react__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_4___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__),_Square__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(168),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(30),Board=function(_React$Component){Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__.a)(Board,_React$Component);var _super=Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_3__.a)(Board);function Board(){return Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Board),_super.apply(this,arguments)}return Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Board,[{key:"renderSquare",value:function renderSquare(i){var _this=this;return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_Square__WEBPACK_IMPORTED_MODULE_5__.a,{value:this.props.squares[i],onClick:function onClick(){return _this.props.onClick(i)}})}},{key:"render",value:function render(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"board-row",children:[this.renderSquare(0),this.renderSquare(1),this.renderSquare(2)]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"board-row",children:[this.renderSquare(3),this.renderSquare(4),this.renderSquare(5)]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div",{className:"board-row",children:[this.renderSquare(6),this.renderSquare(7),this.renderSquare(8)]})]})}}]),Board}(react__WEBPACK_IMPORTED_MODULE_4___default.a.Component);Board.__docgenInfo={description:"",methods:[{name:"renderSquare",docblock:null,modifiers:[],params:[{name:"i",type:null}],returns:null}],displayName:"Board"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Board.js"]={name:"Board",docgenInfo:Board.__docgenInfo,path:"src/components/Board.js"})},168:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Square}));__webpack_require__(0);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(30);function Square(props){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button",{className:"square",onClick:props.onClick,children:props.value})}Square.__docgenInfo={description:"",methods:[],displayName:"Square"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Square.js"]={name:"Square",docgenInfo:Square.__docgenInfo,path:"src/components/Square.js"})},532:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"allCircle",(function(){return allCircle})),__webpack_require__.d(__webpack_exports__,"allCross",(function(){return allCross})),__webpack_require__.d(__webpack_exports__,"allTriangle",(function(){return allTriangle}));var _Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67),_Board__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(167)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30);__webpack_exports__.default={component:_Board__WEBPACK_IMPORTED_MODULE_2__.a,title:"Board",argTypes:{onClick:{action:"onClick"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Board__WEBPACK_IMPORTED_MODULE_2__.a,Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},allCircle=Template.bind({});allCircle.args={squares:["O","O","O","O","O","O","O","O","O"]};var allCross=Template.bind({});allCross.args={squares:["X","X","X","X","X","X","X","X","X"]};var allTriangle=Template.bind({});allTriangle.args={squares:["△","△","△","△","△","△","△","△","△"]},allCircle.parameters=Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Board {...args} />"}},allCircle.parameters),allCross.parameters=Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Board {...args} />"}},allCross.parameters),allTriangle.parameters=Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Board {...args} />"}},allTriangle.parameters)},533:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Circle",(function(){return Circle})),__webpack_require__.d(__webpack_exports__,"Cross",(function(){return Cross}));var _Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(67),_Square__WEBPACK_IMPORTED_MODULE_2__=(__webpack_require__(0),__webpack_require__(168)),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(30);__webpack_exports__.default={component:_Square__WEBPACK_IMPORTED_MODULE_2__.a,title:"Square",argTypes:{onClick:{action:"onClick"}}};var Template=function Template(args){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Square__WEBPACK_IMPORTED_MODULE_2__.a,Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({},args))},Circle=Template.bind({});Circle.args={value:"O"};var Cross=Template.bind({});Cross.args={value:"X"},Circle.parameters=Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Square {...args} />"}},Circle.parameters),Cross.parameters=Object(_Users_furukawatoshiaki_projects_PrAha_Challenge_13_react_tutorial_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__.a)({storySource:{source:"(args) => <Square {...args} />"}},Cross.parameters)},534:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"Default",(function(){return Default}));var objectSpread2=__webpack_require__(67),react=__webpack_require__(0),react_default=__webpack_require__.n(react),slicedToArray=__webpack_require__(543),classCallCheck=__webpack_require__(229),createClass=__webpack_require__(230),inherits=__webpack_require__(232),createSuper=__webpack_require__(231),Board=__webpack_require__(167),jsx_runtime=__webpack_require__(30),Game_Game=function(_React$Component){Object(inherits.a)(Game,_React$Component);var _super=Object(createSuper.a)(Game);function Game(props){var _this;return Object(classCallCheck.a)(this,Game),(_this=_super.call(this,props)).state={history:[{squares:Array(9).fill(null)}],stepNumber:0,xIsNext:!0},_this}return Object(createClass.a)(Game,[{key:"handleClick",value:function handleClick(i){var history=this.state.history.slice(0,this.state.stepNumber+1),squares=history[history.length-1].squares.slice();calculateWinner(squares)||squares[i]||(squares[i]=this.state.xIsNext?"X":"O",this.setState({history:history.concat([{squares:squares}]),stepNumber:history.length,xIsNext:!this.state.xIsNext}))}},{key:"jumpTo",value:function jumpTo(step){this.setState({stepNumber:step,xIsNext:step%2==0})}},{key:"render",value:function render(){var status,_this2=this,history=this.state.history,current=history[this.state.stepNumber],winner=calculateWinner(current.squares),moves=history.map((function(step,move){var desc=move?"Go to move #"+move:"Go to game start";return Object(jsx_runtime.jsx)("li",{children:Object(jsx_runtime.jsx)("button",{onClick:function onClick(){return _this2.jumpTo(move)},children:desc})},move)}));return status=winner?"Winner: "+winner:"次のプレイヤー: "+(this.state.xIsNext?"X":"O"),Object(jsx_runtime.jsxs)("div",{className:"game",children:[Object(jsx_runtime.jsx)("div",{className:"game-board",children:Object(jsx_runtime.jsx)(Board.a,{squares:current.squares,onClick:function onClick(i){return _this2.handleClick(i)}})}),Object(jsx_runtime.jsxs)("div",{className:"game-info",children:[Object(jsx_runtime.jsx)("div",{children:status}),Object(jsx_runtime.jsx)("ol",{children:moves})]})]})}}]),Game}(react_default.a.Component);function calculateWinner(squares){for(var lines=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],i=0;i<lines.length;i++){var _lines$i=Object(slicedToArray.a)(lines[i],3),a=_lines$i[0],b=_lines$i[1],c=_lines$i[2];if(squares[a]&&squares[a]===squares[b]&&squares[a]===squares[c])return squares[a]}return null}Game_Game.__docgenInfo={description:"",methods:[{name:"handleClick",docblock:null,modifiers:[],params:[{name:"i",type:null}],returns:null},{name:"jumpTo",docblock:null,modifiers:[],params:[{name:"step",type:null}],returns:null}],displayName:"Game"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/components/Game.js"]={name:"Game",docgenInfo:Game_Game.__docgenInfo,path:"src/components/Game.js"});var Default=function Template(args){return Object(jsx_runtime.jsx)(Game_Game,Object(objectSpread2.a)({},args))}.bind({});Default.args={};var components={title:"Game",component:Game_Game};__webpack_exports__.default=components;Default.parameters=Object(objectSpread2.a)({storySource:{source:"(args) => <Game {...args} />"}},Default.parameters)},546:function(module,exports,__webpack_require__){__webpack_require__(547),__webpack_require__(738),__webpack_require__(739),__webpack_require__(948),__webpack_require__(1245),__webpack_require__(1279),__webpack_require__(1284),__webpack_require__(1296),__webpack_require__(1298),__webpack_require__(1303),__webpack_require__(1305),module.exports=__webpack_require__(1308)},637:function(module,exports){},692:function(module,exports){},739:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(390)}},[[546,1,2]]]);
//# sourceMappingURL=main.2c40a0887a3023534950.bundle.js.map