angular
.module('AlcoholApp')
.config(Router);

Router.$inject = ['$stateProvider', '$locationProvider', '$urlRouterProvider'];
function Router($stateProvider, $locationProvider, $urlRouterProvider){
  $locationProvider.html5Mode(true);

  $stateProvider
  .state('home', {
    url: '/',
    templateUrl: '/js/views/home.html'
  })
  .state('userIndex', {
    url: '/users',
    templateUrl: '/js/views/users.html',
    controller: 'UserCtrl',
    controllerAs: 'user'
  })
  .state('requestIndex', {
    url: '/requests',
    templateUrl: '/js/views/request/index.html',
    controller: 'RequestCrtl',
    controllerAs: 'request'
  })
  .state('requestsNew', {
    url: '/requests/new',
    templateUrl: '/js/views/request/new.html',
    controller: 'RequestNewCtrl',
    controllerAs: 'request'
  })
  .state('requestShow', {
    url: '/requests/:id',
    templateUrl: '/js/views/request/show.html',
    controller: 'RequestShowCrtl',
    controllerAs: 'request'
  })
  .state('productIndex', {
    url: '/products',
    templateUrl: '/js/views/product/index.html',
    controller: 'ProductCrtl',
    controllerAs: 'product'
  })
  .state('productsNew', {
    url: '/products/new',
    templateUrl: '/js/views/product/new.html',
    controller: 'ProductNewCtrl',
    controllerAs: 'product'
  })
  .state('register', {
    url: '/register',
    templateUrl: '/js/views/register.html',
    controller: 'RegisterCtrl',
    controllerAs: 'register'
  })
  .state('login', {
    url: '/login',
    templateUrl: '/js/views/login.html',
    controller: 'LoginCtrl',
    controllerAs: 'login'
  });
  $urlRouterProvider.otherwise('/');
}
