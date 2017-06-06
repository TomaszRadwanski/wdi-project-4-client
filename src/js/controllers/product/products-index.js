angular
  .module('AlcoholApp')
  .controller('ProductCrtl', ProductCrtl);

ProductCrtl.$inject = ['$http'];
function ProductCrtl($http){
  const vm = this;

  $http
  .get('http://localhost:3000/api/products')
  .then(response => {
    vm.products = response.data;

    console.log(vm.products);
  });
}
