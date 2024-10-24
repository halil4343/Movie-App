import mongoose from "mongoose"

const connect = () => {
    mongoose.connect(process.env.DB_URI, {
        dbName : "M-series",
        useNewUrlparser : true,
        useUnifiedTopology : true,
    }).then(()=> {
        console.log("Connected to the database succesfully.")
    }).catch((err) => {
        console.log(`error while connecting to the database ${err}`)
    });
    
}

export default connect;