//we have to always declare variable with capital latter
interface Vehicle {
  name: string
  year: number
  broken: boolean
  summary(): string
}

interface Repotable {
  summary(): string
}

const oldCivic = {
  name:'civic',
  year: 2000,
  broken: true,
  summary(): string {
    return `Name: ${this.name}`
  }
}

// const printVehicale = (vehicle: {name: string, year: number,broken: boolean}): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken: ${vehicle.broken}`)
// }
// it is same like on top
// const printVehicale = (vehicle: Vehicle): void => {
//   console.log(`Name: ${vehicle.name}`)
//   console.log(`Year: ${vehicle.year}`)
//   console.log(`Broken: ${vehicle.broken}`)
// }
// same thing we dont write all
// const printVehicale = (vehicle: Vehicle): void => {
//  console.log(vehicle.summary())
// }
const printSummery = (item: Repotable): void => {
  console.log(item.summary())
 }
 
//printVehicale(oldCivic)
printSummery(oldCivic)