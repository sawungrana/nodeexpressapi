import express from 'express';
import bodyParser from 'body-parser';

import userRoutes from './routes/users.js';

//nganggo devdep nodemon ben praktis nyimpen lgsg keupdate
//sak aplikasine dinyatakan nganggo variabel app ngisor iki
const app = express();
const PORT = 5000;

app.use(bodyParser.json());

//nganggo user route
app.use('/users', userRoutes);

//route pertama, get neng /root
app.get('/', (req, res) => res.send('olla'));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`));