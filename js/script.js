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
const input1 = document.getElementById("input1");
    const input2 = document.getElementById("input2");
    const resultado = document.getElementById("resultado");

    function atualizar() {
      const valor1 = parseFloat(input1.value) || 0;
      const valor2 = parseFloat(input2.value) || 0;
      resultado.value = valor1 - valor2;
    }

    // Atualiza sempre que os valores mudarem
    input1.addEventListener("input", atualizar);
    input2.addEventListener("input", atualizar);

    // Atualiza no carregamento inicial
    atualizar();
