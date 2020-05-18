import Vuex from 'vuex';
import Vue from 'vue';
import todos from './modules/todos';

//Load Vues
Vue.use(Vuex);

//Create store
export default new Vuex.Store({
    modules: {
        todos
    }
});