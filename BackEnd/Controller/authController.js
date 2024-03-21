import { IsUserMailExists, saveUser, getAllUser } from "../dbConfig/authBAL.js";

export const registerController = async (req, res) => {
  try {
    const { UserName, Password, Email, Mobile, Address } = req.body;
    if (!UserName) return res.send({ message: "Name is Required" });
    else if (!Password) return res.send({ message: "Password is Required" });
    else if (!Email) return res.send({ message: "Email is Required" });
    else if (!Mobile) return res.send({ message: "Mobile is Required" });
    else if (!Address) return res.send({ message: "Address is Required" });

    if (await IsUserMailExists(Email)) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }

    const user = await saveUser(UserName, Password, Email, Mobile, Address);

    return res.status(201).send({
      success: true,
      message: "User is saved Successfully",
      user,
    });
  } catch (err) {
    return res.json({
      success: false,
      message: "Error in register Controller",
      err,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email) {
      return res.send({
        message: "Email is Required",
      });
    } else if (!password) {
      return res.send({
        message: "Password is Required",
      });
    }

    const allUser = await getAllUser(email);

    if (!allUser) {
      return res.send({
        success: false,
        message: "Email is not Register",
      });
    }

    if (allUser.Password !== password) {
      return res.send({
        success: false,
        message: "Wrong Password",
      });
    } else {
      return res.status(200).send({
        success: true,
        message: "login Successfully",
        allUser,
      });
    }
  } catch (err) {
    return res.send({
      success: false,
      message: "Error in Login Controller",
      err,
    });
  }
};
