import { getAllPosts, getLikeByPostId } from "../dbConfig/postsBAL.js";

export const getAllPostsController = async (req, res) => {
  try {
    return res.send({
      success: true,
      message: "Get all posts successfully",
      data: await getAllPosts(),
    });
  } catch (err) {
    console.log(err);
    return res.send({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const likeCount = async (req, res) => {
  try {
    const { postId } = req.body;
    if (postId) {
      let result = await getLikeByPostId(postId);
      return res.send({
        success: true,
        message: "Post like count",
        result,
      });
    }
  } catch (err) {
    console.log(err);
    return res.send({
      success: false,
      message: "Something went wrong",
    });
  }
};

export const getLikeByUserId = async (req, res) => {
  try {
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "something went wrong",
      err,
    });
  }
};
