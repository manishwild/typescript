//try to avoid any anotation
//any type avoid it as much as u can
const carMakers: string[] = ['ford', 'toyota','chevy']

//const carMakers: string[] = []
//const carMakers = ['ford', 'toyota','chevy']

const dates = [new Date(), new Date()]

//two deminision array
// const carsByMake = [
//   ['f150'],
//   ['corolla'],
//   ['camero']
// ]
const carsByMake: string[][] = []


// Help with inference when extracting values
const car =  carMakers[0]
const myCar = carMakers.pop()

// prevent incompatiible values
carMakers.push(100)


// help with 'map'
carMakers.map((car: string) : string => {
   return car.toUpperCase()
})

// flexible types
//const importantDates = [new Date(),'2030-10-10']
// | it means or
const importantDates: (Date | string)[] = [new Date()]
importantDates.push('2030-10-10')
importantDates.push(new Date)