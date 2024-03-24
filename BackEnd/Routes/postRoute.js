import Express from "express";
import {
  getAllPostsController,
  likeCount,
  getLikeByUserIdC,
  saveLikeOnPost,
} from "../Controller/PostsController.js";

const router = Express.Router();

router.get("/getallposts", getAllPostsController);
router.post("/getLikeByPost", likeCount);
router.post("/getLikeByUserId", getLikeByUserIdC);
router.post("/saveLikeOnPost", saveLikeOnPost);

export default router;
