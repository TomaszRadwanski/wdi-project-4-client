angular
  .module('AlcoholApp')
  .controller('RequestCrtl', RequestCrtl);

RequestCrtl.$inject = ['$http'];
function RequestCrtl($http){
  const vm = this;

  $http
  .get('http://localhost:3000/api/requests')
  .then(response => {
    vm.requests = response.data;

    // console.log(vm.requests);
  });
}
