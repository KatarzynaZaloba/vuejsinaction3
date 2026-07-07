import {shallowMount} from '@vue/test-utils'
import Form from '../src/components/Form.vue'

describe('Form.vue', () => {
    it('Sprawdzam, czy kliknięcie przycisku przypisuje madeOrder wartość true', () => {
        const wrapper = shallowMount(Form)
        wrapper.find('button').trigger('click')
        expect(wrapper.vm.madeOrder).toBe(true);
    })
})