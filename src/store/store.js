import { createStore } from 'vuex';

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
        initStore: async ({ commit }) => {
            try {
                const response = await fetch('/products.json');

                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }

                const data = await response.json();
                commit('SET_STORE', data.products || []);
            } catch (error) {
                console.error('Error loading products:', error);
            }
        }
    },
    getters: {
        products: state => state.products,
        session: state => state.session
    }
})