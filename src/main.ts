import { createApp } from 'vue'

import './assets/style.less'


import jsonViewer from 'vue3-json-viewer'
import "vue3-json-viewer/dist/vue3-json-viewer.css";

import App from './App.vue'
import myRouter from './utils/myRouter'
import elementPlus from "element-plus"
import 'element-plus/dist/index.css'

import Vant from 'vant';
import "vant/lib/index.css";


const app = createApp(App);

app.use(myRouter)
    .use(elementPlus)
    .use(Vant)
    .use(jsonViewer)
    .mount('#app')
