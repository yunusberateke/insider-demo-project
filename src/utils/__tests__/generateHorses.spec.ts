import { describe, expect, it } from "vitest"
import { generateHorses } from "../generateHorses"

describe('generateHorses test cases', () => {
    it('the generateHorses should return list.', () => {
        const horses = generateHorses()
        expect(horses).toEqual(expect.any(Array))
    })

    it('the generateHorses returns list length should be 20', () => {
        const horses = generateHorses()
        expect(horses).toHaveLength(20)
    })

    it('the item of horses should correct type', () => {
        const horses = generateHorses()
        const horse = horses[0]
        expect(horse).toEqual({
            color: expect.any(String),
            name: expect.any(String),
            condition: expect.any(Number),
        })
    })
})