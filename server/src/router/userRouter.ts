import { loginIn, signIn } from '../controller/userController';
import express from 'express';

// route.get('/login', login)
const route = express.Router()
// // Middleware function: isAuthenticated
// // This will be applied to all routes defined after this point
// route.use(isAuthenticated);
route.post('/addUser',signIn)
// // Routes that will automatically check the middleware
// route.get('/products', fetchAllProducts);
// route.get('/product/:id', getProductById);
route.post('/login', loginIn);

export default route

