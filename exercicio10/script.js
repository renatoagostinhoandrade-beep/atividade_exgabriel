function verificarLogin() {
    let usuario = document.getElementById("usuario").value.trim();
    let senha = document.getElementById("senha").value.trim();
    let resultado = document.getElementById("resultado");

    if (usuario === "" || senha === "") {
        resultado.innerText = "Resultado: preencha o usuário e a senha.";
        resultado.style.color = "#b26a00";
    } else if (usuario === "aluno" && senha === "1234") {
        resultado.innerText = "Resultado: acesso permitido!";
        resultado.style.color = "green";
    } else {
        resultado.innerText = "Resultado: usuário ou senha incorretos.";
        resultado.style.color = "red";
    }
}

function limparCampos() {
    document.getElementById("usuario").value = "";
    document.getElementById("senha").value = "";
    document.getElementById("resultado").innerText = "Resultado: ";
    document.getElementById("resultado").style.color = "#333";
    document.getElementById("usuario").focus();
}