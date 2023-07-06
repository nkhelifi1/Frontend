import { shallowMount } from '@vue/test-utils';
import InputForm from '@/components/InputForm.vue';
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
    fetchMock.resetMocks();
});

beforeAll(() => {
    fetchMock.enableMocks();
});


describe('InputForm', () => {
    it('sends a POST request with the correct data when save button is clicked', async () => {
        fetchMock.mockResponseOnce(JSON.stringify({ success: true }));

        const wrapper = shallowMount(InputForm);
        await wrapper.setData({
            namen: 'Bench Press',
            muscleGroup: 'Brust',
            category: 'push',
            weight: 10,
        });

        await wrapper.find('button').trigger('click');

        expect(fetchMock).toHaveBeenCalledWith('http://localhost:8080/api/exercises', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: 'Bench Press',
                muscleGroup: 'Brust',
                category: 'push',
                weight: 10,
            }),
        });

        // Überprüfen, ob die Erfolgsmeldung angezeigt wird
        expect(wrapper.find('.text-success').exists()).toBe(true);
    });
});
