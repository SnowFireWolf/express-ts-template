import app from './app';
import logger from './lib/logger';
import * as middleware from './middleware/index';



// 404 not found
app.use(middleware.notFoundMiddleware);

// catch 500 error
app.use(middleware.internalErrorMiddleware);



const server = app.listen(app.get('port'), async () => {

  logger.info(`App is running at http://localhost:${app.get('port')} in ${app.get('env')} mode`);

  logger.info('Press CTRL-C to stop\n');
});



export default server;