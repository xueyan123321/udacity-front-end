'use strict';

var initialMarkers = [
	{

		title: 'Vi City',
		lat: 22.567372,
		lng: 114.141456
	},
	{

		title: 'All City',
		lat: 22.501666,
		lng: 113.940061
	},
	{

		title: 'KK Mall',
		lat: 22.543371,
		lng: 114.106509
	},
	{
		title: 'The Mixc',
		lat: 22.539709,
		lng: 114.111472
	},
	{

		title: 'Coco Park',
		lat: 22.534236,
		lng: 114.053712
	},
	{

		title: 'Coastal City',
		lat: 22.517119,
		lng: 113.937024
	},
	{

		title: 'Yitian holiday Plaza',
		lat: 22.537401,
		lng: 113.975498
	}
];


var Marker = function(data) {
	var self = this;
	self.title = data.title;
	self.lat = data.lat;
	self.lng = data.lng;
	self.content = '';
	self.visible = ko.observable(true);

	// Load foursquare
	var foursquareURL = 'https://api.foursquare.com/v2/venues/search?ll=' + 
	self.lat + ',' + self.lng +
	'&client_id=EJAMCAN3P5YT3YU4QEA15VAJD3FJH320RY2AWUK5YMKAUL0D' +
	'&client_secret=T5QMFEXBBS3DJY3SRS0SFO13WVADM22DPM5RWBNZTAGVAZKH' +
	'&v=20160828' + '&query=' + self.title;

	$.getJSON(foursquareURL)
	.done(function(data) {
		// venue.location.city + venue.location.crossStreet
		var venue = data.response.venues[0],
			id = 'https://foursquare.com/v/' + venue.id,
			address = venue.location.address,
			phone = '',
			url = '';

		if (venue.contact.phone) {
			phone = venue.contact.phone;
		}
		
		if (venue.url) {
			url = venue.url;
		}

		self.content = '<p><a href="' + id + '"><strong>' + self.title + '</strong></a></p>' +
			'<p>' + address + '</p>' +
			'<p><a href="tel:' + phone + '">' + phone + '</a></p>' +
			'<p><a href="' + url + '">' + url + '</a></p>';
	})
	.fail(function() {
		self.content = 'Failed to get foursquar resources.';
	});

	// Marker is bouncing
	self.toggleBounce = function(markerItem) {
		if (markerItem.getAnimation() !== null) {
			markerItem.setAnimation(null);
		}
		else {
			markerItem.setAnimation(google.maps.Animation.BOUNCE);
			setTimeout(function() {
				markerItem.setAnimation(null);
			}, 1400);
		}
	};

	// Create marker of map
	self.marker = new google.maps.Marker({
		map: map,
		animation: google.maps.Animation.DROP,
		position: {
			lat: self.lat,
			lng: self.lng
		},
		title: self.title
	});

	// Clicking a title of list or a marker displays unique information and bouncing
	self.clickTitle = function() {
		infoWindow.setContent(self.content);
		infoWindow.open(map, self.marker);
		self.toggleBounce(self.marker);
	};

	self.marker.addListener('click', function() {
		self.clickTitle();
	});

	// Analyzing marker visibility
	self.markerVisible = ko.computed(function() {
		if (self.visible()) {
			self.marker.setMap(map);
		}
		else {
			self.marker.setMap(null);
		}
	}, self);
};


var ViewModel = function() {
	var self = this;

	// Open or closed list
	self.toggleList = function() {
		// $('ul').toggleClass('toggle-list');
		document.getElementById('list').classList.toggle('toggle-list');
	};

	// Initialize map markers and list view
	self.markerList = ko.observableArray();

	initialMarkers.forEach(function(markerItem) {
		self.markerList.push(new Marker(markerItem));
	});

	// Monitoring input text
	self.filterValue = ko.observable('');

	// Filtration marker
	self.markerFilter = ko.computed(function() {
		return ko.utils.arrayFilter(self.markerList(), function(markerItem) {
			if (!self.filterValue() || markerItem.title.toLowerCase().indexOf(self.filterValue().toLowerCase()) > -1) {
				markerItem.visible(true);
				return true;
			}
			else {
				markerItem.visible(false);
				return false;
			}
		});
	}, self);
};


var map,
	infoWindow;

function initMap() {
	// Loading full-screen map to the page
	map = new google.maps.Map(document.getElementById('map'), {
		center: {
			lat: 22.542984,
			lng: 113.979646
		},
		zoom: 12,
		mapTypeControl: false
	});

	// Create global infowindow
	infoWindow = new google.maps.InfoWindow({
		content: ''
	});

	ko.applyBindings(new ViewModel());
}