import { getDataFromDatabase } from "./DAL.js";

export const getAllPosts = async () => {
  let posts = null;
  try {
    posts = await getDataFromDatabase("sp_GetPosts", {}, {});
  } catch (ex) {
    console.log(ex);
  }
  return posts;
};

export const getLikeByPostId = async (postId) => {
  let postLikeCount = 0;
  try {
    postLikeCount = await getDataFromDatabase(
      "sp_likeCount",
      { postId: postId },
      { postId: "int" }
    );
  } catch (err) {
    console.log(err);
    return err;
  }
  return postLikeCount;
};

export const checkIfLikedByUser = async (userId, postId) => {
  let isLike = false;
  try {
    const result = await getDataFromDatabase(
      "sp_IsLikeByUserId",
      { userId: userId, postId: postId },
      { userId: "int", postId: "int" }
    );
    return result.isLike;
  } catch (err) {
    console.log(err);
  }
  return isLike;
};
