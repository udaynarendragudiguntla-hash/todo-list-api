import * as fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const filepath = path.join(__dirname, '../', 'data', 'tasks.json');



// 1.creating task or adding

const addTask = async (req, res) => {
    const { id, title, status } = req.body;
    const newTask = {
        id: id,
        title: title,
        status: status
    }
    try {
        const jsonTasksData = await fs.readFile(filepath, 'utf-8');
        const jsTasksData = JSON.parse(jsonTasksData);
        jsTasksData.push(newTask);

        await fs.writeFile(filepath, JSON.stringify(jsTasksData, null, 2));

        res.status(201).json({
            message: 'task created successfully'
        })
    } catch (error) {
        res.status(404).json({
            message: 'server error'
        })
    }
}


const deleteTask = async (req, res) => {

    try {
        const id = Number(req.params.id);
        const jsonTasksData = await fs.readFile(filepath, 'utf-8');
        const jsTasksData = JSON.parse(jsonTasksData);
        const task = jsTasksData.find(task => task.id === id);

if(!task){
   return res.status(404).json({
      message:'Task not found'
   })
}
        const taskArray = jsTasksData.filter(i => i.id !== id);

        await fs.writeFile(filepath, JSON.stringify(taskArray, null, 2))
        res.status(200).json({
            message: 'Delete successfully'
        })
    } catch (error) {
        res.status(404).json({
            message: 'Task ID does not exist'
        })
    }
}



const updateTask = async (req, res) => {
    const id = Number(req.params.id);
    const { title, status } = req.body;

    try {
        const jsonTasksData = await fs.readFile(filepath, 'utf-8');
        const jsTasksData = JSON.parse(jsonTasksData);
        const task = jsTasksData.find(task => task.id === id);

if(!task){
   return res.status(404).json({
      message:'Task not found'
   })
}
        const updatedTask = {
            id: id,
            title: title,
            status: status
        }
        const updatedArray = jsTasksData.map((task) => {
            if (task.id === id) {
                return updatedTask;
            }
            return task;
        })

await fs.writeFile(filepath,JSON.stringify(updatedArray,null,2));

        res.status(200).json({
            message:'update successfully'
        })

    }catch(error){
        res.status(404).json({
            message:'Task ID not found'
        })
    }
}


const getAllTasks= async(req,res)=>{
    const {status,search} =req.query;
    try{
      const tasks = await fs.readFile(filepath, 'utf-8');
              const jsTasksData = JSON.parse(tasks);
              let filterTasks=jsTasksData;

        if(status){
            filterTasks=jsTasksData.filter((task)=>task.status===status);
        }
        res.status(200).json(filterTasks);
    
    
    
    }catch(error){
        res.status(404).json({
            message:'Not found'
        })
    }
    

}

export { addTask, deleteTask, updateTask,getAllTasks };