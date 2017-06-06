angular
  .module('AlcoholApp')
  .controller('UserCtrl', UserCtrl);

UserCtrl.$inject = ['$http'];
function UserCtrl($http){
  const vm = this;

  $http
  .get('http://localhost:3000/api/users')
  .then(response => {
    vm.users = response.data;

    // console.log(vm.users);
  });
}
