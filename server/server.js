require('dotenv').config();
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Nodemailer Transporter Setup
const transporter = nodemailer.createTransport({
  service: 'gmail', // You can change this if you use another provider
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify Transporter Configuration
transporter.verify((error, success) => {
  if (error) {
    console.error('Error connecting to email service:', error);
  } else {
    console.log('Server is ready to send emails.');
  }
});

// Endpoint to handle booking submissions
app.post('/api/book-appointment', async (req, res) => {
  const { bookingId, fullName, phone, email, selectedTherapyName, selectedDate, selectedTime, notes } = req.body;

  if (!fullName || !phone) {
    return res.status(400).json({ error: 'Name and phone number are required.' });
  }

  try {
    // 1. Email to Clinic Staff
    const mailOptionsClinic = {
      from: process.env.EMAIL_USER,
      to: process.env.CLINIC_EMAIL || process.env.EMAIL_USER, // Send to clinic email
      subject: `New Appointment Request: ${fullName} (${bookingId})`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e8dec8; border-radius: 8px; overflow: hidden;">
          <div style="background-color: #0b2813; padding: 20px; text-align: center;">
            <h2 style="color: #ffd700; margin: 0;">New Appointment Request</h2>
          </div>
          <div style="padding: 20px; background-color: #fbf9f5;">
            <p><strong>Booking ID:</strong> ${bookingId}</p>
            <p><strong>Patient Name:</strong> ${fullName}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email || 'Not provided'}</p>
            <p><strong>Therapy / Service:</strong> ${selectedTherapyName}</p>
            <p><strong>Date & Time:</strong> ${selectedDate} at ${selectedTime}</p>
            <p><strong>Health Concern / Notes:</strong> ${notes || 'General wellness / pain consult'}</p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsClinic);

    // 2. Optional: Confirmation Email to Patient (if email provided)
    if (email) {
      const mailOptionsPatient = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: `Appointment Request Received - Ayush Ayurveda`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e8dec8; border-radius: 8px; overflow: hidden;">
            <div style="background-color: #0b2813; padding: 20px; text-align: center;">
              <h2 style="color: #ffd700; margin: 0;">Namaste, ${fullName}</h2>
            </div>
            <div style="padding: 20px; background-color: #fbf9f5;">
              <p>We have received your appointment request at Ayush Ayurveda Panchakaranam (Kompally).</p>
              <p><strong>Booking ID:</strong> ${bookingId}</p>
              <p><strong>Therapy:</strong> ${selectedTherapyName}</p>
              <p><strong>Requested Slot:</strong> ${selectedDate} at ${selectedTime}</p>
              <br/>
              <p>Our Vaidya or care coordinator will contact you shortly to confirm your consultation slot.</p>
              <p>Thank you for choosing us for your wellness journey.</p>
            </div>
          </div>
        `,
      };
      await transporter.sendMail(mailOptionsPatient);
    }

    res.status(200).json({ message: 'Appointment booked successfully!' });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Failed to send booking notification. Please try again later.' });
  }
});

// Export the app for Vercel serverless function compatibility
if (process.env.NODE_ENV !== 'production' && !process.env.VERCEL) {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

module.exports = app;
