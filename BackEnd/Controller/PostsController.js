import {
  getAllPosts,
  getLikeByPostId,
  checkIfLikedByUser,
  createNewLike,
} from "../dbConfig/postsBAL.js";

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
    } else {
      return res.send({
        success: false,
        message: "Post id is null or empty",
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

export const getLikeByUserIdC = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    if (userId && postId) {
      const result = await checkIfLikedByUser(userId, postId);
      return res.send({
        success: true,
        message: "User like by post id",
        result,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "something went wrong",
      err,
    });
  }
};

export const saveLikeOnPost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    if (postId && userId) {
      let newLike = await createNewLike(postId, userId);
      res.send({
        success: true,
        message: "post User Like",
        newLike,
      });
    } else {
      res.send({
        success: false,
        message: "post Id and UserId are required!",
        err,
      });
    }
  } catch (err) {
    console.log(err);
    res.send({
      success: false,
      message: "something went wrong",
      err,
    });
  }
};
