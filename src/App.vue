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
            gid: '123123123',
            employment: [
                {
                    company_id: '123789',
                    company_name: 'ОАО ЗАЯЦ',
                    temporary_employment: [
                        {
                            start: 'Wed Oct 09 2024 11:36:51 GMT+0300',
                            end: 'Wed Oct 13 2024 11:36:51 GMT+0300'
                        },
                        {
                            start: 'Wed Oct 10 2024 11:36:51 GMT+0300',
                            end: 'Wed Oct 22 2024 11:36:51 GMT+0300'
                        }
                    ]
                }
            ]
        },
        {
            gid: '456754674567',
            employment: [
                {
                    company_id: '123789',
                    company_name: 'ООО ВОЛК',
                    temporary_employment: [
                        {
                            start: 'Wed Oct 20 2024 11:36:51 GMT+0300',
                            end: 'Wed Oct 25 2024 11:36:51 GMT+0300'
                        },
                        {
                            start: 'Wed Oct 15 2024 11:36:51 GMT+0300',
                            end: 'Wed Oct 29 2024 11:36:51 GMT+0300'
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
