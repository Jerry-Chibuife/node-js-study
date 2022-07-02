let {people} = require("../data");


const getPeople = (req, res) => {
    return res.status(200).json({success: true, data: people})
}

const createPerson = (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:"please input a value"})
    }
    res.status(201).json({success:true, person:name})
}

const createPersonPostman = (req, res) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({success:false, msg:"please input a value"})
    }
    res.status(201).json({success:true, data:[...people, name]})
}

const updatePerson = (req, res) => {
    const {id} = req.params
    const {name} = req.body
    const person = people.find(person => person.id === Number(id))

    if(!person){
        return res.status(404).json({success:false, msg:"not found"})
    }
    const newPeople = people.map(person => {
        if(person.id === Number(id))
            person.name = name
        return person
    })
    res.status(200).json({success:true, data:newPeople})
}


module.exports = {
    getPeople,
    createPerson,
    createPersonPostman,
    updatePerson
}