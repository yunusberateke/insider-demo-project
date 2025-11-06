export const generateHorses = () => {
    const horses = {
        "red": "Horse 1",
        "blue": "Horse 2",
        "green": "Horse 3",
        "yellow": "Horse 4",
        "orange": "Horse 5",
        "purple": "Horse 6",
        "pink": "Horse 7",
        "brown": "Horse 8",
        "black": "Horse 9",
        "beige": "Horse 10", 
        "gray": "Horse 11",
        "cyan": "Horse 12",
        "magenta": "Horse 13",
        "lime": "Horse 14",
        "navy": "Horse 15",
        "olive": "Horse 16",
        "teal": "Horse 17",
        "maroon": "Horse 18",
        "silver": "Horse 19",
        "gold": "Horse 20"
    };

    const mappingHorses = Object.keys(horses).map(horseColor => ({
        color: horseColor,
        name: horses[horseColor as keyof typeof horses],
        condition: Math.floor(Math.random() * 100) + 1
    }))

    return mappingHorses;
}