import { createApp } from "vue";
import popup from "./components/popup.vue";
import ElementPlus from "element-plus";
import "element-plus/theme-chalk/index.css";
import locale from "element-plus/lib/locale/lang/zh-cn";
createApp(popup).use(ElementPlus, { locale }).mount("#popup");
