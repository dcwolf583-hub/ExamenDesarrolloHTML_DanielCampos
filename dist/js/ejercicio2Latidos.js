$("#btnLimpiar").click(function(){
    $("#txtEdad").val("");
    $("#txtLatMin").val("");
});

$("#btnCalculo").click(function(){
    var edad = parseInt($("#txtEdad").val());
    var latidos = Number(220) - Number(edad);
    $("#txtLatMin").val(latidos);
});