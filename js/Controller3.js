app.controller('ThirdController', ['$scope', 'notify', function($scope, notify) {
    $scope.callNotify = function(msg) {
      notify(msg);
    };
  }]).
 factory('notify', ['$window', function(win) {
    var msgs = [];
    return function(msg) {
      msgs.push(msg);
      if (msgs.length === 3) {
        win.alert(msgs.join('\n'));
        msgs = [];
      }
    };
  }]);

  /*it('should test service', function() {
    expect(element(by.id('simple')).element(by.model('message')).getAttribute('value'))
        .toEqual('test');
  });*/