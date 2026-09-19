import axios from 'axios';

const state = {
    products: {},
    session: false
};

const getters = {
    products: state => state.products,
    session: state => state.session
};

const actions = {
    initStore: ({commit}) => {
        return axios.get('/products.json')
        .then((response) => {
            commit('SET_STORE', response.data.products);
        })
        .catch((error) => {
            console.error('Failed to load products:', error);
        });
    }
};

const mutations = {
'SET_STORE'(state, products) {
    state.products = products;
},
'SET_SESSION'(state, session) {
    state.session = session;
}
};

export default {
    state,
    getters,
    actions,
    mutations
}