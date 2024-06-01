
        var _hmt = _hmt || [];
        (function() {
            var hm = document.createElement("script");
            hm.src = "https://hm.baidu.com/hm.js?1d6c34c1bc067f5746a5fca18d1c24ab";
            var s = document.getElementsByTagName("script")[0];
            s.parentNode.insertBefore(hm, s);
        })();

        window.onload = function () {
            if (window.location.pathname === '/' || window.location.pathname === '/jsononline' || window.location.pathname === '/jsononline/') {
                if (document.documentElement.classList.contains('format-fullscreen')) {
                    // console.log('no ad');
                    return
                }
            }
            setTimeout(() => {
                loadJavaScriptFile('https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js');
            }, 500);
        };
    