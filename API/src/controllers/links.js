const Link = require("../models/links");
const { isValidUrl } = require("../middlewares/validURL");
const User = require("../models/users");
const { link } = require("../routes/links");

const getLinks = async (req, res) => {
  const userId = req.user._id;
  try {
    const { links } = await User.findById(userId).populate("links");
    res.json(links);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};
const addLink = async (req, res) => {
  // console.log("Request Body:", req.body);
  const userId = req.user._id;
  const { platform, link } = req.body;
  // console.log("Link:", link)
  if (!isValidUrl(link)) {
    return res.status(400).send("El enlace proporcionado no es válido");
  }

  try {
    const newLink = await Link.create({ platform, link });

    await User.findByIdAndUpdate(
      userId,
      { $push: { links: newLink._id } },
      { new: true }
    );
    res.json(newLink);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

const updateLink = async (req, res) => {
  const userId = req.user._id;
  const linkId = req.params.linkId;
  const { platform, link } = req.body;

  if (!isValidUrl(link)) {
    return res.status(400).send("El enlace proporcionado no es válido");
  }

  try {
    const linkToUpdate = await Link.findOne({
      _id: linkId,
    });

    if (!linkToUpdate) {
      return res.status(404).send("Enlace no encontrado");
    }

    linkToUpdate.platform = platform;
    linkToUpdate.link = link;

    await linkToUpdate.save();
    res.json(linkToUpdate);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};

const deleteLink = async (req, res) => {
  const userId = req.user._id;
  const linkId = req.params.linkId;

  try {
    const linkToDelete = await Link.findOneAndDelete({
      _id: linkId,
    });

    await User.findByIdAndUpdate(
      userId,
      { $pull: { links: linkId } },
      { new: true }
    );

    if (!linkToDelete) {
      return res.status(404).send("Enlace no encontrado");
    }

    res.json(linkToDelete);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error en el servidor");
  }
};
module.exports = {
  getLinks,
  addLink,
  updateLink,
  deleteLink,
};
