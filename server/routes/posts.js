// import  express from "express";
// import {getFeedPosts,getUserPosts,likePost} from "../controllers/posts.js";
//  import {verifytoken} from "../middleware/auth.js";


//  const router=express.Router();

//  /*READ*/
//  router.get("/",verifytoken,getFeedPosts);
// router.get("/:userId/posts",verifytoken,getUserPosts);


//  /*UPDATE*/
// router.patch("/:id/like",verifytoken,likePost);

// // export default router;

import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);

/* UPDATE */
router.patch("/:id/like", verifyToken, likePost);

export default router;