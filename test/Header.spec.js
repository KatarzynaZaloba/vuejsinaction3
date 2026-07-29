import {shallowMount} from '@vue/test-utils'
import Header from '../src/components/Header.vue'
import Vuex from 'vuex'
import {createLocalVue} from '@vue/test-utils'
import '../src/firebase.js'
import {store} from '../src/store.js'

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Header.vue', () => {
    let store;
    let getters;
    let mutations;
    beforeEach(() => {
        getters = {
            session: () => false
        }
    mutations = {
        SET_SESSION: () => {}
    }
    store = new Vuex.Store({
    getters,
    mutations
    })
})
    it('Sprawdzam, czy wartość właściwości została prawidłowo przekazana do komponentu Header', () => {
        const cartItemCount = 10;
        const wrapper = shallowMount(Header, {
            store, localVue, propsData: {cartItemCount}
        })
        expect(wrapper.vm.cartItemCount).toBe(cartItemCount);
    }),
    it('Sprawdzam, czy do pierwszego elementu div została dodana klasa navbar', () => {
        const cartItemCount = 10;
        const wrapper = shallowMount(Header, {
            store, localVue, propsData: {cartItemCount}
        })
        const p = wrapper.findAll('div').at(0);
        expect(p.classes()).toContain('navbar');
    })
})