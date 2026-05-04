import connectDB from "./src/db/db.index.js";
import app from "./app.js";

const port = process.env.PORT || 3000;

connectDB()
.then(()=>{
    app.listen(port,(req,res)=>{
        console.log(`App is listening on port: ${port}`);
    })
})
.catch((error)=>{
    console.log("Mongodb connection error:",error);
})