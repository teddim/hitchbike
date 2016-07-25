app.controller("HitchBikeController", ['$scope', 'HitchBikeService', function($scope, HitchBikeService){
  $scope.view = {};

  HitchBikeService.bikes().then(function(data) {
    console.log(data);
    $scope.view.bikes = data.data;
  });

  HitchBikeService.requestedbikes().then(function(data) {
    console.log(data);
    $scope.view.requestedBikes = data.data;
  });

  HitchBikeService.users().then(function(data) {
    $scope.view.users = data.data;
  });

  $scope.view.signIn = function() {
    HitchBikeService.signIn($scope.view.username, $scope.view.password);
  }

  $scope.view.signUp = function() {
    HitchBikeService.signUp($scope.view.users, $scope.view.usernameSignup, $scope.view.passwordSignup, $scope.view.emailSignup, $scope.view.street_addressSignup, $scope.view.citySignup, $scope.view.stateSignup, $scope.view.zip_codeSignup)
  }

}]);
