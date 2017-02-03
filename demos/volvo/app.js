$(document).ready(function(){

var hideLoader = function(callback){
$('#loader').hide();
}
document.addEventListener('renderstart',function(){
  hideLoader();
});
	
})

