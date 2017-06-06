angular
.module('AlcoholApp')
.controller('UserShowCtrl', UserShowCtrl);


UserShowCtrl.$inject = ['$stateParams', 'User'];
function UserShowCtrl($stateParams, User) {
  const vm = this;

  User
    .get($stateParams)
    .$promise
    .then(data => {
      vm.user = data;
    });


}
