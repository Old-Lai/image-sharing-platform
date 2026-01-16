import express from 'express';
import path from 'path';

import uploadRoutes from './routes/upload.route';
import imageRoutes from './routes/image.route';
import errorMiddleware from './middlewares/error.middleware';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Serve local dev images from /images/<filename>
app.use('/images', express.static(path.join(__dirname, '../temp')));

app.use('/api/upload', uploadRoutes);
app.use('/api/image', imageRoutes);

app.use(errorMiddleware);

export default app;
