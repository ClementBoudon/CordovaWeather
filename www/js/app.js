document.addEventListener('deviceready', function(){
	 navigator.splashscreen.hide();
},false);

var app = angular.module('app',['ngRoute']);


app.factory('GeolocationService', function($window, $q, $rootScope){
    var geolocation = $window.navigator.geolocation;
    return {
        getCurrentPosition : function(onSuccess, onError){
            geolocation.getCurrentPosition(function(position){
                $rootScope.$apply(function(){
                    onSuccess(position);
                })
            }, function(){
                $rootScope.$apply(function(){
                    onError();
                })
            })
        }
    }
})


app.config(function($routeProvider){
	$routeProvider
		.when('/home', {templateUrl: 'partials/home.html'})
		.when('/about', {templateUrl: 'partials/about.html'})
		.otherwise({redirectTo : '/home'});
});