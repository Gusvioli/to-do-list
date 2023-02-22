import express from 'express';
import loginRoute from './routes/LoginRoute';
import userRoute from './routes/UserRoute';
import typesRoutes from './routes/TypesRoutes';
import contentsRoutes from './routes/ContentsRoutes';
import 'express-async-errors';
import cors from 'cors';
import HttpErrorMiddleware from './middlewares/HttpErrorMiddleware';
// import swaggerUi from 'swagger-ui-express';/
// import swaggerDocument from '../swagger-output.json';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();
    this.config();

    
    this.app.use('/login', loginRoute);
    this.app.use('/userName', userRoute);
    this.app.use('/types', typesRoutes);
    this.app.use('/contents', contentsRoutes);
    this.app.get('/', (_req, res) => res.json({ ok: true }));
    
    this.app.use(cors());
    this.app.use(HttpErrorMiddleware);
  }

  private config(): void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
  }

  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export default App;
