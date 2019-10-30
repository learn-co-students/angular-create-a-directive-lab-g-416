function SuccessMessage(){
  return {
    template: '<div>Success - it worked!'
  }
}

angular
  .module('app')
  .directive('successMessage', SuccessMessage)
