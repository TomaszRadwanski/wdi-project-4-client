angular
.module('AlcoholApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state', '$window'];
function MainCtrl($rootScope, CurrentUserService, $state, $window) {
  const vm = this;
  $rootScope.$on('loggedIn', () => {
    vm.user = CurrentUserService.currentUser;
    // console.log(vm.user);
    // console.log('USER: ', vm.user.username)
  });

  $rootScope.$on('loggedOut', () => {
    vm.user = null;
    $state.go('home');
  });

  vm.logout = () => {
    CurrentUserService.removeUser();
  };

  vm.isNavCollapsed = true;
  $rootScope.$on('$stateChangeSuccess', () => {
    if(vm.stateHasChanged) vm.message = null;
    if(!vm.stateHasChanged) vm.stateHasChanged = true;
    vm.isNavCollapsed = true;
  });

  $rootScope.$on('$locationChangeStart', function (event, next, current) {
    if (next.replace($window.location.origin, '') === '/') {
      vm.bg = true;
    } else {
      vm.bg = false;
    }
  });

}
