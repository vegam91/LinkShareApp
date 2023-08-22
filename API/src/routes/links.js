const express = require("express");
const { body } = require("express-validator");
const LinkController = require("../controllers/links");
const isAuth = require("../middlewares/isAuth");
const isValidUrl = require ("../middlewares/validURL")
const router = express.Router();

const validateLinks=[
    body('Link')
    .notEmpty().withMessage("can't be empty")
    .custom((value) => {
      if (!isValidUrl(value)) {
        throw new Error('Please, check the URL');
      }
      return true;
    })
]

router.get("/links", isAuth, LinkController.getLinks);
router.post("", isAuth,LinkController.addLink);
router.put("/:linkId", isAuth,validateLinks, LinkController.updateLink);
router.delete("/:linkId", isAuth, LinkController.deleteLink);


module.exports = router;

