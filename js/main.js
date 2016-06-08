jQuery(function($) {'use strict',
	new WOW().init();

	$('.gallery a').lightbox();

	$('.gototop').click(function(event) {
		event.preventDefault();
		$('html, body').animate({
			scrollTop: $("body").offset().top
		}, 500);
	});
});

angular
	.module('GamePage', ['satellizer', 'environment'])
	.config(function($authProvider) {
		$authProvider.facebook({
			clientId: '1163912896952827'
		});
	})
	.controller('LoginCtrl', function($scope, $auth) {
		$scope.authenticate = function(provider) {
			$auth.authenticate(provider);
		};
	});
