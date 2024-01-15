import React from 'react';
import ApiPokemon from './ApiPokemon/ApiPokemon';
import TheFourthElement from './TheFourthElement/TheFourthElement';
import style from './Projects.module.css'

const Projects = () => {
  return (
    <main className={style.divHome}>
      <div className={style.divScroll}>
        <TheFourthElement/>
      </div>
      <div className={style.divScroll}>
        <ApiPokemon/>
      </div>
    </main >
  );
};

export default Projects;
