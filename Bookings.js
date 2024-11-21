const express = require('express')
const cors = require('cors')
const stripe = require('stripe')('sk_test_51QHJbtE1d9bD85gEi6SLyEdnaOthKsDBvywvXBwSXgaRPe5zCbM73HthswrItAppCaZ5xq6uc2uJwKX0SJ8MT2ID00gR85kjXZ')
const {v4:uuid} = require('uuid')
const BookingModel = require('../model/bookingSchema')

const app = express()
app.use(cors())
const stirpe = 'sk_test_51QHJbtE1d9bD85gEi6SLyEdnaOthKsDBvywvXBwSXgaRPe5zCbM73HthswrItAppCaZ5xq6uc2uJwKX0SJ8MT2ID00gR85kjXZ'

exports.BookNow = async (req, res) => {
    const { serviceType, description, address, contact } = req.body;

    if (!serviceType || !description || !address || !contact) {
        return res.status(400).json("All fields must be filled");
    }

    try {
        const newBooking = await BookingModel.create({
            serviceType,
            description,
            address,
            contact
        });

        if (newBooking) {
            return res.json("Booked Successfully!");
        }

    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

// Get all bookings
exports.getBookings = async (req, res) => {
    try {
        // Use the correct model to find all bookings
        const bookings = await BookingModel.find({});
        return res.json(bookings);
    } catch (err) {
        console.log(err);
        return res.status(500).json({ error: 'Internal server error' });
    }
}

//Payment
exports.Pricing = async (req, res) => {
    try {
        const session = await stripe.checkout.sessions.create({
          payment_method_types: ['card'],
          line_items: [
            {
              price_data: {
                currency: 'usd',
                product_data: {
                  name: 'service', // Replace with your product name
                },
                unit_amount: 5000, // Amount in cents ($20.00)
              },
              quantity: 1,
            },
          ],
          mode: 'payment',
          success_url: 'http://localhost:3000',
          cancel_url: 'http://localhost:3000/pages/cancel', 
            });
        res.json({ id: session.id });
        
      } catch (error) {
        console.error("Error creating checkout session:", error);
        res.status(500).json({ error: error.message });
      }
    }