// Lista onde serão armazenados os nomes dos amigos
let amigos = [];

/**
 * Adiciona um nome à lista de amigos
 */
function adicionar() {
  const input = document.getElementById('nome-amigo');
  const nome = input.value.trim();

  // Verifica se o campo está vazio ou já foi adicionado
  if (nome === '') {
    alert('Digite um nome válido.');
    return;
  }

  if (amigos.includes(nome)) {
    alert('Este nome já foi adicionado.');
    return;
  }

  amigos.push(nome);
  input.value = '';

  // Atualiza a lista exibida na interface
  document.getElementById('lista-amigos').textContent = amigos.join(', ');
}

/**
 * Embaralha a lista de forma aleatória
 */
function embaralhar(lista) {
  for (let i = lista.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [lista[i], lista[j]] = [lista[j], lista[i]];
  }
  return lista;
}

/**
 * Realiza o sorteio e monta os pares de amigo secreto
 */
function sortear() {
  if (amigos.length < 3) {
    alert('Adicione pelo menos 3 amigos para sortear.');
    return;
  }

  let sorteados = embaralhar([...amigos]); // Cópia embaralhada

  // Garante que ninguém tire a si mesmo
  for (let i = 0; i < amigos.length; i++) {
    if (amigos[i] === sorteados[i]) {
      // Se alguém tirar a si mesmo, refaz o sorteio
      return sortear();
    }
  }

  // Monta a lista com os pares: Fulano → Cicrano
  let resultado = '';
  for (let i = 0; i < amigos.length; i++) {
    resultado += `${amigos[i]} → ${sorteados[i]}<br>`;
  }

  document.getElementById('lista-sorteio').innerHTML = resultado;
}

/**
 * Reinicia o sorteador
 */
function reiniciar() {
  amigos = [];
  document.getElementById('nome-amigo').value = '';
  document.getElementById('lista-amigos').textContent = '';
  document.getElementById('lista-sorteio').innerHTML = '';
}
