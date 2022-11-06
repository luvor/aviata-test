export const currencyToSymbol = (currency: string) => {
  switch (currency) {
    case 'USD':
      return '$'
    case 'EUR':
      return '€'
    case 'KZT':
      return '₸'
    default:
      return currency
  }
}
