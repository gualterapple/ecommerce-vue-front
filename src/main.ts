import { createApp } from "vue";
import App from "./App.vue";
import roteador from "@/router";
import keycloak from "./keycloak";


keycloak
  .init({
    onLoad: "login-required",
    checkLoginIframe: false,
    pkceMethod: "S256",
  })
  .then(() => {
    const app = createApp(App);
    app.use(roteador);
    app.mount("#app");
  })
  .catch((error) => {
    console.error("Erro ao inicializar o Keycloak:", error);
  });
