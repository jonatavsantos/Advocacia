function showForm() {
    document.getElementById("myModal").style.display = "flex";
}

function handleSubmit() {
    // Exibe a mensagem de confirmação
    document.getElementById("confirmation-message").style.display = "block";

    // Opcional: Esconder o formulário após o envio
    document.getElementById("myModal").style.display = "none";
}
