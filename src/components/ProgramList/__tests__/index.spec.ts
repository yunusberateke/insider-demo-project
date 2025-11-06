import { mount } from "@vue/test-utils"
import { describe, expect, it } from "vitest"

import ProgramList from '../index.vue'

describe('HorseList  component unit cases', () => {
    it("customClassName should be added", () => {
        const programListElement = mount(ProgramList, {
            props: {
                data: [],
                customClassName: 'customClassName',
                title: 'title'
            }
        })
        const container = programListElement.find('.programList')
        expect(container.classes()).toContain('customClassName')
    })

    it("the title should be added", () => {
        const programListElement = mount(ProgramList, {
            props: {
                data: [],
                customClassName: 'customClassName',
                title: 'title'
            }
        })
        const container = programListElement.find('.programList')
        expect(container.text()).toContain('title')
    })

    it("the horse name should displayed correctly", () => {
        const programListElement = mount(ProgramList, {
            props: {
                data: [
                    {
                        distance: 1000,
                        horses: [
                            {
                                name: 'Horse name',
                            }
                        ]
                    }
                ],
                customClassName: 'customClassName',
                title: 'title'
            }
        })
        const container = programListElement.findAll('.name')[1]
        expect(container.text()).toContain('Horse name')
    })

    it("the subHeader should displayed correctly", () => {
        const programListElement = mount(ProgramList, {
            props: {
                data: [
                    {
                        distance: 1000,
                        horses: [
                            {
                                name: 'Horse name',
                            }
                        ]
                    }
                ],
                customClassName: 'customClassName',
                title: 'title'
            }
        })
        const container = programListElement.findAll('.subHeader')[0]
        expect(container.text()).toContain('1ST LAP-1000m')
    })
})