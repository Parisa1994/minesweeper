// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.scss":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/font-awesome/css/font-awesome.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"./../fonts/fontawesome-webfont.eot":[["fontawesome-webfont.af69b5ff.eot","node_modules/font-awesome/fonts/fontawesome-webfont.eot"],"node_modules/font-awesome/fonts/fontawesome-webfont.eot"],"./../fonts/fontawesome-webfont.woff2":[["fontawesome-webfont.b54ed0f7.woff2","node_modules/font-awesome/fonts/fontawesome-webfont.woff2"],"node_modules/font-awesome/fonts/fontawesome-webfont.woff2"],"./../fonts/fontawesome-webfont.woff":[["fontawesome-webfont.b1f459e7.woff","node_modules/font-awesome/fonts/fontawesome-webfont.woff"],"node_modules/font-awesome/fonts/fontawesome-webfont.woff"],"./../fonts/fontawesome-webfont.ttf":[["fontawesome-webfont.13bba0a5.ttf","node_modules/font-awesome/fonts/fontawesome-webfont.ttf"],"node_modules/font-awesome/fonts/fontawesome-webfont.ttf"],"./../fonts/fontawesome-webfont.svg":[["fontawesome-webfont.c0864c1b.svg","node_modules/font-awesome/fonts/fontawesome-webfont.svg"],"node_modules/font-awesome/fonts/fontawesome-webfont.svg"],"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"node_modules/bootstrap/dist/css/bootstrap.min.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/css-loader.js"}],"scripts/script.js":[function(require,module,exports) {
"use strict";

require("./../styles/main.scss");

require("font-awesome/css/font-awesome.min.css");

require("bootstrap/dist/css/bootstrap.min.css");

// import $ from 'jquery'
//==================value=======================
// var config = {
//     row: null,
//     col: null,
//     bomb: null,
//     score: 0
// }
// var difficulty = {
//     hard: 80,
//     medium: 50,
//     easy: 30
// }
//================hide class and show ===========
// $('#start').on('click', function(){
//     $('#game').removeClass('hide');
//     $('#startGame').addClass('hide');
//     const cellsGame = Number($('#cells').val());
//     const levelGame = $("#lavel").val();
//     config.row = cellsGame;
//     config.col = cellsGame;
//     const TotalCells = config.row * config.col;
//     config.bomb = Math.floor((TotalCells * difficulty[levelGame]) / 100);
//     config.score = Math.floor((TotalCells * 10) / 100);
//     generateGame();
// })
//=================generateGame===================
// function generateGame(){
//     const wrap = document.querySelector(".wrap");
//     wrap.innerHTML = '';
//     for(var i = 0; i < config.row; i++){
//         for(var j=0; j < config.col; j++){
//             var a = document.createElement('span');
//             a.classList.add('text-center');
//             a.classList.add('border');
//             a.classList.add('home');
//             wrap.appendChild(a);
//         }
//     }
//     wrap.style.setProperty("width", config.row*50 + "px");
//     wrap.style.setProperty("heigth", config.col*50 + "px");
//     //bomb
//     var Bomb = generateBomb();
//     Bomb.forEach(item => {
//         $(".wrap").find('span:nth-child('+(item + 1 )+')').attr('data-bomb', 'true');
//     });
//     //score 
//     var Score = generateScore();
//     Score.forEach(element => {
//         $(".wrap").find('span:nth-child('+ (element + 1) +')').attr('data-score', randomDefault(10, 20));
//     })    
//     console.log('score' + Score);
//     console.log( 'bomb' + Bomb);
//     //css
//     $('.wrap span').on('click', function(){
//         const isBomb = $(this).data('bomb');
//         const isEnd = $('.wrap').hasClass('disabled');
//         const isScore = $(this).data('score');
//         $('.wrap span[data-score]').css('background-color', 'blue')
//         if(!isEnd){
//             if(isBomb){
//                 $('.wrap span[data-bomb=true]').css('background-color', 'red');
//                 $('.wrap').addClass('disabled');
//                 alert(' you are losed :( ');
//             }else{
//                 $(this).css('background-color', 'green');
//                 const totalScore =  isScore ?  Number($('#score b').text()) + isScore : Number($('#score b').text()) + 5 ;
//                 $("#score b").html(totalScore);
//             }
//         }
//     })
// }
//====================randomfunction with jquer=====================
// function randomDefault(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) ) + min;
// }
//var  Bomb = [];
//==================generateBomb=========================
// function generateBomb(){
//    var  Bomb = [];
//    var TotalCells = config.row * config.col; 
//     for(let i = 0; i < config.bomb; i++){
//         const ranCells = randomDefault(0, TotalCells);
//         if(Bomb.indexOf(ranCells) === -1){
//             Bomb.push(ranCells);
//         }else {
//             Bomb.push(randomDefault(0, TotalCells))
//         }
//     }
//     return Bomb;
// }
//=====================generateScore===================
// function generateScore(){
//     var Score = [];
//     var TotalCells = config.row * config.col; 
//     for(let i = 0; i < config.score; i++){
//     const ranCells = randomDefault(0, TotalCells);
//         if(Score.indexOf(ranCells) === -1 && Bomb.indexOf(ranCells) === -1){
//             Score.push(ranCells);
//         }else{
//             Score.push(randomDefault(0, TotalCells));
//         }
//     }
//     return Score;
// }
//===================restart with =============================
// $('#restart').on('click', function(){
//     generateGame(config.row, config.col, config.bomb, config.score);
//     $('.wrap').removeClass('disabled');
//     $('#score b').html('0');
//     const isScore = $(this).data('score');
// })
//==================newGame with ==============================
// $('#newGame').on('click', function(){
//     $("#game").addClass("hide");
//     $("#startGame").removeClass("hide");
//     $('.wrap').removeClass('disabled');
//     $('#score b').html('0');
// })
//=========================================================================javscript game ==================================================
//================variables===========
var config = {
  row: null,
  col: null,
  bomb: null,
  score: 0
};
var difficulty = {
  easy: 30,
  medium: 50,
  hard: 80
};
var wrap = document.querySelector(".wrap"); //================hide class and show=============

function start() {
  document.getElementById("game").style.display = 'block';
  document.getElementById("startGame").style.display = 'none';
  var cellsGame = Number(document.getElementById("cells").value);
  config.row = cellsGame;
  config.col = cellsGame;
  var lavel = document.getElementById("lavel").value;
  var TotalCells = config.row * config.col;
  config.bomb = Math.ceil(Math.floor(TotalCells * difficulty[lavel] / 100));
  config.score = Math.ceil(Math.floor(TotalCells * 10) / 100);
  generateGame();
}

;
document.getElementById("start").addEventListener("click", start); //============generate Game============

function generateGame() {
  wrap.innerHTML = '';

  for (var i = 0; i < config.row; i++) {
    for (var j = 0; j < config.col; j++) {
      var a = document.createElement('span');
      a.classList.add('text-center');
      a.classList.add('border');
      a.classList.add('home');
      wrap.appendChild(a);
    }
  }

  wrap.style.setProperty("width", config.row * 50 + "px");
  wrap.style.setProperty("heigth", config.col * 50 + "px"); //bomb

  var GEN_RES = generateBomb();
  var Bomb = GEN_RES.Bomb;
  var Cells = document.querySelectorAll('.wrap span');
  Bomb.forEach(function (item) {
    if (wrap.querySelector('span:nth-child(' + (item + 1) + ')')) {
      wrap.querySelector('span:nth-child(' + (item + 1) + ')').setAttribute('data-bomb', 'true');
    }
  }); //score

  var Score = GEN_RES.Score;
  Score.forEach(function (element) {
    if (wrap.querySelector('span:nth-child(' + (element + 1) + ')')) {
      wrap.querySelector('span:nth-child( ' + (element + 1) + ' )').setAttribute('data-score', randomDefault(15, 25));
    }
  });

  Array.prototype.diff = function (arr2) {
    var ret = [];

    for (var i in this) {
      if (arr2.indexOf(this[i]) > -1) {
        ret.push(this[i]);
      }
    }

    return ret;
  };

  console.log(Bomb.diff(Score), Score, Bomb); //css

  function cellClick() {
    var isBomb = this.getAttribute('data-bomb');
    var isScore = this.getAttribute('data-score');
    var isEnd = document.getElementsByClassName('disabled');

    if (!isEnd.length) {
      if (isBomb) {
        var CellsBomb = document.querySelectorAll('.wrap span[data-bomb]');

        for (var _i = 0; _i < CellsBomb.length; _i++) {
          CellsBomb[_i].style.backgroundColor = "red";
        }

        alert(" you lose :(");

        for (var _i2 = 0; _i2 < Cells.length; _i2++) {
          Cells[_i2].classList.add('disabled');
        }

        wrap.classList.add('disabled');
        return;
      } else if (isScore) {
        console.log('This is a score: ' + Score);
        this.style.backgroundColor = "blue";

        var _scoreYou = document.querySelector("#score b");

        var _totalScore = Number(_scoreYou.textContent) + Score[0];

        _scoreYou.innerHTML = _totalScore;
        return;
      }

      console.log('Normal');
      this.style.backgroundColor = "green";
      var scoreYou = document.querySelector("#score b");
      var totalScore = Number(scoreYou.textContent) + 5;
      scoreYou.innerHTML = totalScore;
    }
  }

  for (var _i3 = 0; _i3 < Cells.length; _i3++) {
    Cells[_i3].addEventListener('click', cellClick.bind(Cells[_i3]));
  }
} //=============random defalut==========


function randomDefault(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
  ;
} //============generate bomb ===========


function generateBomb() {
  var Bomb = [];
  var Score = [];
  var CellCount = config.row * config.col;

  while (Bomb.length < config.bomb) {
    var RND = randomDefault(0, CellCount);
    if (Bomb.indexOf(RND) === -1) Bomb.push(RND);
  }

  Score = generateScore(Bomb);
  return {
    Score: Score,
    Bomb: Bomb
  };
} //=========generate score=============


function generateScore(Bombs) {
  var Score = [];
  var CellsCount = config.row * config.col;

  while (Score.length < config.score) {
    var RND = randomDefault(0, CellsCount);

    if (Score.indexOf(RND) === -1 && Bombs.indexOf(RND) === -1) {
      Score.push(RND);
    }
  }

  return Score;
} //==================restart button===========


var restart = document.getElementById("restart");
restart.addEventListener('click', function () {
  generateGame(config.row, config.col, config.bomb);
  wrap.classList.remove("disabled");
  document.querySelector('#score b').innerHTML = '0';
}); //===============newgame===================

var newgame = document.getElementById('newGame');
newgame.addEventListener('click', function () {
  document.getElementById("game").style.display = 'none';
  document.getElementById("startGame").style.display = 'flex';
  wrap.classList.remove("disabled");
  document.querySelector('#score b').innerHTML = '0';
});
},{"./../styles/main.scss":"styles/main.scss","font-awesome/css/font-awesome.min.css":"node_modules/font-awesome/css/font-awesome.min.css","bootstrap/dist/css/bootstrap.min.css":"node_modules/bootstrap/dist/css/bootstrap.min.css"}],"../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "49550" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../../../.config/yarn/global/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/script.js"], null)
//# sourceMappingURL=/script.a6e1fada.js.map