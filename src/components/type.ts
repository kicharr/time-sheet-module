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

// Исключаем шаг
export type RangePreview = Omit<IDateRange, 'step'>

export interface IRowsData {
    gid: string
    employment: IEmployment[]
}

export interface IEmployment {
    company_id: string | number
    company_name: string
    temporary_employment: RangePreview[]
}
