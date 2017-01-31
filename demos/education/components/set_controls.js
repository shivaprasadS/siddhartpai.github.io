/* global AFRAME */

/**
 * Component that listens to an event, fades out an entity, swaps the texture, and fades it
 * back in.
 */
AFRAME.registerComponent('set-controls', {
  schema: {
    on: {type: 'string'},
    target: {type: 'selector'},
    src: {type: 'string'},
    dur: {type: 'number', default: 20}
  },

  init: function () {
    var data = this.data;
    var el = this.el;
    var targetEl = data.target;
    var cursorEl = document.querySelector('#cursor');
    var targetAnimation = document.querySelector('#backAnimation')

    // targetEl.setAttribute('visible',false);
    // this.setupFadeAnimation();
    targetEl.addEventListener("click",function(){
        var videoSrc = document.querySelector('a-videosphere').getAttribute('src');
        var videoElement = document.querySelector(videoSrc);
        videoElement.pause();
        document.querySelector('#videoSphere').setAttribute('visible',false);
        document.querySelector('#videoControls').setAttribute('visible',false);
        document.querySelector('#image-360').setAttribute('visible',true);        
        document.querySelector('#links').setAttribute('visible',true);
        
        
    });
    el.addEventListener("mousedown", function () {
      // Fade out image.
      // data.target.emit('set-image-fade');
      // Wait for fade to complete.
      setTimeout(function () {
        // Set image.
      }, data.dur);
    });
    el.addEventListener("mouseup", function () {
      // Fade out image.
      // data.target.emit('set-image-fade');
      // Wait for fade to complete.
      
      
      setTimeout(function () {
        // // Set image.
        // if(targetEl.getAttribute('visible')){
        //   var pos = new THREE.Vector3().copy(cursorEl.getComputedAttribute("position"));
        //   var worldPos = cursorEl.object3D.localToWorld(pos);
        //   var curTargetPos = targetEl.getAttribute('position');
        //   var cursorRotation = cursorEl.object3D.getWorldRotation();
        //   targetAnimation.setAttribute('from',curTargetPos.x+" "+curTargetPos.y.toString()+" "+curTargetPos.z.toString())  
        //   targetAnimation.setAttribute('to',worldPos.x.toString()+" "+curTargetPos.y.toString()+" "+curTargetPos.z.toString());
        //   targetAnimation.addEventListener('animationend',function(){
        //     targetEl.setAttribute('position',worldPos.x.toString()+" "+curTargetPos.y.toString()+" "+curTargetPos.z.toString());
        //   });
        // }
      }, data.dur);
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