// Copyright (c) 2020 by LegoMushroom (https://codepen.io/sol0mka/pen/yNOage)

// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28];
let len = array.length;

function getRandomItem() {
  if (len <= 0) len = array.length;
  let item = Math.floor(Math.random() * len--);
  let x = array[item];
  array[item] = array[len];
  array[len] = x;
  return array[len];
}

const divId = document.querySelectorAll('*[id^="js-particle-"]');
for (let i = 0; i < divId.length; i++) {
  const randomNumber = getRandomItem();
  switch (randomNumber) {
    case 0:
      divId[
        i
      ].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/3/35/The_C_Programming_Language_logo.svg')`;
      divId[i].information = "C<br>Programming Languague";
      divId[i].linkTo = 3;
      break;
    case 1:
      divId[
        i
      ].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/1/18/ISO_C%2B%2B_Logo.svg')`;
      divId[i].information = "C++<br>Programming Languague";
      divId[i].linkTo = 2;
      break;
    case 2:
      divId[i].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/7/7a/C_Sharp_logo.svg')`;
      divId[i].information = "C#<br>Programming Languague";
      divId[i].linkTo = 1;
      break;
    case 3:
      divId[
        i
      ].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg')`;
      divId[i].information = "Python<br>Programming Languague";
      divId[i].linkTo = 4;
      break;
    case 4:
      divId[i].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png')`;
      divId[i].information = "JavaScript<br>Programming Languague";
      divId[i].linkTo = 5;
      break;
    case 5:
      divId[i].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/c/cf/Lua-Logo.svg')`;
      divId[i].information = "Lua<br>Programming Languague";
      divId[i].linkTo = 6;
      break;
    case 6:
      divId[i].style.backgroundImage = `url('https://haxe.org/img/branding/haxe-logo-glyph.svg')`;
      divId[i].information = "Haxe<br>Programming Languague";
      divId[i].linkTo = 7;
      break;
    case 7:
      divId[
        i
      ].style.backgroundImage = `url('https://godotengine.org/themes/godotengine/assets/download/godot_logo.svg')`;
      divId[i].information = "Godot<br>Game Engine";
      divId[i].linkTo = 8;
      break;
    case 8:
      divId[
        i
      ].style.backgroundImage = `url('https://www.cryengine.com/assets/brand-assets/cryengine-logo-vertical-white.svg')`;
      divId[i].information = "CryEngine<br>Game Engine";
      divId[i].linkTo = 10;
      break;
    case 9:
      divId[
        i
      ].style.backgroundImage = `url('https://cdn2.unrealengine.com/Unreal+Engine%2Flogos%2FUnreal_Engine_White-1125x1280-0ac2243552326055d20928902aa57370acacd000.png')`;
      divId[i].information = "Unreal<br>Game Engine";
      divId[i].linkTo = 12;
      break;
    case 10:
      divId[
        i
      ].style.backgroundImage = `url('https://raw.githubusercontent.com/love2d/love/60278b0532036d404c0b7b011c7b63ab58a5ddaf/platform/unix/love.svg')`;
      divId[i].information = "LÖVE<br>Framework";
      divId[i].linkTo = 27;
      break;
    case 11:
      divId[
        i
      ].style.backgroundImage = `url('https://raw.githubusercontent.com/LMMS/artwork/master/Icon%20%26%20Mimetypes/lmms-64x64.svg')`;
      divId[i].information = "LMMS<br>Music Tool";
      divId[i].linkTo = 24;
      break;
    case 12:
      divId[i].style.backgroundImage = `url('https://img.itch.zone/aW1nLzI0NDE3MjgucG5n/original/6JTXjR.png')`;
      divId[i].information = "Ogmo<br>Level Editor";
      divId[i].linkTo = 15;
      break;
    case 13:
      divId[i].style.backgroundImage = `url('https://www.aseprite.org/assets/images/header-logo.png')`;
      divId[i].information = "Aseprite<br>2D Art Tool";
      divId[i].linkTo = 16;
      break;
    case 14:
      divId[i].style.backgroundImage = `url('https://pyxeledit.com/images/logo_heart.png')`;
      divId[i].information = "Pyxel Edit<br>2D Art Tool";
      divId[i].linkTo = 17;
      break;
    case 15:
      divId[i].style.backgroundImage = `url('https://download.blender.org/branding/blender_logo_socket.svg')`;
      divId[i].information = "Blender<br>3D Art Tool";
      divId[i].linkTo = 18;
      break;
    case 16:
      divId[i].style.backgroundImage = `url('https://www.mapeditor.org/img/tiled-logo-white.png')`;
      divId[i].information = "Tiled<br>Level Editor";
      divId[i].linkTo = 14;
      break;
    case 17:
      divId[i].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/3/33/PICO-8_logo.png')`;
      divId[i].information = "PICO-8<br>Fantasy Console";
      divId[i].linkTo = 33;
      break;
    case 18:
      divId[i].style.backgroundImage = `url('https://tic.computer/img/logo64.png')`;
      divId[i].information = "TIC-80<br>Fantasy Console";
      divId[i].linkTo = 34;
      break;
    case 19:
      divId[i].style.backgroundImage = `url('https://famistudio.org/famistudio.png')`;
      divId[i].information = "FamiStudio<br>Music Tool";
      divId[i].linkTo = 25;
      break;
    case 20:
      divId[i].style.backgroundImage = `url('https://www.raylib.com/common/img/raylib_logo.png')`;
      divId[i].information = "raylib<br>Framework";
      divId[i].linkTo = 28;
      break;
    case 21:
      divId[
        i
      ].style.backgroundImage = `url('https://img.itch.zone/aW1hZ2UvMzE5MjYvMTM1NzcwLnBuZw==/original/32QXIc.png')`;
      divId[i].information = "Bosca Ceoil<br>Music Tool";
      divId[i].linkTo = 26;
      break;
    case 22:
      divId[i].style.backgroundImage = `url('https://www.pygame.org/docs/pygame_logo.gif')`;
      divId[i].information = "pygame<br>Framework";
      divId[i].linkTo = 29;
      break;
    case 23:
      divId[
        i
      ].style.backgroundImage = `url('https://raw.githubusercontent.com/HeapsIO/heaps.io/master/assets/logo/logo-heaps-color.png')`;
      divId[i].information = "Heaps<br>Framework";
      divId[i].linkTo = 30;
      break;
    case 24:
      divId[i].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/en/f/f2/Lumberyard_Logo.png')`;
      divId[i].information = "Amazon Lumberyard<br>Game Engine";
      divId[i].linkTo = 11;
      break;
    case 25:
      divId[
        i
      ].style.backgroundImage = `url('https://upload.wikimedia.org/wikipedia/commons/6/67/Source_engine_logo_and_wordmark.svg')`;
      divId[i].information = "Source<br>Game Engine";
      divId[i].linkTo = 13;
      break;
    case 26:
      divId[
        i
      ].style.backgroundImage = `url('https://s3-us-west-1.amazonaws.com/shader-frog/shader-frog-logo-small.png')`;
      divId[i].information = "ShaderFrog<br>Shader Tool";
      divId[i].linkTo = 21;
      break;
    case 27:
      divId[i].style.backgroundImage = `url('https://www.libsdl.org/media/SDL_logo.png')`;
      divId[i].information = "SDL<br>Library";
      divId[i].linkTo = 31;
      break;
    case 28:
      divId[i].style.backgroundImage = `url('https://www.opengl.org/img/opengl_logo.jpg')`;
      divId[i].information = "OpenGL<br>Library";
      divId[i].linkTo = 32;
      break;
    default:
      break;
  }
}
var main = {
  init: function (o) {
    this.vars();
    this.initContainer();
    this.initClose();
    this.initHideClose();
    this.prepareSprites();
    this.events();
    this.draw();
    setInterval(() => {
      this.updateProgress(false);
    }, 10);
    return this;
  },
  initContainer: function () {
    this.iscroll = new IScroll("#js-wrapper", {
      scrollX: true,
      freeScroll: true,
      mouseWheel: true,
      probeType: 3,
    });

    var x = -this.centerX + this.wWidth / 2 + this.xOffset,
      y = -this.centerY + this.wHeight / 2 + this.yOffset;
    this.iscroll.scrollTo(x, y, 10);
  },
  vars: function () {
    this.S = 1;
    this.loadCnt = 0;
    this.maxLoadCnt = 8;
    this.BLOB_DURATION = 500;
    this.ext = this.isCanPlayMP3() ? "mp3" : "wav";
    this.isIE = this.isIE();
    this.isIOS = !!/(iPad|iPhone|iPod)/g.test(navigator.userAgent);
    this.isIOS && document.body.classList.add("ios");
    !this.isTabletMobile && document.body.classList.add("desktop");
    this.progressStep = (150 / this.maxLoadCnt) * (1 / 16);

    this.getDOMElements();

    this.particleRadius = parseInt(getComputedStyle(this.particles[0]).width, 10) / 2;
    this.particlesLength = this.particles.length;

    this.radPoint = mojs.helpers.getRadialPoint;
    this.particleBuffer = null;
    this.isOpen = false;
    this.blobBase = 1.6;
    this.blob = this.blobBase;
    this.blobShift = this.blobBase;
    this.xOffset = this.particleRadius + 25;
    this.yOffset = 1.4 * this.particleRadius;

    var styles = getComputedStyle(this.particlesContainer);
    this.width = parseInt(styles.width, 10);
    this.height = parseInt(styles.height, 10);

    this.prepareDust();
    this.calcDimentions();
    this.loadAssets();

    var i = this.particlesLength;
    while (i--) {
      var particle = this.particles[i];
      particle.x = parseInt(particle.getAttribute("data-left"), 10);
      particle.y = parseInt(particle.getAttribute("data-top"), 10);
    }
  },
  getDOMElements: function () {
    this.particlesContainer = document.querySelector("#scroller");
    this.particles = document.querySelectorAll(".particle");
    this.closeBtn = document.querySelector("#js-close-btn");
    this.blobCircle = document.querySelector("#js-blob-circle");
    this.blobEllipses = this.blobCircle.querySelectorAll("#js-blob-circle-ellipse");
    this.dust1 = document.querySelector("#js-dust-1");
    this.dust2 = document.querySelector("#js-dust-2");
    this.dust3 = document.querySelector("#js-dust-3");
    this.dust4 = document.querySelector("#js-dust-4");
    this.content = document.querySelector("#js-content");
    this.curtain = document.querySelector("#js-curtain");
    this.progress = document.querySelector("#js-progress");
    this.progressGrad = document.querySelector("#js-progress-gradient");
  },
  draw: function () {
    var origin = `${this.bubleCenter.x}px ${this.bubleCenter.y}px`,
      h = mojs.h,
      inEasing = mojs.easing.cubic.in,
      i = this.particlesLength;

    h.setPrefixedStyle(this.particlesContainer, "perspective-origin", origin);

    while (i--) {
      this.particleBuffer = this.particles[i];
      var x = Math.abs(this.bubleCenter.x - this.particleBuffer.x),
        y = Math.abs(this.bubleCenter.y - this.particleBuffer.y),
        radius = Math.sqrt(x * x + y * y),
        a = this.blob - (2 * radius) / this.size,
        b = this.blobShift - (2 * radius) / this.size,
        scaleMax = 1;

      var delta = mojs.helpers.clamp(inEasing(a), 0.03, scaleMax),
        deltaShift = h.clamp(inEasing(b), 0.03, scaleMax),
        isDeltaChanged = this.particleBuffer.prevDelta !== delta;

      if (isDeltaChanged || this.particleBuffer.prevDeltaShift !== deltaShift) {
        var translateZ = -150 * inEasing(1 - deltaShift),
          transform = `scale(${delta}) translateZ(${translateZ}px)`;
        h.setPrefixedStyle(this.particleBuffer, "transform", transform);
        this.particleBuffer.prevDelta = delta;
        this.particleBuffer.prevDeltaShift = deltaShift;
      }
    }
    requestAnimationFrame(this.draw.bind(this));
  },
  calcDimentions: function () {
    this.wWidth = window.innerWidth;
    this.wHeight = window.innerHeight;
    this.centerY = this.height / 2 - this.wHeight / 2;
    this.centerX = this.width / 2 - this.wWidth / 2;
    this.bubleCenter = { x: this.centerX, y: this.centerY };
    var x = Math.sqrt(this.wHeight * this.wHeight),
      y = Math.sqrt(this.wWidth * this.wWidth);
    this.size = 1 * Math.min(x, y);
  },
  start: function () {
    this.curtain.classList.add("is-hide");
    this.startBlob();
  },
  startBlob: function () {
    var tween = new mojs.Tween();
    var t = new mojs.Timeline({
      duration: 1200 * this.S,
      onUpdate: (p) => {
        this.blob = this.blobBase + 0.3 * (1 - mojs.easing.elastic.out(p));
      },
    });

    var centerX = this.bubleCenter.x,
      centerY = this.bubleCenter.y;

    var t2 = new mojs.Timeline({
      duration: 1200 * this.S,
      delay: 0 * this.S,
      onUpdate: (p) => {
        this.blobShift = this.blobBase + 0.5 * (1 - mojs.easing.elastic.out(p));
      },
      onStart: () => {},
    });

    tween.add(t, t2);
    tween.start();
  },
  updateProgress: function (isReturn = true) {
    if (isReturn) {
      return;
    }
    var shift = (this.maxLoadCnt - ++this.loadCnt) * this.progressStep;
    this.progress.style.width = `${shift}rem`;
    mojs.h.setPrefixedStyle(
      this.progressGrad,
      "transform",
      `translateX(-${(this.loadCnt * this.progressStep) / 1.3}rem)`
    );
    this.loadCnt === this.maxLoadCnt && this.start();
  },
  loadAssets: function () {
    this.loadImage("https://s3-us-west-2.amazonaws.com/s.cdpn.io/6859/mojs-logo.png");
  },
  loadImage: function (url) {
    var image = new Image();
    image.addEventListener("load", this.updateProgress.bind(this), false);
    image.addEventListener("error", this.updateProgress.bind(this), false);
    image.src = url;
  },
  isCanPlayMP3: function () {
    var userAgent = navigator.userAgent;
    return !(userAgent.indexOf("Opera") && userAgent.indexOf("firefox") > -1);
  },
  isIE: function () {
    return !!(window.navigator.msPointerEnabled && !window.PointerEvent);
  },
  isTabletMobile: (function () {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  })(),

  setBubblePosition: function () {
    this.bubleCenter.x = -this.iscroll.x + this.wWidth / 2 + this.xOffset;
    this.bubleCenter.y = -this.iscroll.y + this.wHeight / 2 + this.yOffset;
  },

  events: function () {
    window.addEventListener("resize", () => {
      this.calcDimentions();
      this.setBubblePosition();
    });
    new Hammer(document.body).on("tap", (e) => {
      var el = e.target.parentNode;
      if (this.isOpen) {
        return e.preventDefault();
      }
      if (el.classList.contains("particle")) {
        this.showOnEl(el);
      } else if (el.parentNode.classList.contains("particle")) {
        this.showOnEl(el.parentNode);
      }
    });
    new Hammer(this.closeBtn).on("tap", this.closeEl.bind(this));
    document.addEventListener(
      "touchmove",
      function (e) {
        e.preventDefault();
      },
      false
    );
    this.iscroll.on("scroll", this.setBubblePosition.bind(this));
  },
  initClose: function () {
    var dur = 400 * this.S;
    var closeOption = {
      parent: document.querySelector("#js-close-btn"),
      type: "circle",
      radius: { 0: 15 },
      fill: "transparent",
      stroke: "#f3ede3",
      strokeWidth: { 5: 0 },
      x: "50%",
      y: "50%",
      duration: dur,
      isRunLess: true,
    };

    this.closeCircle = new mojs.Transit(closeOption);

    var closeCrossOption = {
      type: "cross",
      delay: 0.4 * dur,
      angle: 45,
      strokeWidth: 2,
      radius: { 0: 8 },
      isShowEnd: true,
      onStart: () => {},
    };

    mojs.h.extend(closeCrossOption, closeOption);
    this.closeCross = new mojs.Transit(closeCrossOption);

    var closeBurstOption = {
      type: "line",
      radius: { 0: 30 },
      strokeWidth: { 4: 0 },
      delay: 0.4 * dur,
      childOptions: { radius: { 5: 0 } },
    };

    mojs.h.extend(closeBurstOption, closeOption);
    this.closeBurst = new mojs.Burst(closeBurstOption);

    var closeOption2 = {
      parent: document.querySelector("#js-close-btn"),
      type: "circle",
      radius: { 0: 10 },
      fill: "transparent",
      stroke: "#f3ede3",
      strokeWidth: { 5: 0 },
      x: "-20%",
      y: "-50%",
      isRunLess: true,
      delay: 0.7 * dur,
      duration: 400 * this.S,
      onStart: () => {},
    };

    this.closeCircle2 = new mojs.Transit(closeOption2);

    var closeOption3 = {
      x: "80%",
      y: "-30%",
      radius: { 0: 6 },
      delay: 1.1 * dur,
      duration: 300 * this.S,
      onStart: () => {},
    };

    mojs.h.extend(closeOption3, closeOption2);
    this.closeCircle3 = new mojs.Transit(closeOption3);

    var closeOption4 = {
      x: "50%",
      y: "130%",
      radius: { 0: 4 },
      delay: 0.9 * dur,
      duration: 200 * this.S,
      onStart: () => {},
    };

    mojs.h.extend(closeOption4, closeOption2);
    this.closeCircle4 = new mojs.Transit(closeOption4);

    this.showCloseBtnTween = new mojs.Tween();
    this.showCloseBtnTween.add(
      this.closeCircle.tween,
      this.closeCircle2.tween,
      this.closeCircle3.tween,
      this.closeCircle4.tween,
      this.closeCross.tween,
      this.closeBurst.tween
    );
  },
  showClose: function () {
    this.closeBtn.classList.add("is-show");
    this.showCloseBtnTween.start();
  },
  initHideClose: function () {
    this.hideBurst = new mojs.Burst({
      x: "50%",
      y: "50%",
      parent: this.closeBtn,
      radius: { 0: 100 },
      type: "circle",
      fill: "#f3ede3",
      degree: 25,
      isSwirl: true,
      randomRadius: 1,
      isRunLess: true,
      childOptions: { radius: { "rand(12,5)": 0 } },
      duration: 500 * this.S,
      onUpdate: (p) => {
        p = mojs.easing.cubic.in(p);
        mojs.h.setPrefixedStyle(this.closeCross.el, "transform", `scale(${1 - p})`);
      },
      onStart: () => {},
      onComplete: () => {
        this.closeBtn.classList.remove("is-show");
        mojs.h.setPrefixedStyle(this.closeCross.el, "transform", `none`);
      },
    });

    this.hideCircle = new mojs.Transit({
      x: "50%",
      y: "50%",
      parent: this.closeBtn,
      type: "circle",
      radius: { 0: 15 },
      fill: "transparent",
      stroke: "#f3ede3",
      strokeWidth: { 8: 0 },
      isRunLess: true,
      duration: 500 * this.S,
    });
  },
  hideClose: function () {
    this.hideBurst.run();
    this.hideCircle.run();
  },
  closeEl: function () {
    this.iscroll.enabled = true;
    this.isOpen = false;
    this.hideClose();

    var innerEl = this.currentEl.querySelector(".particle__inner"),
      scaleDownTween = new mojs.Tween();

    innerEl.style.opacity = 0.7;

    var scaleDownTimeline = new mojs.Timeline({
      duration: 500 * this.S,
      onUpdate: (p) => {
        var np = 1 - p,
          npe = mojs.easing.cubic.inout(np),
          scaleSize = 0.75 + 18 * npe,
          scale = `scale(${scaleSize})`;

        mojs.h.setPrefixedStyle(innerEl, "transform", scale);
        mojs.h.setPrefixedStyle(this.content, "transform", `scale(${npe})`);
      },
    });

    var scaleDownSoundTimeline = new mojs.Timeline({
      delay: 0 * this.S,
      onStart: () => {},
    });

    var scaleUpTimeline = new mojs.Timeline({
      duration: 1000 * this.S,
      onUpdate: (p) => {
        var scaleSize = 0.75 + 0.25 * mojs.easing.elastic.out(p),
          scale = `scale(${scaleSize})`;
        mojs.h.setPrefixedStyle(innerEl, "transform", scale);
      },
      onComplete: () => {
        if (this.isOpen) {
          return mojs.h.setPrefixedStyle(this.content, "transform", `translate3d(-5000px,-5000px,0)`);
        }
        mojs.h.setPrefixedStyle(this.content, "transform", `translate3d(-5000px,-5000px,0)`);
      },
    });

    scaleDownTween.add(scaleDownTimeline);
    scaleDownTween.append(scaleUpTimeline);

    var blobTween = new mojs.Tween();
    var blobShiftDownTimeline = new mojs.Timeline({
      duration: 1200 * this.S,
      delay: 300 * this.S,
      onUpdate: (p) => {
        if (this.isOpen) {
          return;
        }
        this.blobShift = this.blobBase + (1 - mojs.easing.elastic.out(p));
      },
    });

    var blobDownTimeline = new mojs.Timeline({
      duration: 2100 * this.S,
      delay: 0 * this.S,
      onUpdate: (p) => {
        if (this.isOpen) {
          return;
        }
        this.blob = this.blobBase + 0.3 * (1 - mojs.easing.elastic.out(p));
      },
    });

    blobTween.add(blobShiftDownTimeline, blobDownTimeline, scaleDownSoundTimeline);

    this.jellyTween = new mojs.Tween();
    this.jellyTween.add(scaleDownTween, blobTween);
    this.jellyTween.start();
  },
  moveTextEl: function (el, p) {
    p = mojs.easing.cubic.out(p);
    var transform = `rotate(${90 * (1 - p)}deg) translateY(${200 * (1 - p)}%)`,
      transformOrigin = `left ${80 * p}%`;
    mojs.h.setPrefixedStyle(el, "transform", transform);
    mojs.h.setPrefixedStyle(el, "transform-origin", transformOrigin);
    el.style.opacity = mojs.easing.cubic.out(p);
  },

  prepareDust: function () {
    this.dust1Spriter = new mojs.Spriter({
      el: this.dust1,
      duration: 300 * this.S,
      delay: 275 * this.S,
      isRunLess: true,
    });

    this.dust2Spriter = new mojs.Spriter({
      el: this.dust2,
      duration: 200 * this.S,
      delay: 575 * this.S,
      isRunLess: true,
    });

    this.dust3Spriter = new mojs.Spriter({
      el: this.dust3,
      duration: 100 * this.S,
      delay: 725 * this.S,
      isRunLess: true,
    });
  },

  runDust: function () {
    if (this.isTabletMobile || this.isIE) {
      return;
    }
    this.dust1Spriter.run();
    this.dust2Spriter.run();
    this.dust3Spriter.run();
  },

  showInnerPlastic: function (el) {
    var tween = new mojs.Tween(),
      image = el.querySelector(".image"),
      scene = el.querySelector(".shape"),
      shadow = el.querySelector("#js-shadow"),
      shadowWrap = el.querySelector("#js-shadow-wrap");

    this.runDust();

    var mp = new mojs.MotionPath({
      path: { x: -300, y: -300 },
      curvature: { x: "75%", y: "50%" },
      offsetX: 300,
      offsetY: 300,
      el: image,
      duration: this.isIE ? 200 * this.S : 1000 * this.S,
      easing: "cubic.out",
      onPosit: function (p, x, y, angle) {
        p = mojs.easing.expo.out(mojs.easing.cubic.in(p));
        var rotate = `rotateX(70deg) rotateZ(${-60 * (1 - p)}deg)`,
          translate = `translateX(${x}px) translateY(${y}px)`,
          scale = `scaleY(${2.5 - 1.5 * p})`;
        mojs.h.setPrefixedStyle(shadow, "transform", `${translate} ${rotate} ${scale}`);
        return `translate(${x}px, ${y}px)`;
      },
    });

    var opacityEasing = mojs.easing.path(
        "M0,0 C0,0 32.1191406,0.314142863 40.1669859,0 C40.1669859,0.165327852 50.9999996,-112.569017 74.0660521,0 C80.8905119,-16.0420643 87.1001393,-19.621745 92.0689049,0 C92.0689049,1.54522552 95.3231688,-14.8615687 100,0"
      ),
      bounceEasing = mojs.easing.path(
        "M0,100 C28.3125,98.6523445 39.0445328,8.99375039 40.1669859,0 C40.1669859,-0.0485295402 50.9999996,152.873952 74.0660521,0 C80.8905119,21.9365596 87.1001393,26.7923438 92.0689049,0 C92.0689049,-1.92034044 95.3231688,20.3352347 100,0"
      );

    var timeline1 = new mojs.Timeline({
      duration: this.isIE ? 200 * this.S : 800 * this.S,
      onStart: () => {
        mojs.h.setPrefixedStyle(this.content, "transform", `translate3d(0,0,0)`);
      },
      onComplete: () => {
        this.showClose();
      },
      onUpdate: (p) => {
        var b = mojs.easing.bounce.out(p),
          bin = mojs.easing.bounce.in(p),
          t = mojs.easing.cubic.out(p),
          rotate = `rotateY(${90 * (1 - b)}deg) rotateX(${70 * (1 - t)}deg) rotateZ(${90 * (1 - t)}deg)`,
          scale = `scaleX(${opacityEasing(p)})`,
          transform = `translate(${-300 * mojs.easing.bounce.in(1 - p) - 5}px, 2px) ${scale}`;
        mojs.h.setPrefixedStyle(scene, "transform", `${rotate}`);
        mojs.h.setPrefixedStyle(scene, "transform-origin", `${50 + 50 * t}% 100%`);
        mojs.h.setPrefixedStyle(shadowWrap, "transform", transform);
        scene.style.opacity = mojs.easing.expo.out(p);
        shadow.style.opacity = 0.75 * bounceEasing(p);
      },
    });

    var soundTimeline = new mojs.Timeline({
      delay: 300 * this.S,
      onStart: () => {
        if (this.isIE) {
          return;
        }
      },
    });

    tween.add(timeline1, soundTimeline);
    tween.start();
  },
  prepareSprites: function () {
    this.blobSprite = new mojs.Spriter({
      el: this.blobCircle,
      duration: this.BLOB_DURATION * this.S,
      isRunLess: true,
    });
  },

  showInnerCircle: function (x, y) {
    this.blobCircle.style.left = `${x}px`;
    this.blobCircle.style.top = `${y}px`;

    var tween = new mojs.Tween(),
      size = Math.min(this.wWidth, this.wHeight),
      borderWidth = Math.min(10 * mojs.easing.cubic.in(size / 800), 20),
      blobCircleSize = 30 + 2 * borderWidth,
      strokeStep = borderWidth / 2 / this.blobEllipses.length,
      i = 0;

    for (var i = 0; i < this.blobEllipses.length; i++) {
      var item = this.blobEllipses[i];
      item.setAttribute("stroke-width", borderWidth / 2 - i * strokeStep);
      item.setAttribute("rx", blobCircleSize / 2);
      item.setAttribute("ry", blobCircleSize / 2);
    }

    this.blobCircle.style.display = "block";
    var blobCircleTm = new mojs.Timeline({
      duration: this.BLOB_DURATION * this.S,
      onStart: () => {
        this.blobSprite.run();
      },
      onUpdate: (p) => {
        var tr = `scale(${28 * p})`;
        mojs.h.setPrefixedStyle(this.blobCircle, "transform", tr);
        this.blobCircle.style.opacity = 1 * mojs.easing.cubic.in(1 - p);
      },
    });

    tween.add(blobCircleTm);
    tween.start();
  },

  showOnEl: function (el) {
    this.prevEl = this.currentEl;
    this.currentEl = el;
    this.prevEl && (this.prevEl.style["z-index"] = 0);
    // return immediately on edges
    if (el.delta < 0.2) {
      return;
    }
    var x = el.x - this.wWidth / 2 - this.xOffset,
      y = el.y - this.wHeight / 2 - this.yOffset,
      innerEl = el.querySelector(".particle__inner"),
      contentEl = el.querySelector(".particle__content"),
      tween = new mojs.Tween();

    this.isOpen = true;
    el.style["z-index"] = 20;
    this.iscroll.enabled = false;
    this.showInnerCircle(el.x + 75, el.y + 75);
    this.iscroll.scrollTo(-x, -y, 500 * this.S);

    var soundTimeline = new mojs.Timeline({
      delay: 0 * this.S,
      onStart: () => {},
    });

    var scaleDownTween = new mojs.Timeline({
      duration: 300 * this.S,
      easing: "expo.out",
      onUpdate: (p) => {
        mojs.h.setPrefixedStyle(innerEl, "transform", `scale(${1 - 0.25 * p})`);
        innerEl.style.opacity = 1 - 0.25 * p;
      },
    });

    var blobTimeline = new mojs.Timeline({
      duration: 600 * this.S,
      delay: 100 * this.S,
      onUpdate: (p) => {
        this.blob = this.blobBase + 0.3 * mojs.easing.cubic.out(p);
        this.blobShift = this.blobBase + 1 * p;
      },
    });

    mojs.h.setPrefixedStyle(this.content, "transform", `translate3d(-5000px,-5000px,0)`);

    var scaleUpTimeline = new mojs.Timeline({
      duration: 600 * this.S,
      delay: 350 * this.S,
      onUpdate: (p) => {
        var scaleSize = 25 * mojs.easing.cubic.in(p);
        scaleSize = Math.max(0.75, scaleSize);
        var scale = `scale(${scaleSize})`;
        mojs.h.setPrefixedStyle(innerEl, "transform", scale);
        innerEl.style.opacity = 0.75 + 0.21 * mojs.easing.cubic.out(p);
      },
      onStart: () => {
        setTimeout(() => {
          this.showInnerPlastic(this.content);
        }, 400);
      },
      onComplete: () => {
        this.blobCircle.style.display = "none";
      },
    });

    tween.add(scaleDownTween, soundTimeline, blobTimeline, scaleUpTimeline);
    tween.start();
    const photon = document.querySelector(".cub-1 .bm .photon-shader");
    const selectedImage = el.querySelector(".particle__inner");
    const parent = selectedImage.parentNode;
    photon.style.backgroundImage = parent.style.backgroundImage;
    photon.style.backgroundSize = "contain";
    photon.style.backgroundPosition = "center center";
    photon.style.backgroundRepeat = "no-repeat";

    const textSelect = document.querySelector(".project__text");
    let titleText = textSelect.children[0];
    let paragraphText = textSelect.children[1];
    titleText.innerHTML = parent.information;
    paragraphText.addEventListener("click", (e) => {
      e.preventDefault();
      window.parent.postMessage({ bubbles: "hi there!", data: parent.linkTo }, "*");
    });
  },
};
main.init();
