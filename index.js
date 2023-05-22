/* eslint-disable no-undef */
import express from 'express';
import bodyParser from 'body-parser';
import routes from './routes/routes';

const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
app.use(bodyParser.json({ limit: '50mb' }));

app.use(express.json());

const port = 3000;

// Homepage route
app.get('/', (req, res) => {
  res.send('Welcome to Employee Registry');
});

routes(app);

app.listen(port, () => console.log(`index app listening on port ${port}!`));
