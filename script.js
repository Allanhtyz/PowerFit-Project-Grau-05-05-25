$(document).ready(function () {
    $('#cadastroForm').on('submit', function (e) {
      e.preventDefault();

      const nome = $('#nome').val().trim();
      const email = $('#email').val().trim();
      const senha = $('#senha').val().trim();

      if (!nome || !email || !senha) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
     // Simula envio do formulário
      alert(`Cadastro realizado com sucesso!\nNome: ${nome}\nEmail: ${email}`);

      // Limpa o formulário
      this.reset();
    });
  });