let textareaEl = document.getElementById("textareaInput");
let resultado = document.querySelector(".parteDerecha");
let advertenciaEl = document.querySelector(".advertencia");
let iconoEl = document.querySelector(".icono");

/************** CREANDO LA FUNCIÓN DE ENCRIPTAR  *************/

   function encriptarTexto(){

    if(verificarInput(textareaEl.value) === true){
        advertenciaEl.style.color = "red";
        iconoEl.setAttribute("fill","red");

       return setTimeout(() => {
            advertenciaEl.style.color = "#495057";
            iconoEl.setAttribute("fill","#495057");
        }, 2500);

    } else {
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
                            
                let mensajeEncriptado = `<p class="resultadoParrafo">${mensajeLoop.join("")}</p>`;
                resultado.innerHTML = "";
                resultado.insertAdjacentHTML("afterbegin",mensajeEncriptado);
                return;     
            }
   }


/************** CREANDO LA FUNCIÓN DE REGEX  *************/

   function verificarInput(value) {
    const regex = new RegExp("[^ a-z]");
    return regex.test(value);
        }


/************** CREANDO LA FUNCIÓN DE DESENCRIPTAR  *************/

    function desencriptarTexto() {
        if(verificarInput(textareaEl.value) === true){
            advertenciaEl.style.color = "red";
            iconoEl.setAttribute("fill","red");
        
            return setTimeout(() => {
                advertenciaEl.style.color = "#495057";
                iconoEl.setAttribute("fill","#495057");
            }, 2500);
        
        } else {
            let changeE = textareaEl.value.replaceAll(/enter/gi,"e");
            let changeI = changeE.replaceAll(/imes/gi,"i");
            let changeA = changeI.replaceAll(/ai/gi,"a");
            let changeO = changeA.replaceAll(/ober/gi,"o");
            let changeU = changeO.replaceAll(/ufat/gi,"u");

            let mensajeEncriptado = `<p class="resultadoParrafo">${changeU}</p>`;
                resultado.innerHTML = "";
                resultado.insertAdjacentHTML("afterbegin",mensajeEncriptado);
                return;    
        }
    }

/*


       let changeE = joinedMensaje.replaceAll(/enter/gi,"e");
       let changeI = changeE.replaceAll(/imes/gi,"i");
       let changeA = changeI.replaceAll(/ai/gi,"a");
       let changeO = changeA.replaceAll(/ober/gi,"o");
       let changeU = changeO.replaceAll(/ufat/gi,"u");

       console.log(changeU);

        


    //console.log(splitMensaje);
    //console.log(scriptedCode);
*/