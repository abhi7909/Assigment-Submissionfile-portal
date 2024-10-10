const Assignment = require('../models/Assignment');

// View Assignments Tagged to Admin
const getAssignments = async (req, res) => {
    const assignments = await Assignment.find({ adminId: req.user._id }).populate('userId', 'name');
    res.json(assignments);
};

// Accept Assignment
const acceptAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment || assignment.adminId.toString() !== req.user._id.toString()) {
        return res.status(404).json({ message: 'Assignment not found or unauthorized' });
    }
    assignment.status = 'accepted';
    await assignment.save();
    res.json(assignment);
};

// Reject Assignment
const rejectAssignment = async (req, res) => {
    const assignment = await Assignment.findById(req.params.id);
    if (!assignment || assignment.adminId.toString() !== req.user._id.toString()) {
        return res.status(404).json({ message: 'Assignment not found or unauthorized' });
    }
    assignment.status = 'rejected';
    await assignment.save();
    res.json(assignment);
};

module.exports = { getAssignments, acceptAssignment, rejectAssignment };
