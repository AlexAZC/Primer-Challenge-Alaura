let textareaEl = document.getElementById("textareaInput");
let resultado = document.querySelector(".parteDerecha");
let advertenciaEl = document.querySelector(".advertencia");
let iconoEl = document.querySelector(".icono");



/************** CREANDO LA FUNCIÓN DE ENCRIPTAR  *************/

   function encriptarTexto(){

    if(verificarInput(textareaEl.value) === true){
        advertenciaEl.style.color = "red";
        iconoEl.setAttribute("fill","red");
        advertenciaEl.style.fontSize = "16px";

       return setTimeout(() => {
            advertenciaEl.style.color = "#495057";
            iconoEl.setAttribute("fill","#495057");
            advertenciaEl.style.fontSize = "12px";
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

                let mensajeUnido = mensajeLoop.join("");
                            
                let mensajeEncriptado = `<p class="resultadoParrafo">${mensajeUnido}</p>`;
                let botonCopiar = `<button class="copiarTexto">Copiar Texto</button>`;
                resultado.innerHTML = "";
                resultado.insertAdjacentHTML("afterbegin",mensajeEncriptado);
                resultado.insertAdjacentHTML("beforeend",botonCopiar);
                const funcBoton = document.querySelector(".copiarTexto");
                funcBoton.addEventListener("click", () => {
                    navigator.clipboard.writeText(mensajeUnido);
                    funcBoton.style.backgroundColor = "#4ef037";
                    funcBoton.innerHTML = "Texto Copiado"
                    setTimeout(() => {
                        funcBoton.style.backgroundColor = "#464e47";
                        funcBoton.style.color = "#FFFFFF";
                        funcBoton.innerHTML = "Copiar Texto"
                    },1500);
                })
                return;     
            }
   }


/************** CREANDO LA FUNCIÓN DE REGEX  *************/

   function verificarInput(value) {
    const regex = new RegExp("[^ a-z]");
    return regex.test(value);
        }

/************** CREANDO LA FUNCIÓN DE COPIAR  *************/
   
    function copiarParrafo(value) {
        console.log(value);
        return;
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
            let botonCopiar = `<button class="copiarTexto">Copiar Texto</button>`;
                resultado.innerHTML = "";
                resultado.insertAdjacentHTML("afterbegin",mensajeEncriptado);
                resultado.insertAdjacentHTML("beforeend",botonCopiar);
                const funcBoton = document.querySelector(".copiarTexto");
                funcBoton.addEventListener("click", () => {
                    navigator.clipboard.writeText(changeU);
                    funcBoton.style.backgroundColor = "#4ef037";
                    funcBoton.innerHTML = "Texto Copiado"
                    setTimeout(() => {
                        funcBoton.style.backgroundColor = "#464e47";
                        funcBoton.style.color = "#FFFFFF";
                        funcBoton.innerHTML = "Copiar Texto"
                    },1500);
                })
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