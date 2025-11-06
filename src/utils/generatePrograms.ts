import { Horse } from "../types";
import { DISTANCES } from "./constants";

export const generatePrograms = (horses: Horse[]) => {
    const programs = Array(6).fill(0).reduce((prev, curr, index) => {
        const program = Array(10).fill(0).reduce((prev, curr, index) => {
            const getRandomHorse = () => {
                const randomIndex = Math.floor(Math.random() * 20);
                let horse: Horse = {
                    name: '',
                    condition: 0,
                    color: ''
                }

                if (horses.length > 0) {
                    horse = horses[randomIndex]
                    const isHorseExists = prev.horses.findIndex((item: Horse) => item.color === horse.color) !== -1;
                    if (isHorseExists) {
                        return getRandomHorse()
                    }
                }

                return horse;
            }
            return { ...prev, horses: [...prev.horses, getRandomHorse()] }
        }, { distance: DISTANCES[index], horses: [], start: false, active: index === 0 })

        return [...prev, program]
    }, [])

    return programs
}