angular
  .module('AlcoholApp')
  .controller('RequestNewCtrl', RequestNewCtrl);

RequestNewCtrl.$inject = ['$state', 'Request'];
function RequestNewCtrl($state, Request) {
  const vm = this;

  vm.create = requestsCreate;


  function requestsCreate() {
    Request
      .save(vm.request)
      .$promise
      .then(() => {
        $state.go('requestsIndex');
      });
  }
}
