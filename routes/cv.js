const router = require("express").Router();
const Joi = require("joi");

const verify = require("./auth/authVerify");
const Cv = require("../models/Cv");

/**
 * Joi schema for validating user input
 */
const cvValidationSchema = Joi.object({
  testText: Joi.string().min(3).max(255).required(),
});

/**
 * Create a new CV
 */
router.post("/new-cv", verify, async (req, res) => {
  const cv = new Cv({
    testText: req.body.testText,
  });

  try {
    const { error } = await cvValidationSchema.validateAsync(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      const saveCv = await cv.save();
      res.status(200).send(`new CV created, ${saveCv}`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Get a single CV by id
 */
router.get("/get-cv/:id", verify, async (req, res) => {
  const id = req.params.id;

  try {
    const cv = await Cv.findById(id);
    res.status(200).send(cv);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Get all CVs of current user
 */
router.get("/all-cvs", verify, async (req, res) => {
  const currentUser = req.user._id;

  try {
    const allCvs = await Cv.find({ user: currentUser });
    res.status(200).send(allCvs);
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Update a CV by id
 */
router.put("/update-cv/:id", verify, async (req, res) => {
  const id = req.params.id;

  const updatedCvContent = {
    testText: req.body.testText,
  };

  try {
    const { error } = await cvValidationSchema.validateAsync(req.body);

    if (error) {
      res.status(400).send(error.details[0].message);
    } else {
      const updateCv = await Cv.findByIdAndUpdate(id, updatedCvContent);
      res.status(200).send(`CV updated, ${updateCv}`);
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

/**
 * Delete a single CV by id
 */
router.delete("/delete-cv/:id", verify, async (req, res) => {
  const id = req.params.id;

  try {
    const deleteCv = await Cv.findByIdAndDelete(id);
    res.status(200).send(`CV deleted, ${deleteCv}`);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
