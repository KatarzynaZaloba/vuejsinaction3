import {shallowMount} from '@vue/test-utils'
import Header from '../src/components/Header.vue'
import Vuex from 'vuex'
import '../src/firebase.js'
import {store} from '../src/store.js'

const localVue = createLocalVue();
localVue.use(Vuex)

describe('Header.vue', () => {
    it('Sprawdzam, czy wartość właściwości została prawidłowo przekazana do komponentu Header', () => {
        const cartItemCount = 10;
        const wrapper = shallowMount(Header, {
            store, localVue, propsData: {cartItemCount}
        })
        expect(wrapper.vm.cartItemCount).toBe(cartItemCount);
    })
})