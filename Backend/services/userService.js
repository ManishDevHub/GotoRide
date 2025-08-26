const userModal = require("../models/userModal");

module.exports.createUser = async ({
  fullname,

  email,
  password,
}) => {
  if (!fullname.firstname || !email || !password) {
    throw new Error("All field are required");
  }
  const user = userModal.create({
    fullname: {
      firstname: fullname.firstname,
      lastname: fullname.lastname,
    },
    email,
    password,
  });
  return user;
};
