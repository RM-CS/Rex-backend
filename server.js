require("dotenv").config();
const express = require("express")
const cors = require('cors')
const port = process.env.PORT

const app = express();
const authRoute = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const enquiryRoute = require("./router/enquiry-router")
const connectDb=require("./utils/db")


app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/businessform", enquiryRoute)

connectDb().then(() => {
    app.listen(port, ()=>{
        console.log(`Server is running...`);
    })

})