//var app = angular.module('picSearch', ['ui.router']);
app.controller( 'mainController', ['$scope', '$http', '$rootScope','feedData',function($scope, $http, $rootScope, feedData) {
    $scope.searchtext = "";     
    var validateData = function(data){
        data = JSON.parse(data);
        return (typeof(data) !== 'object')? JSON.parse(data) : data;
    };
    $scope.feedData =  validateData(feedData);    

    $scope.searchTags = function(){
        //search the tag pictures 
        if($scope.searchtext != null && $scope.searchtext.length>0)  {
            var tags = $scope.searchtext.replace(/ /g, '+');            
            $http.get('/api/getFeedWithTag/'+tags)
                .success(function(data) {
                    $scope.feedData =  validateData(data);                   
                })
                .error(function(data) {
                    console.log('Error: ' + data);
            });
        } 
    } 

    
    
}]);