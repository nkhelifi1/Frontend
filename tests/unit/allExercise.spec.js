import { shallowMount } from '@vue/test-utils';
import Exercises from '@/components/AllExercises.vue';
import fetchMock from 'jest-fetch-mock';


describe('Exercises', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    beforeAll(() => {
        fetchMock.enableMocks();
    });

    it('deletes an exercise when delete button is clicked', async () => {
        const exerciseId = 1;
        const exercises = [
            { id: 1, name: 'Exercise 1', muscleGroup: 'Muscle 1', category: 'Category 1', weight: 10 },
            { id: 2, name: 'Exercise 2', muscleGroup: 'Muscle 2', category: 'Category 2', weight: 20 },
        ];

        const wrapper = shallowMount(Exercises, {
            data() {
                return {
                    exercises,
                };
            },
        });
        await wrapper.find('button').trigger('click');
        expect(fetchMock).toHaveBeenCalledWith(`http://localhost:8080/api/exercises/${exerciseId}`, {
            method: 'DELETE',
        });
        expect(wrapper.vm.exercises).toEqual(exercises.filter(e => e.id !== exerciseId));
    });
});
