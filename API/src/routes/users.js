const express = require("express");

const { body } = require("express-validator");

const UserControllers = require("../controllers/user");

const validate = require("../middlewares/validate");

const isAuth = require("../middlewares/isAuth");

const updatedValidation = [
  body("firstName").notEmpty().withMessage("Can't be empty"),

  body("lastName").notEmpty().withMessage("Can't be empty"),

  body("image").custom((value, { req }) => {
    if (!req.file) {
      return true;
    }

    const allowedFormats = ["image/jpeg", "image/png"];
    if (!allowedFormats.includes(req.file.mimetype)) {
      throw new Error("must be PNG or JPG");
    }

    const { width, height } = req.file;
    if (width > 1024 || height > 1024) {
      throw new Error("La imagen debe ser de máximo 1024x1024px");
    }

    return true;
  }),
];
const userValidationRegister = [
  body("email").notEmpty().withMessage("Can't be empty"),

  body("password")
    .notEmpty()
    .withMessage("Can't be empty")
    .isLength({ min: 8 })
    .withMessage("At leat 8 characters"),

  body("confirmPassword")
    .notEmpty()

    .custom((value, { req }) => {
      if (value !== req.body.password) {
        throw new Error("Las contraseñas no coinciden");
      }

      return true;
    }),
];

const userValidationSchemaByBody = [
  body("email")
    .notEmpty()

    .withMessage("can't be empty"),

  body("password")
    .notEmpty()

    .withMessage("can't be empty"),
];

const router = express.Router();

router.post(
  "/signup",
  userValidationRegister,
  validate,
  UserControllers.register
);

router.post(
  "/signin",
  userValidationSchemaByBody,
  validate,
  UserControllers.login
);

router.put(
  "/profile",
  isAuth,
  updatedValidation,

  validate,
  UserControllers.updateProfile
);

router.get("/profile", isAuth, UserControllers.getProfile);

module.exports = router;
