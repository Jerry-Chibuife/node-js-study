const { readFile, writeFile } = require('fs')

readFile('./content/first.txt', 'utf8', (err, data)=>{
    if(err){
        console.log(err)
        return
    }
    const first = data
    readFile('./content/second.txt', 'utf8', (err, data)=>{
        if(err){
            console.log(err)
            return
        }
        const second = data
        writeFile('./content/aggregate-async.txt', `Here is the content: ${first}, ${second}`,
            (err, data)=>{
                if(err){
                    console.log(err)
                    return
                }
                console.log(data)
            })
    })
})