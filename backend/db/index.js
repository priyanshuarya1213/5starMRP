const mongoose = require('mongoose');

mongoose
.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Db is connected");
})
.catch((ex) => {
    console.log("Db connection failed: ", ex);
})