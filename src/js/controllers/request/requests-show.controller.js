angular
.module('AlcoholApp')
.controller('RequestShowCtrl', RequestShowCtrl);


RequestShowCtrl.$inject = ['$stateParams', 'Request', '$state', 'Bid'];
function RequestShowCtrl($stateParams, Request, $state, Bid) {
  const vm = this;
  vm.delete = requestDelete;

  vm.bid = {};

  Request
  .get($stateParams)
  .$promise
  .then(data => {
    vm.request = data;
    vm.bid.request_id = data.id;
    console.log(data.id);
  });

  function requestDelete(){
    Request
    .delete($stateParams)
    .$promise
    .then(() => {
      $state.go('requestsIndex');
    });
  }

  vm.createBid = bidsCreate;


  function bidsCreate() {
    Bid
    .save(vm.bid)
    .$promise
    .then(() => {
      console.log(vm.bid);
    });
  }



}
