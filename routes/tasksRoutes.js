import express from 'express';
import {addTask,deleteTask,updateTask,getAllTasks} from '../controllers/tasksController.js';
const router = express.Router();
router.get('/',getAllTasks)
router.post('/add',addTask);
router.put('/update/:id',updateTask)
router.delete('/delete/:id',deleteTask)

export default router;