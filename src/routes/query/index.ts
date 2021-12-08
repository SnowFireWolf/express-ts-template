import {
  Router
} from 'express';
import * as controller from './controller';
const router = Router();



/* GET method
 * index page.
 */
router.get('/', controller.index);

/* GET method
 * search page.
 */
router.get('/search', controller.searchQuery);



export default router;