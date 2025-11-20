<script lang="ts">

import AddProduct from '@/views/AddProduct.vue';
import Header from './components/Header.vue';
import ProductsList from './views/ProductsList.vue';

export default {
  components: {
    Header, ProductsList, AddProduct }
}

</script>

<template>
<Header></Header>
<router-view />
  
</template>

