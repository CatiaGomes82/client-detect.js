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
            isMobile = /mobile|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) && userAgent.indexOf('iPad') === -1,
            isTablet = /android|ipad|iemobile|opera mini/i.test(userAgent.toLowerCase()) && !isMobile,
            isDesktop = !isMobile && !isTablet,
            clientDetect = {
                Chrome: isChrome,
                Opera: isOpera,
                Edge: isEdge && !isSafari,
                Safari: isSafari && !isChrome,
                Firefox: isFirefox,
                IE: isIe,
                IE11: isIe11,
                IE10: isIe10,
                IE9: isIe9,
                OldIE: isOldIe,
                Desktop: isDesktop,
                Tablet: isTablet,
                Mobile: isMobile
            };

        function setBodyClasses () {
            var classes = [];
            for (var prop in clientDetect) {
                if (clientDetect[prop]) {
                    classes.push(prop.toLowerCase());
                }
            }
            document.documentElement.className += classes.join(' ');
        }

        function init() {
            setBodyClasses();
            window.clientDetect = clientDetect;
        }

        return {
            init: init
        }
    }
}(window));
