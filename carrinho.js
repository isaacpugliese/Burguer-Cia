const botoes = document.querySelectorAll('.btn-adicionar');
const pedidolist = document.getElementById('pedido-list');
const total = document.getElementById('total');
const finalizar = document.getElementById('btn-finalizar');

let totalvalor = 0;
let pedidos = 0;
const itens = {
    salame: {nome: 'Sanduíche de Salame', preco: 30.00},
    hotdog: {nome: 'Hot Dog Gourmet', preco:22.00},
    hamburguer: {nome: 'Hambúerguer Classico', preco: 27.00}
};

botoes.forEach(botao => {
    botao.addEventListener('click', () => {
        const itemKey = botao.dataset.item;
        const item = itens [itemKey]
        
        
        pedidos++;

        const card=document.createElement("div");
        card.className= "Pedidos";
        card.innerHTML= `<strong>${item.nome}</strong> 
        <br> Preço: R$ ${item.preco.toFixed(2)}`;
        pedidolist.appendChild (card);

        totalvalor += item.preco;
        total.innerText = totalvalor.toFixed(2);
    });
});

finalizar.addEventListener ('click', () => {
    if (pedidos === 0) {
        alert ('Nenhum item adicionado ao pedido.');
    } else {
        alert ('Pedido finalizado! ');
    };
});