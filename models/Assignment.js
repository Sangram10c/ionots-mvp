const mongoose = require("mongoose");

const AssignmentSchema = new mongoose.Schema({
    candidateId: { type: String, required: true },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: "Project", required: true },
    status: { type: String, default: "Pending" },
    progress: { type: Number, default: 0 },
    score: { type: Number, default: 0 },
});

module.exports = mongoose.model("Assignment", AssignmentSchema);
