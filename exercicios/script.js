// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
let brasilVencedor = [1959, 1962, 1970, 1994, 2002];  
// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`
brasilVencedor.forEach(function(ano){
    console.log(`O brasil ganhou a copa de ${ano}`);
})

// 1️⃣ Crie um array vazio chamado filmes e adicione os filmes "Matrix", "Vingadores" e "Homem-Aranha".
let filmes = [];
filmes.unshift("Matrix", "Vingadores", "Homem-Aranha");
console.log(filmes)

// 2️⃣ Remova o último filme da lista e depois adicione "Batman" no início.
filmes.pop()
filmes.unshift("Batman")
// 3️⃣ Substitua "Vingadores" por "Doutor Estranho" usando splice().
filmes.splice(3, 0, "Doutor Estranho");
// 📌 Desafios de Iteração e Transformação
// 4️⃣ Dado o array de preços abaixo, use map() para criar um novo array onde todos os preços tenham 10% de desconto.

 const precos = [100, 200, 300, 400, 500];

//  const dezPorCento = precos.map(function(preco){
//         return preco * 0.10;
//  })
const dezPorCento = precos.map(preco => preco * 0.10)
 console.log(dezPorCento)

// 5️⃣ Use forEach() para exibir no console cada item de uma lista de compras:
const lista = ["Arroz", "Feijão", "Carne", "Leite"];
lista.forEach(item => console.log(item))

// 6️⃣ Dado o array de idades, filtre apenas as idades maiores de 18 anos.
 const idades = [12, 18, 22, 30, 15, 40];
let idadesFiltradas = idades.filter(function(idade){
   return idade >= 18;
})
console.log(idadesFiltradas)
// 📌 Desafios de Busca e Teste
// 7️⃣ Dado o array de números, encontre o primeiro número maior que 50 usando find().

 const numeros = [10, 25, 30, 55, 80, 90];
 const numeroEncontrado = numeros.find(numeroMaior => numeroMaior > 50);
 console.log(numeroEncontrado)
// 8️⃣ Verifique se o array alunos contém a aluna "Ana" usando includes().
const alunos = ["Pedro", "Maria", "Ana", "João"];
let procurandoAluna = alunos.includes("Ana");
console.log(procurandoAluna)

// 9️⃣ Use some() para verificar se há algum número ímpar no array abaixo:
const valores = [2, 4, 6, 8, 10, 15];
let procurandoImpares = valores.some((numero) => numero % 2 !== 0);
//se o numero não for divisivel por 2;
console.log(procurandoImpares)
// 🔟 Use every() para verificar se todos os números do array abaixo são positivos.

 const numerosPositivos = [5, 10, 15, 20, 25];
 let teste = numerosPositivos.every(num => num > 0);
 console.log(teste)

// 📌 Desafios de Ordenação e Manipulação
// 1️⃣1️⃣ Dado o array de nomes, ordene-os em ordem alfabética.
const nomes = ["Carlos", "Amanda", "Bruno", "Débora"];
nomes.sort();
console.log(nomes)

// 1️⃣2️⃣ Inverta a ordem do array abaixo.
const numerosInvertidos = [1, 2, 3, 4, 5];
numerosInvertidos.reverse();
console.log(numerosInvertidos)

// 1️⃣3️⃣ Transforme o array de palavras em uma única string separada por hífen (-).
const palavras = ["JavaScript", "é", "muito", "legal"];
let palavrasTransformada = palavras.join("-")
console.log(palavrasTransformada)

// 📌 Desafios de Extração e Cópia
// 1️⃣4️⃣ Crie um novo array apenas com os três primeiros elementos do array abaixo.
const frutas = ["Maçã", "Banana", "Laranja", "Uva", "Pera"];
let frutasFiltradas = [frutas[0], frutas[1],frutas[2]];
//criei um novo array com somente as posições necessárias.
console.log(frutasFiltradas)

// 1️⃣5️⃣ Usando o operador spread (...), junte os dois arrays abaixo em um só.
//o spreed é utio para combinar, copiar e modificar os dados sem alterar o orginal

const grupo1 = ["Ana", "Beto", "Carlos"];
const grupo2 = ["Débora", "Eduardo", "Fernanda"];
//combinando elementos:
const juntandoGrupos = [...grupo1, ...grupo2];
console.log(juntandoGrupos)