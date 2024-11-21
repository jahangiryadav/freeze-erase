const express = require('express')
const cors = require('cors')
const { default: mongoose } = require('mongoose')
const baseRouter = require('./routes/_index')
const app = express()
const cookieParser = require('cookie-parser')
app.use(express.json())
app.use(cors({
    origin:'*',
    credentials:true,
}));


const mongodbUri = 'mongodb+srv://yadavjahangir:e7lukKlqaMBUHtKF@cluster0.j54c4.mongodb.net/'
const mongodbpassword = 'e7lukKlqaMBUHtKF'
const port = 7885
const MongodbConnect = () => {
  try {
    mongoose.connect(mongodbUri, {
      useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log("Mongodb connected:", mongodbUri))
    .catch((err) => console.log(err))
  
  
  } catch(err) {
    console.log(err)
  }
}
MongodbConnect()
app.use('/', baseRouter)
app.get('/test', (req,res) => {
  res.json("The api working perfectly")
})
// START SERVER 
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });