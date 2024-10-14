<script setup lang="ts">
import type { IEmployment, ITimeSheetProps, RangePreview } from '@/components/type'
import { getTimeSheetHeaders, type ITempHeaders } from '@/utils'
import { computed, type UnwrapRef } from 'vue'

const props = withDefaults(
    defineProps<{
        data: ITimeSheetProps
    }>(),
    {
        data: { displayType: 'full' }
    }
)

const sheetHeaders: CompitedRef<UnwrapRef<ITempHeaders[]>> = computed(() => {
    return getTimeSheetHeaders(props.data.dateRange)
})

function isDateInRange(field: ITempHeaders, employment: IEmployment[]): boolean {
    for (let i = 0; i < employment?.length; i++) {
        // const employmentItem: RangePreview = employment[i];
        if (employment?.length === 1) {
            return field?.value.isBetween(
                employment[0]?.temporary_employment[i]?.start,
                employment[0]?.temporary_employment[i]?.end,
                null,
                '[]'
            )
        } else {
            for (let j = 0; j < employment[i]?.temporary_employment?.length; j++) {
                console.log(
                    field?.label,
                    employment[i]?.temporary_employment[j]?.start,
                    employment[i]?.temporary_employment[j]?.end,

                    field?.value?.isBetween(
                        employment[i]?.temporary_employment[j]?.start,
                        employment[i]?.temporary_employment[j]?.end,
                        null,
                        '[]'
                    )
                )
                // return field?.value?.isBetween(
                //     employment[i]?.temporary_employment[j]?.start,
                //     employment[i]?.temporary_employment[j]?.end,
                //     null,
                //     "[]"
                // )
            }
        }

        // console.log(employment[1]?.temporary_employment[i])
    }
}
</script>

<template>
    <table class="sheet">
        <thead class="sheet__head">
            <tr>
                <th v-for="(date, index) in sheetHeaders" :key="index">
                    {{ date?.label }}
                </th>
            </tr>
        </thead>

        <tbody class="sheet__body body">
            <tr v-for="item in data?.rows" :key="item?.id" class="body__row">
                <td
                    v-for="(field, index) in sheetHeaders"
                    :key="index"
                    class="body__item"
                    :class="{
                        'body__item--active': isDateInRange(field, item?.employment)
                    }"
                    @click="console.log(field, item?.id)"
                >

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
        padding: 14px 16px;
        height: 44px;
        border: 1px solid #ddd;
    }

    th {
        text-align: center;
        border: 1px solid #ddd;
    }

    td {
        transition: all 0.1s linear;
        cursor: pointer;
    }
}

.body {
    &__row {
    }

    &__item {
        text-align: center;
        transition: all 0.4s linear;

        &:hover {
            background: rgba(25, 94, 255, 0.3);
            border-left: 2px solid #195eff;
        }

        &--active {
            background: #33b16f;

            &:hover {
                border: 1px solid #ddd;
                background: #33b16f;
            }
        }
    }
}
</style>
