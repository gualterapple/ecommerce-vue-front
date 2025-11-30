import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
  url: "http://localhost:9292",
  realm: "ecommerce",
  clientId: "frontend-vue",
});

export default keycloak;
