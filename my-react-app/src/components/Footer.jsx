export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>© {new Date().getFullYear()} Leo Dean. All rights reserved.</p>
        <p>
          <a href="https://github.com/leodean2" target="_blank" rel="noopener noreferrer">GitHub: leodean2</a>
        </p>
      </div>
    </footer>
  );
}