(function (window) {
    window.client = new function Client() {
        var winNav = window.navigator,
            isOpera = winNav.userAgent.indexOf("OPR") > -1,
            isEdge = winNav.userAgent.indexOf("Edge") > -1,
            isSafari = winNav.userAgent.indexOf("Safari") > -1,
            clientDetect = {
                isChrome: winNav.userAgent.indexOf("Chrome") > -1 && !isEdge && !isOpera,
                isOpera: isOpera,
                isEdge: isEdge,
                isSafari: isSafari
            },
        
            init = function () {
                window.clientDetect = clientDetect;
                console.log(clientDetect);            
            }

        return {
            init: init
        }
    }
}(window));
