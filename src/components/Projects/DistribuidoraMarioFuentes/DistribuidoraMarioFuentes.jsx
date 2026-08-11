import style from './DistribuidoraMarioFuentes.module.css';
import imgDistribuidora from '../../../assets/image/distribuidora-mario-fuentes.png';
import { Link } from 'react-router-dom';

const DistribuidoraMarioFuentes = () => {
    return (
        <div className={style.container}>
            <div className={style.imageContainer}>
                <img src={imgDistribuidora} alt="Distribuidora Mario Fuentes - sales management software" />
            </div>
            <div className={style.description}>
                <p>
                    Custom software developed for Mario Fuentes to streamline and simplify the sales workflow of his distribution business. Backend developed with .NET 8 using Clean Architecture, CQRS, MediatR, Unit of Work and Repository patterns.
                </p>
            </div>
            <div className={style.arrowContainer}>
                <Link to="/" className={style.arrowLink}>&#x2190;</Link>
            </div>
        </div>
    );
};

export default DistribuidoraMarioFuentes;