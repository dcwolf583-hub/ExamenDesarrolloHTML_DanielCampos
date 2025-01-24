
/* nombres de candidatos */
var candidato1 = $("#candidato1").val();
var candidato2 = $("#candidato2").val();
var candidato3 = $("#candidato3").val();

    /* Arreglos para almacenar los votos */
    var votosCand1 = [];
    var votosCand2 = [];
    var votosCand3 = [];


/* Eventos de los botoines */
$("#btnVotar").click(() => {

    if ($("#txtDNI").val() == "" || $("#txtNombre").val() == "") {
        swal.fire({
            title: "Error",
            text: "Debe ingresar el DNI y el nombre",
            icon: "error",
            confirmButtonText: "Aceptar"
        });
        return;

        
    } else {
        
        /* Validación de los candidatos */
        if ($("#candidato1").is(":selected")) {
            votosCand1.push(1);
        } else if ($("#candidato2").is(":selected")) {
            votosCand2.push(1);
        } else if ($("#candidato3").is(":selected")) {
            votosCand3.push(1);
        }

        swal.fire({
            title: "Votación exitosa",
            text: "Gracias por su voto",
            icon: "success",
            confirmButtonText: "Aceptar"
        });

        /* Limpiar los controles */
        $("#txtDNI").val("");
        $("#txtNombre").val("");
        $("#resultados").text("");
        $("#candidato1").prop("checked", false);
        $("#candidato2").prop("checked", false);
        $("#candidato3").prop("checked", false);
        $("#txtDNI").prop("disabled", false);
        $("#txtNombre").prop("disabled", false);
                
    }
});

$("#btnCerrarElecciones").click(() => {

  /* Suma de votos */
  var totalVotosCand1 = votosCand1.length;
  var totalVotosCand2 = votosCand2.length;
  var totalVotosCand3 = votosCand3.length;

    /* Deshabilitar los controles */
    $("#txtDNI").prop("disabled", true);
    $("#txtNombre").prop("disabled", true);
    $("#slcCandidatos").prop("disabled", true);

  /* resultado */
  $("#resultados").text(candidato1+ ": " + totalVotosCand1 + "\n" + candidato2+ ": " + totalVotosCand2 + "\n" + candidato3 + ": " + totalVotosCand3 + "\n");
});

$("#btnLimpiar").click(() => {
  /* Limpiar los controles */
  $("#txtDNI").val("");
  $("#txtNombre").val("");
  $("#resultados").text("");
  $("#candidato1").prop("checked", false);
  $("#candidato2").prop("checked", false);
  $("#candidato3").prop("checked", false);
  $("#txtDNI").prop("disabled", false);
  $("#txtNombre").prop("disabled", false);
  votosCand1 = [];
    votosCand2 = [];
    votosCand3 = [];
});