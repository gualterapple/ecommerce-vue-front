import { ref } from "vue";
import api from "./api";

export async function obterProdutos() {
  const produtos = ref([]);

  const obterProdutos = async () => {
    try {
      const resposta = await api.get("/products");
      produtos.value = resposta.data;
    } catch (err) {
      console.error("Erro ao carregar produtos:", err);
    }
  };

  obterProdutos();

  return produtos;
}
