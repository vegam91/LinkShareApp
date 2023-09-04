const bcrypt = require("bcrypt");
const User = require("../models/users");

const register = async (req, res) => {
  const { password: plainTextPassword, ...userDetails } = req.body;
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(plainTextPassword, salt);
  const user = await User.create({ ...userDetails, password });

  const token = user.generateJWT();
  res.setHeader("x-auth-token", token);
  res.send("Usuario registrado");
};

const login = async (req, res) => {
  const { password: plainTextPassword, email } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).send("El usuario y contraseña no coincide");

  const isValidUser = await bcrypt.compare(plainTextPassword, user.password);

  if (!isValidUser)
    return res.status(400).send("El usuario o contraseña no coincide");

  const token = user.generateJWT();
  res.setHeader("Access-Control-Expose-Headers", "x-auth-token");

  res.setHeader("x-auth-token", token);
  res.send("Usuario logueado");
};

const updateProfile = async (req, res) => {
  const userId = req.user._id;
  const { password: plainTextPassword, ...updatedDetails } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    if (plainTextPassword) {
      const salt = await bcrypt.genSalt(10);
      const password = await bcrypt.hash(plainTextPassword, salt);
      user.password = password;
    }

    for (const key in updatedDetails) {
      user[key] = updatedDetails[key];
    }

    await user.save();

    const token = user.generateJWT();
    res.setHeader("x-auth-token", token);
    res.send("Perfil de usuario actualizado");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

const getProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).send("Usuario no encontrado");
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

module.exports = {
  register,
  login,
  updateProfile,
  getProfile,
};
