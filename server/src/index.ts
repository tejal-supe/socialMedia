import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import "dotenv/config";
import { connectToDb } from './connection';
import route from './router/userRouter';

const app = express()
const PORT = 5500;

app.use(cors());
app.use(cookieParser());
app.use(express.json());

connectToDb()
app.get("/", (req: express.Request, res: express.Response) => {
    res.send("Hellooo to new beginnings!!!")
})
app.use('/api/v1',route)


app.listen(PORT,()=>console.log(`Server is running on port ${PORT}!!!!`))
