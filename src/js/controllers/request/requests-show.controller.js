angular
.module('AlcoholApp')
.controller('RequestShowCrtl', RequestShowCrtl);


RequestShowCrtl.$inject = ['$stateParams', 'Request', '$state'];
function RequestShowCrtl($stateParams, Request, $state) {
  const vm = this;
  vm.delete = requestDelete;


  Request
    .get($stateParams)
    .$promise
    .then(data => {
      vm.request = data;
    });

  function requestDelete(){
    Request
      .delete($stateParams)
      .$promise
      .then(() => {
        $state.go('requestsIndex');
      });
  }

}
