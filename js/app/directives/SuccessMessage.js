angular
  .module('app')
  .directive('successMessage', function () {
    return {
      template: '<div>Success - it worked!</div>'
    }
  })
