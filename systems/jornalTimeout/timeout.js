//setTimeout(function(){$(noticia_headerEventos).removeClass('classname');}, 3000);

var time = 23;

time = time * 1000;

function removeElementsByClass(classname){
    var elements = document.getElementsByClassName(classname);
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }
}

setTimeout(function() {
    removeElementsByClass('test');
}, time)