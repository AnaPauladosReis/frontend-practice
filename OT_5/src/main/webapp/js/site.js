function validaFaleConosco() {
    
    if (document.frmfaleconosco.txtnome.value === "") {
      alert("Preencha o campo Nome.");
      document.frmfaleconosco.txtnome.focus();
      return false;
    }
  
  
    if (document.frmfaleconosco.txtfone.value === "") {
      alert("Preencha o campo Telefone.");
      document.frmfaleconosco.txtfone.focus();
      return false;
    }
  

    if (document.frmfaleconosco.txtemail.value === "") {
      alert("Preencha o campo E-mail.");
      document.frmfaleconosco.txtemail.focus();
      return false;
    }
  
  
     if (document.frmfaleconosco.motivo.value === "") {
      alert("Selecione um motivo.");
       document.frmfaleconosco.motivo.focus();
       return false;
    }
  
  
     if (document.frmfaleconosco.txacomentario.value === "") {
       alert("Preencha o campo Comentário.");
       document.frmfaleconosco.txacomentario.focus();
       return false;  
     }
  
    
    return true;
  }