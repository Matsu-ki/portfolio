import React, { useState, useEffect } from 'react';
import { FaCode } from "react-icons/fa";
import allura from '../assets/img/allura.jpg';
import game from '../assets/img/print-4-1.png';
import database from '../assets/img/Capturar.JPG';
import soon from '../assets/img/istockphoto-1332167985-170667a.jpg';
import app from '../assets/img/app.JPG'
import zenitsu from '../assets/img/zenitsu.png'
import { FaGithub } from 'react-icons/fa';
import { Waypoint } from 'react-waypoint';

export const Projects = () => {

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = document.getElementById('portfolio');
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
    <section className={`portfolio ${isVisible ? 'visible' : ''}`} id="portfolio">
      <h2 className="heading"><span>Projects</span></h2>

      <div className="portfolio-container">
          <div className="portfolio-box">
            <img src={allura}alt=""/>
            <div className="portfolio-layer">
                <h4>Full Stack</h4>
                <p>A project created to manage Virtual Private Machines.</p>
                <a href="https://github.com/Matsu-ki" target='_blank' ><i><FaGithub /></i></a>
            </div>
          </div>

          <div className="portfolio-box">
            <img src={game}alt=""/>
            <div className="portfolio-layer">
                <h4>Unity Game</h4>
                <p>My first game using the engine Unity, all the sprites and art was taken by unity assets store.</p>
                <a href="https://github.com/Matsu-ki/shooter-game" target='_blank' ><i><FaGithub /></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={app}alt=""/>
          <div className="portfolio-layer">
              <h4>React App</h4>
              <p>A simple App for calculate a person's weitght, using React Native and Firebase.</p>
              <a href="https://github.com/Matsu-ki/imc-calculator-app" target='_blank' ><i><FaGithub /></i></a>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={database}alt=""/>
          <div className="portfolio-layer">
              <h4>MySQL</h4>
              <p>One of my jobs as a MySQL administrator, using the phpmyadmin/MySQL Workbench.</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={zenitsu}alt=""/>
          <div className="portfolio-layer">
              <h4>Drawn</h4>
              <p>This's a drawn that I use to make in my spare time.</p>
          </div>
        </div>

        <div className="portfolio-box">
          <img src={soon}alt=""/>
          <div className="portfolio-layer">
              <h4>Coming Soon...</h4>
              <p>Developing an App for Admin Dashboard with React Native, maybe to be open source some day.</p>
          </div>
        </div>
      </div>
      
    </section>
  )
}
