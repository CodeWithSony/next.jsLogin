import mongoose from "mongoose";

const connect = async () => {
  if (mongoose.connection.readyState !== 0) return;

  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection established successfully....");
  } catch (error) {
    console.log(error);
    throw new Error("Connection Error...");
  }
};

export default connect;
