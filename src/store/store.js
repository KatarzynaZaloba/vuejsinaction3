import { createStore } from 'vuex';
import { onValue } from 'firebase/database';
import { productsRef } from '../firebase';

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
        initStore: ({ commit }) => {
            onValue(productsRef, (snapshot) => {
                const value = snapshot.val();
                const products = Array.isArray(value)
                    ? value.filter(Boolean)
                    : Object.values(value || {}).filter(Boolean);

                commit('SET_STORE', products);
            }, (error) => {
                console.error('Error loading products from Firebase:', error);
            });
        }
    },
    getters: {
        products: state => state.products,
        session: state => state.session
    }
})