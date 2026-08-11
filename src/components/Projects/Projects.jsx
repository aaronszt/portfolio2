import ApiPokemon from './ApiPokemon/ApiPokemon';
import TheFourthElement from './TheFourthElement/TheFourthElement';
import DistribuidoraMarioFuentes from './DistribuidoraMarioFuentes/DistribuidoraMarioFuentes';
import style from './Projects.module.css'

const Projects = () => {
  return (
    <main className={style.divHome}>
      <div className={style.divScroll}>
        <ApiPokemon/>
      </div>
      <div className={style.divScroll}>
        <TheFourthElement/>
      </div>
      <div className={style.divScroll}>
        <DistribuidoraMarioFuentes/>
      </div>
    </main >
  );
};

export default Projects;
