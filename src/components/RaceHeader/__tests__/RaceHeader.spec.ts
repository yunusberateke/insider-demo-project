import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";

import RaceHeader from '../index.vue'
import { createStore } from "vuex";
import { MUTATION_KEY } from "@/store";
import { generatePrograms } from "@/utils/generatePrograms";

const horses = [
    { name: 'Horse-1', condition: 1, color: 'black' }
]
const defaultState = () => ({
    horses,
})

vi.mock('@/utils/generatePrograms', () => ({
    generatePrograms: vi.fn(() => 'programs')
}))

describe("RaceHeader  component unit cases", () => {
    const mockStore = createStore({
        state: defaultState,
        mutations: {
            [MUTATION_KEY.SetPrograms]: vi.fn(),
            [MUTATION_KEY.SetResults]: vi.fn(),
            [MUTATION_KEY.ChangeActiveProgramStatus]: vi.fn()
        }
    });
    mockStore.commit = vi.fn();


    it("When the generate program clicked, the setPrograms and setResults mutation in the store should be called", () => {
        const container = mount(RaceHeader, {
            global: {
                plugins: [mockStore],
            },
        })

        const generateProgramButton = container.findAll('button')[0]
        generateProgramButton.trigger('click')
        expect(generatePrograms).toHaveBeenCalledWith(horses)
        expect(mockStore.commit).toHaveBeenCalledWith(MUTATION_KEY.SetPrograms, 'programs')
        expect(mockStore.commit).toHaveBeenCalledWith(MUTATION_KEY.SetPrograms, 'programs')
    })
     it("When the start/pause button clicked, the changeActiveProgramStatus mutation in the store should be called", () => {
        const container = mount(RaceHeader, {
            global: {
                plugins: [mockStore],
            },
        })

        const generateProgramButton = container.findAll('button')[1]
        generateProgramButton.trigger('click')
        expect(mockStore.commit).toHaveBeenCalledWith(MUTATION_KEY.ChangeActiveProgramStatus)
    })
})