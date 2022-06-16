import Router from 'express'
import PostController from "./PostController.js";

const router = new Router()

router.get('/posts', PostController.create)
router.get('/posts/:id')
router.put('/posts')
router.delete('/posts/:id')
export default router;