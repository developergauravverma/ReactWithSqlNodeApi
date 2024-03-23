import Express from "express";
import {
  getAllPostsController,
  likeCount,
} from "../Controller/PostsController.js";

const router = Express.Router();

router.get("/getallposts", getAllPostsController);
router.post("/getLikeByPost", likeCount);

export default router;
