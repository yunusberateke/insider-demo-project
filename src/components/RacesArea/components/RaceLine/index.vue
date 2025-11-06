<script lang="ts" setup>
import { useStore } from 'vuex';
import { computed, onMounted, watch, ref, onUnmounted } from 'vue';

import { calculateHorseSpeed } from '@utils/calculateHorseSpeed'
import { Horse } from '@types';
import { MUTATION_KEY } from '@store';
import HorseImage from '../Horse/index.vue'

const store = useStore()

const { horse } = defineProps<{ horse: Horse }>()
const interVal = ref();
const raceLine = ref<HTMLElement | null>(null)
const left = ref(0)
const activeDistance = computed(() => store.getters.activeDistance)
const activeProgramStart = computed(() => store.getters.activeProgramStart)
const activeResultHorses = computed(() => store.getter?.activeResultHorses);
const lineWidth = computed(() => raceLine.value?.clientWidth || 0)

const raceAction = () => {
    const speed = calculateHorseSpeed(horse?.condition, activeDistance.value, lineWidth.value)
    stopInterval()
    const isFinished = activeResultHorses.value?.findIndex((item: Horse) => item.color === horse.color) === -1;
    if (activeProgramStart.value && !isFinished) {
        interVal.value = setInterval(() => {
            if (left.value + speed + 30 >= lineWidth.value) {
                left.value = lineWidth.value - 30
                store.commit(MUTATION_KEY.AddFinishHorse, horse)
                stopInterval()
                return
            }
            left.value = left.value + speed;
        }, 1000);
    }
}

const stopInterval = () => {
    if (interVal.value) {
        clearInterval(interVal.value)
        interVal.value = undefined
    }
}

watch(() => ({
    start: activeProgramStart.value,
    line: lineWidth.value,
    activeResultHorses: activeResultHorses.value,
}), raceAction);

onMounted(() => {
    if (activeProgramStart.value) {
        raceAction()
    }
})

onUnmounted(() => stopInterval());


</script>
<template>
    <div class="race-line" ref="raceLine" :style="{ '--left': `${left}px`, '--horse-color': horse?.color }">
        <div class="horse" :attr="activeDistance">
            <HorseImage :color="horse?.color" />
        </div>
    </div>
</template>
<style lang="scss" scoped>
.race-line {
    height: 72px;
    border-bottom: 5px dashed black;
    width: 100%;
    flex: 1;
    padding-left: 34px;
    display: flex;
    align-items: center;
    position: relative;
    margin-left: 34px;

    .horse {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: var(--left);
        width: 30px;
        height: 30px;
    }
}
</style>