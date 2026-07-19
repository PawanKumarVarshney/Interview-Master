require('dotenv').config();
const app =require('./src/app');
connectToDB=require('./src/config/db.js');

connectToDB();


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})

