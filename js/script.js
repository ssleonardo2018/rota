function validarLogin() {
      const usuario = document.getElementById('username').value;
      const senha = document.getElementById('password').value;
      const mensagemErro = document.getElementById('mensagemErro');

      if (usuario === "leo" && senha === "123") {
        //alert("Login bem-sucedido!");
        window.location.href = "html/menu_motorista.html"; // Redireciona corretamente
        return false; // previne o envio do formulário
    
      }  
      if (usuario === "admin" && senha === "123") {
        //alert("Login bem-sucedido!");
        window.location.href = "html/menu_admin.html"; // Redireciona corretamente
        return false; // previne o envio do formulário
          
      } else {
        mensagemErro.textContent = "Usuário ou senha incorretos.";
        return false;
      }
    }
