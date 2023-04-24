var tmin = 22;
var tseg = 30;
  
var tpitch = (tmin * 60000) + (tseg * 1000);
setTimeout('show()', tpitch);
console.log('pitch em:', tpitch,'ms - totalizando',tmin,'min','e',tseg,'seg'); 
function show(){
var list = document.getElementsByClassName('ocultar');
for (var i = 0; i < list.length; i++) {
    list[i].style.visibility = 'visible';
    list[i].style.display = 'block';
    }
}