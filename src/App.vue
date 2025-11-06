<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import RaceHeader from './components/RaceHeader/index.vue'
import HorseList from './components/HorseList/index.vue'
import ProgramList from './components/ProgramList/index.vue'
import RacesArea from './components/RacesArea/index.vue'

const store = useStore()
const programs = computed(() => store.state.programs || [])
const results = computed(() => store.state.results || [])

</script>

<template>
  <div class="container">
    <RaceHeader />
    <div class="content">
      <HorseList />
      <div class="races-area">
        <RacesArea />
      </div>
      <ProgramList :data="programs" custom-class-name="programs" title="Program" />
      <ProgramList :data="results" title="Sonuçlar" />
    </div>
  </div>

</template>

<style lang="scss" scoped>
.container {
  height: 100vh;

  .content {
    height: calc(100% - 48px);
    display: flex;
    align-items: flex-end;
    position: relative;

    .races-area {
      flex: 1;
    }
  }
}

.programs {
  ::v-deep(.header) {
    background-color: #5555fd;
  }
}
</style>