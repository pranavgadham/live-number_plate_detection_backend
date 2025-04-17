import mongoose from "mongoose";

const numberPlateSchema = new mongoose.Schema({
    regNumber: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    }
});

const numberPlateModel = mongoose.model('numberPlate', numberPlateSchema);

export default numberPlateModel;
