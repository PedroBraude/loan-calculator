const formatMoney = (
  number: number,
  currency: 'ARS' | 'USD',
  locale: 'es-AR' | 'en-US'
) => {
  return number.toLocaleString(locale, {
    style: 'currency',
    currency: currency,
  });
};

const calculateTotalToPay = (quantity: number, paymentTerm: number) => {
  let total;

  // As the quantity increases, the interest decreases.
  if (quantity < 5000) {
    total = quantity * 1.5;
  } else if (quantity >= 5000 && quantity < 10000) {
    total = quantity * 1.4;
  } else if (quantity >= 10000 && quantity < 15000) {
    total = quantity * 1.3;
  } else {
    total = quantity * 1.2;
  }

  // As the payment term increases, the interest increases.
  if (paymentTerm === 6) {
    total *= 1.1;
  } else if (paymentTerm === 12) {
    total *= 1.2;
  } else {
    total *= 1.3;
  }

  return total;
};

export { formatMoney, calculateTotalToPay };
