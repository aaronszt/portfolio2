import React from 'react';
import Footer from '../Footer/Footer';
import Ima from '../../assets/image/123.webp';
import style from './HomeTrue.module.css';
import { Link, NavLink } from 'react-router-dom';
import alert from 'sweetalert';
import { useState } from 'react';

const HomeTrue = () => {

    const [access, setAccess] = useState(false);
    const wordReference = "while (behappy()) { code();}";
    
    const hadlerAlert = () => {
        alert({
            title: 'CV',
            text: 'Are you sure about downloading the CV?',
            icon: 'warning',
            buttons: ['No', 'Yes']
        }).then(response => {
            if(response) {
                setAccess(true)
                const link = document.createElement('a');
                link.href = './CV-S-Aaron.Sztychmasjter.pdf';
                link.download = 'CV-S-Aaron.Sztychmasjter.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                alert({
                    title: 'The file has been downloaded successfully',
                    icon: 'success',
                    timer: '2000'
                })
            }
        })
    }
    return (
        <div className={style.container}>
            <div className={style.diva}>
                <a href="#" onClick={hadlerAlert}>
                    <span>CV</span>
                </a>
            </div>
            <h1>Full Stack Web Developer</h1>
            <h2>Oriented Back End</h2>
                <h3 className={style.classH3}>
                    <Link to = '/projects' className={style.claseLink}>
                        Projects
                    </Link>
                </h3>
                <h3 className={style.about}>
                    <Link to = '/about' className={style.claseLink}>
                        About
                    </Link>
                </h3>
            <div className={style.classImg}>
                <img src={Ima} alt="Ima"/>
            </div>
            <div className={style.classFooter}><Footer/></div>
        </div>
    );
}

export default HomeTrue;
