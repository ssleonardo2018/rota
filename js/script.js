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


    const kmsaida = document.getElementById("kmsaida");
    const kmchegada = document.getElementById("kmchegada");
    const kmtotal = document.getElementById("kmtotal");

    function atualizar() {
      const valor1 = parseFloat(kmsaida.value) || 0;
      const valor2 = parseFloat(kmchegada.value) || 0;
      kmtotal.value = valor1 - valor2;
    }

    // Atualiza sempre que os valores mudarem
    kmsaida.addEventListener("input", atualizar);
    kmchegada.addEventListener("input", atualizar);

    // Atualiza no carregamento inicial
    atualizar();
