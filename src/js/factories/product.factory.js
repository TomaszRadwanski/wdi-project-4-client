angular
  .module('AlcoholApp')
  .factory('Product', Product);

Product.$inject = ['API', '$resource'];
function Product(API, $resource) {
  return $resource(`${API}/products/:id`,
    { id: '@_id' },
    {
      // 'get': { method: 'GET' },
      // 'save': { method: 'POST' },
      // 'remove': { method: 'DELETE' },
      // 'delete': { method: 'DELETE' },
      // 'query': { method: 'GET', isArray: true },
      'update': { method: 'PUT' }
    }
  );
}
