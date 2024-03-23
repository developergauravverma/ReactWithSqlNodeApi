import Express from "express";
import {
  getAllPostsController,
  likeCount,
  getLikeByUserIdC,
} from "../Controller/PostsController.js";

const router = Express.Router();

router.get("/getallposts", getAllPostsController);
router.post("/getLikeByPost", likeCount);
router.post("/getLikeByUserId", getLikeByUserIdC);

export default router;
