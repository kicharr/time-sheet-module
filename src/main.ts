import { createApp } from 'vue'
import App from './App.vue'

import dayjs from 'dayjs'
import locale from 'dayjs/locale/ru'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import isBetween from 'dayjs/plugin/isBetween'

import '@/styles/reset.css'
import '@/styles/_main.scss'

const app = createApp(App)

app.use(dayjs)
dayjs.locale(locale)
dayjs.extend(isSameOrAfter)
dayjs.extend(isSameOrBefore)
dayjs.extend(isBetween)

app.mount('#app')
