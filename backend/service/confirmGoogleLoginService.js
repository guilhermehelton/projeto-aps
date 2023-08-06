import User from "../models/User.js";

const confirmGoogleLoginService = async (reqBody) => {
  const userExist = await User.findOne({ accountId: reqBody.accountId });

  if (!userExist) {
    const { name, email, accountId } = reqBody;

    const newUser = new User({
      name,
      email,
      accountId,
    });

    newUser.save();

    return newUser;
  }

  return userExist;
};

export default confirmGoogleLoginService;
