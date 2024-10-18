const express = require('express');
const router = express.Router();
const Project = require('../models/project');

// Route to fetch all projects associated with the guide
router.get('/projects', async (req, res) => {
  try {
    const guideName = req.query.guideName || "Guide Name";  // Fetch this from the request, you can later use JWT or session for actual guide data
    const projects = await Project.find({ guideName });
    
    res.json({ projects });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
});

// Route to submit a new project
router.post('/project', async (req, res) => {
  const { groupId, groupName, groupMembers, projectName, projectTechnologies, guideName, branch, year, semester } = req.body;

  try {
    const newProject = new Project({
      groupId,
      groupName,
      groupMembers,
      projectName,
      projectTechnologies,
      guideName,
      branch,
      year,
      semester,
    });

    const savedProject = await newProject.save();
    res.status(201).json({ project: savedProject });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to create project' });
  }
});

module.exports = router;
