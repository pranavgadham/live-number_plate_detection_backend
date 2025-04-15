import mongoose from "mongoose";

const mongoConnect = async () => {
    await mongoose.connect(process.env.mongoUrl);
    console.log("Connected to MongoDB");
}

export default mongoConnect;