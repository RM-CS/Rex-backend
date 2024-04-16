require("dotenv").config();
const express = require("express")
const cors = require('cors')
const port = process.env.PORT

const app = express();
const authRoute = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const enquiryRoute = require("./router/enquiry-router")
const connectDb=require("./utils/db")
const path=require("path")


app.use(cors());

app.use(express.json());

app.use("/api/auth", authRoute)
app.use("/api/form", contactRoute)
app.use("/api/businessform", enquiryRoute)

// ------------------------------

const ___dirname1 = path.resolve();
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(___dirname1,"/frontend/build")))
    app.get('*', (req, res) =>{
        res.sendFile(path.resolve(___dirname1,"frontend","build","index.html"))
    })
} else {

    app.get("/", (req, res) =>{
        res.send("API running sucessfully")
    })
}

// ------------------------------

connectDb().then(() => {
    app.listen(port, ()=>{
        console.log(`Server is running...`);
    })

})