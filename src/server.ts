import express from 'express';
import logger from './logger';

const app: express.Application = express();

app.use(express.json());

const PORT = process.env.PORT || 5001;

app.listen(PORT, (): void => {
  logger.info(`Server listening on port ${PORT}`);
});

export default app;
