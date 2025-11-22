import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container grid-2">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <h2>About Me</h2>
          <p>
            I'm a third-year Information Technology student living in Nairobi. As the firstborn of two,
            I've developed leadership, independence, and responsibility. I'm passionate about software
            development, problem-solving, and building digital solutions.
          </p>
          <p>
            I completed an internship at Naya Solutions Ltd, gaining real-world development experience,
            and I'm pursuing a degree in IT to strengthen my technical foundation.
          </p>
          <div className="actions">
            <a href="/resume.pdf" className="btn" download>Download CV</a>
          </div>
        </motion.div>
        <motion.div
          className="about-image"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <img src="/images/profile.jpg" alt="Leo Dean" />
        </motion.div>
      </div>
    </section>
  );
}