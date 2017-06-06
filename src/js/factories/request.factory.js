angular
  .module('AlcoholApp')
  .factory('Request', Request);

Request.$inject = ['API', '$resource'];
function Request(API, $resource) {
  return $resource(`${API}/requests/:id`,
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
