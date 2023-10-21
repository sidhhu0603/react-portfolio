import React from 'react';
import './App.css';
import 'boxicons/css/boxicons.min.css';

function Home() {

    
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hi, I'm Siddhant Bhoi</h1>
        <h3>Information Technology Student</h3>
        <p>
          Highly motivated and enthusiastic IT fresher with a strong academic background in computer science and a passion for technology. 
          Equipped with solid problem-solving skills and a keen eye for detail, I am eager to contribute to a dynamic organization and gain practical experience in the IT industry.
          Possessing a solid foundation in Programming languages, Database management, and Networking concepts. I am confident in my ability to learn new technologies quickly and adapt to challenging environments.
          Eager to leverage academic knowledge and hands-on experience in real-world IT environments to contribute to the success of an innovative organization.
          With a strong dedication to continuous learning and professional growth, I am ready to embark on a rewarding career in IT and make a positive impact on the organization's goals!!!
        </p>
        <div className="btn-box">
          <a href="/lets-talk">Let's Talk</a>
        </div>
      </div>

      <div className="home-sci">
        <a href="https://www.linkedin.com/in/siddhant-bhoi-3923671a6"><i className='bx bxl-linkedin-square'></i></a>
        <a href="https://github.com/"><i className='bx bxl-github'></i></a>
        <a href="https://www.instagram.com/"><i className='bx bxl-instagram-alt'></i></a>
      </div>

      <span className="home-imgHover"></span>
    </section>
  );
}

export default Home;
