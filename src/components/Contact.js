import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import me from "../assets/img/interview-removebg-preview.png"
import 'animate.css';
import { Waypoint } from 'react-waypoint';

export const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('about');
    const handleScroll = () => {
      const rect = section.getBoundingClientRect();
      const viewHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
      const isVisible = rect.top <= viewHeight && rect.bottom >= 0;
      setIsVisible(isVisible);
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <section className={`about ${isVisible ? 'visible' : ''}`} id="about">
      <div className="about-img">
        <img src={me} alt="" />
      </div>

      <div className="about-content">
          <h2 className="heading">Searching for experiences</h2>
          <h3>Maybe in your enterprise? xD</h3>
          <p>I'm available to chat at any time, you can call me on Linkedin or even send me an email, <span>eduardoo.js19@gmail.com</span>.</p>
      </div>

    </section>
  );
}