import { useDateFormat } from '@vueuse/core'

export const dayMonthWeekday = (date: Date) => {
  return useDateFormat(date, 'DD MMM, ddd', { locales: 'ru-RU' }).value.replace('.', '')
}

export const secondsToTime = (seconds: number) => {
  const hours = Math.floor(seconds / 3600)
  const minutes = Math.floor((seconds - hours * 3600) / 60)
  // const secs = seconds - hours * 3600 - minutes * 60

  return `${hours} ч ${minutes} м`
}
