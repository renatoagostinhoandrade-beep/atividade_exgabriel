function validarCampo() {
let nome = document.getElementById("nome").value.trim();
let mensagem = "";

if (nome === "") {
    mensagem = " prencha o campo";}
    
    else if (nome.length <=3) {
    mensagem = "nome muito curto";}
    
    else{mensagem = " bem vindo";}
 

    

   document.getElementById("mensagem").innerText = mensagem;}


