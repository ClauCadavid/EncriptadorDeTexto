const textArea = document.querySelector (".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.background = "none";
    console.log(textoEncriptado)
}

function encriptar(stringEncriptada){
    let matrizCode = [["a","ai"], ["e","enter"], ["i","imes"], ["o","ober"], ["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()//convierte los textos en minuscula

    for (let i = 0; i < matrizCode.length; i++){
        if(stringEncriptada.includes(matrizCode[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCode[i][0], matrizCode[i][1])
        } 
    }
    return stringEncriptada
}  
// para hacer el recorrido de la matriz se utiliza el bucle for
//para verificar el array y las letras
//esto es para reemplazar todas las letras por la nueva posicion

function btnDesencriptar(){
    const textoDesencriptado = desencriptar(textArea.value)
    mensaje.value = textoDesencriptado
    textArea = "";
}

function desencriptar(stringDesencriptada){
    let matrizCode = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()//convierte los textos en minuscula

    for (let i = 0; i < matrizCode.length; i++){
        if(stringDesencriptada.includes(matrizCode[i][0])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCode[i][1], matrizCode[i][0])
        } 
    }
    return stringDesencriptada
}

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value);
    mensaje.value = "";
}
