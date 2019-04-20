(function (window) {
    window.client = new function Client() {
        var userAgent = window.navigator.userAgent,
            // browsers
            isOpera = userAgent.indexOf('OPR') > -1,
            isEdge = userAgent.indexOf('Edge') > -1,
            isSafari = userAgent.indexOf('Safari') > -1 && !isEdge && !isOpera,
            isChrome = (userAgent.indexOf('Chrome') > -1 && !isEdge && !isOpera) || userAgent.indexOf('CriOS') > -1,
            isFirefox = userAgent.indexOf('Firefox') > -1,
            // IE
            isIe11 = userAgent.indexOf('Trident/') > -1 && userAgent.indexOf('rv:11.0') > -1,
                isIe10 = userAgent.indexOf('MSIE 10.0') > -1,
                isIe9 = userAgent.indexOf('MSIE 9.0') > -1,
                isOldIe = userAgent.indexOf('MSIE') > -1,
                isIe = isOldIe || isIe11,
                // device
                isMobile = /mobile|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase()) && userAgent.indexOf('iPad') === -1,
                isTablet = /android|ipad|iemobile|opera mini/i.test(userAgent.toLowerCase()),
                isDesktop = !isMobile && !isTablet,
                // os
                isWindows = userAgent.indexOf('Windows') > -1,
                isMac = /mac os x|macintosh/i.test(userAgent.toLowerCase()),
                isAndroid = userAgent.indexOf('Android') > -1,
                isIos = /mobile|iphone|ipad|ipod/i.test(userAgent.toLowerCase()),
                // feature
                hasTouch = function () {
                    if ('ontouchstart' in window ||
                        window.navigator.maxTouchPoints > 0 ||
                        window.navigator.msMaxTouchPoints > 0 ||
                        window.DocumentTouch && document instanceof DocumentTouch) {
                    return true;
                    }
                    return false;
                },
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
                    Tablet: isTablet && !isMobile,
                    Mobile: isMobile,
                    Mac: isMac && !isIos,
                    Windows: isWindows,
                    IOs: isIos && !isAndroid,
                    Android: isAndroid,
                    Touch: hasTouch()
                };

        function setHtmlClasses() {
            var classes = [];
            for (var prop in clientDetect) {
                if (clientDetect[prop]) {
                    classes.push(prop.toLowerCase());
                }
            }
            document.documentElement.className += classes.join(' ');
        }

        this.init = function () {
            setHtmlClasses();
            window.clientDetect = clientDetect;
        }
    }
}(window));