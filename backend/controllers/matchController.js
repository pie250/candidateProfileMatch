const Candidate = require("../models/Candidate");

const matchCandidates = require("../utils/matchLogic");

const getAISuggestions = require("../services/openrouterService");

const shortlistCandidates = async (req, res) => {
  try {
    const { requiredSkills, minExperience } = req.body;

    const candidates = await Candidate.find();

    const rankedCandidates = matchCandidates(candidates, {
      requiredSkills,
      minExperience,
    });

    res.json(rankedCandidates);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

const aiShortlist = async (req, res) => {
  try {
    const { requiredSkills, minExperience } = req.body;

    const candidates = await Candidate.find();

    const aiResponse = await getAISuggestions(
      {
        requiredSkills,
        minExperience,
      },
      candidates
    );

    res.json({
      recommendation: aiResponse,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = {
  shortlistCandidates,
  aiShortlist,
};