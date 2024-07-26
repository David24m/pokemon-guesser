const logger = require('./logger');
import app from './app';

const port = process.env.PORT || 3000;

const startServer = async () => {
    app.listen(port, () => {
        logger.info(`listening on posrt ${port}`);
    });
};

startServer;