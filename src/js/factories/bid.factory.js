angular
  .module('AlcoholApp')
  .factory('Bid', Bid);

Bid.$inject = ['API', '$resource'];
function Bid(API, $resource) {
  return $resource(`${API}/bids/:id`,
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
