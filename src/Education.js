import React from 'react';
import './App.css';

function Education() {
  return (
    <section className="education" id="education">
      <h1 className="heading">My <span className="jrney">Journey</span> </h1>

      <div className="education-row">
        <div className="education-column">
          <h6 className="title">Education</h6>

          <div className="education-box">
            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>2022-2025</div>
                <h3>Vivekanad Education Society Institude Of Technology</h3>
                <h4>Bachelor in Technology In Information Technology</h4>
                <h4>Aggregate:-9.55</h4>
              </div>
            </div>

            <div className="education-content">
              <div className="content">
                <div className="year"><i className='bx bxs-calendar'></i>2019-2022</div>
                <h3>Vidya Prasarak Mandal Polytechnic</h3>
                <h4>Diploma In Information Technology</h4>
                <h4>Percentage:-96.44%</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;
