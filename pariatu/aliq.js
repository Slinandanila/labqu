const currencyFormatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});

const formattedValue = formatValue$1(1000, currencyFormatter.format);
console.log(formattedValue); // "$1,000.00"
