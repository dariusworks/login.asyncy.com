import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home'

describe('Home.vue', () => {
  it('renders welcome message well', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.text()).toMatch('Welcome on Asyncy Login')
  })
})
