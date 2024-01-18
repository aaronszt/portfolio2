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
                I am a Full-Stack developer specializing in Backend from Argentina 
                <br />
                with a passion for creating exceptional web experiences.
                <br />
                My heart beats for Javascript and C#.
                <br />
                <br />
                My journey into the programming world began in late 2022, and 
                <br />
                I am currently immersed in learning the T3 stack, which includes,  
                <br />
                SQL,NoSQL, PostgresSQL, MongoDB, tRPC, Next.js, NextAuth, Node,  
                <br />
                Express,React, React-Redux, HTML, CSS, C#, .NET, ASP.NET, AJAX,  
                <br />
                JQuery,Tailwind, Bootstrap, SCRUM, Model View Controller, Entity  
                <br />
                Relationship, REST APIs, Postman, GIT.
                <br />
                I am determined to become an expert in these technologies 
                <br />
                and continuously refine my skills.
                <br />
                <br />
                In summary, I am a technology enthusiast and a committed  
                <br />
                Full-Stackdeveloper dedicated to lifelong learning, eager to take 
                <br />
                on new challenges in the exciting field of web development.
            </p>
            <div className={style.arrowContainer}>
                <Link to="/" className={style.arrowLink}>&#x2190;</Link>
            </div>
        </div>
    );
}

export default About;
