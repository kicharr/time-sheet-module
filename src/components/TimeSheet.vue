<script setup lang="ts">
import type { IEmployment, ITimeSheetProps } from '@/components/type'
import { getTimeSheetHeaders } from '@/utils'
import dayjs from 'dayjs'

const props = withDefaults(
    defineProps<{
        data: ITimeSheetProps
    }>(),
    {
        data: { displayType: 'full' }
    }
)

function isDateInRange(filed: string, employment: IEmployment): boolean {
    const currentFiled = dayjs(filed)

    if (!employment?.temporary_employment) {
        return false
    }

    // return currentFiled.isBetween(
    //     employment.temporary_employment[0].start,
    //     employment.temporary_employment[0].end,
    //     'day',
    //     '[]'
    // )
}
</script>

<template>
    <table class="sheet">
        <thead class="sheet__head">
            <tr>
                <th v-for="(date, index) in getTimeSheetHeaders(data.dateRange)" :key="index">
                    {{ date?.label }}
                </th>
            </tr>
        </thead>

        <tbody class="sheet__body body">
            <tr v-for="item in data?.rows" :key="item?.gid" class="body__row">
                <td
                    class="body__item"
                    v-for="(field, index) in getTimeSheetHeaders(data.dateRange)"
                    :key="index"
                    :class="{
                        'body__item--active': isDateInRange(field?.value, item?.employment[index])
                    }"
                >
                    <!--                    {{ index }}-->
<!--                    {{ field }}<br />-->
                    <!--                    {{ item?.employment }}-->
                </td>
            </tr>
        </tbody>
    </table>
</template>

<style scoped lang="scss">
.sheet {
    width: 100%;
    border-collapse: collapse;

    td,
    th {
        border: 1px solid #ddd;
        padding: 14px 16px;
        height: 44px;
    }

    th {
        text-align: center;
    }

    td {
        transition: all 0.1s linear;
        cursor: pointer;

        &:hover {
            background-color: #ddd;
        }
    }
}

.body {
    &__item {
        &--active {
            background: red;
        }
    }
}
</style>
