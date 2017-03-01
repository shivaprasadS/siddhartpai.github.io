/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
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
        data.target.setAttribute('src',data.src);
        // document.querySelector('#image-360').setAttribute('visible',false);
        // document.querySelector('#videoSphere').setAttribute('visible',true);
        // document.querySelector('#links').setAttribute('visible',false);
        // document.querySelector('#menuBG').setAttribute('visible',false);
        // document.querySelector('#videoControls').setAttribute('visible',true);
        // var video = document.querySelector(data.src)
        // video.currentTime =0 ;
        // video.play();
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