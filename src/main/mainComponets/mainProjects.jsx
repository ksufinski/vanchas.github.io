import React from 'react';
import style from '../main.module.css';
import Mondriana from './Projects/mondriana';
import Archetypes from './Projects/archetypes';
import PerpectBike from './Projects/perfectBike';
import Calculator from './Projects/calculator';
import ChristmasPostcard from './Projects/christmas';

const Projects = (props) => {
  return (
    <section className={style.projects}>
      <Mondriana />
      <Archetypes />
      <PerpectBike />
      <Calculator />
      <ChristmasPostcard />
    </section>
  );
};

export default Projects;