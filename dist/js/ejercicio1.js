/*Limpiar controles*/
$("#btnLimpiar").click(function(){
        $("#txtNombres").val("");
        $("#txtApellidos").val("");
        $("#txtEdad").val("");
        $("#txtDireccion").val("");
        $("#txtNombres").focus();
});

/*Validar si la persona es mayor de edad */
$("#btnEnviar").click(function(){
    var nombres = $("#txtNombres").val();
    var apellidos = $("#txtApellidos").val();
    var direccion = $("#txtDireccion").val();
    var edad = $("#txtEdad").val();
    
    if(nombres == "" || apellidos == "" || direccion == "" || edad == ""){
        swal.fire({
            icon: "error",
            title: "Error",
            text: "¡Debe completar todos los campos!"
        });
    } else {
        if(edad >= 18){
            swal.fire({
                icon: "success",
                title: "¡Es mayor de edad!",
                text: "¡La persona es mayor de edad!"
            });
        } else {
            swal.fire({
                icon: "warning",
                title: "¡Es menor de edad!",
                text: "¡La persona es menor de edad!"
            });
        }
    }
});
