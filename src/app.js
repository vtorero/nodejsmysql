import express from 'express';
import employeesRoute from './routes/employees.routes.js';
import indexRouter from './routes/index.routes.js';


const app = express();

app.use(express.json());
app.use('/api/',indexRouter)
app.use('/api/',employeesRoute);

app.use((req,res,next)=>{
    res.status(404).json({
        message:'Endpoint not found'
    })
})

export default app;