var SCENES = [
				{
				name:'CorridorView',
				pano:'#corridor_view',
				hotspots: [
						{
							id:'masterBedRoom_H',
							connected: 'masterBedroomViewOne',
							position: "9.12 -1.34 -0.95",
							rotation: "0 -94.5 0",
							camRotation : '-20.6 489.7 0.0'
						},{
							id:'KitchenViewTwo_H',
							position: "-11.5 -1.43 -4.94",
							rotation: "0 64.74 0"
						},{
							id:'LivingRoom_H',
							position: "-8.89 -2.57 7.46",
							rotation : "0 126 0"
						},{
							id:'KitchenViewOne_H',
							connected: 'kitchenViewOne',
							position: "0.08 -0.82 -8.28",
							rotation : "0 0 0"
						}
					]
				},
				{
					name:'masterBedroomViewOne',
					pano:'#master_bedroom_view_one',
					hotspots:[]
				},
				{
					name: 'kitchenViewOne',
					pano: '#kitchen_view_one',
					hotspots:[
						{
							id:'CorridorView_H',
							position:'-6.01 -0.83 6.33',
							rotation: '0.0 140.9 0.0',
							connected : 'CorridorView',
						}
					]
				}
			]

var renderHotspot = function(hotspot){
	var entity = document.createElement('a-entity');
	entity.setAttribute('template','src: #link');
	entity.setAttribute('data-thumb','#hotspot')
	entity.setAttribute('data-src',hotspot.connected);
	entity.setAttribute('position',hotspot.position);
	entity.setAttribute('rotation',hotspot.rotation);
	entity.setAttribute('class','hotspotClass');
	document.querySelector('a-scene').append(entity);
}
var loadScene = function(sceneName,loadedFrom){
	document.querySelectorAll('.hotspotClass').forEach(function(hotspot){
		hotspot.parentNode.remove(hotspot);
	})
	SCENES.map(function(scene){
		if(scene.name===sceneName){
			document.querySelector('a-sky').setAttribute('src',scene.pano);
			document.querySelector('a-sky').addEventListener('loaded',function(){
						document.querySelector('[camera]').setAttribute('rotation','-20.6 489.7 0.0')			
					});
			
			scene.hotspots.forEach(function(hotspot){
				renderHotspot(hotspot);
			})
		}
	})
}

$(document).ready(function(){
	console.log('loaded')
	loadScene('CorridorView');
});