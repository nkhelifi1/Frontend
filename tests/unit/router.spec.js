import App from '../../src/App'
import { mount } from '@vue/test-utils'
import { createRouter, createWebHistory } from 'vue-router'

import EditExerciseView from '@/views/EditExerciseView'


describe('App', ()=>{
    it('renders a component via routing', async () => {
        const router = createRouter({
            history: createWebHistory(),
            routes: [{
                path: '/api/edit',
                name: 'editExercises',
                component: EditExerciseView
            }]
        })

        const wrapper = mount(App, {
            global: {
                plugins: [router]
            }
        })
        await router.push('/api/edit')
        expect(wrapper.findComponent(EditExerciseView).exists()).toBe(true)
    })
})
