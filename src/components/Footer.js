import { Container, Row, Col } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa"

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-text">
        <p>Made with ❤️</p>
      </div>

      <div className="footer-iconTop">
        <a href="#home"><i><FaArrowUp/></i></a>
      </div>
    </footer>
  )
}
