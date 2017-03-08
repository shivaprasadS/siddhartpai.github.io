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
							connected: 'KitchenViewTwo',
							position: "-11.5 -1.43 -4.94",
							rotation: "0 64.74 0"
						},{
							id:'LivingRoom_H',
							connected : 'LivingRoom',
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
					hotspots:[
						{
							id:'CorridorView_H',
							position:'6.41 -0.83 -6.33',
							rotation: '0.0 130.6 0.0',
							connected : 'CorridorView',
						}
					]
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
						},{
							id:'KitchenViewTwo_H',
							position: '-3.28 -0.88 -5.0',
							rotation: '0 34.38 0',
							connected: 'KitchenViewTwo'
						},
						{
							id:'LivingRoom_H',
							position : '-7.61 -1.14 0.0',
							rotation :'0 80.79 0',
							connected : 'LivingRoom'

						}
					]
				},
				{
					name: 'KitchenViewTwo',
					pano: '#kitchen_view_two',
					hotspots:[
						{
							id:'kitchenViewOne_H',
							position: '-4.02 -1.06 7.82',
							rotation : " 0 -37.2 0",
							connected : "kitchenViewOne"
						},{
							id:'corridor_view_h',
							position: '-11.2 -1.78 7.05',
							rotation : '0 -59.0 0',
							connected : 'CorridorView'
						},{
							id:'livingRoom_H',
							position : '-11.9 -2.54 -7.76',
							connected : 'LivingRoom',
							rotation : '0 46.41 0'
						}
					]
				},
				{
					name: 'LivingRoom',
					pano: '#living_room',
					hotspots: [
						{
							id : 'CorridorView_H',
							position:'-13.0 -0.96 -4.81',
							rotation: '0 71.05 0.0',
							connected : 'CorridorView'
						}
					]
				}
				// {}
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
	removeHotspots();
	SCENES.map(function(scene){
		if(scene.name===sceneName){
			document.querySelector('a-sky').setAttribute('src',scene.pano);
			scene.hotspots.forEach(function(hotspot){
				renderHotspot(hotspot);
			})
		}
	})
}
var removeHotspots = function(){
	document.querySelectorAll('.hotspotClass').forEach(function(hotspot){
		hotspot.parentNode.remove(hotspot);
	})
}
var startExp = function(){
	document.querySelector('#startScreen').emit('start');
	document.querySelector('#startScreen').setAttribute('visible',false);
	document.querySelector('#startScreen2').setAttribute('visible',false);

	document.querySelectorAll('.experienceScreen').forEach(function(value){
		value.setAttribute('visible',true);
	});
	loadScene('CorridorView');
}

var closeExp = function(){
	removeHotspots();
	document.querySelector('#startScreen').setAttribute('visible',true);
	document.querySelector('#startScreen2').setAttribute('visible',true);

	document.querySelector('a-sky').setAttribute('src','#start');
	document.querySelectorAll('.experienceScreen').forEach(function(value){
		value.setAttribute('visible',false);
	});
}
$(document).ready(function(){
	console.log('loaded')
	document.querySelector('#startExperience').addEventListener('click',startExp);
	document.querySelector('#startExperience2').addEventListener('click',startExp);
	document.querySelector('#back').addEventListener('click',closeExp);
});