import { GETvalueByKey, getDataFromDatabase } from "./DAL.js";

export const IsUserMailExists = async (email) => {
  let isExist = false;
  try {
    isExist =
      GETvalueByKey(
        "result",
        await getDataFromDatabase(
          "SP_IsEmailExists",
          { email: email },
          { email: "text" }
        )
      ) === 1
        ? true
        : false;
  } catch (err) {
    console.error("Error executing stored procedure", err);
  }
  return isExist;
};

export const saveUser = async (username, password, email, mobile, address) => {
  let userSave = {};
  try {
    userSave = await getDataFromDatabase(
      "SP_InsertUser",
      {
        UserName: username,
        Password: password,
        Email: email,
        Mobile: mobile,
        Address: address,
      },
      {
        UserName: "text",
        Password: "text",
        Email: "text",
        Mobile: "text",
        Address: "text",
      }
    );
  } catch (err) {
    console.log(err);
  }
  return userSave;
};

export const getAllUser = async (email) => {
  let allUser = null;
  try {
    allUser = await getDataFromDatabase(
      "SP_GetUserByEmail",
      { Email: email },
      { Email: "text" }
    );
  } catch (err) {
    console.log(err);
  }
  return allUser;
};
