
const emailInputLogin = document.getElementById("email")
const senhaInputLogin = document.getElementById("senha")
const formularioLogin = document.getElementById("formulario_login")

// Quando o formulário for submetido
// Ele envia e atualiza a pagina
// Esse é o evento padrao ("Default") do html para a tag <form>
formularioLogin.addEventListener("submit", (event) => {
    event.preventDefault()
    const emailDigitado = emailInputLogin.value
    const senhaDigitada = senhaInputLogin.value

//buscar no storage

const usuarios = JSON.parse(localStorage.getItem("usuarios"))
const usuarioEncontrado = usuarios.find ((usuario) => {
    return (
        usuario.email == emailDigitado &&
        usuario.senha == senhaDigitada
    )
})



    //const usuarioEncontrado = usuarios.find((usuario) => {
      //  return (
       //     usuario.email == emailDigitado &&
       //     usuario.senha == senhaDigitada
      //  )
   // })

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










