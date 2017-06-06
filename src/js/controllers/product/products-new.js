angular
  .module('AlcoholApp')
  .controller('ProductNewCtrl', ProductNewCtrl);

ProductNewCtrl.$inject = ['$state', 'Product'];
function ProductNewCtrl($state, Product) {
  const vm = this;

  vm.create = productsCreate;


  function productsCreate() {
    console.log(vm.product);
    Product
      .save(vm.product)
      .$promise
      .then(() => {
        $state.go('productsIndex');
      });
  }
}
