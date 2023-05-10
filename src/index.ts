import  express from 'express';
import http from 'http';
import bodyParser from 'body-parser';
import  cookieParser from 'cookie-parser';
import  compression from 'compression';
import cors from 'cors';
import mongoose from 'mongoose';
import router from './router';

const app=express();

app.use(cors({
    credentials:true,
}));

app.use(compression());
app.use(cookieParser());
app.use(bodyParser.json());
app.use('/',router());

const server=http.createServer(app);

server.listen(8080,()=>{
    console.log('server running on http://localhost:8080/')
})

const dbConnect = async ()=>{
    try {
        mongoose.set('strictQuery', false);
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/typescript')
        console.log("Database Connected Sucessfully")
    } catch(error) {
        console.log("Database Error", error);
    }
}
dbConnect();

