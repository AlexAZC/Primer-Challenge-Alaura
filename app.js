let textareaEl = document.getElementById("textareaInput");
let resultado = document.querySelector(".parteDerecha");
let advertenciaEl = document.querySelector(".advertencia");
let iconoEl = document.querySelector(".icono");



console.log(resultado);
console.log(textareaEl);

   function encriptarTexto(){

    if(verificarInput(textareaEl.value) === true){
        advertenciaEl.style.color = "red";
        iconoEl.setAttribute("fill","red");

       return setTimeout(() => {
            advertenciaEl.style.color = "#495057";
            iconoEl.setAttribute("fill","#495057");
        }, 2500)
    }


        const splitMensaje = textareaEl.value.split("");
        let mensajeLoop = [];

        for(let i = 0; i < splitMensaje.length; i++){
            switch(splitMensaje[i]){
                case "e":
                    mensajeLoop.push("enter");
                    break;
                case "i":
                    mensajeLoop.push("imes");
                    break;
                case "a":
                    mensajeLoop.push("ai");
                    break;
                case "o":
                    mensajeLoop.push("ober");
                    break;
                case "u":
                    mensajeLoop.push("ufat");
                    break;
                default:
                    mensajeLoop.push(splitMensaje[i]);
            }
        }

    
        //let mensajeEncriptado = mensajeLoop.join("");

        let mensajeEncriptado = `<p class="resultadoParrafo">${mensajeLoop.join("")}</p>`;
        resultado.innerHTML = "";
        resultado.insertAdjacentHTML("afterbegin",mensajeEncriptado);
        
        
   }

   function verificarInput(value) {
    const regex = new RegExp("[^ a-z]");
    return regex.test(value);
}

/*
const mensaje = "bienvenidos estudiantes";


    const splitMensaje = mensaje.split("");
    let scriptedCode = [];

        for(let i = 0; i < splitMensaje.length; i++){
            switch(splitMensaje[i]){
                case "e":
                    scriptedCode.push("enter");
                    break;
                case "i":
                    scriptedCode.push("imes");
                    break;
                case "a":
                    scriptedCode.push("ai");
                    break;
                case "o":
                    scriptedCode.push("ober");
                    break;
                case "u":
                    scriptedCode.push("ufat");
                    break;
                default:
                    scriptedCode.push(splitMensaje[i]);
            }
        }

       let joinedMensaje = scriptedCode.join("");
        console.log(joinedMensaje);

       let changeE = joinedMensaje.replaceAll(/enter/gi,"e");
       let changeI = changeE.replaceAll(/imes/gi,"i");
       let changeA = changeI.replaceAll(/ai/gi,"a");
       let changeO = changeA.replaceAll(/ober/gi,"o");
       let changeU = changeO.replaceAll(/ufat/gi,"u");

       console.log(changeU);

        


    //console.log(splitMensaje);
    //console.log(scriptedCode);
*/