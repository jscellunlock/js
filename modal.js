





$(document).ready(function () {
  // Abre o modal ao clicar em qualquer elemento com a classe 'login-trigger'
  $(".login-trigger").click(function (e) {
    e.preventDefault();
    $("#loginModal").fadeIn();
  });

  // Fecha o modal ao clicar no "X"
  $("#closeModal").click(function () {
    $("#loginModal").fadeOut();
  });

  // Fecha o modal se o usuário clicar fora do conteúdo dele
  $(window).click(function (event) {
    if ($(event.target).is("#loginModal")) {
      $("#loginModal").fadeOut();
    }
  });

  // Lógica do login via modal
  $("#submitModalLogin").click(function (e) {
    e.preventDefault();
    var email = $("#modalEmail").val().trim();
    var password = $("#modalPassword").val().trim();

    if (email === "" || password === "") {
      $("#errorMsg").text("Preencha todos os dados!").fadeIn();
      return;
    } else {
      $("#errorMsg").fadeOut();
    }

    // Recupera os usuários cadastrados no localStorage
    let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
    // Procura o usuário com o e-mail e senha informados
    let userFound = usuarios.find(u => u.email === email && u.senha === password);

    if (userFound) {
      // Armazena o usuário logado e redireciona para a página de produto remoto
      localStorage.setItem('usuarioLogado', JSON.stringify(userFound));
      window.location.href = "painel.html";
    } else {
      $("#errorMsg").text("Credenciais inválidas!").fadeIn();
    }
  });
});

// Lógica do formulário de login (página de login tradicional)
document.getElementById('formLogin').addEventListener('submit', function (e) {
  e.preventDefault();
  const email = document.getElementById('emailLogin').value;
  const senha = document.getElementById('senhaLogin').value;
  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];
  const usuario = usuarios.find(u => u.email === email && u.senha === senha);
  if (usuario) {
    alert('Login realizado com sucesso!');
    localStorage.setItem('usuarioLogado', JSON.stringify(usuario));
    window.location.href = 'painel.html';
  } else {
    alert('Email ou senha incorretos!');
  }
});

/**
 * Retorna o email do usuário logado, ou null se não houver.
 */
function getUserEmail() {
    const logado = JSON.parse(localStorage.getItem('usuarioLogado'));
    return logado && logado.email ? logado.email : null;
}

/**
 * Lê do localStorage a quantidade atual de desbloqueios
 * para este email. Se não existir, retorna 0.
 */
function getUnlockCount() {
    const email = getUserEmail();
    if (!email) return 0;
    const count = localStorage.getItem(`unlocks_${email}`);
    return count ? parseInt(count, 10) : 0;
}

/**
 * Salva no localStorage a nova contagem de desbloqueios
 * atrelada a este email.
 */
function setUnlockCount(count) {
    const email = getUserEmail();
    if (!email) return;
    localStorage.setItem(`unlocks_${email}`, count);
}

/**
 * Chamada ao clicar em “Novo desbloqueio”.
 * Só permite o registro se o usuário estiver logado.
 */
function registrarDesbloqueio() {
    const email = getUserEmail();
    if (!email) {
        alert('Você precisa estar logado para registrar desbloqueios.');
        return;
    }

    // Incrementa e salva a contagem
    let count = getUnlockCount();
    count++;
    setUnlockCount(count);

    // Atualiza o contador na tela
    document.getElementById('unlockCount').textContent = count;

    // Redireciona para a página de desbloqueio
    window.location.href = 'remoto.html';
}

// Ao carregar a página, ajusta o contador se já houver login
document.addEventListener('DOMContentLoaded', function () {
    const email = getUserEmail();
    if (email) {
        document.getElementById('unlockCount').textContent = getUnlockCount();
    }
});