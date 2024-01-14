const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    mongoose.connect(process.env.DB_CNN);

    console.log("DB ONLINE");
  } catch (error) {
    console.log(error);
    throw new Error("Erro a la hora de inicializar DB");
  }
};

module.exports = {
  dbConnection,
};
