import mongoose from "mongoose";

const connect = async () => {
  try {
    await mongoose.connect("mongodb+srv://hakanarslantepee:TRky3820@cluster0.uc8tfsi.mongodb.net/?retryWrites=true&w=majority");
  } catch (error) {
    throw new Error("Connection failed!");
  }
};

export default connect;
