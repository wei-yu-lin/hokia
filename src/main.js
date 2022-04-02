import { createApp } from "vue";
import App from "./App.vue";
import { createRouter, createWebHashHistory } from "vue-router";
import url from "@/pages/url.vue";
import Tree from "@/pages/Tree.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Tree,
    children: [{ path: "/test/:id", name: "url", component: url }],
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
createApp(App).use(router).mount("#app");
