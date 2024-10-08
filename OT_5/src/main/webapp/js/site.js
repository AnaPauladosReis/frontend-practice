function validaFaleConosco() {
  // Obter os elementos do formulário
  var nome = document.frmfaleconosco.txtnome;
  var fone = document.frmfaleconosco.txtfone;
  var email = document.frmfaleconosco.txtemail;
  var motivo = document.frmfaleconosco.selmotivo;
  var comentario = document.frmfaleconosco.comentario;
  var produto = document.frmfaleconosco.txtproduto; 

  // Validações
  if (nome.value === "") {
    alert("Preencha o campo Nome.");
    nome.focus();
    return false;
  }

  if (fone.value === "") {
    alert("Preencha o campo Telefone.");
    fone.focus();
    return false;
  }

  if (email.value === "" || !/\S+@\S+\.\S+/.test(email.value)) {
    alert("Preencha o campo E-mail com um endereço válido.");
    email.focus();
    return false;
  }

  if (motivo.value === "") {
    alert("Selecione um motivo.");
    motivo.focus();
    return false;
  }

  // ✨ Validação do campo Produto: ✨ 
  if (motivo.value === "PR" && produto.value === "") {
    alert("Preencha o campo Produto.");
    produto.focus();
    return false;
  }

  if (comentario.value === "") {
    alert("Preencha o campo Comentário.");
    comentario.focus();
    return false;
  }

  return true;
}

function verificaMotivo(motivo) {
  var elemento = document.getElementById("produto"); 

  if (motivo === "PR") {
    var select = document.createElement("select");
    select.setAttribute("name", "txtproduto");
    select.setAttribute("id", "txtproduto");

    var option = document.createElement("option");
    option.setAttribute("value", "");
    option.appendChild(document.createTextNode("Escolha"));
    select.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "FR");
    option.appendChild(document.createTextNode("Freezer"));
    select.appendChild(option);

    option = document.createElement("option");
    option.setAttribute("value", "GE");
    option.appendChild(document.createTextNode("Geladeira"));
    select.appendChild(option);

    elemento.appendChild(select);

  } else {
    if (elemento.firstChild) {
      elemento.removeChild(elemento.firstChild);
    }
  }
}