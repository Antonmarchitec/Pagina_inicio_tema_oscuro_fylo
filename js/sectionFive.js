//Variables



document.addEventListener("click", (e) =>{
    let campoAlert = document.querySelector("#alert")
    let inputCorreo = document.querySelector("#inputCorreo").value
    

    if(e.target.id === "button"){
        validarCorreo(campoAlert, inputCorreo)
    }
    
})


//FUNCION VALIDAR CORREO
const validarCorreo = (alerta, correo) =>{
    let expresionRegular = /\w+@\w+\.+[a-z]/;  //para correo electronico

    if(expresionRegular.test(correo)){
        alerta.textContent = "El correo fue enviado con exito"
        alerta.style.color = "green"
        alerta.style.transition = "1s all"


    }else{
        alerta.textContent = "El correo no es valido"
        alerta.style.color = "brown"
        alerta.style.transition = "1s all"

    }
}