import { motion } from "framer-motion";

const projects = [
  {
    title: "E-commerce Website",
    description: "MERN full-stack e-commerce platform with payment integration.",
    image: "/images/project1.jpg",
  },
  {
    title: "Blog Platform",
    description: "Responsive blogging platform with authentication and CRUD operations.",
    image: "/images/project2.jpg",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio built with React and Vite, showcasing projects and skills.",
    image: "/images/project3.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2>Projects</h2>
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              className="project-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <img src={p.image} alt={p.title} />
              <div className="project-content">
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}