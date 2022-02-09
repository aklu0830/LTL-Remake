const express = require('express');
const app = express();
const port = 8000;
const routes = require('./server/routes/user.routes')


app.use(express.json());

app.use('/api/users', routes);

app.listen(port, () => console.log(`Listening on port: ${port}`) );