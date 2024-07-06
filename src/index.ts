import "reflect-metadata";
import 'dotenv/config';
import express, { Request, Response } from 'express';
import appDataSource from './dataSource/dataSource';
import loggerServiceImpl from './services/logger/logger.impl';
import indexRoutes from "./routes/index.routes";

console.log(process.env.FOURSQUARE_API_KEY)

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/status', (req: Request, res: Response) => {
  res.status(200).send('Hello, i\'m running!');
});

app.use('/api/v1', indexRoutes);

appDataSource.initialize().then(() => {
  loggerServiceImpl.log('Database initialized');
  app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
}).catch((err) => {
  loggerServiceImpl.error(err);
});
