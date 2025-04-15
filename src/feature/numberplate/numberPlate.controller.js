import NumberPlateModel from "./numberPlate.model.js";
import path from 'path';


const model = new NumberPlateModel();

export default class NumberPlateController {
    createNewEntry = async (req, res) => {
        try {
            const { regNumber, date, location } = req.body;
            if (!req.file) {
                return res.status(400).send({ success: false, message: "Image is required" });
            } else if (!regNumber) {
                return res.status(400).send({ success: false, message: "License Plate Number is required" });
            } else if (!date) {
                return res.status(400).send({ success: false, message: "Date is required" });
            } else if (!location) {
                return res.status(400).send({ success: false, message: "Location is required" });
            } else {
                const file = req.file.filename;
                const newEntry = await model.createNewEntry(regNumber, date, location, file);
                if (!newEntry) {
                    return res.status(400).send({ success: false, message: "Could not create new entry" });
                }
                res.status(200).send({ success: true, message: "New entry created successfully", data: newEntry });
            }
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }

    getAllEntries = async (req, res) => {
        try {
            const entries = await model.getAllEntries();
            if (!entries) {
                return res.status(400).send({ success: false, message: "Could not get entries" });
            }
            res.status(200).send({ success: true, message: "Entries retrieved successfully", data: entries });
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }

    getEntryByNumber = async (req, res) => {
        try {
            const number = req.params.number;
            if (!number) {
                return res.status(400).send({ success: false, message: "License Plate Number is required" });
            } else {
                const entry = await model.getEntryByNumber(number);
                if (!entry) {
                    return res.status(400).send({ success: false, message: "License Plate Number not found" });
                }
                res.status(200).send({ success: true, message: "Entry retrieved successfully", data: entry });
            }

        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }

    getImage = async (req, res) => {
        try {
            const filename = req.params.filename;
            if (!filename) {
                return res.status(400).send({ success: false, message: "Filename is required" });
            } else {
                const filePath = path.resolve('public/numberplate', filename);
                res.status(200).sendFile(filePath);
            }
        } catch (error) {
            res.status(500).send({ success: false, message: error.message });
        }
    }
}