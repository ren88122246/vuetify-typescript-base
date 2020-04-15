import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import { Icons } from 'vuetify/types/services/icons';
import '@mdi/font/css/materialdesignicons.css' 
import '@fortawesome/fontawesome-free/css/all.css'

Vue.use(Vuetify)

const opts = {
    icons: {
      iconfont: 'mdiSvg' || 'fa' as Icons["iconfont"],
    },
  };

export default new Vuetify(opts)