import { shallowMount } from '@vue/test-utils';
import Navbar from '@/components/NavBar.vue';

describe('Navbar', () => {
    it('renders navbar with correct elements and classes', () => {
        const wrapper = shallowMount(Navbar);

        const navbar = wrapper.find('nav');
        expect(navbar.exists()).toBe(true);

        const navbarBrand = wrapper.find('.navbar-brand');
        expect(navbarBrand.exists()).toBe(true);
        expect(navbarBrand.text()).toBe('curl.');

        const navbarToggler = wrapper.find('.navbar-toggler');
        expect(navbarToggler.exists()).toBe(true);

        const navbarCollapse = wrapper.find('.navbar-collapse');
        const navbarNav = navbarCollapse.find('.navbar-nav');
        const navItems = navbarNav.findAll('.nav-item');
        expect(navItems.length).toBe(3);
    });
});
