const { Router } = require("express");
const artModel = require("../model/art-model");
const {
  getAllArt,
  getOnceArt,
  addNewArt,
  updateArt,
  deleteArt,
} = require("../controllers/art-controller");
const router = Router();

router.get("/", getAllArt);

router.get("/:id", getOnceArt);

router.post("/addNewArt", addNewArt);

router.put("/:id", updateArt);

router.delete("/:id", deleteArt);

module.exports = router;
