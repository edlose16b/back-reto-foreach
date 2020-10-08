import dotenv from 'dotenv';
dotenv.config();

import app from "./app/app";



const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`forEach => 127.0.0.1:${PORT}!`));