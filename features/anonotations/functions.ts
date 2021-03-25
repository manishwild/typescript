const add = (a: number, b: number) => {
  return a + b
}

const subtract = (a: number, b: number): number => {
  return a - b
}

function divide(a: number, b: number) : number {
  return a/b
}

const multiply = function(a: number, b: number) : number {
  return a*b
}

const logger = (message: string): void => {
  console.log(message)
}
// using never is like we dont want ot function to return anything ever
const throwError = (message: string): void => {
  if (!message) {
    throw new Error(message)
}
  }
  
const todayWeather = {
  date: new Date(),
  weather: 'Sunny'
}
//typescript destructuring like es2015
const logWeather = ({ date, weather }: { date: Date, weather: string }) : void => {
  console.log(todayWeather.date)
  console.log((todayWeather.weather))
}
// ES2015
// const logWeather = ({  date, weather }) => {
//   console.log(date)
//   console.log(weather)
// }
logWeather(todayWeather)