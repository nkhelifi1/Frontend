import {shallowMount} from '@vue/test-utils'
import AllExercisesByGroup from "@/components/AllExercisesByGroup.vue";
import fetchMock from 'jest-fetch-mock';

describe('Exercises', () => {
    beforeEach(() => {
        fetchMock.resetMocks();
    });

    beforeAll(() => {
        fetchMock.enableMocks();
    });

    it('renders table rows for each exercise', () => {
        const exercises = [
            // Mock exercise data
            { id: 1, name: 'Curls', muscleGroup: 'Arm', category: 'Pull', weight: 10 },
            { id: 2, name: 'Butterfly', muscleGroup: 'Brust', category: 'Push', weight: 20 },
            { id: 3, name: 'Bench Press', muscleGroup: 'Brust', category: 'Push', weight: 15 },
        ];

        const wrapper = shallowMount(AllExercisesByGroup, {
            data() {
                return { exercises };
            },
        });

        const tableRows = wrapper.findAll('tbody tr');
        expect(tableRows.length).toBe(exercises.length);
    });
});
