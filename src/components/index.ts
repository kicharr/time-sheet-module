import TimeSheet from '@/components/TimeSheet.vue'

const useTimeSheet = {
    install: function (app: { component: (a: string, b: unknown) => void }) {
        app.component('TimeSheet', TimeSheet)
    }
}

export { TimeSheet, useTimeSheet }
