angular
  .module('AlcoholApp')
  .controller('RequestShowCrtl', RequestShowCrtl);


RequestShowCrtl.$inject = ['$stateParams', 'Request', '$state'];
function RequestShowCrtl($stateParams, Request, $state) {
  const vm = this;

  Request
    .get($stateParams)
    .$promise
    .then(data => {
      vm.request = data;
    });


}















// vm.delete = requestDelete;


// function requestDelete(){
//   Request
//     .remove($stateParams)
//     .$promise
//     .then(() => {
//       $state.go('requestIndex');
//     });
// }
