import mongoose from "mongoose";
import config from "../config/config.js"

mongoose.set("strictQuery", false);
mongoose.connect(config.MONGO_URL, (error) => {
    if (error) {
        console.log("Hubo un error al conectar con base de datos");
    } else {
        console.log("Conectado a la base de datos con éxito");
    }
});