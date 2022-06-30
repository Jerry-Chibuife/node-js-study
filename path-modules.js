const os = require('os')

// userInfo
const user = os.userInfo()
console.log(user)

// how long system has been running
console.log(`The system has been up for ${os.uptime()}`)

const path = require('path')

console.log(path.join())

console.log(path.resolve(__dirname, 'content', 'subfolder', 'test.txt'))