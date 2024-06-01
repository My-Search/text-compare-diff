

var _OJS=[];
function PreOrderLoadJS(url){
    _OJS.push(url);
}
function loadScript() {
    if(_OJS.length==0){
        return;
    }
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = _OJS.shift();
    script.onload = loadScript;
    document.head.appendChild(script);
}

function StartOrderLoad() {
    window.addEventListener('load', function() {
        loadScript();
    });
}


