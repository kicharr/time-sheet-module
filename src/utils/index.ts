import type { RangePreview } from '@/components/type'
import dayjs, { Dayjs } from 'dayjs'

export interface ITempHeaders {
    label: string
    value: Dayjs
}

export function getTimeSheetHeaders({ start, end }: RangePreview): ITempHeaders[] {
    const tempHeaders: RangePreview[] = []
    const startDate: Dayjs = dayjs(start)
    const endDate: Dayjs = dayjs(end)
    let currentDate: Dayjs = startDate

    while (currentDate.isBefore(endDate) || currentDate.isSame(endDate)) {
        tempHeaders.push({
            label: currentDate.format('DD.MM'),
            value: currentDate
        })
        currentDate = currentDate.add(1, 'day')
    }

    return tempHeaders
}
