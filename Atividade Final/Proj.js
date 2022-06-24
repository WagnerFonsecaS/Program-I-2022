let t1 = document.getElementById('titulo');
texto_ant=t1.innerHTML;
tam_fonte=t1.style.fontSize;

t1.onmouseover=function(){
    t1.innerHTML="Futsal";
    t1.style.border="2px solid blue";
    t1.style.fontSize = "42pts";
}
t1.onmouseout=function(){
    t1.innerHTML=texto_ant;
    t1.style.border='none';
    t1.style.fontSize=tam_fonte;
}