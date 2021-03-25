const profile = {
  name: 'Manish',
  age: 20,
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void {
    this.age = age
  }
}
// when using destructuring in typescript
const { age, name }: {age:number, name:string} = profile
const { coords: { lat,lng } }: { coords: {lat:number, lng: number} } = profile
