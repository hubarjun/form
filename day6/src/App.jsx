import "./App.css";
import profile from "../src/assets/profile.jpg";
import { useState } from "react";

// ProfileCard Component
function ProfileCard({ name, role, photo }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src={photo} alt={name} />
      </div>
      <div className="card-info">
        <h2>{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
}

// Form Component
function AddMemberForm({ onAdd }) {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [photo, setPhoto] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !role || !photo) return;
    onAdd({ name, role, photo });
    setName("");
    setRole("");
    setPhoto("");
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />
      <input
        type="text"
        placeholder="Enter Photo URL"
        value={photo}
        onChange={(e) => setPhoto(e.target.value)}
      />
      <button type="submit">Add Member</button>
    </form>
  );
}

// Parent Component
export default function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Arun",
      role: "Full Stack Developer",
      photo: profile,
    },
    {
      name: "Sneha",
      role: "UI/UX Designer",
      photo: profile,
    },
    {
      name: "Rahul",
      role: "QA Engineer",
      photo: profile,
    },
    {
      name: "Meera",
      role: "Project Manager",
      photo: profile,
    },
  ]);

  const addMember = (member) => {
    setTeamMembers([...teamMembers, member]);
  };

  return (
    <div className="app">
      <h1 className="title">Our Team</h1>

      {/* Input Form */}
      <AddMemberForm onAdd={addMember} />

      {/* Team Grid */}
      <div className="team-grid">
        {teamMembers.map((member, index) => (
          <ProfileCard
            key={index}
            name={member.name}
            role={member.role}
            photo={member.photo}
          />
        ))}
      </div>
    </div>
  );
}
