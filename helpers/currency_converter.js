const getNetWorkData = require('./network_data');

async function currencyConverter(amount, from, to){
  const res = await getNetWorkData(from, to);
  console.log(res);
  let convertedAmount = amount * 1;

  console.log(convertedAmount);
  return convertedAmount;
}
module.exports = currencyConverter;