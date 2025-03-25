const express = require('express');
const cors = require('cors');
const connectDB = require('./db/connection');
const app = express();
require('dotenv').config();
connectDB();
// CORS configuration
const corsOptions = {
  origin: process.env.CLIENT_URL || 'http://localhost:5177' || 'http://localhost:5173', // Use CLIENT_URL from env or default to localhost for dev
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  allowedHeaders: 'Content-Type, Authorization',
};

console.log(corsOptions, "credetial");

app.use(cors(corsOptions));

app.use(express.json()); 

// Routes
app.use('/api/admins', require('./routes/adminRoutes'));
app.use('/api/patients', require('./routes/patientRoutes'));
app.use('/api/doctors', require('./routes/doctorRoutes'));
app.use('/api/prescriptions', require('./routes/prescriptionRoutes'));
app.use('/api/diseases', require('./routes/diseaseRoutes'));
app.use('/api/billings', require('./routes/billingRoutes'));
app.use('/api/transactions', require('./routes/transactionRoutes'));

// Error handler middleware
const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

// Start the server
const PORT = process.env.PORT || 5001;
app.listen(PORT,'0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
