export async function obterProdutos(){
    const resposta = await fetch('http://localhost:8081/products')
    const produtos = await resposta.json();
    return produtos;
}