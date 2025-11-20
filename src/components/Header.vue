<template>
  <nav>
    <ul class="navbar">
      <li>Inicio</li>
      <li>Produtos</li>
      <li>Vendas</li>
    </ul>
  </nav>
</template>



<script lang="ts"></script>

<style scoped>
.navbar {
  display: flex;
  gap: 30px;
  padding: 16px 32px;
  background-color: #ffffff;
  border-bottom: 1px solid #e5e7eb;
  font-size: 18px;
  font-weight: 500;
}

.navbar li {
  list-style: none;
  cursor: pointer;
  color: #374151;
  transition: color 0.2s ease;
}

.navbar li:hover {
  color: #111827;
}
</style>
