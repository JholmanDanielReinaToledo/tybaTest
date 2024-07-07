import "reflect-metadata";
import 'dotenv/config';
import express, { Request, Response } from 'express';
import appDataSource from './dataSource/dataSource';
import loggerServiceImpl from './services/logger/logger.impl';
import indexRoutes from "./routes/index.routes";
import { SERVER_PORT } from "./utils/constants";
import { loggingMiddleware } from "./middlewares/logger";

const app = express();

app.use(express.json());
app.use(loggingMiddleware);

app.get('/status', (_req: Request, res: Response) => {
  res.status(200).send('Hello, i\'m running!');
});

app.use('/api/v1', indexRoutes);

appDataSource.initialize().then(() => {
  loggerServiceImpl.log('Database initialized');
  app.listen(SERVER_PORT, () => {
    console.log(`Server is running on http://localhost:${SERVER_PORT}`);
  });
}).catch((err) => {
  loggerServiceImpl.error(err);
});
