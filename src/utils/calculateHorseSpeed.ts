//   12s 1200m lineWidth
//   1s 100m lineWidth/100
//   1s+condition lineWidth / Condition
export const calculateHorseSpeed = (condition: number, distance: number, lineElementWidth: number) => {
    const c = distance / 100; 
    const s = lineElementWidth / c;
    
    return Math.round(s*(1+condition/100))
}