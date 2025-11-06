import type { Horse, HorseStoreState, Program } from "../types";
import { createStore, Store } from "vuex";
import { generatePrograms } from "../utils/generatePrograms";
import { DISTANCES } from "../utils/constants";

export const MUTATION_KEY = {
  SetHorses: "setHorses",
  SetPrograms: "setPrograms",
  AddResult: "addResult",
  StartProgram: "startProgram",
  AddFinishHorse: "addFinishHorse",
  PassNextProgram: "passNextProgram",
  ChangeActiveProgramStatus: "ChangeActiveProgramStatus",
  SetResults: "setResults",
};

export const store = createStore<HorseStoreState>({
  state(): HorseStoreState {
    return {
      horses: [],
      programs: [],
      results: generatePrograms([]),
    };
  },

  mutations: {
    [MUTATION_KEY.SetHorses](state: HorseStoreState, horses: Horse[]) {
      state.horses = horses;
    },

    [MUTATION_KEY.SetPrograms](state: HorseStoreState, programs: Program[]) {
      state.programs = programs;
    },

    [MUTATION_KEY.SetResults](state: HorseStoreState, results: Program[]) {
      state.results = results;
    },

    [MUTATION_KEY.ChangeActiveProgramStatus](state: HorseStoreState) {
      const activeProgram = state.programs.find((item) => item.active);
      if (!activeProgram) return;
      activeProgram.start = !activeProgram.start;
    },

    [MUTATION_KEY.AddFinishHorse](state: HorseStoreState, horse: Horse) {
      if (state.programs?.length === 0) return;

      const activeProgram = state.programs.find((item) => item.active);
      const result = state.results.find(
        (item) => item.distance === activeProgram?.distance
      );
      if (!horse || !result) return;

      const emptyResultIndex = result.horses.findIndex((item) => !item.color);
      result.horses[emptyResultIndex] = horse;

      //is it last horse in the racing
      if (emptyResultIndex === 9) {
        const activeProgramIndex = state.programs.findIndex((item) => item.active);
        state.programs[activeProgramIndex].active = activeProgramIndex === 5;
        state.programs[activeProgramIndex].start = false;

        //is it last program
        if (activeProgramIndex !== 5) {
          state.programs[activeProgramIndex + 1].active = true;
          state.programs[activeProgramIndex + 1].start = true;
        }
      }
    },
  },

  getters: {
    activeProgram(state: HorseStoreState): Program | undefined {
      return state.programs.find((item) => item.active);
    },

    activeProgramHorses(
      state: HorseStoreState,
      getters: { activeProgram?: Program }
    ): Horse[] {
      return getters.activeProgram?.horses || [];
    },

    st(
      state: HorseStoreState,
      getters: { activeDistance: number }
    ): number {
      return DISTANCES.findIndex((item) => item === getters.activeDistance) + 1;
    },

    activeDistance(
      state: HorseStoreState,
      getters: { activeProgram?: Program }
    ): number {
      return getters.activeProgram?.distance || 0;
    },

    activeProgramStart(
      state: HorseStoreState,
      getters: { activeProgram?: Program }
    ): boolean | undefined {
      return getters.activeProgram?.start;
    },

    activeProgramIndex(state: HorseStoreState): number {
      return state.programs.findIndex((item) => item.active);
    },

    activeResultHorses(
      state: HorseStoreState,
      getters: { activeProgramIndex: number }
    ): Horse[] {
      return state.results?.[getters.activeProgramIndex || 0].horses || [];
    },
  },
});

export type StoreType = Store<HorseStoreState>;
