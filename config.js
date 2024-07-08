import dotenv from 'dotenv';
import mongoose from "mongoose";

dotenv.config();

const config = {
    app_name: process.env['APP_NAME'],
    port: process.env['PORT'] ?? 3000,
    db_uri: process.env['DB-URI'] ?? 'mongodb+srv://Anonymous78890:Anonymous78890@dockertesting.wpf4dgt.mongodb.net/',
    db_options: {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
}

export default config;