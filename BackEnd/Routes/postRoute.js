import Express from "express";
import { getAllPostsController } from "../Controller/PostsController.js";

const router = Express.Router();

router.get("/getallposts", getAllPostsController);

export default router;
