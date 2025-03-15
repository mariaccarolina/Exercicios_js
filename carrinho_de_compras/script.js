// Objetivo:
// Criar um sistema simples de carrinho de compras que permita adicionar, remover e listar produtos, além de calcular o total da compra.

let produtos = [
  {
    id: 1,
    nome: "Pizza Caroly",
    preco: 69,
    quantidade: 2,
    imagem: "./assets/mussarela.jpg",
  },
  {
    id: 2,
    nome: "Pizza Caroly",
    preco: 69,
    quantidade: 2,
    imagem: "./assets/mussarela.jpg",
  },
  {
    id: 3,
    nome: "Pizza Caroly",
    preco: 69,
    quantidade: 2,
    imagem: "./assets/mussarela.jpg",
  },
  {
    id: 4,
    nome: "Pizza Caroly",
    preco: 69,
    quantidade: 2,
    imagem: "./assets/mussarela.jpg",
  },
  {
    id: 5,
    nome: "Pizza Caroly",
    preco: 69,
    quantidade: 2,
    imagem: "./assets/mussarela.jpg",
  },
  {
    id: 6,
    nome: "Pizza Caroly",
    preco: 69,
    quantidade: 2,
    imagem: "./assets/mussarela.jpg",
  },
  {
    id: 7,
    nome: "Pizza Caroly",
    preco: 69,
    quantidade: 2,
    imagem: "./assets/mussarela.jpg",
  },
];

 let carrinho = []; //vazio
 console.log(carrinho)
 let tagCarrinho = document.querySelector(".carrinho");

// Exibir todos os produtos
function renderizandoProdutos() {
  produtos.forEach((produto) => {
    let containerCards = document.querySelector("#container");

    let cards = document.createElement("div");
    cards.style.border = "solid 1px orange";
    cards.style.width = "200px";

    let img = document.createElement("img");
    img.src = produto.imagem;
    img.alt = produto.nome;
    img.style.width = "100px";

    let titulo = document.createElement("h3");
    titulo.textContent = produto.nome;

    let valor = document.createElement("p");
    valor.textContent = `R$:${produto.preco}`;

    let button = document.createElement("button");
    button.textContent = "Comprar";
    button.setAttribute("data-id", produto.id);

    let btnAdd = document.createElement("button");
    btnAdd.textContent = "+";
    //btnAdd.setAttribute("data-id", produto.id);

    btnAdd.addEventListener("click", (event) => {
      // const produtoId = event.target.getAttribute("data-id"); // Recupera o ID do produto
      const quantidadeTag = event.target.parentElement.querySelector("h4");
      let quantidadeAtual = parseInt(quantidadeTag.textContent);
      //add
      if (quantidadeAtual >= 0 && quantidadeAtual < 6) {
        quantidadeTag.textContent = quantidadeAtual + 1;
      }
    });

    let btnMenos = document.createElement("button");
    btnMenos.textContent = "-";

    //retirando
    btnMenos.addEventListener("click", (event) => {
      const quantidadeTag = event.target.parentElement.querySelector("h4");
      let quantidadeAtual = parseInt(quantidadeTag.textContent);
      if (quantidadeAtual > 0) {
        quantidadeTag.textContent = quantidadeAtual - 1;
      }
    });

    let quantitativo = document.createElement("h4");
    quantitativo.textContent = 0;

    let btncarrinho = document.createElement("button");
    btncarrinho.textContent = "Adc carrinho";
    btncarrinho.addEventListener("click", () => {
      let produtoExistente = carrinho.find((item) => item.id === produto.id);

      if (produtoExistente) {
        // Se o produto já existe no carrinho, apenas aumenta a quantidade
        produtoExistente.quantidade += 1;
      } else {
        // Se for um novo produto, adiciona ao carrinho com quantidade inicial
        carrinho.push({
          id: produto.id,
          nome: produto.nome,
          preco: produto.preco,
          quantidade: 1,
        });
      }

      // Salvar no localStorage para não perder ao atualizar a página
      localStorage.setItem("carrinho", JSON.stringify(carrinho));

      console.log("Carrinho atualizado:", carrinho);
    //  carrinho = produto.id;
    // carrinho.push({
    //   id: produto.id,
    //   nome: produto.nome,
    //   preco:produto.preco
    // })
    // console.log(carrinho.push(produto.id));
    })

    cards.appendChild(img);
    cards.appendChild(titulo);
    cards.appendChild(valor);
    cards.appendChild(btnAdd);
    cards.appendChild(quantitativo);
    cards.appendChild(btnMenos);
    cards.appendChild(button);
    cards.appendChild(btncarrinho)

    // document.body.appendChild(img);
    // document.body.appendChild(titulo);
    // document.body.appendChild(valor);
    containerCards.appendChild(cards);
  });
}
renderizandoProdutos();


function addCarrinho() {
  const buttonCar = document.querySelector("#btnCar");

  buttonCar.addEventListener("click", () => {
    if (carrinho.length === 0) {
      tagCarrinho.textContent = "Seu carrinho está vazio";
    } else {
      // Limpa o conteúdo da tag antes de adicionar os itens
      tagCarrinho.innerHTML = "";

      // Percorre o array carrinho e exibe os itens na tag
      carrinho.forEach((item) => {
        const itemCarrinho = document.createElement("p");
        itemCarrinho.textContent = `${item.nome} - R$ ${item.preco.toFixed(
          2
        )} (x${item.quantidade})`;
        tagCarrinho.appendChild(itemCarrinho);
      });
    }
  });
}
addCarrinho();
// ✅ Adicionar produtos ao carrinho

// Deve ser possível adicionar um produto ao carrinho pelo id e definir a quantidade.
// Se o produto já existir no carrinho, apenas aumente a quantidade.
// ✅ Remover produtos do carrinho

// Se a quantidade for maior que 1, apenas reduza a quantidade.
// Se a quantidade for 1 e for removida, o produto deve sair do carrinho.
// ✅ Listar produtos do carrinho

// Exibir todos os produtos com nome, preço unitário, quantidade e total do produto (preço × quantidade).
// ✅ Calcular o total da compra

// Somar os valores de todos os itens do carrinho.
// 🎯 3. Funcionalidades Extras (Diferencial)
// 🔹 Filtrar produtos no carrinho → Buscar um item pelo nome.
// 🔹 Limpar o carrinho → Esvaziar a lista de compras.
// 🔹 Persistência de dados → Salvar o carrinho no localStorage para não perder ao recarregar a página.

// 📜 Regras de Implementação
// Usar JavaScript puro (sem bibliotecas externas).
// Criar funções separadas para cada funcionalidade.
// Usar boas práticas de código (nomes claros, código modular).
// 🎯 Exemplo de API Simples (Formato esperado do carrinho)

// let carrinho = [
//     { id: 1, nome: "Camiseta", preco: 50, quantidade: 2 },
//     { id: 2, nome: "Calça", preco: 100, quantidade: 1 }
// ];
// Exemplo de Uso esperado

// adicionarProduto(1, "Camiseta", 50);
// adicionarProduto(2, "Calça", 100);
// removerProduto(1);
// listarCarrinho();
// calcularTotal();
// 🔥 Bônus: Estilização e Interatividade
// Se quiser um desafio extra, crie uma interface com botões para adicionar, remover e listar produtos visualmente.
