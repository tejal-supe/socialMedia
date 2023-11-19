import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import "dotenv/config";
import { connectToDb } from './connection';

const app = express()
const PORT = 5500;

app.use(cors());
app.use(cookieParser());
app.use(express.json());
connectToDb()
app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hellooo to new beginnings!!!")
})



app.listen(PORT,()=>console.log(`Server is running on port ${PORT}!!!!`))
