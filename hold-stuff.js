const {jerry, sarah} = require("./3-module-var")
const sayHi = require("./4-module-function")
const data = require('./3-module-var')
sayHi(jerry)
sayHi(sarah)

console.log(data)