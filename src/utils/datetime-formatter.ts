import { useDateFormat } from '@vueuse/core'

export const dayMonthWeekday = (date: Date) => {
  return useDateFormat(date, 'DD MMM, ddd', { locales: 'ru-RU' }).value.replace('.', '')
}
