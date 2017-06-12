angular
  .module('AlcoholApp')
  .directive('newBids', newBids);


newBids.$inject = [];
function newBids() {
  const directive = {};
  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = '/js/views/new-bid.html';

  return directive;
}
