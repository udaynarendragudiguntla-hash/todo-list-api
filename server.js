import express from 'express';
import router from './routes/tasksRoutes.js';
const app = express();
app.use(express.json());
app.use('/tasks',router);
app.listen(5000,()=>console.log('server is running on 5000 port'));