const axios = require("axios");

const getAISuggestions = async (job, candidates) => {
  try {
    const prompt = `
Job Requirements:
Required Skills: ${job.requiredSkills.join(", ")}
Minimum Experience: ${job.minExperience} years

Candidates:
${candidates
  .map(
    (candidate) =>
      `${candidate.name} - Skills: ${candidate.skills.join(
        ", "
      )} - Experience: ${candidate.experience} years`
  )
  .join("\n")}

Rank candidates and explain why they are suitable.
`;

    const response = await axios.post(
      "https://openrouter.ai/api/v1/chat/completions",
      {
        model: "openai/gpt-5.2",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.choices[0].message.content;
  } catch (error) {
    console.log(error.message);

    return "AI recommendation unavailable";
  }
};

module.exports = getAISuggestions;