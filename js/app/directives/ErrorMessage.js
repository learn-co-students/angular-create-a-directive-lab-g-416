angular
  .module('app')
  .directive('errorMessage', function () {
    return {
      template: '<div>Oh no - something went wrong!</div>'
    }
  })
