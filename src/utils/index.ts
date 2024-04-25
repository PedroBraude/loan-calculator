function formatMoney(
  number: number,
  currency: 'ARS' | 'USD',
  locale: 'es-AR' | 'en-US'
) {
  return number.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  })
}

export { formatMoney }
