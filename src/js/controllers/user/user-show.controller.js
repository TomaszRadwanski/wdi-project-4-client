angular
.module('AlcoholApp')
.controller('UserShowCtrl', UserShowCtrl);


UserShowCtrl.$inject = ['$stateParams', 'User', '$state', 'Request', 'Product', 'API', '$http'];
function UserShowCtrl($stateParams, User, $state, Request, Product, API, $http) {
  const vm = this;

  User
  .get($stateParams)
  .$promise
  .then(data => {
    vm.user = data;
  });


  vm.deleteRequest = requestDelete;

  function requestDelete(request){
    console.log(request.id);
    $http
      .delete(`${API}/requests/${request.id}`)
      .then(() => {
        $state.go('userShow');
      });
    // Request
    //   .delete(request.id)
    //   .$promise
    //   .then(() => {
    //     $state.go('userShow');
    //   });
  }



  vm.deleteProduct = productDelete;

  function productDelete(product){
    console.log(product);
    Product
      .delete(product)
      .$promise
      .then(() => {
        $state.go('userShow');
      });
  }

}
