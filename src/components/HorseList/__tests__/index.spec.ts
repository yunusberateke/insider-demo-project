import { describe, expect, it } from "vitest"
import { mount } from '@vue/test-utils'

import HorseList from '../index.vue'
import { createStore } from "vuex";

const defaultState = () => ({
    horses: [
        { name: 'Horse-1', condition: 1, color: 'black' }
    ]
})

describe('HorseList  component unit cases', () => {
    const mockStore = createStore({
        state: defaultState
    });

    it('the title of HorseList table should be correct', () => {
        const title = "Horse List(1-20)"
        const container = mount(HorseList, {
            global: {
                plugins: [mockStore],
            },
        })
        const horseListElement = container.find('.header')
        expect(horseListElement.text()).toBe(title)
    })

    it('renders the first horse name correctly', () => {
        const container = mount(HorseList, {
            global: {
                plugins: [mockStore],
            },
        })
        const nameElement = container.findAll('.name')[1]
        const conditionElement = container.findAll('.condition')[1]
        const colorElement = container.findAll('.color')[1]
        expect(nameElement.text()).toBe("Horse-1")
        expect(conditionElement.text()).toBe("1")
        expect(colorElement.text()).toBe("black")
    })
})