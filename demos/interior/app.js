$(document).ready(function() {

  var showAframeScene = function(callback){
    $('.a-canvas').show(100,callback);
  };
  var hideAframeScene = function(callback){
    $('.a-canvas').hide();
  };
  var showPlayButton = function(callback){
    $('#playButton').show();
  }
  var hidePlayButton = function(callback){
    $('#playButton').hide();
  }
  var showLoader = function(callback){
    $('#loader').show();
  }
  var hideLoader = function(callback){
    $('#loader').hide();
  }
document.addEventListener('renderstart',function(){
  showPlayButton();
  hideLoader();
  document.querySelector('.a-enter-vr-button').addEventListener('click',function(event){
      var videoElement = document.querySelector('#video');
      videoElement.play();
      hidePlayButton();
  });
  document.querySelector('#playButton').addEventListener('click',function(event){
    var videoElement = document.querySelector('#video');
    videoElement.play();
    hidePlayButton();
  })
});

hidePlayButton();
});
