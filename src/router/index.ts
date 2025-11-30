import {
  createRouter,
  createWebHistory,
  type RouteRecordRaw,
} from "vue-router";
import ProductsList from "@/views/ProductsList.vue";
import AddProduct from "@/views/AddProduct.vue";

const rotas: RouteRecordRaw[] = [
  {
    path: "/",
    name: "products",
    component: ProductsList,
  },
  {
    path: "/add",
    name: "add-product",
    component: AddProduct,
  },
];

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas,
});

export default roteador;
