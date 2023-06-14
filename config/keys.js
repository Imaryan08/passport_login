require("dotenv").config();

module.exports = {
  MongoURI: `mongodb+srv://Imaryan08:${process.env.mongopass}@cluster0.fxnvfox.mongodb.net/?retryWrites=true&w=majority`,
};
