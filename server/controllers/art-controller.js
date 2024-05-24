const artModel = require("../model/art-model");

const getAllArt = async (req, res) => {
  try {
    const HusanArt = await artModel.find();

    res.status(200).json({
      message: "succsecc",
      HusanArt,
    });
  } catch (error) {
    res.send(error);
  }
};

const getOnceArt = async (req, res) => {
  try {
    const oneArt = await artModel.findById(req.params.id);

    if (!oneArt) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    return res.status(200).json({
      message: "get one element",
      oneArt,
    });
  } catch (error) {
    res.send(error);
  }
};

const addNewArt = async (req, res) => {
  try {
    const { title, desc, img_url, rating } = req.body;
    const newArt = await artModel.create({
      title,
      desc,
      img_url,
      rating,
    });

    res.status(201).json({
      message: "added",
      newArt,
    });
  } catch (error) {
    res.send(error);
  }
};

const updateArt = async (req, res) => {
  try {
    const updatedArt = await artModel.findByIdAndUpdate(req.params.id, {
      title,
      desc,
      img_url,
      rating,
    });

    res.status(200).json({
      message: "updated",
      updatedArt,
    });
  } catch (error) {
    res.send(error);
  }
};

const deleteArt = async (req, res) => {
  try {
    await artModel.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "deleted",
    });
  } catch (error) {
    res.send(error);
  }
};

module.exports = {
  getAllArt,
  getOnceArt,
  addNewArt,
  updateArt,
  deleteArt,
};
