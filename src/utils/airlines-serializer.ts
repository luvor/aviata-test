export const normalizeAirlines = (airlines: any) => {
  return Object.entries(airlines).map(([key, value]) => {
    return { key, value }
  },
  )
}
