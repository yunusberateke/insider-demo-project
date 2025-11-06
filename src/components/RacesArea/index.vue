<script lang="ts" setup>
import { onMounted } from 'vue';
import { useStore } from 'vuex';

import { MUTATION_KEY } from '@store';

import { generateHorses } from '@utils/generateHorses'
import { generatePrograms } from '@utils/generatePrograms'

import RaceLine from './components/RaceLine/index.vue'

const store = useStore()

onMounted(() => {
    const newHorses = generateHorses();
    const programs = generatePrograms(newHorses)
    store.commit(MUTATION_KEY.SetHorses, newHorses)
    store.commit(MUTATION_KEY.SetPrograms, programs)
})
</script>
<template>
    <div class="races-area">
        <div class="content">
            <div class="race-line-wrapper" v-for="(_, index) in Array(10).fill(0)"
                :key="`${index}_${$store.getters.activeDistance}_${$store.getters.activeProgramHorses?.[index]?.color}`">
                <div class="horse-index">{{ index + 1 }}</div>
                <RaceLine :horse="$store.getters.activeProgramHorses?.[index]" />
            </div>
            <div class="finish-line"></div>
            <div class="distance">{{ `${$store.getters.st}.st Lap
                ${$store.getters.activeDistance}m` }}</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.races-area {
    border-top: 5px dashed black;
    margin: 0 40px 0 20px;
    height: 88vh;

    .content {
        position: relative;

        .finish-line {
            position: absolute;
            right: -3px;
            bottom: 0px;
            top: -44px;
            border: 3px solid red;

            &::before {
                content: "FINISH";
                position: absolute;
                bottom: -40px;
                transform: translate(-50%);
                color: red;
                width: 52px;
                font-weight: 600;
            }
        }

        .distance {
            position: absolute;
            bottom: -20px;
            left: 50%;
            transform: translateX(-50%);
            color: red;
            font-weight: 600;
        }

        .race-line-wrapper {
            display: flex;
            position: relative;

            .horse-index {
                width: 32px;
                left: 0;
                right: 0;
                bottom: 0;
                top: -5px;
                background: green;
                border: 2px solid white;
                display: flex;
                align-items: center;
                justify-content: center;
                position: absolute;
                z-index: 1;
            }
        }
    }
}
</style>