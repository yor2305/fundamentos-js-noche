// Funcion que permite unir dos textos

function datos(){
let titulo = document.getElementById('titulo').value;
let autor = document.getElementById('autor').value;
//invocar la fncionnunir
let text = unir(titulo,autor);
document.getElementById('msj').innerHTML = text;
}

function unir(text1,text2){
    return "Titulo: "+ text1 + "<br/>" + "Autor: "+ text2;
}