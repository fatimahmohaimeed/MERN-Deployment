const mongoose = require('mongoose');

const PirateSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true,"Name is required"],
        minlength: [3, "Name must be at least 3 characters long"]
    },
    image: {
        type: String,
        required: [true,"Image is required"],
        minlength: [3, "Image must be at least 3 characters long"]
    },
    chests: {
        type: Number,
        required: [true,"Chests is required"],
        // minlength: [3, "Name must be at least 3 characters long"]
    },
    phrase: {
        type: String,
        required: [true,"Catch Phrase is required"],
        // minlength: [3, "Name must be at least 3 characters long"]
    },
    position: {
        type: String,
        required: [true,"Crew Position is required"],
        // minlength: [3, "Name must be at least 3 characters long"]
    },
    leg: {
        type: Boolean,
        required: [true, "Yes or No please"]
        // minlength: [3, "Name must be at least 3 characters long"]
    },
    eye: {
        type: Boolean,
        required: [true, "Yes or No please"]
        // minlength: [3, "Name must be at least 3 characters long"]
    },
    hand: {
        type: Boolean,
        required: [true, "Yes or No please"]
        // minlength: [3, "Name must be at least 3 characters long"]
    }
}, { timestamps: true });

module.exports.Pirate = mongoose.model('Pirate', PirateSchema);

