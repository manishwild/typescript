let apples : number = 5
let speed: string = 'fast'
let hasName: boolean = true

let nothingMuch: null = null
let nothing: undefined = undefined

// built in objects
let now: Date = new Date()

// Array
let colors: string[] = ['red', 'green', 'blue']
let myNumbers: number[] = [1,2,3]
let truths: boolean[] = [true, true, false]

//classes
class Car {

}
let car: Car = new Car()

// object literal
let point: {x: number, y:number} = {
  x:10,
  y:20
}

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log((i))
}


// when to use annotaions
// 1) Function that returns thr 'any' type
const json = '{"x": 10, "y": 20}'
const coordinates: {x: number, y: number} = JSON.parse(json)
// json.parse() it will get back  type any 
console.log(coordinates) // {x: 10, y: 20}

// when we declare a variable on one line and initalize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean //let foundWord = false it is beeter way of declartion
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true
  }
  
}

// 3) variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12]
let numberAboveZero: boolean | number = false
for (let i = 0; i < numbers.length; i++) {
 if (numbers[i] > 0) {
   numberAboveZero = numbers[i]
 } 
}

  
