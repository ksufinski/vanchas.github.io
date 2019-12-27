import React from 'react';
import style from '../main.module.css';

const About = (props) => {
  return (
    <section className={style.about}>
      <div className={style.biography}>
        <h3>Biography</h3>
        <p>Born in the city of Dnipro, Ukraine. <br/> From the age of 4 I started cycling and still it is my hobby.<br/><br/>
        After graduating from the 9th grade of the school, I entered the College of Technology and Economics.  After college, I worked in Montenegro and Poland for 1 season.  Then I continued my career on the Dnipro.  I worked in the food industry for 5 years. <br/><br/>
        And now learn programming by myself and want to work in this industry.  I really like front-end development.
        </p>
      </div>
      
      <div className={style.education}>
        <h3>Education</h3>
        <p>I've got secondary education in the speciality food industry technologist</p>
        <p>Studied at the Solovov's English School for several years</p>
        <p>Graduated from Hillel computer school as a layout designer</p>
      </div>
    </section>
  );
};

export default About;