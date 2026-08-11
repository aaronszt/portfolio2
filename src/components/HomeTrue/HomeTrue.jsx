import React from 'react';
import Footer from '../Footer/Footer';
import Ima from '../../assets/image/untitled-design.png';
import style from './HomeTrue.module.css';
import { Link } from 'react-router-dom';
import alert from 'sweetalert';
import { useState } from 'react';

const HomeTrue = () => {

    const [, setAccess] = useState(false);

    const hadlerAlert = (e) => {
        e.preventDefault();
        alert({
            title: 'CV',
            text: 'Are you sure about downloading the CV?',
            icon: 'warning',
            buttons: ['No', 'Yes']
        }).then(response => {
            if(response) {
                setAccess(true)
                const pdfUrl = '/CV-S-Aaron.Sztychmasjter.pdf';
                const link = document.createElement('a');
                link.href = pdfUrl;
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
                <a href="/" onClick={hadlerAlert}>
                    <span>CV</span>
                </a>
            </div>
            <h1>Backend Developer</h1>
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
                <img src={Ima} alt="Aarón Sztychmasjter"/>
                <p className={style.name}>Aarón Sztychmasjter</p>
            </div>
            <div className={style.classFooter}><Footer/></div>
        </div>
    );
}

export default HomeTrue;
