import numberPlateModel from "./numberPlate.schema.js";

export default class NumberPlateModel {
    createNewEntry = async (regNumber, date, location, image) => {
        try {
            if (!regNumber) {
                throw new Error("Reg number is required");
            } else if (!date) {
                throw new Error("Date is required");
            } else if (!location) {
                throw new Error("Location is required");
            } else if (!image) {
                throw new Error("Image is required");
            } else {
                const newEntry = new numberPlateModel({
                    regNumber: regNumber,
                    date: date,
                    location: location,
                    image: image
                })
                return await newEntry.save();
            }

        } catch (error) {
            console.log(error);
        }
    }

    getAllEntries = async () => {
        try {
            return await numberPlateModel.find({});
        } catch (error) {
            console.log(error);
        }
    }

    getEntryByNumber = async (number) => {
        try {
            if (!number) {
                throw new Error("Number is required");
            } else {
                return await numberPlateModel.find({ regNumber: number });
            }
        } catch (error) {
            console.log(error);
        }
    }

}