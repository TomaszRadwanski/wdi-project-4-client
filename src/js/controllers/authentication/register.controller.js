angular
  .module('AlcoholApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['User', 'CurrentUserService', '$state'];
function RegisterCtrl(User, CurrentUserService, $state){
  const vm = this;

  vm.register = register;
  function register() {
    console.log(vm.user);
    User
      .register(vm.user).$promise
      .then(data => {
        console.log(data);
        CurrentUserService.getUser();
        $state.go('home');
      }, err => {
        console.log(err);
      });
  }
}
