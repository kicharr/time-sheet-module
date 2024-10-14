// Интерфейс описывающий пропсы, которые принимает компонент таблицы
export interface ITimeSheetProps {
    dateRange: IDateRange
    displayType: keyof typeof SheetDisplayType
    rows: IRowsData[]
}

export enum SheetDisplayType {
    small = small,
    medium = medium,
    full = full
}

export interface IDateRange {
    start: Date
    end: Date
    step: string
}

export interface IEmployment {
    id: string | number
    title: string
    temporary_employment: RangePreview[]
}

export interface IRowsData {
    id: string
    employment: IEmployment[]
}

// Исключаем шаг
export type RangePreview = Omit<IDateRange, 'step'>