import React from 'react';
import style from './About.module.css';
import imgage from '../../assets/image/imagen-programando.jpg';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <div className={style.container}>
            <h1>Aarón Sztychmasjter</h1>
            <div className={style.classImg}>
                <img src={imgage} alt="imagen-programando" className={style.image} />
            </div>
            <p>
                Backend Developer focused on the .NET (C#) and Node.js ecosystems, with
                <br />
                experience building scalable RESTful APIs and system integrations.
                <br />
                Specialized in designing robust architectures using Clean Architecture,
                <br />
                CQRS, and SOLID principles.
                <br />
                Experienced in relational database modeling and optimization with
                <br />
                SQL Server and NoSQL databases.
            </p>
            <div className={style.arrowContainer}>
                <Link to="/" className={style.arrowLink}>&#x2190;</Link>
            </div>
        </div>
    );
}

export default About;
