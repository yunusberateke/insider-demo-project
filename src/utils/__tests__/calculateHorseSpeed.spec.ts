import { describe, expect, it } from "vitest"
import { calculateHorseSpeed } from "../calculateHorseSpeed"

describe('calculateHorseSpeed test cases', () => { 
    it('if the distance value is 1200, the condition value is 0 and the lineElementWidth value is 120, the speed should be 10', ()=>{
        const distance = 1200
        const lineElementWidth = 120
        const condition = 0
        const speed = calculateHorseSpeed(condition, distance, lineElementWidth)
        expect(speed).toBe(10)
    })
 })