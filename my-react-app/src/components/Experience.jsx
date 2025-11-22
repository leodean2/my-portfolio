export default function Experience() {
  const data = [
    {
      role: "Internship",
      company: "Naya Solutions Ltd",
      duration: "Jan 2024 - Apr 2024",
      description: "Worked with senior developers and contributed to real-world software projects. Improved coding, debugging, teamwork, and communication skills.",
    },
    {
      role: "Freelance Full Stack Developer",
      company: "Self-employed",
      duration: "2023 - Present",
      description: "Built responsive web applications, integrated APIs, and managed databases. Delivered maintainable, clean code to clients.",
    },
  ];

  return (
    <section id="experience" className="section">
      <div className="container">
        <h2>Experience</h2>
        <div className="timeline">
          {data.map((item) => (
            <div className="timeline-item" key={item.role + item.company}>
              <div className="timeline-content">
                <h3>{item.role} — {item.company}</h3>
                <span className="muted">{item.duration}</span>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}