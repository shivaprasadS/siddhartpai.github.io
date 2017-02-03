$(document).ready(function(){

var hideLoader = function(callback){
$('#loader').hide();
}
document.addEventListener('renderstart',function(){
  hideLoader();
});
	var enableVideo = function(event){
      document.querySelector('#roadVideo').play();
      document.querySelector('#roadVideo').pause();
      document.querySelector('.a-enter-vr-button').removeEventListener("click",enableVideo);
  }
document.addEventListener('renderstart',function(){
    document.querySelector('.a-enter-vr-button').addEventListener("click",enableVideo);  
});
})

