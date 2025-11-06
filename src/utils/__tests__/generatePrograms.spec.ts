import { describe, expect, it } from "vitest"
import { generatePrograms } from "../generatePrograms"

describe('generatePrograms test cases', () => {
    it("the programs list length should be 6", () => {
        const programs = generatePrograms([]);
        expect(programs).toHaveLength(6);
    });

    it("the horses of the program length should be 10", () => {
        const programs = generatePrograms([]);
        const program = programs[0]
        expect(program.horses).toHaveLength(10);
    });

    it("the distances should be correct", () => {
        const programs = generatePrograms([]);
        expect(programs[0].distance).toBe(1200);
        expect(programs[1].distance).toBe(1400);
        expect(programs[2].distance).toBe(1600);
        expect(programs[3].distance).toBe(1800);
        expect(programs[4].distance).toBe(2000);
        expect(programs[5].distance).toBe(2200);
    });
})