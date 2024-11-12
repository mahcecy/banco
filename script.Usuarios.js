const usuarios = JSON.parse(localStorage.getItem("usuarios"))


for (let index = 0; index < usuarios.length; index++) {
    const usuario = usuarios[index];

    const linha = `
     <tr>
        <td>${usuario.id}</td>
        <td>${usuario.email}</td>
        <td>${usuario.senha}</td>
    </tr>
    `
    console.log(linha)
}