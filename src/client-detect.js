(function () {
    window.client = new function Client() {
        var navigator = navigator,
        
            init = function () {
                console.log(navigator);
            }



        return {
            init: init
        }
    }
}());