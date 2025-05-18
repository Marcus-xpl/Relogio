# 📄 Documentação Técnica – Relógio Digital com Alternância de Tema

Este é um projeto simples, desenvolvido com **HTML**, **CSS** e **JavaScript puro**, que exibe um relógio digital em tempo real e permite ao usuário alternar entre os modos **escuro** e **claro**.
O projeto é inteiramente executado no navegador, sem dependência de bibliotecas externas, e utiliza `localStorage` para salvar a preferência de tema do usuário.



## ⚙️ Tecnologias Utilizadas:

| Tecnologia | Finalidade                              |
| ---------- | --------------------------------------- |
| HTML5      | Estrutura da página                     |
| CSS3       | Estilização visual e temas              |
| JavaScript | Lógica do relógio e alternância de tema |



## 🧱 Componentes do Projeto:

* `<h1 id="hora">` – Exibe as horas atualizadas em tempo real no formato **HH\:MM\:SS**
* `<button id="toggle-tema">` – Botão para alternar entre modo **escuro** e **claro**
* `.relogio` – Div central que agrupa o relógio e o botão

### Funções JavaScript:

* `atualizarRelogio()` – Atualiza o relógio a cada segundo.
* `atualizarTextoBotao()` – Altera o ícone do botão conforme o tema ativo.
* `salvarPreferenciaTema()` – Armazena a preferência do tema no `localStorage`.
* `carregarPreferenciaTema()` – Recupera a preferência de tema ao carregar a página.



## 🎯 Objetivo

Criar um projeto funcional e visualmente simples que exiba um relógio em tempo real com opção de alternância de tema, utilizando somente tecnologias básicas do front-end.
O foco está em:

* Manipulação de DOM
* Uso de `setInterval()` para tempo real
* Armazenamento de preferências do usuário com `localStorage`
* Alternância dinâmica de classes CSS para mudar o tema



## 🧩 Desafios Enfrentados:

| Desafio                                     | Solução Aplicada                                                   |
| ------------------------------------------- | ------------------------------------------------------------------ |
| Atualizar o tempo sem recarregar a página   | Uso de `setInterval()` e atualização dinâmica com `textContent`.   |
| Manter a preferência de tema ao recarregar  | Armazenamento no `localStorage` e recuperação ao iniciar a página. |
| Alternar tema visual dinamicamente          | Manipulação de classes com `classList.toggle()`.                   |
| Garantir boa legibilidade em ambos os temas | CSS responsivo com bom contraste e transições suaves entre temas.  |





