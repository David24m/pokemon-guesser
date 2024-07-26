import http from 'http';
import express, { Express } from 'express';
import morgan from 'morgan';
import routes from './routes/index';

const router: Express = express();

router.use(morgan('dev'));

router.use(express.urlencoded({ extended: false }));

router.use(express.json());

router.use((req, res, next) => {

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'GET PATCH DLETE POST PUT')
        return res.status(200).json({});
    };
    next();
});

router.use('/', routes);

router.use((req, res, next) => {
    const error = new Error ('not found');
    console.log('error', error)

    return res.status(404).json ({
        message: error.message
    });
});

const httpServer = http.createServer(router);
const PORT: any = process.env.PORT ?? 3000;
httpServer.listen(PORT, () => console.log(`the server is running on port ${PORT}`));