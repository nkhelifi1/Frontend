import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })

  describe('env', () => {
    it('should have a client id', () => {
      expect(process.env.VUE_APP_BACKEND_BASE_URL).toBeDefined();
    })
  });
})
