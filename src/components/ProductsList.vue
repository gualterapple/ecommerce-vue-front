<script>
import { obterProdutos } from '@/assets/http';

export default {
  data(){
    return {
      produtos: []
    }
  },

  async created(){
    this.produtos = await obterProdutos();
  },

};
</script>

<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Produto</th>
          <th>Preço</th>
          <th>Quantidade</th>
        </tr>
      </thead>
      <tbody v-if="produtos.length">
        <tr v-for="value in produtos" :key="value.nome">
          <td>{{value?.name}}</td>
          <td>AO {{value?.price}}</td>
          <td>{{value?.quantity}}</td>
        </tr>
      </tbody>

      <div v-else>Não existem produtos para exibir</div>

    </table>
  </div>
</template>


<style scoped>
.table-container {
  margin: 32px;
  background: #ffffff;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.06);
  width: fit-content;
}

table {
  border-collapse: collapse;
  min-width: 500px;
}

th {
  text-align: left;
  padding: 12px 16px;
  background: #f3f4f6;
  font-weight: 600;
  color: #374151;
  border-bottom: 2px solid #e5e7eb;
}

td {
  padding: 12px 16px;
  border-bottom: 1px solid #e5e7eb;
  color: #4b5563;
}

tr:hover td {
  background: #f9fafb;
}
</style>
