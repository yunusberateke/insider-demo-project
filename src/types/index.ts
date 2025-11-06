export interface Horse {
    color: string;
    name: string;
    condition: number;
}

export interface Program {
    horses: Horse[],
    distance: number,
    active: boolean;
    start: boolean;
}

export interface HorseStoreState {
    horses: Horse[];
    programs: Program[];
    results: Program[];
}