import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="section hero">
      <div className="container hero-inner">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="hero-content"
        >
          <h1 className="hero-title">Leo Dean</h1>
          <p className="hero-role">Freelance Full Stack Developer</p>
          <p className="hero-tagline">Building responsive and functional web applications with a focus on problem-solving and clean code.</p>
          <div className="hero-actions" style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <a href="#contact" className="btn primary">Contact Me</a>
            <a href="https://github.com/leodean2" className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="hero-image"
        >
          <img src="/images/profile.jpg" alt="Leo Dean" />
        </motion.div>
      </div>
    </section>
  );
}