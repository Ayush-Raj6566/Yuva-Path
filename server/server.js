const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const path = require('path');
const jobData = JSON.parse(fs.readFileSync(path.join(__dirname, 'jobData.json'), 'utf-8'));


app.post('/get-jobs', (req, res) => {
  const { interest } = req.body;
  const matchedJobs = jobData.filter(job =>
    job.interest.toLowerCase() === interest.toLowerCase()
  );
  res.json(matchedJobs);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
