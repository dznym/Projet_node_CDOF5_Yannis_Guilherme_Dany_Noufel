import express from 'express';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';


console.log('Application starting...');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

console.log('Attempting to connect to MongoDB...');

mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('Connected To MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`))
  .on('error', (err) => {
    console.error('Failed to start server:', err);
    process.exit(1);
  });

