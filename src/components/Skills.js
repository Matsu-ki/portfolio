import React, { useState, useEffect } from 'react';
import { FaCode, FaUserShield, FaDatabase, FaGithub, FaReact, FaUnity, FaPinterest } from 'react-icons/fa';
import { Waypoint } from 'react-waypoint';

export const Skills = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('services');
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
      <section className={`services ${isVisible ? 'visible' : ''}`} id="services">
        <h2 className="heading"><span>Knowledge</span></h2>
        <div className="services-container">
          <div className="services-box">
            <i><FaCode /></i>
            <h3>Web Development</h3>
            <p>I have been studying web development for a long time, including Front-end, PHP and Mysql.</p>
            <a href="https://github.com/Matsu-ki" target='_blank' className="btn">Github <FaGithub /></a>
          </div>

          <div className="services-box">
            <i><FaDatabase /></i>
            <h3>Database</h3>
            <p>I was present in administering database in projects, using MySQL and MongoDB.</p>
            <a href="https://github.com/Matsu-ki" target='_blank' className="btn">Github <FaGithub /></a>
          </div>

          <div className="services-box">
            <i><FaUserShield /></i>
            <h3>Cybersecurity</h3>
            <p>I worked as a security analyst, analyzing data packets and creating rules/filters for firewalls.</p>
            <a href="https://github.com/Matsu-ki" target='_blank' className="btn">Github <FaGithub /></a>
          </div>

          <div className="services-box">
            <i><FaReact /></i>
            <h3>Apps Development</h3>
            <p>I used React to create apps in college projects, using Firebase as a database.</p>
            <a href="https://github.com/Matsu-ki" target='_blank' className="btn">Github <FaGithub /></a>
          </div>

          <div className="services-box">
            <i><FaUnity /></i>
            <h3>Games Development</h3>
            <p>During the period 2021 - 2023 I have been studying C# for Unity game creation.</p>
            <a href="https://github.com/Matsu-ki" target='_blank' className="btn">Github <FaGithub /></a>
          </div>

          <div className="services-box">
            <i><FaPinterest /></i>
            <h3>Designer</h3>
            <p>In my spare time, I tend to draw and design projects.</p>
            <a href="https://github.com/Matsu-ki" target='_blank' className="btn">Github <FaGithub /></a>
          </div>
        </div>
      </section>
  )
}