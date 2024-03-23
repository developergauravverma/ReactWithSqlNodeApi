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
