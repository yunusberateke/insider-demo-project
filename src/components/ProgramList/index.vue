<script setup lang="ts">
import { Program } from '@types';

defineProps<{
    data: Program[],
    customClassName?: string,
    title: string,
}>()

</script>

<template>
    <div :class="['programList', customClassName]">
        <div class="header">
            {{ title }}
        </div>
        <div class="content">
            <div v-for="(program, index) in data" :key="index">
                <div class="program">
                    <div class="subHeader">{{ `${index + 1}ST LAP-${program.distance}m` }}</div>
                    <div class="table">
                        <div class="row">
                            <div class="column position">Position</div>
                            <div class="column name">Name</div>
                        </div>
                        <div class="row" v-for="horse, horseIndex in program.horses">
                            <div class="column position">{{ horseIndex + 1 }}</div>
                            <div class="column name">{{ horse.name }}</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.programList {
    width: 280px;
    background: #fff;
    height: 88vh;
    display: flex;
    flex-direction: column;
    border: 1px solid black;

    .header {
        background-color: green;
        padding: 4px 12px;
        font-weight: 600;
        font-size: 24px;
        border-bottom: 1px solid black;
        text-align: center;
    }

    .content {
        overflow: auto;

        .program {
            .subHeader {
                background-color: pink;
                padding: 4px 0;
                text-align: center;
                border-bottom: 1px solid black;
            }

            .table {
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
                        flex: 1;
                    }

                    .position {
                        width: 84px;
                    }
                }
            }
        }
    }
}
</style>