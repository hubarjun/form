import { useState } from "react";
import "../app.css";

function StudentCard({ name, course, onDelete }) {
  return (
    <div className="student-card">
      <h3>{name}</h3>
      <p>{course}</p>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default function StudentDirectory() {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");

  function addStudent() {
    if (name.trim() && course.trim()) {
      setStudents([...students, { name, course }]);
      setName("");
      setCourse("");
    }
  }

  function deleteStudent(index) {
    setStudents(students.filter((_, i) => i !== index));
  }

  return (
    <div className="student-directory">
      <h2>Student Directory</h2>
      <input
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="Enter Course"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      />
      <button onClick={addStudent}>Add</button>

      <div>
        {students.map((student, index) => (
          <StudentCard
            key={index}
            name={student.name}
            course={student.course}
            onDelete={() => deleteStudent(index)}
          />
        ))}
      </div>
    </div>
  );
}
