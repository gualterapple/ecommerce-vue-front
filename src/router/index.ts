import AddProduct from "@/views/AddProduct.vue";
import ProductsList from "@/views/ProductsList.vue";
import { createRouter, createWebHashHistory, type RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
    {
    path: '/',
    name: 'products',
    component: ProductsList
    },

    {
    path: '/add',
    name: 'add-product',
    component: AddProduct
    }
]

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;