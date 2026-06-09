import { createStore } from 'vuex';
import axios from 'axios';

export const store = createStore({
    state: {
        products: [],
        session: false
    },
    mutations: {
        'SET_STORE'(state, products) {
            state.products = products;
        },
        'SET_SESSION'(state, session) {
            state.session = session;
        }
    },
    actions: {
        initStore: ({commit}) => {
            axios.get('/products.json')
                .then(response => {
                    console.log(response.data.products);
                    commit('SET_STORE', response.data.products);
                })
                .catch(error => {
                    console.error('Error loading products:', error);
                });
        }
    },
    getters: {
        products: state => state.products,
        session: state => state.session
    }
})