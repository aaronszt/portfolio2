import React from 'react';
import style from './Footer.module.css';
import swal from 'sweetalert';

const Footer = () => {

    const hadlerAlert = () => {
        swal({
            title: 'Phone',
            text: '+5103874072071',
            icon: 'info',
            timer: '5000'
        });
    };

    return (
        <div className={style.footer}>
            <h3>Contact</h3>
            <div>
                <a href="https://www.linkedin.com/in/aaron-sztychmasjter-218307266/" target="_blank" rel="noreferrer noopener" className={style.claseA}>Linkedin</a> |{' '}
                <a href="https://github.com/aaronszt" target="_blank" rel="noreferrer noopener" className={style.claseA}>Github</a> |{' '}
                <span onClick={hadlerAlert} className={style.classP}>Phone</span>
            </div>
        </div>
    );
};

export default Footer;
