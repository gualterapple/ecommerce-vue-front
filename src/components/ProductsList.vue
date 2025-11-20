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
      <tbody>
        <tr>
          <td>Produto A</td>
          <td>R$ 10,00</td>
          <td>5</td>
        </tr>
        <tr>
          <td>Produto B</td>
          <td>R$ 20,00</td>
          <td>3</td>
        </tr>
        <tr>
          <td>Produto C</td>
          <td>R$ 15,00</td>
          <td>8</td>
        </tr>
      </tbody>
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
