import mongoose from "mongoose";

const numberPlateSchema = new mongoose.Schema({
    regNumber: {
        type: String,
        required: true,
        validate: {
            validator: function (value) {
                return /^[A-Z]{2}\s?\d{1,2}\s?[A-Z]{1,2}\s?\d{4}$/.test(value);
            },
            message: props => `${props.value} is not a valid Indian number plate format!`
        }
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
