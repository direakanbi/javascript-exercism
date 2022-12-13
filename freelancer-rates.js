

const HOURLY_RATE = 8

//Task 1
export function dayRate(ratePerHour){
  return ratePerHour * HOURLY_RATE
}

//Task 2
export function daysInBudget(budget, days){
  const rate = dayRate(days)
  return Math.floor(budget / rate)
}

//Task 3
export function priceWithMonthlyDiscount(ratePerHour, days , discount){
  const fullMonths = Math.floor(days / 22)
  const remainingDays = days % 22
  const fullMonthPrice = fullMonths * 22 * dayRate(ratePerHour)
  return Math.ceil(fullMonthPrice - discount * fullMonthPrice + remainingDays * dayRate(ratePerHour))
  
}
