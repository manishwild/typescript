const drink ={
  color: 'brown',
  carbonated: true,
  sugar: 40
}
//type alias
//if we declare like this we can just use Drink instead of string,boolean and numbers
//tuples
type Drink = [string, boolean, number]

//always put order dont swap orders
//const pepsi = ['brown', true, 40]
//it will always be string first after that boolan and number
//const pepsi: [string, boolean, number] = ['brown', true, 40]
const pepsi: Drink = ['brown', true, 40]
const sprite: Drink = ['clear', true, 40]
const tea: Drink = ['brown', false, 0]


const carSpecs:[number, number] = [400,3354]

const carStats = {
  horsepower: 400,
  weight: 3354
}