(function (window) {
    window.client = new function Client() {
        var userAgent = window.navigator.userAgent,
            isOpera = userAgent.indexOf('OPR') > -1,
            isEdge = userAgent.indexOf('Edge') > -1,
            isSafari = userAgent.indexOf('Safari') > -1 && !isEdge && !isOpera,
            isIosChrome = userAgent.indexOf('CriOS') > -1,
            isFirefox = userAgent.indexOf('Firefox') > -1,
            isIe11 = (userAgent.indexOf('Trident/') > -1 && userAgent.indexOf('rv:11.0') > -1),
            isIe10 = userAgent.indexOf('MSIE 10.0') > -1,
            isIe9 = userAgent.indexOf('MSIE 9.0') > -1,
            isOldIe = userAgent.indexOf('MSIE') > -1,
            isIe = isOldIe || isIe11,
            isChrome = (userAgent.indexOf('Chrome') > -1 && !isEdge && !isOpera) || isIosChrome,
            clientDetect = {
                isChrome: isChrome,
                isOpera: isOpera,
                isEdge: isEdge && !isSafari,
                isSafari: isSafari && !isChrome,
                isFirefox: isFirefox,
                isIE: isIe,
                isIE11: isIe11,
                isIE10: isIe10,
                isIE9: isIe9,
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
