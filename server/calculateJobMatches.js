// calculateJobMatches.js
const jobData = require('./jobData.json'); // Your job JSON file

// Helper function to convert effort level to numeric score
const effortScoreMap = {
  'Very High': 3,
  'High': 2,
  'Medium': 1,
  'Low': 0,
};

function calculateJobMatches(formData) {
  // Score each job based on formData
  const scoredJobs = jobData.map((job) => {
    let score = 0;

    // Match career goal to domain (simple string contains check)
    if (formData.careerGoal) {
      // Example: if careerGoal includes Government and job domain is Government, score it high
      if (job.domain.toLowerCase().includes(formData.careerGoal.toLowerCase())) {
        score += 30;
      }
    }

    // Match preferred work style to natureOfWork (loosely)
    if (formData.workStyle) {
      if (job.natureOfWork.toLowerCase().includes(formData.workStyle.toLowerCase())) {
        score += 25;
      }
    }

    // Match interest focus to job domain or natureOfWork
    if (formData.interestFocus) {
      const interest = formData.interestFocus.toLowerCase();
      if (
        job.domain.toLowerCase().includes(interest) ||
        job.natureOfWork.toLowerCase().includes(interest)
      ) {
        score += 20;
      }
    }

    // Stability vs risk preference - let's say jobs with very high effort are "riskier"
    if (formData.stabilityOrRisk) {
      const effortScore = effortScoreMap[job.effortLevel] || 0;
      if (formData.stabilityOrRisk === 'Stability' && effortScore <= 1) {
        score += 15;
      } else if (
        formData.stabilityOrRisk === 'Risk-taking/Challenge' &&
        effortScore >= 2
      ) {
        score += 15;
      } else if (formData.stabilityOrRisk === 'Depends on opportunity') {
        score += 10;
      }
    }

    // Entrepreneurial interest - give bonus if domain aligns with entrepreneurship
    if (formData.entrepreneurialInterest) {
      if (
        formData.entrepreneurialInterest === 'Yes' &&
        job.domain.toLowerCase().includes('entrepreneur')
      ) {
        score += 20;
      } else if (formData.entrepreneurialInterest === 'Maybe') {
        score += 10;
      }
    }

    return {
      ...job,
      score,
    };
  });

  // Sort jobs by descending score
  scoredJobs.sort((a, b) => b.score - a.score);

  // Optionally, filter out jobs with zero or very low score (you can adjust threshold)
  return scoredJobs.filter((job) => job.score > 0);
}

module.exports = { calculateJobMatches };
