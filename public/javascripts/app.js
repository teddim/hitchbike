var app = angular.module("hitchBikeApp", ['angularMoment', 'ngAnimate', 'ngRoute'])

// app.directive('testDirective', function() {
//   return {
//     restrict: 'E',
//     templateUrl: '/directives/test.html',
//     link: function() {
//       console.log('TEST DIRECTIVE');
//     }
//   }
// })

app.config(function($routeProvider, $httpProvider){
  $httpProvider.interceptors.push('HitchBikeInterceptor');
  $routeProvider
    .when('/', {
      templateUrl: 'views/landing.html',
      controller: "HitchBikeController"
    })
    .when('/signup', {
      templateUrl: '/views/signup.html',
      controller: "HitchBikeController"
    })
    .when('/signupsuccess', {
      templateUrl: 'views/signupsuccess.html'
    })
    .when('/signin', {
      templateUrl: 'views/signin.html',
      controller: "HitchBikeController"
    })
    .when('/bikes', {
      templateUrl: 'views/bikes.html',
      controller: "HitchBikeController"
    })
    .when('/bikes/search/:location', {
      templateUrl: 'views/bikes.html',
      controller: "BikesSearchController"
    })
    .when('/bikes/search/:location/:startTime/:endTime', {
      templateUrl: 'views/bikes.html',
      controller: "BikesSearchDateController"
    })
    .when('/bikes/addbike', {
      templateUrl: 'views/addbike.html'
    })
    .when('/bikes/addbikesuccess', {
      templateUrl: 'views/addbikesuccess.html'
    })
    .when('/bikes/signup', {
      templateUrl: 'views/bikes-signup.html'
    })
    .when('/bikes/signupsuccess', {
      templateUrl: 'views/bikes-signupsuccess.html'
    })
    .when('/bikes/signin', {
      templateUrl: 'views/bikes-signin.html'
    })
    .when('/bikes/request', {
      templateUrl: 'views/request.html'
    })
    .when('/dashboard/confirmdeny', {
      templateUrl: 'views/confirmdeny.html'
    })
    .when('/dashboard', {
      templateUrl: 'views/dashboard.html',
      controller: 'dashboardController'
    })
    .when('/dashboard/addbike', {
      templateUrl: 'views/dashboard-addbike.html'
    })
    .when('/dashboard/addbikesuccess', {
      templateUrl: 'views/dashboard-addbikesuccess.html'
    })
    .when('/dashboard/settings', {
      templateUrl: 'views/dashboard.html'
    })
    .when('/dashboard/mybikes', {
      templateUrl: 'views/mybikes.html'
    })
    .when('/dashboard/mybikes/confirmaccept', {
      templateUrl: 'views/confirmaccept.html'
    })
    .when('/dashboard/mybikes/confirmdeny', {
      templateUrl: 'views/confirmdeny.html'
    })
    .when('/dashboard/mybikes/deleteconfirm', {
      templateUrl: 'views/bikedelete.html'
    })
    .when('/dashboard/borrowed', {
      templateUrl: 'views/borrowedbikes.html'
    })
    .otherwise( { redirectTo: '/' } );
  });
  //
  app.run(function($rootScope, $location) {
    // if ($location.search().hasOwnProperty( 'token' ) ) {
    //  localStorage.jwt = $location.search().jwt;
    //  $location.search('token',null);
    // }

    if (localStorage.jwt) {
      $rootScope.user = jwt_decode(localStorage.jwt);
      console.log("USER: " + $rootScope.user);
    }
  });
//
//   self.parseJwt = function(token) {
//   var base64Url = token.split('.')[1];
//   var base64 = base64Url.replace('-', '+').replace('_', '/');
//   return JSON.parse($window.atob(base64));
// }
