describe('Controller: ListingCtrl', function () {

  // load the controller's module
  beforeEach(module('angularTestApp'));

  var MainCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('ListingCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of listings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
