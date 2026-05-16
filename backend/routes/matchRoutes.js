const express = require("express");

const {
  shortlistCandidates,
  aiShortlist,
} = require("../controllers/matchController");

const router = express.Router();

router.post("/", shortlistCandidates);

router.post("/ai", aiShortlist);

module.exports = router;