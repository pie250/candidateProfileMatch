const express = require("express");

const {
  addCandidate,
  getCandidates,
} = require("../controllers/candidateController");

const router = express.Router();

router.post("/", addCandidate);

router.get("/", getCandidates);

module.exports = router;