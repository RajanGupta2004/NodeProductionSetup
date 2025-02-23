import express, { Application } from 'express'
import path from 'path';
import router from './router/apiRoutes';


const app:Application = express();

// middleware

app.use(express.json())
app.use(express.static(path.join(__dirname , "../" , "public")))
app.use("/api/v1/" , router)

export default app
