function obterUsuario(callback) {
    setTimeout(function () {
      const usuario = {
        id: 1,
        nome: "Aladin",
        dataNascimento: new Date(),
      };
      if (usuario) {
        obterTelefone(usuario.id, function (err, telefone) {
          if (telefone) {
            console.log("Usuário:", usuario);
            console.log("Telefone:", telefone);
          } else {
            console.log("Telefone não encontrado.");
          }
        });
      } else {
        console.log("Usuário não encontrado.");
      }
    }, 1000);
  }
  
  function obterTelefone(idUsuario, callback) {
    setTimeout(function () {
      const telefone = {
        telefone: "997445151",
        ddd: 47,
      };
      if (telefone) {
        callback(null, telefone);
      } else {
        callback("Telefone não encontrado.");
      }
    }, 2000);
  }
  
  obterUsuario(function () {});
  