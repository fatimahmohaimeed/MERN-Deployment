const { Pirate } = require('../models/model');



module.exports.createNew = (request, response) => {
    Pirate.create(request.body)
    .then(newlyCreated => response.json({ player: newlyCreated })) //author postman
    .catch(err => response.status(400).json(err));
}

module.exports.all = (request, response) => {
    // Author.find({}).sort({"name":1})
    Pirate.aggregate([
        {
            "$project": {
                "name": 1,
                "image": 1,
                "insensitive": { "$toLower": "$name" }
            }
        },
        { "$sort": { "insensitive": 1 } }
    ])
        .then(allPirates => response.json(allPirates))
        .catch(err => response.json(err))
}

module.exports.getOne = (request, response) => {
    Pirate.findOne({ _id: request.params.id })
        .then(findOnePirate => response.json(findOnePirate))
        .catch(err => response.json(err))
}

module.exports.delete = (request, response) => {
    Pirate.deleteOne({ _id: request.params.id })
        .then(deletePirate => response.json(deletePirate))
        .catch(err => response.json(err))
}
