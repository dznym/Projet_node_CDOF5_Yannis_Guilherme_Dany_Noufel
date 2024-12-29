import express from 'express';
import * as mongoose from 'mongoose';
import * as dotenv from 'dotenv';
import todoRoutes from './routes/ToDoRoutes';
import { swaggerUi, swaggerSpec } from './swaggerConfig';

dotenv.config();
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 50000;
app.use(cors());
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/', todoRoutes);

// MongoDB connection
mongoose
  .connect(process.env.MONGODB_URL as string)
  .then(() => console.log('Connected To MongoDB'))
  .catch((err) => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
  });

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
