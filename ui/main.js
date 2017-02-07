var counter = 0;
var but = document.getElementById('counter');
but.onclick = function(){
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};
