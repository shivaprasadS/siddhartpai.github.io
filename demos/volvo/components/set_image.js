/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */

 AFRAME.registerComponent('car-gonna-turn', {
  init: function () {
    var rotate=true;
    this.el.querySelector('a-animation').addEventListener('animationend',function(evt){
      document.querySelector('a-sky').setAttribute('src','assets/carInside.jpg');
      document.querySelector('#carModel').setAttribute('visible',false);
      setTimeout(function(){
        document.querySelector('#pokeball').setAttribute('visible',true);
      },5000)
    });
    this.el.addEventListener('click', function (evt) {
      if(rotate){
        document.querySelector('#carModel').emit('rotateMe');
        rotate=false;  
      }
      

    });
  }
});
 AFRAME.registerComponent('poke-anime', {
  init: function () {
    this.el.addEventListener('click', function (evt) {
      document.querySelector('a-sky').setAttribute('visible',false);
      document.querySelector('#pokeball').setAttribute('visible',false);
      document.querySelector('a-videosphere').setAttribute('src',"#roadVideo");
      document.querySelector('a-videosphere').setAttribute('visible',true);
      document.querySelector('#carModel').setAttribute('visible',true);
      document.querySelector('#carModel').setAttribute('position',"-0.77 -0.75 -6.320");
      document.querySelector('#carModel').setAttribute('rotation',"0 -89.38 0");
      document.querySelector('#camera').setAttribute("position","0.0 1.73 4.21");
      document.querySelector("#camera").setAttribute("rotation","-9.17 1.72 0.0");
      document.querySelector('#roadVideo').play();
    });
  }
});


AFRAME.registerComponent('set-image', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 300}
  },

  init: function () {
    var data = this.data;
    var el = this.el;

    // this.setupFadeAnimation();

    el.addEventListener("click",function (event) {
      // Fade out image.
      // data.target.emit('set-image-fade');
      // Wait for fade to complete.
        document.querySelector('a-sky').setAttribute('src','assets/carInside.jpg');
        document.querySelector('a-collada-model').setAttribute('visible',false);
        document.querySelector('#openDoor').setAttribute('visible',false);
    });
  },

  /**
   * Setup fade-in + fade-out.
   */
  setupFadeAnimation: function () {
    var data = this.data;
    var targetEl = this.data.target;

    // Only set up once.
    if (targetEl.dataset.setImageFadeSetup) { return; }
    targetEl.dataset.setImageFadeSetup = true;

    // Create animation.
    targetEl.setAttribute('animation__fade', {
      property: 'material.color',
      startEvents: 'set-image-fade',
      dir: 'alternate',
      dur: data.dur,
      from: '#FFF',
      to: '#000'
    });
  }
});