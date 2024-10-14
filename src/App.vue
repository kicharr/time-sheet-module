<script setup lang="ts">
import type { ITimeSheetProps } from '@/components/type'
import TimeSheet from '@/components/TimeSheet.vue'

const data: ITimeSheetProps = {
    dateRange: {
        start: 'Wed Oct 09 2024 11:36:51 GMT+0300',
        end: 'Wed Oct 30 2024 11:36:51 GMT+0300',
        step: 'day'
    },
    displayType: 'full',
    rows: [
        {
            id: '456754674567',
            employment: [
                {
                    id: '123789',
                    title: 'ООО ВОЛК',
                    temporary_employment: [
                        {
                            start: 'Wed Oct 09 2024 11:36:51 GMT+0300',
                            end: 'Wed Oct 14 2024 11:36:51 GMT+0300'
                        }
                    ]
                }
            ]
        },
        {
            id: '123456',
            employment: [
                {
                    id: '98876',
                    title: 'ООО ЗАЯЦ',
                    temporary_employment: [
                        {
                            start: 'Wed Oct 14 2024 11:36:51 GMT+0300',
                            end: 'Wed Oct 20 2024 11:36:51 GMT+0300'
                        }
                    ]
                }
            ]
        }
    ]
}
</script>

<template>
    <div>
        <TimeSheet :data="data" />
    </div>
</template>

<style scoped lang="scss"></style>
