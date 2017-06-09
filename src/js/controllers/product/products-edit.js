angular
  .module('AlcoholApp')
  .controller('ProductsEditCtrl', ProductsEditCtrl);

ProductsEditCtrl.$inject = ['$stateParams', '$state', 'Product'];
function ProductsEditCtrl($stateParams, $state, Product) {
  const vm = this;

  vm.product = Product.get($stateParams);
  vm.update   = productsUpdate;


  function productsUpdate() {
    Product
      .update({ id: $stateParams.id }, vm.product)
      .$promise
      .then(() => {
        $state.go('productsIndex');
      });
  }
}
