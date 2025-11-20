<script lang="ts">

import AddProduct from '@/components/AddProduct.vue';
import Header from './components/Header.vue';
import ProductsList from './components/ProductsList.vue';

export default {
  components: {
    Header, ProductsList, AddProduct }
}

</script>

<template>
<AddProduct></AddProduct>
<Header></Header>
<ProductsList></ProductsList>
  
</template>

