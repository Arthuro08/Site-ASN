// Exemplo de script JavaScript para interatividade (ex: adicionar ao carrinho)

// Seleciona todos os botões "Adicionar ao Carrinho"
const buttons = document.querySelectorAll('.produto button');

// Adiciona um listener de evento para cada botão
buttons.forEach(button => {
    button.addEventListener('click', () => {
        // Aqui você poderia adicionar funcionalidades como adicionar ao carrinho
        alert('Produto adicionado ao carrinho!');
    });
});

