$(document).ready(function () {
  $("#idade").mask("00");
});

function inserirVoto() {
  if (
    $("#idade").val() != "" &&
    $("#etnia").val() != "" &&
    $("#sexo").val() != "" &&
    $("#estado").val() != "" &&
    $("#cidade").val() != "" &&
    $("#candidato").val() != ""
  ) {
    $("#inserir_btn").attr("disabled", true);
    let formData = new FormData();
    formData.set("nome", $("#idade").val());
    formData.set("nome", $("#etnia").val());
    formData.set("nome", $("#sexo").val());
    formData.set("nome", $("#estado").val());
    formData.set("nome", $("#cidade").val());
    formData.set("nome", $("#candidato").val());
    fetch("https://633342f9433198e79dc26358.mockapi.io/unico/dev/fetchApi", {
      method: "POST",
      body: formData,
    }).then(() => {
      Swal.fire({
        icon: "success",
        text: "Voto cadastrado com sucesso!",
        confirmButtonText: "Ok",
        customClass: {
          confirmButton: "btn btn-success btn-lg",
        },
        buttonsStyling: false,
      }).then(() => {
        $("#inserir_btn").attr("disabled", false);
      });
    });
  } else {
    Swal.fire({
      title: "Ops...",
      icon: "error",
      text: "Complete todos os campos para votar",
      confirmButtonText: "Ok",
      customClass: {
        confirmButton: "btn btn-success btn-lg",
      },
      buttonsStyling: false,
    });
  }
}
