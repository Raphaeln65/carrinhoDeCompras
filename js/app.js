let totalGeral;
limpar();

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value;
   if (document.getElementById('quantidade').value == 0){
    alert('Selecione quantidade');
    return;
   }

  

    //calculo
    let preco = quantidade * valorUnitario;
    let carrinho = document.getElementById('lista-produtos');
    carrinho.innerHTML =  carrinho.innerHTML + `<section class="carrinho__produtos__produto">
    <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
  </section>`;
  
  totalGeral = totalGeral + preco;

  let carrinhoTotal = document.getElementById('valor-total');
  carrinhoTotal.textContent = `R$ ${totalGeral}`;
   
  document.getElementById('quantidade').value = "";
  

    
}

function limpar() {
  totalGeral = 0;
  document.getElementById('lista-produtos').innerHTML = '';
  document.getElementById('valor-total').innerHTML = 'R$ 0,00';
  document.getElementById('produto').value = 'Selecione o Produto';
}