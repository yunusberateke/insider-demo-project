<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

const store = useStore();
const horses = computed(() => store.state.horses);

</script>
<template>
    <div class="horseList">
        <div class="header">
            Horse List(1-20)
        </div>
        <div class="table">
            <div class="row">
                <div class="column name">Name</div>
                <div class="column condition">Condition</div>
                <div class="column color">Color</div>
            </div>
            <div class="row" v-for="horse in horses">
                <div class="column name">{{ horse.name }}</div>
                <div class="column condition">{{ horse.condition }}</div>
                <div class="column color" :style="{'color': horse.color}">{{ horse.color }}</div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.horseList {
    width: 280px;
    background: #fff;
    height: 88vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    .header {
        background-color: yellow;
        padding: 4px 12px;
        font-weight: 600;
        font-size: 24px;
        border: 1px solid black;
    }

    .table {
        overflow: auto;
        height: 100%;

        .row {
            display: flex;
            align-items: center;
            border-bottom: 1px solid black;

            &:first-child {
                font-weight: 600;
                background-color: lightgray;
            }

            .column {
                padding: 4px;
                text-align: center;
                padding: 12px 8px;

                &:not(:last-child) {
                    border-right: 1px solid black;
                }
            }

            .name {
                width: 100px;
            }

            .condition {
                width: 84px;
            }

            .color {
                flex: 1;
            }
        }
    }
}
</style>