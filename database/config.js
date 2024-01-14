const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      tls: true, // Agregar esta línea
    });

    console.log("DB ONLINE");
  } catch (error) {
    console.log(error);
    throw new Error("Erro a la hora de inicializar DB");
  }
};

module.exports = {
  dbConnection,
};
