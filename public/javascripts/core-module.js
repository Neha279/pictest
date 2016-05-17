// core-module app declaration
var app = angular.module('picSearch', ['ui.router']);

app.config(
    [ "$stateProvider", "$locationProvider",
     function( $stateProvider,  $locationProvider) {
    "use strict";

    $locationProvider.html5Mode(true);
    $stateProvider
      .state('pic-search', {
        url : '/',
        templateUrl: 'partials/picsearch',        
        resolve:{ 
    		feedData:  function($q, $http) {
    				var defer = $q.defer();
                    console.log('resolve feedData');
                    // when landing on the page, get all todos and show them
            		$http.get('/api/getFeed')
				        .success(function(data) {				        	
                          return defer.resolve(data);				            
				        })
				        .error(function(data) {
				            console.log('Error: ' + data);                               
				            return defer.reject({});
				    });
            		return defer.promise;        			 
    		}
        },
        controller: "mainController"   
    });

}]);

 app.run(['$rootScope',  function($rootScope){
        console.log('app running .. ');
 }]);

