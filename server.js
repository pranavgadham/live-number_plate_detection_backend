import app from "./index.js";
import mongoConnect from "./src/config/mongoConfig.js";

app.listen(process.env.PORT, async () => {
    console.log(`Server running on port ${process.env.PORT}`);
    await mongoConnect();
});