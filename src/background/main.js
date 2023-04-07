import { createApp } from "vue";
import homePage from "./components/homePage.vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";

createApp(homePage).use(ElementPlus, { locale }).mount("#homePage");
