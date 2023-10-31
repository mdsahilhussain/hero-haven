const mongoose = require('mongoose');

const connectDB = (url: any) => {
    mongoose.set("strictQuery", true);
    mongoose
        .connect(url,{ useNewUrlParser: true, useUnifiedTopology: true })
        .then(() => console.log("MongoDB connected"))
        .catch((err: any) => console.log(err));
};

export default connectDB;
