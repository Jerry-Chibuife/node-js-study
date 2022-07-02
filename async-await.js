// const http = require('http')
//
// const server = http.createServer((req, res)=>{
//     if(req.url === '/') {
//         res.end('Home Page')
//     }
//     else if(req.url === '/about') {
//         res.end('About Page')
//     }
//     else if(req.url === '/contact') {
//         res.end('Contact Us Page')
//     }
//     else res.end(`
//        <h1>Oops!</h1>
//        <p>We can't find the resource you are looking for</p>
//        <a href="/">Back to Home Page</a> `)
//
// })
//
// server.listen(5000, ()=>{
//     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
//     console.log('Server is listening on port 5000')
//     console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>')
// })


const {readFile, writeFile} = require('fs').promises
// const util = require('util')
// const readFilePromise = util.promisify(readFile)
// const writeFilePromise = util.promisify(writeFile)


const start = async () => {
    try {
        // const first = await readFilePromise('./content/first.txt', 'utf8')
        // const second = await readFilePromise('./content/second.txt', 'utf8')
        // await writeFilePromise('./content/stuff.txt', `This is pretty awesome: ${first} ${second}`)
        const first = await readFile('./content/first.txt', 'utf8')
        const second = await readFile('./content/second.txt', 'utf8')
        await writeFile('./content/stuff.txt', `This is pretty awesome: ${first} ${second}`, {flag: "a"})
        console.log(first, second)
    } catch (e) {
        console.log(e)
    }
}

start()


// const getText = (path)=>{
//     return new Promise((resolve, reject)=>{
//         readFile(path, 'utf8', (err, data)=>{
//             if(err){
//                 reject(err);
//             }
//             else {
//                 resolve(data)
//             }
//         })
//     })
// }

// getText('./content/first.txt')
// .then(result => console.log(result))
// .catch(err => console.log(err))
// .finally(()=> console.log("Done"))

