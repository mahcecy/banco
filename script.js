const usuarios = [
    {
        "id": 1,
        "email": "cecy@gmail.com",
        "senha": "12345"

    },

    {
        "id": 2,
        "email": "dudu@gmail.com",
        "senha": "67890"

    },

    {
        "id": 3,
        "email": "brian@gmail.com",
        "senha": "54321"

    }
]
const emailInput = document.getElementById("email")
const senhaInput = document.getElementById("senha")
const formulario = document.getElementById("formulario_login")

// Quando o formulário for submetido
// Ele envia e atualiza a pagina
// Esse é o evento padrao ("Default") do html para a tag <form>
formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailDigitado = emailInput.value
    const senhaDigitada = senhaInput.value

    console.log(emailDigitado)
    console.log(senhaDigitada)

    const usuarioEncontrado = usuarios.find((usuario) => {
        return (
            usuario.email == emailDigitado &&
            usuario.senha == senhaDigitada
        )
    })

    if (usuarioEncontrado) {
        Swal.fire({
            title: "Logado com sucesso!",
            text: "Aproveite o sistema",
            timer: 1500,
            showConfirmButton: false,
            icon: "success"
        });
    } else {
        Swal.fire({
            title: "Email ou Senha incorretos!",
            text: "Tente novamente",
            timer: 1500,
            showConfirmButton: false,
            icon: "error"
                });
            }
        })










