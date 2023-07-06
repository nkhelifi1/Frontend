import {shallowMount} from '@vue/test-utils'
import AllExercisesByGroup from "@/components/AllExercisesByGroup.vue";
import fetchMock from 'jest-fetch-mock';

beforeEach(() => {
    fetchMock.resetMocks();
});

beforeAll(() => {
    fetchMock.enableMocks();
});

describe('Exercises', () => {
    const exercises = [
        { id: 1, name: 'Exercise 1', muscleGroup: 'Muscle 1', category: 'pull', weight: 10 },
        { id: 2, name: 'Exercise 2', muscleGroup: 'Muscle 2', category: 'pull', weight: 20 },
    ];

    it('should renders the table', async () => {
        fetchMock.mockResponseOnce(JSON.stringify(exercises));

        const wrapper = shallowMount(AllExercisesByGroup);

        await wrapper.vm.$nextTick();

        const pullTable = wrapper.find('.card table');
        expect(pullTable.exists()).toBe(true);

    })
});
