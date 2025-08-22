// studentModel.js
const mongoose = require("mongoose");

// Replace with your MongoDB Atlas URI
const uri = "mongodb+srv://arjunpandi:arjunpandi123@cluster0.m4yexej.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Connect to MongoDB Atlas
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB Atlas"))
.catch(err => console.error("❌ Connection error:", err));

// Schema
const studentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rollNo: { type: Number, required: true, unique: true },
  department: { type: String, required: true },
  marks: { type: Number, required: true },
});

// Model
const Student = mongoose.model("Student", studentSchema);

// CRUD Functions

// Create student
async function createStudent(data) {
  const student = new Student(data);
  await student.save();
  console.log("Student Created:", student);
}

// Read students
async function getStudents() {
  const students = await Student.find();
  console.log("All Students:", students);
}

// Update student
async function updateStudent(rollNo, updateData) {
  const student = await Student.findOneAndUpdate(
    { rollNo },
    updateData,
    { new: true }
  );
  console.log("Updated Student:", student);
}

// Delete student
async function deleteStudent(rollNo) {
  const result = await Student.findOneAndDelete({ rollNo });
  console.log("Deleted Student:", result);
}

// Aggregation - Average Marks per Department
async function getAverageMarks() {
  const result = await Student.aggregate([
    { $group: { _id: "$department", avgMarks: { $avg: "$marks" } } },
  ]);
  console.log("Average Marks per Department:", result);
}

// Example usage
(async () => {
  await createStudent({ name: "Arjun", rollNo: 101, department: "CSE", marks: 85 });
  await createStudent({ name: "Priya", rollNo: 102, department: "ECE", marks: 90 });
  await createStudent({ name: "Kiran", rollNo: 103, department: "CSE", marks: 75 });

  await getStudents();
  await updateStudent(101, { marks: 95 });
  await deleteStudent(103);
  await getAverageMarks();

  mongoose.connection.close();
})();
