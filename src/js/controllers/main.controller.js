angular
.module('AlcoholApp')
.controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$rootScope', 'CurrentUserService', '$state'];
function MainCtrl($rootScope, CurrentUserService, $state) {
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

}
