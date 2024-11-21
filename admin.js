const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const userModel = require('../model/admingUserSchema');
const PricingModel = require('../model/pricingSchema');

const app = express();
// app.use(cors({
//     origin:'http://127.0.0.1:3000',
//     credentials:true
// }));

app.use(cors());

// Registration Route
exports.Register = async (req, res) => {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(400).json({ error: 'All fields are required' });
    }
    if(email !== 'jahangirChinalaAdmin@gmail.com') {
        return res.status(401).json({error:'invalid mailid'})
    }
    try {
        const bcryptSalt = bcrypt.genSaltSync(10);
        const hashedPassword = bcrypt.hashSync(password, bcryptSalt);
        
        const newUser = await userModel.create({
            email,
            password: hashedPassword,
            username,
        });
        
        if (newUser) {
            return res.json(newUser);
        } else {
            return res.status(500).json({ error: "Error during registration" });
        }
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Server error" });
    }
};

// Login Route
exports.Login = async (req, res) => {
    const { email, password } = req.body;
    
    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        const admin = await userModel.findOne({ email });
        if (!admin) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const passOK = bcrypt.compareSync(password, admin.password);
        if (!passOK) {
            return res.status(401).json({ error: "Wrong password!" });
        }

        // JWT Token creation
        const accessToken = jwt.sign({ email: admin.email, username:admin.username }, "jwt-access-token", { expiresIn: '5d' });

        return res.json({
            token: accessToken,
            status: true
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Server error" });
    }
};

// Profile Route (Token Authentication)
exports.Profile = async (req, res) => {
    try {
        let token = req.headers.authorization;

        if (!token) {
            return res.status(401).json({ error: "Token not found!" });
        }

        // Extract token from 'Bearer <token>'
        token = token.split(' ')[1];

        // Verify the token
        jwt.verify(token, "jwt-access-token", {}, (err, user) => {
            if (err) {
                return res.status(403).json({ error: "Invalid token" });
            } else {
                // You can fetch more user data if needed (e.g., from DB)
                return res.json(user);
            }
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: "Server error" });
    }
};
exports.Pricing = async (req,res) => {
    const {title,description,price,admin,contact} = req.body;
    if(!title || !description || !price || !contact ) {
        return res.status(401).json("Details must be filled")
    }
    try{

         const PricingData = await PricingModel.create({
            title,
            description,
            price,
            contact,
            createdBy:admin

         })
         if(PricingData) {
            return res.json(PricingData)
         }

    }catch(err) {
        console.log(err)
    }
}
exports.getPricing = async (req,res) => {
   try {
    const getPriceData = await PricingModel.find()
    if(getPriceData) {
        return res.json(getPriceData)
    }
    else {
        return res.json("Error fetching pricing!")
    }
   } catch(err) {
      console.log(err)
      
   }
}
exports.getpricingById = async (req,res) => {
    try {
      const pricingId = req.params.id;
      const PricingData = await PricingModel.findById(pricingId)
      if(!PricingData) {
        return res.status(402).json("Pricing not found")
      }
      return res.json(PricingData)
    }catch(err) {
        console.log(err)
    }
}
exports.Logout = (req,res) => {
    const token = req.headers.authorization.replace('Bearer', '')
    res.json("Loggedout successfully!")
    if(!token) {
      res.json("Token invalid")
    }
}
