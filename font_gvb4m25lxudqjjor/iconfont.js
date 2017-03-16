;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-comments" viewBox="0 0 1170 1024">'+
      ''+
      '<path d="M100.807533 0l960.374376 0c69.031246 0 107.89328 44.925096 107.89328 102.41461l0 589.285775c0 58.585248-42.295335 111.180482-111.253531 111.180482L107.820231 802.880867C35.282637 802.953916 0 750.285633 0 681.327436L0 109.28121C0 41.491796 42.295335 0 100.807533 0z"  ></path>'+
      ''+
      '<path d="M583.149665 731.512056l-241.061492 291.246112-48.723641 1.095734L292.707091 730.489371 583.149665 731.512056z"  ></path>'+
      ''+
      '<path d="M222.507062 328.866315l55.590241 0c30.753603 0 55.66329 24.471394 55.66329 54.640605l0 54.640605c0 30.169211-24.909688 54.640605-55.66329 54.640605L222.507062 492.78813c-30.753603 0-55.66329-24.398345-55.66329-54.640605L166.843772 383.50692C166.916821 353.337709 191.75346 328.866315 222.507062 328.866315z"  ></path>'+
      ''+
      '<path d="M556.340705 328.866315l55.66329 0c30.680554 0 55.590241 24.471394 55.590241 54.640605l0 54.640605c0 30.169211-24.909688 54.640605-55.590241 54.640605L556.340705 492.78813c-30.680554 0-55.66329-24.398345-55.66329-54.640605L500.677415 383.50692C500.677415 353.337709 525.587102 328.866315 556.340705 328.866315z"  ></path>'+
      ''+
      '<path d="M890.174347 328.866315l55.66329 0c30.753603 0 55.66329 24.471394 55.66329 54.640605l0 54.640605c0 30.169211-24.909688 54.640605-55.66329 54.640605l-55.66329 0c-30.680554 0-55.66329-24.398345-55.66329-54.640605L834.511057 383.50692C834.511057 353.337709 859.493794 328.866315 890.174347 328.866315z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon27" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M635.985314 645.839241c-7.581676-8.017604-11.394515-49.956785-18.97619-89.892333 33.247218-26.5374 59.804061-65.818031 76.079746-112.441908 20.98187-8.039093 36.145222-34.357506 36.145222-65.600067 0-21.851681-7.581676-41.481763-19.414165-53.987588-5.577019-134.076648-90.110297-240.483096-193.422268-240.483096-103.509469 0-188.064236 106.406448-193.642279 240.483096-11.830443 12.505825-19.412119 32.135908-19.412119 53.987588 0 31.242562 15.402805 57.560974 36.362162 65.600067 14.728446 42.833551 38.148855 79.195713 67.364247 105.513102-8.235568 41.74373-12.025894 88.367607-20.064988 96.821139-24.989137 26.557866-65.818031 45.077661-106.863866 66.276473-19.172665 11.372002-214.840066 71.829955-214.840066 162.398694 0 15.183817 11.612479 56.688093 38.366819 56.688093L510.602675 931.202501l1.786693 0 406.933059 0c26.755364 0 38.368866-41.505299 38.368866-56.688093 0-90.568738-195.668425-151.026692-214.84109-162.398694C701.804369 690.916902 660.975475 672.397107 635.985314 645.839241z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-icon33" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M970.01 1011.051 52.04 1011.051c-22.46 0-40.04-17.58-40.04-40.041L12 332.34l998.051 0 0 638.67C1010.051 993.471 992.471 1011.051 970.01 1011.051L970.01 1011.051 970.01 1011.051zM311.8 471.98 172.16 471.98l0 99.61L311.8 571.59 311.8 471.98 311.8 471.98zM311.8 611.631 172.16 611.631l0 99.609L311.8 711.24 311.8 611.631 311.8 611.631zM311.8 751.279 172.16 751.279l0 99.611L311.8 850.89 311.8 751.279 311.8 751.279zM491.49 471.98 350.87 471.98l0 99.61 140.62 0L491.49 471.98 491.49 471.98zM491.49 611.631 350.87 611.631l0 99.609 140.62 0L491.49 611.631 491.49 611.631zM491.49 751.279 350.87 751.279l0 99.611 140.62 0L491.49 751.279 491.49 751.279zM670.199 471.98 530.551 471.98l0 99.61 139.648 0L670.199 471.98 670.199 471.98zM670.199 611.631 530.551 611.631l0 99.609 139.648 0L670.199 611.631 670.199 611.631zM670.199 751.279 530.551 751.279l0 99.611 139.648 0L670.199 751.279 670.199 751.279zM849.891 471.98 710.24 471.98l0 99.61 139.65 0L849.89 471.98 849.891 471.98zM849.891 611.631 710.24 611.631l0 99.609 139.65 0L849.89 611.631 849.891 611.631zM849.891 751.279 710.24 751.279l0 99.611 139.65 0L849.89 751.279 849.891 751.279zM12 133.12c0-22.46 17.58-40.04 40.04-40.04l120.12 0 0 80.08 10.74 0c15.62 26.36 38.08 39.06 68.36 39.06 30.27 0 53.71-12.7 69.33-39.06l10.75 0L331.34 93.08l359.371 0 0 80.08 10.738 0c15.631 26.36 38.09 39.06 68.361 39.06 30.279 0 53.709-12.7 69.34-39.06l10.74 0L849.89 93.08 970.01 93.08c22.461 0 40.041 17.58 40.041 40.04L1010.051 292.3 12 292.3 12 133.12 12 133.12zM730.75 13l80.08 0 0 160.16-80.08 0L730.75 13 730.75 13zM211.22 13l80.08 0 0 160.16-80.08 0L211.22 13 211.22 13z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
