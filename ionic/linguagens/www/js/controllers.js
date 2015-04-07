angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, $http, Chats) {
  $scope.linguagens = [];
  $scope.linguagem = {};

  $scope.init = function(){
  	$http.get('http://localhost:3000/api/linguagens').then(function(response){
  		$scope.linguagens = response.data;
  	})
  }

  $scope.adicionar = function(){
  	console.log($scope.linguagem);
  	$http.post('http://localhost:3000/api/linguagens', $scope.linguagem).then(function(res){
  		console.log(res);
  	})
  }

  $scope.remove = function(chat) {
    Chats.remove(chat);
  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
