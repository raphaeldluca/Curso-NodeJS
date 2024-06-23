const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    await mongoose.connect(
      `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cursonodejs.osliqtf.mongodb.net/`
    );

    console.log("Conectado ao DB com sucesso");
  } catch (erro) {
    console.log("Erro conexao DB: ", error);
  }
};

module.exports = connectToDatabase;
