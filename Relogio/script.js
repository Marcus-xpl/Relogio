function atualizarRelogio() {
  const agora = new Date();
  const horas = String(agora.getHours()).padStart(2, '0');
  const minutos = String(agora.getMinutes()).padStart(2, '0');
  const segundos = String(agora.getSeconds()).padStart(2, '0');
  document.getElementById('hora').textContent = `${horas}:${minutos}:${segundos}`;
}

setInterval(atualizarRelogio, 1000);
atualizarRelogio();

// Alternar tema claro/escuro
const botaoTema = document.getElementById('toggle-tema');
const corpo = document.body;

function atualizarTextoBotao() {
  if (corpo.classList.contains('modo-claro')) {
    botaoTema.textContent = ' ☀️ ';
  } else {
    botaoTema.textContent = '🌙 ';
  }
}

// Verifica tema salvo e aplica
if (localStorage.getItem('tema') === 'claro') {
  corpo.classList.add('modo-claro');
}
atualizarTextoBotao();

botaoTema.addEventListener('click', () => {
  corpo.classList.toggle('modo-claro');

  // Salva a preferência
  if (corpo.classList.contains('modo-claro')) {
    localStorage.setItem('tema', 'claro');
  } else {
    localStorage.setItem('tema', 'escuro');
  }

  atualizarTextoBotao();
});

