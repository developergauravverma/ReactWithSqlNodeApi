import { getAllPosts } from "../dbConfig/postsBAL.js";

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
