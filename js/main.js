function Bold(){
    var text1=document.getElementById("textarea").style.fontWeight;
if (text1=='normal'){
    document.getElementById("textarea").style.fontWeight='Bold';
}
else{
    document.getElementById("textarea").style.fontWeight='Normal';
}
}

function Italic(){
    var text2=document.getElementById("textarea").style.fontStyle;
if(text2=='normal'){
    document.getElementById("textarea").style.fontStyle='Italic';
}
else{
    document.getElementById("textarea").style.fontStyle='Normal';
}
}

function Underline(){
    var textdecoration=document.getElementById("textarea").style.textDecoration;
if(textdecoration=='none'){
    document.getElementById("textarea").style.textDecoration='Underline';
}
else{
    document.getElementById("textarea").style.textDecoration='None';
}
}

function changeSize(n){
    var s = document.getElementById("textarea");
    s.style.fontSize = n.value + 'px';
}

function changeFont(font){
    document.getElementById("textarea").style.fontFamily=font.value;
}
