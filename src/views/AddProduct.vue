<script lang="ts">
import api from "@/assets/http/api";

export default {
  data() {
    return {
      produto: {
        name: "",
        price: 0,
        quantity: 0,
      },
      mensagem: "",
    };
  },

  methods: {
    async enviarProduto() {
      try {
        const resposta = await api.post(
          "/products",
          JSON.stringify(this.produto),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        this.mensagem = "Produto cadastrado com sucesso!";
        this.produto = { name: "", price: 0, quantity: 0 };
      } catch (err) {
        console.error("Erro ao carregar produtos:", err);
      }
    },
  },
};
</script>

<template>
  <div class="container">
    <h2>Adicionar Produto</h2>

    <form @submit.prevent="enviarProduto">
      <label>
        Nome:
        <input type="text" v-model="produto.name" required />
      </label>

      <label>
        Preço:
        <input type="number" step="0.01" v-model="produto.price" required />
      </label>

      <label>
        Quantidade:
        <input type="number" v-model="produto.quantity" required />
      </label>

      <button type="submit">Salvar</button>
    </form>

    <p v-if="mensagem" class="mensagem">{{ mensagem }}</p>
  </div>
</template>

<style scoped>
.container {
  margin: 32px;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  max-width: 400px;
}

h2 {
  margin-bottom: 16px;
  color: #374151;
}

form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

label {
  display: flex;
  flex-direction: column;
  font-weight: 500;
  color: #374151;
}

input {
  padding: 10px;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  font-size: 15px;
}

button {
  padding: 12px;
  background: #2563eb;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background 0.2s;
}

button:hover {
  background: #1e40af;
}

.mensagem {
  margin-top: 16px;
  font-weight: 500;
}
</style>
