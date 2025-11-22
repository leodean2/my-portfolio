export default function Skills() {
  const technical = [
    "HTML", "CSS", "JavaScript",
    "React / Next.js",
    "Node.js, Express",
    "MongoDB / MySQL",
    "REST APIs",
    "Git & GitHub",
    "Responsive Web Design",
    "Basic UI/UX",
    "Software debugging & testing",
    "Networking basics",
    "Database management",
    "Windows & Linux",
    "Cybersecurity fundamentals",
  ];

  const soft = [
    "Problem-solving",
    "Communication",
    "Attention to detail",
    "Leadership",
    "Time management",
    "Adaptability",
    "Teamwork",
    "Critical thinking",
    "Fast learner",
    "Client relationship management",
  ];

  const professional = [
    "Project management",
    "Requirements gathering",
    "Agile/Scrum basics",
    "Technical documentation",
    "Remote collaboration",
  ];

  return (
    <section id="skills" className="section">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          <div className="card">
            <h3>Technical</h3>
            <ul>{technical.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="card">
            <h3>Soft Skills</h3>
            <ul>{soft.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className="card">
            <h3>Professional Skills</h3>
            <ul>{professional.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}