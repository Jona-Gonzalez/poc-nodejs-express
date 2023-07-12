import Express, { Request, Response, urlencoded, json } from 'express';
import { config as dotEnvConfig } from 'dotenv';
import apiRoutes from './routes';
import rootRoutes from './routes/root.routes';
import path from 'path';
dotEnvConfig();

import './config/mongo';
const app = Express();
const PORT = process.env.PORT || 8080;
const viewsPath = path.resolve(__dirname, 'views'); // get absolute route folder views
app.set('views', viewsPath);
app.set('view engine', 'ejs');

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(Express.static('public'));

app.use('/', rootRoutes);
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
