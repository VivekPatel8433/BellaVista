import User from "../models/reservation.js";

const reserve = async (req, res) => {
    const { name, email, phone, date, time, guests, requests } = req.body

    try {
        const newUser = new User({
            name,
            email,
            phone,
            date,
            time,
            guests,
            requests
        })
            
        await newUser.save();

        res.status(201).json({message: "Reservation Booked"});
    } catch (error) {
        console.error("Booking Error")
        res.status(500).json({message: "Server Error", error})
    }

}

export default reserve;