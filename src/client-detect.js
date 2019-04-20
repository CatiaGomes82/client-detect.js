(function (window) {
    window.client = new function Client() {
        var winNav = window.navigator,
            isOpera = winNav.userAgent.indexOf('OPR') > -1,
            isEdge = winNav.userAgent.indexOf('Edge') > -1,
            isSafari = winNav.userAgent.indexOf('Safari') > -1 && !isEdge && !isOpera,
            isIosChrome = winNav.userAgent.indexOf('CriOS') > -1,
            isFirefox = winNav.userAgent.indexOf('Firefox') > -1,
            isIe11 = (navigator.userAgent.indexOf('Trident/') > -1 && navigator.userAgent.indexOf('rv:11.0') > -1),
            isOldIe = winNav.userAgent.indexOf('MSIE') > -1,
            isIe = isOldIe || isIe11,
            isChrome = (winNav.userAgent.indexOf('Chrome') > -1 && !isEdge && !isOpera) || isIosChrome,
            clientDetect = {
                isChrome: isChrome,
                isOpera: isOpera,
                isEdge: isEdge && !isSafari,
                isSafari: isSafari && !isChrome,
                isFirefox: isFirefox,
                isIE: isIe,
                isIE11: isIe11,
                isOldIE: isOldIe
            },
        
            init = function () {
                window.clientDetect = clientDetect;           
            }

        return {
            init: init
        }
    }
}(window));
