import Express, { Request, Response } from 'express';
import { config as dotEnvConfig } from 'dotenv';
import apiRoutes from './routes';
import path from 'path';
dotEnvConfig();

import './config/mongo';
const app = Express();
const PORT = process.env.PORT || 8080;
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(Express.json());
app.use(Express.urlencoded({ extended: true }));
app.use(Express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');

app.use('/api', apiRoutes);

app.get('/', (req: Request, res: Response) => {
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
