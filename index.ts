import * as _ from 'lodash'

const numberRandom       = _.times(5, () => Math.round(Math.random() * 100))
const numberRandomLodash = _.times(5, () => _.random(100))

console.log(`- timesRandom sem lodash: ${numberRandom}`)
console.log(`- timesRandom com lodash: ${numberRandomLodash}`)

let array  = [ 43, 6, 9, 13, 32 ]
let filter = _.filter(array, n => n < 32)

console.log(`- filter ${array} (n < 32): ${filter}`)

let map = _.map(filter, n => n * 2)

console.log(`- map ${filter} (n * 2): ${map}`)

let name           = 'angelo medeiros'
let nameCapitalize = _.capitalize(name)
let nameCamelcase  = _.camelCase(name)
let nameEnds       = _.endsWith(name, 'ros')

console.log(`- capitalize: ${nameCapitalize}`)
console.log(`- camelcase: ${nameCamelcase}`)
console.log(`- endsWith: ${nameEnds}`)

let collection       = [1, 2, 3, 4, 5]
let reduceCollection = _.reduce(collection, (x, y) => (x + y), 0)

console.log(`- reducer: ${reduceCollection}`)

let obj    = { a: 2, b: 9 ,c: 7, d: 10, e: 11, f: 34 }
let pick   = _.pick(obj, 'c')
let pickBy = _.pickBy(obj, n => n > 8)
let values = _.values(obj)
let omit   = _.omit(obj, ['d', 'a']) // ou _.omit(obj, 'd')
let omitBy = _.omitBy(obj, n => n > 8 ) // ou _.omit(obj, 'd')

console.log(`- pick: ${JSON.stringify(pick)}`)
console.log(`- pickBy: ${JSON.stringify(pickBy)}`)
console.log(`- pickBy: ${values}`) // Obtem os valores do obj em forma de array
console.log(`- omit: ${JSON.stringify(omit)}`) // Omite os valores 'd' e 'a'
console.log(`- omitBy: ${JSON.stringify(omitBy)}`) // Omite os valores maiores que 8