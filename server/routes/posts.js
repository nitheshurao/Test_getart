import express from 'express';
// import mongoose from 'mongoose';

import PostMessage from '../models/PostProduct.js'


import { createPost, getPosts } from '../controller/posts.js'

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
// router.get('/:id', getPost);
// router.patch('/:id', updatePost);
// router.delete('/:id', deletePost);
// router.patch('/:id/likePost', likePost);





export default router;