import { Hono } from 'hono'
import { userRouter } from './router/userRouter';
import {  bookRouter } from './router/blogRouter';

export const app = new Hono<{
  Bindings: {
      DATABASE_URL: string;
      JWT_SECRET: string;
  }
}>();

app.route('/api/v1/user', userRouter)
app.route('/api/v1/book', bookRouter)

export default app