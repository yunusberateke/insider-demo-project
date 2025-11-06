<script setup lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";

import { MUTATION_KEY } from "@store";
import { generatePrograms } from "@utils/generatePrograms";

const store = useStore()
const horses = computed(() => store.state.horses)

const setPrograms = () => {
    const programs = generatePrograms(horses.value)   
    const results = generatePrograms([])
    store.commit(MUTATION_KEY.SetPrograms, programs)
    store.commit(MUTATION_KEY.SetResults, results)
}

</script>
<template>
    <header class="header">
        <h3>Horse Racing</h3>
        <div class="actions">
            <button @click="setPrograms">GENERATE PROGRAM</button>
            <button @click="() => store.commit(MUTATION_KEY.ChangeActiveProgramStatus)
            ">START/PAUSE</button>
        </div>
    </header>
</template>
<style lang="scss" scoped>
.header {
    background-color: pink;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 4px 8px;
    height: 48px;
    border: 1px solid black;

    .actions {
        display: flex;
        align-items: center;
        gap: 4px;

        button {
            padding: 8px 16px;
        }
    }
}
</style>