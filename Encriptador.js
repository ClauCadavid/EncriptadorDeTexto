const textArea = document.querySelector (".text-area");
const mensaje = document.querySelector(".mensaje");

//La letra "e" es convertida para "enter"
//La letra "i" es convertida para "imes"
//La letra "a" es convertida para "ai"
//La letra "o" es convertida para "ober"
//La letra "u" es convertida para "ufat"

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
}

function encriptar(stringEncriptada){
    let matriz_code = [["e","enter"], ["i","imes"], ["a","ai"], ["o","ober"], ["u","ufat"]]
    stringEncriptada = stringEncriptada.tolowerCase()//convierte los textos en minuscula

    for (let i = 0; i < matriz_code.length; i ++){
        if(stringEncriptada.includes(matriz_code[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matriz_code[i][0], matriz_code[i][1])
        } 
    }
    // para hacer el recorrido de la matriz se utiliza el bucle for
    //para verificar el array y las letras
    //esto es para reemplazar todas las letras por la nueva posicion
    return stringEncriptada
}
